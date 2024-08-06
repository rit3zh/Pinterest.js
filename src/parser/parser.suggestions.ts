import type { ISearch, SearchResults } from "../interfaces/index";
import { formatDate } from "../externals";

export default function parseSuggestions(data: any) {
  const root = data?.resource_response;
  const bookmark = root?.bookmark;
  const results = root?.data;
  const array: ISearch[] = [];

  results.map((response: any, index: number, _: any) => {
    const imageURL: string = `${response.images?.orig?.url}`;
    const title: string = !response?.title
      ? response?.grid_title
      : response?.title;

    const id = response?.id;
    const date = response?.created_at;
    const type = response?.type;
    const pinner = response?.pinner;
    const initialDate = new Date(date);
    const formattedDate = formatDate(initialDate, "yyyy-MM-dd");
    const videos = response?.videos?.video_list;
    const V_HLSV4 = videos?.V_HLSV4?.url;
    const clean_url =
      V_HLSV4?.replace("/hls/", "/hevcMp4V2/")?.replace(".m3u8", "_t5.mp4") ||
      undefined;
    array.push({
      id,
      title,
      pinner: {
        id: pinner?.id,
        username: pinner?.username,
        fullName: pinner?.full_name,
        avatarURL: pinner?.image_medium_url,
        followers: !pinner?.follower_count ? null : pinner?.follower_count,
      },
      date: {
        formatted: formattedDate,
        initial: date,
      },
      type: type,
      imageURL,
      video: clean_url,
    });
  });
  return {
    bookmark,
    response: array,
  };
}
