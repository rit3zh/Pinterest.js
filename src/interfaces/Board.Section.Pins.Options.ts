type InitialPageSize = number | 25;
export interface IBoardSectionPinsOptions {
  slug: string;
  id: string;
  bookmark?: string;
  pageSize?: InitialPageSize;
  normalizeFeed?: boolean;
}
