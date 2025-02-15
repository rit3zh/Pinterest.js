export interface IBoardSections {
  bookmark: string;
  sections: IBoardSectionsMap[];
}

export interface IBoardSectionsMap {
  node_id?: string;
  board?: IBoard;
  title?: string;
  slug?: string;
  pintCount?: number;
  user?: IUser;
  id?: string;
  preview_pins?: IPreviewPin[];
  type?: string;
}

interface IBoard {
  node_id?: string;
  id?: string;
}

interface IUser {
  node_id?: string;
  id?: string;
}

interface IPreviewPin {
  node_id?: string;

  is_downstream_promotion?: boolean;
  title?: string;
  is_uploaded?: boolean;
  link?: string;
  tracking_params?: string;
  image_large_size_points?: IImageLargeSizePoints;
  cacheable_id?: string;
  created_at?: string;
  is_playable?: boolean;
  image_square_size_points?: IImageSquareSizePoints;
  image_large_url?: string;
  is_video?: boolean;
  image_large_size_pixels?: IImageLargeSizePixels;
  repin_count?: number;
  type?: string;
  tracked_link?: string;
  price_currency?: string;
  image_medium_size_points?: IImageMediumSizePoints;
  image_square_url?: string;
  image_medium_url?: string;
  description?: string;
  image_square_size_pixels?: IImageSquareSizePixels;
  domain?: string;
  image_medium_size_pixels?: IImageMediumSizePixels;
  is_repin?: boolean;
  comment_count?: number;
  attribution?: any;
  price_value?: number;
  id?: string;
  promoter?: any;
}

interface IImageLargeSizePoints {
  width?: number;
  height?: number;
}

interface IImageSquareSizePoints {
  width?: number;
  height?: number;
}

interface IImageLargeSizePixels {
  width?: number;
  height?: number;
}

interface IImageMediumSizePoints {
  width?: number;
  height?: number;
}

interface IImageSquareSizePixels {
  width?: number;
  height?: number;
}

interface IImageMediumSizePixels {
  width?: number;
  height?: number;
}
