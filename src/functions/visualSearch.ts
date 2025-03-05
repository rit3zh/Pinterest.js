import { Api } from "../api/api";
import request from "../fetch/request";
import { IVisualResult, IVisualOptions } from "../interfaces";
import { getVisualObject } from "../utils/getVisualObject";
import { getVisuals } from "../utils/getVisuals";

/**
 * Performs a visual search for a given pin, retrieving visually similar results.
 *
 * This function initiates a visual search for a specific pin by sending a request
 * to the backend and processing the returned data to extract visually similar pins.
 *
 * @param options - The options for the visual search, which includes the pin ID and other optional parameters.
 * @returns A promise that resolves to an object containing the visuals and a bookmark for pagination.
 */
export async function visualSearch<T extends IVisualOptions>(
  options: T
): Promise<IVisualResult> {
  const params = {
    source_url: `/pin/${options?.id}/visual-search/?surfaceType=flashlight`,
    data: {
      options: {
        id: options?.id,
        field_set_key: "detailed", // Specifies the field set for detailed information
        fetch_visual_search_objects: true, // Ensures visual search objects are fetched
      },
      context: {},
    },
  };

  // Construct URL for the initial request
  const URL = `${
    Api.baseURL
  }/resource/PinResource/get/?source_url=${encodeURIComponent(
    params.source_url
  )}&data=${encodeURIComponent(JSON.stringify(params.data))}`;

  // Make the request to fetch the initial data
  const data = await request.get(URL, {
    "x-pinterest-pws-handler": "www/pin/[id].js",
  });

  // Extract the visual object from the data
  const visualObject = getVisualObject(data);

  const visual_params = {
    source_url: `/pin/${options.id}/visual-search/?surfaceType=flashlight`,
    data: {
      options: {
        categories: null, // No specific categories are set for the search
        crop: {
          x: visualObject.visualObject.x,
          y: visualObject?.visualObject?.y,
          w: visualObject.visualObject?.w,
          h: visualObject?.visualObject?.h,
        },
        crop_source: 5, // Defines the source for the crop
        entry_source: "flashlight", // Source for the entry
        image_signature: visualObject?.signature, // The signature for the image to search by
        is_shopping: false, // Set to false as it’s not a shopping-related search
        pin_id: options.id, // The pin ID for the search
        price_max: null, // No maximum price filter
        price_min: null, // No minimum price filter
      },
      context: {},
    },
  };

  // Construct URL for the visual search request
  const VISUAL_URL = `${
    Api.baseURL
  }/resource/VisualLiveSearchResource/get/?source_url=${encodeURIComponent(
    params.source_url
  )}&data=${encodeURIComponent(JSON.stringify(visual_params.data))}`;

  // Make the request for visual search data
  const visualData = await request.get(VISUAL_URL, {
    "x-pinterest-pws-handler": "www/pin/[id]/visual-search.js",
  });

  // Extract the visual search data
  const visualResource = visualData?.resource_response;
  const bookmark = visualResource?.bookmark; // Get the bookmark for pagination
  const visualResourceSearchData = visualResource?.data?.results;

  // Extract visuals from the search results
  const visuals = getVisuals(visualResourceSearchData);

  return {
    bookmark,
    visuals,
  };
}
