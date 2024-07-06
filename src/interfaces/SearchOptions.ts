export type PinsType = "all" | "videos";

export interface SearchOptions {
  bookmark?: string;
  filter?: PinsType;
  limit?: number;
}
