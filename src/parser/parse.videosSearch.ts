import { formatDate } from "../externals";
import type { ISearch } from "../interfaces";
export function parseSearchVideos(rawData: any) {
  const root = rawData?.resource_response;
  const results = root?.data?.results;
  const bookmark = rawData?.resource?.options?.bookmarks[0];
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
    const videos = response?.videos.video_list.V_HLSV4?.url as string;
    const formattedVideo = videos
      .replace("hls", "hevcMp4V2")
      .replace(".m3u8", "_t4.mp4");

    array.push({
      id,
      title,
      pinner: {
        id: pinner?.id,
        username: pinner?.username,
        fullName: pinner?.full_name,
        avatarURL: pinner?.image_medium_url,
        followers: pinner?.follower_count,
      },
      date: {
        formatted: formattedDate,
        initial: date,
      },
      type: type,
      imageURL,
      video: formattedVideo,
    });
  });
  return {
    bookmark,
    response: array,
  };
}
