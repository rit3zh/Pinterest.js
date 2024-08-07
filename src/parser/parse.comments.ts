import { type CommentsResultResponse } from "../interfaces";
export function parseCommentsResponse(
  data: RootObject
): CommentsResultResponse[] {
  const { resource_response } = data;
  const response = resource_response?.data?.map((result) => ({
    text: result.text,
    createdAt: result.created_at,
    user: {
      username: result.user.username,
      displayName: result?.user.full_name,
      image: result.user.image_medium_url,
      id: result.user.id,
    },
    details: result.details,
    likes: result.like_count,
    tags: result.tags,
    image: result?.images?.map((i) => i?.originals?.url) as string[],
  }));
  return response;
}

interface RootObject {
  resource_response: Resourceresponse;
  client_context: Clientcontext;
  resource: Resource;
  request_identifier: string;
}

interface Resource {
  name: string;
  options: Options;
}

interface Options {
  bookmarks: string[];
  aggregated_pin_id: string;
  comment_featured_ids: any[];
  page_size: number;
  redux_normalize_feed: boolean;
  is_reversed: boolean;
}

interface Clientcontext {
  analysis_ua: Analysisua;
  app_type_detailed: number;
  app_version: string;
  batch_exp: boolean;
  browser_locale: string;
  browser_name: string;
  browser_type: number;
  browser_version: string;
  country: string;
  country_from_hostname: string;
  country_from_ip: string;
  csp_nonce: string;
  current_url: string;
  debug: boolean;
  deep_link: string;
  enabled_advertiser_countries: string[];
  facebook_token: null;
  full_path: string;
  http_referrer: string;
  impersonator_user_id: null;
  invite_code: string;
  invite_sender_id: string;
  is_authenticated: boolean;
  is_bot: string;
  is_internal_ip: boolean;
  is_full_page: boolean;
  is_mobile_agent: boolean;
  is_sterling_on_steroids: boolean;
  is_tablet_agent: boolean;
  language: string;
  locale: string;
  origin: string;
  path: string;
  placed_experiences: null;
  referrer: null;
  region_from_ip: string;
  request_host: string;
  request_identifier: string;
  social_bot: string;
  stage: string;
  sterling_on_steroids_ldap: null;
  sterling_on_steroids_user_type: null;
  unauth_id: string;
  seo_debug: boolean;
  user_agent_can_use_native_app: boolean;
  user_agent_platform: string;
  user_agent_platform_version: null;
  user_agent: string;
  user: User2;
  utm_campaign: null;
  visible_url: string;
}

interface User2 {
  unauth_id: string;
  ip_country: string;
  ip_region: string;
}

interface Analysisua {
  app_type: number;
  browser_name: string;
  browser_version: string;
  device_type: null;
  device: string;
  os_name: string;
  os_version: string;
}

interface Resourceresponse {
  status: string;
  code: number;
  message: string;
  endpoint_name: string;
  data: Datum[];
  bookmark: string;
  x_pinterest_sli_endpoint_name: string;
  http_status: number;
}

interface Datum {
  node_id: string;
  helpful_count: number;
  type: string;
  like_count?: number;
  done_at?: string;
  images?: Image[];
  liked_by_me?: boolean;
  details?: string;
  tags: any[];
  marked_helpful_by_me: boolean;
  user: User;
  image_signatures?: string[];
  id: string;
  comment_count: number;
  videos?: any[];
  reaction_counts?: Reactioncounts;
  media?: null;
  text?: string;
  created_at?: string;
  is_edited?: boolean;
  is_translatable?: boolean;
  reaction_by_me?: number;
  tagged_users?: any[];
  highlighted_by_pin_owner?: boolean;
  comment_tag?: null;
}

interface Reactioncounts {
  "1"?: number;
}

interface User {
  node_id: string;
  username: string;
  type: string;
  image_medium_url?: string;
  is_private_profile: boolean;
  first_name: string;
  id: string;
  full_name: string;
}

interface Image {
  originals: Originals;
  "550x": Originals;
  "150x150": Originals;
}

interface Originals {
  url: string;
  width: number;
  height: number;
}
