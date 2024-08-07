import { formatNumberWithLabel } from "../externals";
import { PinV4Response } from "../interfaces";

export function parsePinV4(data: RootObject): PinV4Response {
  const { resource_response } = data;
  const response = resource_response?.data;
  const title = response?.title || (response?.grid_title as string);
  const images = {
    lg: response?.images["600x315"].url,
    md: response?.images["564x"].url,
    xl: response?.images["736x"].url,
    og: response?.images.orig.url as string,
  };
  const id = response.id;
  const video =
    (response?.videos?.video_list["V_720P"]?.url as string) || undefined;
  const reactions = {
    label: formatNumberWithLabel(response?.reaction_counts?.[1]) as string,
    numbers: response?.reaction_counts?.[1] as number,
  };
  const commentCount = response.comment_count as number;
  const category = response?.category as string;
  const board = {
    name: response?.board.name as string,
    id: response?.board.id as string,
    imageThumbnail: response?.board.image_thumbnail_url as string,
    url: response?.board.url as string,
    description: response?.board.description as string,
    privacy: response?.board.privacy as string,
    isCollaborative: response?.board.is_collaborative as boolean,
    layout: response?.board.layout as string,
    pinThumbnailUrls: response?.board.pin_thumbnail_urls as string[],
    owner: {
      id: response?.board.owner.id as string,
      username: response?.board.owner.username as string,
      fullName: response?.board.owner.full_name as string,
      imageMediumUrl: response?.board.owner.image_medium_url as string,
      isVerifiedMerchant: response?.board.owner.is_verified_merchant as boolean,
    },
  };
  const aggregatedPinId = response?.aggregated_pin_data?.id;
  const creator = {
    fullName: response?.pinner.full_name as string,
    username: response?.pinner.username as string,
    image: response?.pinner.image_medium_url as string,
  };
  const description = response?.description as string;
  const createdAt = response?.created_at as string;
  const shareCount = response?.share_count as number;
  const repinCount = response?.repin_count as number;
  const favorites = response.favorite_user_count as number;
  const carousel = response?.carousel_data?.carousel_slots.map(
    (_carouselData: any) => ({
      image: _carouselData.images["736x"]?.url as string,
      title: _carouselData.title as string,
      details: _carouselData?.details as string,
      id: _carouselData.id as string,
    })
  );
  return {
    title,
    video,
    carousel,
    aggregatedPinId,
    board,
    category,
    commentCount,
    createdAt,
    creator,
    description,
    favorites,
    id,
    images,
    reactions,
    repinCount,
    shareCount,
  };
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
  id: string;
  field_set_key: string;
  noCache: boolean;
  fetch_visual_search_objects: boolean;
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
  is_managed_advertiser: boolean;
  is_mobile_agent: boolean;
  is_shop_the_pin_campaign_whitelisted: boolean;
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
  user: User;
  utm_campaign: null;
  visible_url: string;
}

interface User {
  node_id: string;
  country: string;
  has_quicksave_board: boolean;
  is_under_16: boolean;
  epik: string;
  domain_verified: boolean;
  ip_country: string;
  is_high_risk: boolean;
  connected_to_google: boolean;
  is_ads_only_profile: boolean;
  teen_safety_options_url: null;
  unverified_phone_country: null;
  connected_to_microsoft: boolean;
  profile_discovered_public: null;
  created_at: string;
  is_parental_control_passcode_enabled: boolean;
  custom_gender: null;
  allow_switch_between_private_and_public_profile: boolean;
  parental_control_anonymized_email: null;
  connected_to_youtube: boolean;
  full_name: string;
  connected_to_facebook: boolean;
  has_password: boolean;
  is_partner: boolean;
  image_large_url: string;
  is_private_profile: boolean;
  personalize_from_offsite_browsing: boolean;
  nags: any[];
  resurrection_info: null;
  verified_user_websites: any[];
  facebook_publish_stream_enabled: boolean;
  is_write_banned: boolean;
  connected_to_etsy: boolean;
  can_enable_mfa: boolean;
  unverified_phone_number_without_country: string;
  phone_number_end: string;
  is_any_website_verified: boolean;
  is_candidate_for_parental_control_passcode: boolean;
  ads_only_profile_site: null;
  is_employee: boolean;
  connected_to_dropbox: boolean;
  verified_domains: any[];
  is_under_18: boolean;
  domain_url: null;
  twitter_publish_enabled: boolean;
  allow_analytic_cookies: null;
  image_xlarge_url: string;
  facebook_id: string;
  website_url: null;
  is_matured_new_user: boolean;
  should_show_messaging: boolean;
  allow_marketing_cookies: null;
  facebook_timeline_enabled: boolean;
  first_name: string;
  phone_number: null;
  search_privacy_enabled: boolean;
  has_mfa_enabled: boolean;
  is_eligible_for_image_only_grid: boolean;
  login_state: number;
  image_small_url: string;
  third_party_marketing_tracking_enabled: boolean;
  exclude_from_search: boolean;
  username: string;
  type: string;
  allow_personalization_cookies: null;
  last_name: string;
  unverified_phone_number: null;
  gplus_url: string;
  push_package_user_id: string;
  ip_region: string;
  verified_identity: Contentsensitivity;
  opt_in_private_account: boolean;
  age_in_years: number;
  id: string;
  listed_website_url: null;
  gender: string;
  twitter_url: null;
  email: string;
  can_edit_search_privacy: boolean;
  connected_to_instagram: boolean;
  phone_country: null;
  image_medium_url: string;
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
  data: Data;
  x_pinterest_sli_endpoint_name: string;
  http_status: number;
}

interface Data {
  node_id: string;
  alt_text: null;
  is_quick_promotable: boolean;
  is_video: boolean;
  story_pin_data_id: null;
  domain: string;
  content_sensitivity: Contentsensitivity;
  sponsorship: null;
  is_active_ad: boolean;
  can_delete_did_it_and_comments: boolean;
  rich_summary: null;
  videos: any;
  ip_eligible_for_stela: boolean;
  description_html: string;
  buyable_product_availability: null;
  comments_disabled: boolean;
  creator_class_instance: null;
  price_currency: string;
  tracked_link: null;
  is_eligible_for_brand_catalog: boolean;
  shopping_rec_disabled: boolean;
  images: Images;
  shuffle: null;
  is_eligible_for_flashlight_shopping: boolean;
  grid_title: string;
  via_pinner: Viapinner;
  image_medium_url: string;
  closeup_unified_description: string;
  highlighted_aggregated_comments: any[];
  is_playable: boolean;
  is_eligible_for_pdp: boolean;
  edited_fields: any[];
  board: Board;
  access: any[];
  dominant_color: string;
  pinner: Viapinner;
  ships_to_user_country: boolean;
  aggregated_pin_data: Aggregatedpindata;
  link: null;
  description: string;
  done_by_me: boolean;
  comment_count: number;
  is_whitelisted_for_tried_it: boolean;
  attribution: null;
  closeup_description: null;
  closeup_unified_title: string;
  is_unsafe: boolean;
  reaction_counts: Reactioncounts;
  creator_class: null;
  is_promoted: boolean;
  is_repin: boolean;
  hashtags: any[];
  did_it_disabled: boolean;
  is_unsafe_for_comments: boolean;
  category: string;
  has_required_attribution_provider: boolean;
  is_promotable: boolean;
  is_native: boolean;
  native_creator: Viapinner;
  repin_count: number;
  method: string;
  section: null;
  shopping_flags: any[];
  product_pin_data: null;
  is_oos_product: boolean;
  price_value: number;
  visual_objects: Visualobject[];
  reaction_by_me: number;
  story_pin_data: null;
  carousel_data: any;
  embed: null;
  user_mention_tags: null;
  origin_pinner: Viapinner;
  creator_analytics: null;
  type: string;
  share_count: number;
  link_user_website: null;
  formatted_description: Contentsensitivity;
  pinned_to_board: null;
  title: string;
  id: string;
  favorite_user_count: number;
  is_quick_promotable_by_pinner: boolean;
  should_mute: boolean;
  image_signature: string;
  closeup_user_note: string;
  rich_metadata: null;
  promoter: null;
  third_party_pin_owner: null;
  video_status_message: null;
  closeup_attribution: Viapinner;
  promoted_is_removable: boolean;
  music_attributions: any[];
  click_through_link_quality: null;
  should_open_in_stream: boolean;
  created_at: string;
  is_eligible_for_aggregated_comments: boolean;
  is_hidden: boolean;
  themes: any[];
  unified_user_note: string;
  video_status: null;
  is_stale_product: boolean;
  shuffle_asset: null;
  link_domain: null;
  tracking_params: string;
  auto_alt_text: string;
  mobile_link: null;
  collection_pin: null;
  promoted_is_lead_ad: boolean;
  favorited_by_me: boolean;
  is_eligible_for_related_products: boolean;
  privacy: string;
  is_year_in_preview: boolean;
  media_attribution: null;
}

interface Visualobject {
  x: number;
  y: number;
  w: number;
  h: number;
  detection: boolean;
  score: number;
}

interface Reactioncounts {
  "1": number;
}

interface Aggregatedpindata {
  node_id: string;
  comment_count: number;
  creator_analytics: null;
  aggregated_stats: Aggregatedstats;
  did_it_data: Diditdata;
  id: string;
  is_stela: boolean;
  has_xy_tags: boolean;
  is_shop_the_look: boolean;
}

interface Diditdata {
  details_count: number;
  tags: any[];
  type: string;
  recommended_count: number;
  responses_count: number;
  videos_count: number;
  recommend_scores: Recommendscore[];
  rating: number;
  user_count: number;
  images_count: number;
}

interface Recommendscore {
  score: number;
  count: number;
}

interface Aggregatedstats {
  saves: number;
  done: number;
}

interface Board {
  node_id: string;
  is_collaborative: boolean;
  pin_thumbnail_urls: string[];
  category: null;
  map_id: string;
  name: string;
  type: string;
  id: string;
  image_cover_url: string;
  url: string;
  collaborated_by_me: boolean;
  privacy: string;
  followed_by_me: boolean;
  layout: string;
  image_thumbnail_url: string;
  access: any[];
  description: string;
  owner: Viapinner;
}

interface Viapinner {
  node_id: string;
  blocked_by_me: boolean;
  full_name: string;
  image_medium_url: string;
  id: string;
  verified_identity: Contentsensitivity;
  followed_by_me: boolean;
  username: string;
  is_verified_merchant: boolean;
  image_small_url: string;
  domain_url: null;
  is_ads_only_profile: boolean;
  domain_verified: boolean;
  explicitly_followed_by_me: boolean;
  ads_only_profile_site: null;
  first_name: string;
  follower_count: number;
  type: string;
  is_default_image: boolean;
  indexed: boolean;
}

interface Images {
  "60x60": _60x60;
  "136x136": _60x60;
  "170x": _60x60;
  "236x": _60x60;
  "474x": _60x60;
  "564x": _60x60;
  "736x": _60x60;
  "600x315": _60x60;
  orig: _60x60;
}

interface _60x60 {
  width: number;
  height: number;
  url: string;
}

interface Contentsensitivity {}
