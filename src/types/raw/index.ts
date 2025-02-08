export interface RawBoardSectionPins {
  resource_response: ResourceResponse;
  client_context: ClientContext;
  resource: Resource;
  request_identifier: string;
}

interface ResourceResponse {
  status: string;
  code: number;
  message: string;
  endpoint_name: string;
  data: Daum[];
  bookmark: string;
  x_pinterest_sli_endpoint_name: string;
  http_status: number;
}

interface Daum {
  node_id: string;
  video_status: any;
  videos?: Videos;
  auto_alt_text?: string;
  is_quick_promotable: boolean;
  has_required_attribution_provider: boolean;
  is_eligible_for_related_products: boolean;
  repin_count: number;
  is_go_linkless: boolean;
  grid_title: string;
  story_pin_data_id?: string;
  favorite_user_count: number;
  pinner: Pinner;
  story_pin_data?: StoryPinData;
  unified_user_note: string;
  description: string;
  campaign_id: any;
  should_open_in_stream: boolean;
  done_by_me: boolean;
  creator_analytics: any;
  image_signature: string;
  collection_pin: any;
  type: string;
  image_crop: ImageCrop;
  access: any[];
  shopping_flags: any[];
  shuffle_asset: any;
  is_eligible_for_pdp: boolean;
  alt_text?: string;
  carousel_data: any;
  favorited_by_me: boolean;
  tracking_params: string;
  video_status_message: any;
  call_to_action_text: any;
  is_native: boolean;
  rich_summary: any;
  is_repin: boolean;
  domain: string;
  reaction_counts: ReactionCounts;
  debug_info_html: any;
  title: string;
  insertion_id: any;
  attribution: any;
  promoted_lead_form: any;
  category: string;
  is_downstream_promotion: boolean;
  aggregated_pin_data: AggregatedPinData;
  promoted_is_removable: boolean;
  dominant_color: string;
  promoter: any;
  is_stale_product: boolean;
  id: string;
  digital_media_source_type: any;
  is_promoted: boolean;
  promoted_is_lead_ad: boolean;
  is_oos_product: boolean;
  embed: any;
  product_pin_data: any;
  link: any;
  sponsorship: any;
  images: Images;
  board: Board;
  native_creator: NativeCreator;
  shuffle: any;
}

interface Videos {
  node_id: string;
  id: string;
  video_list: VideoList;
}

interface VideoList {
  V_HLSV4: VHlsv4;
  V_720P: V720P;
  V_HLSV3_MOBILE: VHlsv3Mobile;
}

interface VHlsv4 {
  url: string;
  width: number;
  height: number;
  duration: number;
  thumbnail: string;
  captions_urls: CaptionsUrls;
}

interface CaptionsUrls {
  "en-us": string;
}

interface V720P {
  url: string;
  width: number;
  height: number;
  duration: number;
  thumbnail: string;
  captions_urls: CaptionsUrls2;
}

interface CaptionsUrls2 {
  "en-us": string;
}

interface VHlsv3Mobile {
  url: string;
  width: number;
  height: number;
  duration: number;
  thumbnail: string;
  captions_urls: CaptionsUrls3;
}

interface CaptionsUrls3 {
  "en-us": string;
}

interface Pinner {
  node_id: string;
  image_medium_url: string;
  image_large_url: string;
  avatar_color_index: number;
  last_name: string;
  first_name: string;
  id: string;
  type: string;
  image_xlarge_url: string;
  image_small_url: string;
  username: string;
  full_name: string;
}

interface StoryPinData {
  node_id: string;
  pages_preview: PagesPreview[];
  metadata: Metadata;
  id: string;
  type: string;
  last_edited: any;
  has_affiliate_products: boolean;
  pages: Page[];
  static_page_count: number;
  total_video_duration: number;
  is_deleted: boolean;
  page_count: number;
  has_product_pins: boolean;
}

interface PagesPreview {
  blocks: Block[];
}

interface Block {
  block_type: number;
  video: Video;
}

interface Video {
  video_list: VideoList2;
  id: string;
  bitrates: any;
}

interface VideoList2 {
  V_EXP6?: VExp6;
  V_EXP4?: VExp4;
  V_EXP5?: VExp5;
  V_EXP7?: VExp7;
  V_EXP3?: VExp3;
  V_HLSV3_MOBILE: VHlsv3Mobile2;
}

interface VExp6 {
  width: number;
  height: number;
  duration: number;
  url: string;
  thumbnail: string;
  captions_urls?: CaptionsUrls4;
  best_captions_url?: string;
}

interface CaptionsUrls4 {
  "ja-jp"?: string;
  "en-us"?: string;
  "en-ie"?: string;
}

interface VExp4 {
  width: number;
  height: number;
  duration: number;
  url: string;
  thumbnail: string;
  captions_urls?: CaptionsUrls5;
  best_captions_url?: string;
}

interface CaptionsUrls5 {
  "ja-jp"?: string;
  "en-us"?: string;
  "en-ie"?: string;
}

interface VExp5 {
  width: number;
  height: number;
  duration: number;
  url: string;
  thumbnail: string;
  captions_urls?: CaptionsUrls6;
  best_captions_url?: string;
}

interface CaptionsUrls6 {
  "ja-jp"?: string;
  "en-us"?: string;
  "en-ie"?: string;
}

interface VExp7 {
  width: number;
  height: number;
  duration: number;
  url: string;
  thumbnail: string;
  captions_urls?: CaptionsUrls7;
  best_captions_url?: string;
}

interface CaptionsUrls7 {
  "ja-jp"?: string;
  "en-us"?: string;
  "en-ie"?: string;
}

interface VExp3 {
  width: number;
  height: number;
  duration: number;
  url: string;
  thumbnail: string;
  captions_urls?: CaptionsUrls8;
  best_captions_url?: string;
}

interface CaptionsUrls8 {
  "ja-jp"?: string;
  "en-us"?: string;
  "en-ie"?: string;
}

interface VHlsv3Mobile2 {
  width: number;
  height: number;
  duration: number;
  url: string;
  thumbnail: string;
  captions_urls?: CaptionsUrls9;
  best_captions_url?: string;
}

interface CaptionsUrls9 {
  "ja-jp"?: string;
  "en-us"?: string;
  "en-ie"?: string;
}

interface Metadata {
  is_compatible: boolean;
  compatible_version: string;
  showreel_data: any;
  basics: any;
  diy_data: any;
  pin_image_signature: string;
  root_pin_id: string;
  recipe_data: any;
  pin_title: string;
  version: string;
  is_promotable: boolean;
  canvas_aspect_ratio: number;
  template_type: any;
  is_editable: boolean;
  root_user_id: string;
}

interface Page {
  blocks: Block2[];
}

interface Block2 {
  block_type: number;
  video: Video2;
}

interface Video2 {
  video_list: VideoList3;
  id: string;
  bitrates: any;
}

interface VideoList3 {
  V_EXP6?: VExp62;
  V_EXP4?: VExp42;
  V_EXP5?: VExp52;
  V_EXP7?: VExp72;
  V_EXP3?: VExp32;
  V_HLSV3_MOBILE: VHlsv3Mobile3;
}

interface VExp62 {
  width: number;
  height: number;
  duration: number;
  url: string;
  thumbnail: string;
  captions_urls?: CaptionsUrls10;
  best_captions_url?: string;
}

interface CaptionsUrls10 {
  "ja-jp"?: string;
  "en-us"?: string;
  "en-ie"?: string;
}

interface VExp42 {
  width: number;
  height: number;
  duration: number;
  url: string;
  thumbnail: string;
  captions_urls?: CaptionsUrls11;
  best_captions_url?: string;
}

interface CaptionsUrls11 {
  "ja-jp"?: string;
  "en-us"?: string;
  "en-ie"?: string;
}

interface VExp52 {
  width: number;
  height: number;
  duration: number;
  url: string;
  thumbnail: string;
  captions_urls?: CaptionsUrls12;
  best_captions_url?: string;
}

interface CaptionsUrls12 {
  "ja-jp"?: string;
  "en-us"?: string;
  "en-ie"?: string;
}

interface VExp72 {
  width: number;
  height: number;
  duration: number;
  url: string;
  thumbnail: string;
  captions_urls?: CaptionsUrls13;
  best_captions_url?: string;
}

interface CaptionsUrls13 {
  "ja-jp"?: string;
  "en-us"?: string;
  "en-ie"?: string;
}

interface VExp32 {
  width: number;
  height: number;
  duration: number;
  url: string;
  thumbnail: string;
  captions_urls?: CaptionsUrls14;
  best_captions_url?: string;
}

interface CaptionsUrls14 {
  "ja-jp"?: string;
  "en-us"?: string;
  "en-ie"?: string;
}

interface VHlsv3Mobile3 {
  width: number;
  height: number;
  duration: number;
  url: string;
  thumbnail: string;
  captions_urls?: CaptionsUrls15;
  best_captions_url?: string;
}

interface CaptionsUrls15 {
  "ja-jp"?: string;
  "en-us"?: string;
  "en-ie"?: string;
}

interface ImageCrop {
  min_y: number;
  max_y: number;
}

interface ReactionCounts {
  "1": number;
  "7"?: number;
}

interface AggregatedPinData {
  node_id: string;
  has_xy_tags: boolean;
  is_shop_the_look: boolean;
  creator_analytics: any;
  id: string;
  did_it_data: DidItData;
  aggregated_stats: AggregatedStats;
}

interface DidItData {
  images_count: number;
  type: string;
  recommended_count: number;
  tags: any[];
  recommend_scores: RecommendScore[];
  videos_count: number;
  responses_count: number;
  details_count: number;
  user_count: number;
  rating: number;
}

interface RecommendScore {
  score: number;
  count: number;
}

interface AggregatedStats {
  saves: number;
  done: number;
}

interface Images {
  "170x": N170x;
  "136x136": N136x136;
  "236x": N236x;
  "474x": N474x;
  "736x": N736x;
  orig: Orig;
}

interface N170x {
  width: number;
  height: number;
  url: string;
}

interface N136x136 {
  width: number;
  height: number;
  url: string;
}

interface N236x {
  width: number;
  height: number;
  url: string;
}

interface N474x {
  width: number;
  height: number;
  url: string;
}

interface N736x {
  width: number;
  height: number;
  url: string;
}

interface Orig {
  width: number;
  height: number;
  url: string;
}

interface Board {
  node_id: string;
  url: string;
  name: string;
  followed_by_me: boolean;
  id: string;
  privacy: string;
  type: string;
  owner: Owner;
  is_collaborative: boolean;
  collaborated_by_me: boolean;
}

interface Owner {
  node_id: string;
  image_medium_url: string;
  image_large_url: string;
  avatar_color_index: number;
  last_name: string;
  first_name: string;
  id: string;
  type: string;
  image_xlarge_url: string;
  image_small_url: string;
  username: string;
  full_name: string;
}

interface NativeCreator {
  node_id: string;
  image_medium_url: string;
  image_large_url: string;
  avatar_color_index: number;
  last_name: string;
  first_name: string;
  id: string;
  type: string;
  image_xlarge_url: string;
  image_small_url: string;
  username: string;
  full_name: string;
}

interface ClientContext {
  analysis_ua: AnalysisUa;
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
  facebook_token: any;
  full_path: string;
  http_referrer: string;
  impersonator_user_id: any;
  invite_code: string;
  invite_sender_id: string;
  is_authenticated: boolean;
  is_bot: string;
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
  placed_experiences: any;
  referrer: any;
  region_from_ip: string;
  request_host: string;
  request_identifier: string;
  social_bot: string;
  stage: string;
  sterling_on_steroids_ldap: any;
  sterling_on_steroids_user_type: any;
  theme: string;
  unauth_id: string;
  seo_debug: boolean;
  user_agent_can_use_native_app: boolean;
  user_agent_platform: string;
  user_agent_platform_version: any;
  user_agent: string;
  user: User;
  utm_campaign: any;
  visible_url: string;
}

interface AnalysisUa {
  app_type: number;
  browser_name: string;
  browser_version: string;
  device_type: any;
  device: string;
  os_name: string;
  os_version: string;
}

interface User {
  node_id: string;
  verified_domains: any[];
  is_any_website_verified: boolean;
  unverified_phone_country: any;
  is_private_profile: boolean;
  image_large_url: string;
  is_parental_control_passcode_verification_pending: boolean;
  has_mfa_enabled: boolean;
  nags: any[];
  twitter_publish_enabled: boolean;
  login_state: number;
  allow_analytic_cookies: any;
  full_name: string;
  is_under_18: boolean;
  exclude_from_search: boolean;
  connected_to_instagram: boolean;
  connected_to_etsy: boolean;
  website_url: any;
  age_in_years: number;
  push_package_user_id: string;
  is_high_risk: boolean;
  connected_to_google: boolean;
  search_privacy_enabled: boolean;
  id: string;
  teen_safety_options_url: any;
  domain_verified: boolean;
  unverified_phone_number: any;
  unverified_phone_number_without_country: string;
  connected_to_facebook: boolean;
  has_password: boolean;
  verified_identity: VerifiedIdentity;
  connected_to_youtube: boolean;
  gplus_url: string;
  phone_number: any;
  is_under_16: boolean;
  facebook_publish_stream_enabled: boolean;
  email: string;
  resurrection_info: any;
  ads_only_profile_site: any;
  country: string;
  is_partner: boolean;
  last_name: string;
  is_eligible_for_image_only_grid: boolean;
  domain_url: any;
  ip_country: string;
  allow_personalization_cookies: any;
  third_party_marketing_tracking_enabled: boolean;
  is_ads_only_profile: boolean;
  twitter_url: any;
  has_quicksave_board: boolean;
  phone_number_end: string;
  can_enable_mfa: boolean;
  can_edit_search_privacy: boolean;
  parental_control_anonymized_email: any;
  username: string;
  ip_region: string;
  facebook_timeline_enabled: boolean;
  image_small_url: string;
  is_matured_new_user: boolean;
  connected_to_dropbox: boolean;
  gender: string;
  is_write_banned: boolean;
  profile_discovered_public: any;
  allow_marketing_cookies: any;
  custom_gender: any;
  type: string;
  connected_to_microsoft: boolean;
  image_xlarge_url: string;
  listed_website_url: any;
  weight_loss_ads_opted_out: boolean;
  should_show_messaging: boolean;
  epik: string;
  is_candidate_for_parental_control_passcode: boolean;
  phone_country: any;
  allow_switch_between_private_and_public_profile: boolean;
  created_at: string;
  personalize_from_offsite_browsing: boolean;
  verified_user_websites: any[];
  facebook_id: string;
  image_medium_url: string;
  first_name: string;
  is_parental_control_passcode_enabled: boolean;
  opt_in_private_account: boolean;
}

interface VerifiedIdentity {}

interface Resource {
  name: string;
  options: Options;
}

interface Options {
  bookmarks: string[];
  currentFilter: number;
  field_set_key: string;
  is_own_profile_pins: boolean;
  page_size: number;
  redux_normalize_feed: boolean;
  section_id: string;
  orbac_subject_id: string;
}
