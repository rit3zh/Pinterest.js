import type { ISearch, SearchResults } from "../interfaces/index";

export default function searchParser(data: any): SearchResults {
  const root = data?.resource_response;
  const results = root?.data?.results;
  const bookmark = data?.resource?.options?.bookmarks[0];
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
    });
  });
  return {
    bookmark,
    response: array,
  };
}

function formatDate(date: Date, format: string): string {
  const pad = (n: number) => (n < 10 ? "0" + n : n.toString());
  const formattedDate = format
    .replace(/yyyy/g, date.getFullYear().toString())
    .replace(/MM/g, pad(date.getMonth() + 1))
    .replace(/dd/g, pad(date.getDate()))
    .replace(/HH/g, pad(date.getHours()))
    .replace(/mm/g, pad(date.getMinutes()))
    .replace(/ss/g, pad(date.getSeconds()));
  return formattedDate;
}