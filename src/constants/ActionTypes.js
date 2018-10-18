// ActionTypes are defined in constants.

// They are imported in Actions and Reducers.
// This prevents errors if they are misspelled over here.

/* eslint-disable */

export const FETCH_INFORMATION = "FETCH_INFORMATION";
export const FETCH_INFORMATION_FULFILLED = "FETCH_INFORMATION_FULFILLED";
export const FETCH_INFORMATION_REJECTED = "FETCH_INFORMATION_REJECTED";
export const POST_CONNECT = "POST_CONNECT";
export const POST_CONNECT_FULFILLED = "POST_CONNECT_FULFILLED";
export const POST_CONNECT_REJECTED = "POST_CONNECT_REJECTED";

export const LOGIN = "LOGIN";
export const LOGIN_FULFILLED = "LOGIN_FULFILLED";
export const LOGIN_REJECTED = "LOGIN_REJECTED";

export const LOGOUT = "LOGOUT";
export const LOGOUT_FULFILLED = "LOGOUT_FULFILLED";
export const LOGOUT_REJECTED = "LOGOUT_REJECTED";

export const REGISTER = "REGISTER";
export const REGISTER_FULFILLED = "REGISTER_FULFILLED";
export const REGISTER_REJECTED = "REGISTER_REJECTED";

export const CONFIRM_REGISTRATION = "CONFIRM_REGISTRATION";
export const CONFIRM_REGISTRATION_FULFILLED = "CONFIRM_REGISTRATION_FULFILLED";
export const CONFIRM_REGISTRATION_REJECTED = "CONFIRM_REGISTRATION_REJECTED";

export const FORGOT_PASSWORD = "FORGOT_PASSWORD";
export const FORGOT_PASSWORD_FULFILLED = "FORGOT_PASSWORD_FULFILLED";
export const FORGOT_PASSWORD_REJECTED = "FORGOT_PASSWORD_REJECTED";

export const RESET_PASSWORD = "RESET_PASSWORD";
export const RESET_PASSWORD_FULFILLED = "RESET_PASSWORD_FULFILLED";
export const RESET_PASSWORD_REJECTED = "RESET_PASSWORD_REJECTED";

export const FETCH_DASHBOARD = "FETCH_DASHBOARD";
export const FETCH_DASHBOARD_FULFILLED = "FETCH_DASHBOARD_FULFILLED";
export const FETCH_DASHBOARD_REJECTED = "FETCH_DASHBOARD_REJECTED";

export const DASHBOARD_STATS = "DASHBOARD_STATS";
export const DASHBOARD_STATS_FULFILLED = "DASHBOARD_STATS_FULFILLED";
export const DASHBOARD_STATS_REJECTED = "DASHBOARD_STATS_REJECTED";

export const DASHBOARD_MAP_ZOOM = "DASHBOARD_MAP_ZOOM";

export const FETCH_FILTER_DATA = "FETCH_FILTER_DATA";
export const FETCH_FILTER_DATA_FULFILLED = "FETCH_FILTER_DATA_FULFILLED";
export const FETCH_FILTER_DATA_REJECTED = "FETCH_FILTER_DATA_REJECTED";

export const RESEARCH_FILTER_CHANGE = "RESEARCH_FILTER_CHANGE";

export const FETCH_AUCTION = "FETCH_AUCTION";
export const FETCH_AUCTION_FULFILLED = "FETCH_AUCTION_FULFILLED";
export const FETCH_AUCTION_REJECTED = "FETCH_AUCTION_REJECTED";

export const AUCTION_ESTIMATE = "AUCTION_ESTIMATE";
export const AUCTION_ESTIMATE_FULFILLED = "AUCTION_ESTIMATE_FULFILLED";
export const AUCTION_ESTIMATE_REJECTED = "AUCTION_ESTIMATE_REJECTED";

export const CREATE_CAMPAIGN = "CREATE_CAMPAIGN";
export const CREATE_CAMPAIGN_FULFILLED = "CREATE_CAMPAIGN_FULFILLED";
export const CREATE_CAMPAIGN_REJECTED = "CREATE_CAMPAIGN_REJECTED";

export const FETCH_CAMPAIGNS = "FETCH_CAMPAIGNS";
export const FETCH_CAMPAIGNS_FULFILLED = "FETCH_CAMPAIGNS_FULFILLED";
export const FETCH_CAMPAIGNS_REJECTED = "FETCH_CAMPAIGNS_REJECTED";

export const BID_CHANGE = "BID_CHANGE";

export const BID_CAMPAIGN = "BID_CAMPAIGN";
export const BID_CAMPAIGN_FULFILLED = "BID_CAMPAIGN_FULFILLED";
export const BID_CAMPAIGN_REJECTED = "BID_CAMPAIGN_REJECTED";

export const BID_HISTORY = "BID_HISTORY";
export const BID_HISTORY_FULFILLED = "BID_HISTORY_FULFILLED";
export const BID_HISTORY_REJECTED = "BID_HISTORY_REJECTED";

export const PROMOTIONS = "PROMOTIONS";
export const PROMOTIONS_FULFILLED = "PROMOTIONS_FULFILLED";
export const PROMOTIONS_REJECTED = "PROMOTIONS_REJECTED";
export const PROMOTIONS_LOAD_MORE = "PROMOTIONS_LOAD_MORE";

export const ESTABLISHMENT_PAGE = "ESTABLISHMENT_PAGE";
export const ESTABLISHMENT_PAGE_FULFILLED = "ESTABLISHMENT_PAGE_FULFILLED";
export const ESTABLISHMENT_PAGE_REJECTED = "ESTABLISHMENT_PAGE_REJECTED";

export const MONTHLY_DATA = "MONTHLY_DATA";
export const MONTHLY_DATA_FULFILLED = "MONTHLY_DATA_FULFILLED";
export const MONTHLY_DATA_REJECTED = "MONTHLY_DATA_REJECTED";

export const TRAFFIC = "TRAFFIC";
export const TRAFFIC_FULFILLED = "TRAFFIC_FULFILLED";
export const TRAFFIC_REJECTED = "TRAFFIC_REJECTED";
export const TRAFFIC_PERIOD_CHANGE = "TRAFFIC_PERIOD_CHANGE";

export const AFFLUENCE = "AFFLUENCE";
export const AFFLUENCE_FULFILLED = "AFFLUENCE_FULFILLED";
export const AFFLUENCE_REJECTED = "AFFLUENCE_REJECTED";

export const TYPICAL_CUSTOMER = "TYPICAL_CUSTOMER";
export const TYPICAL_CUSTOMER_FULFILLED = "TYPICAL_CUSTOMER_FULFILLED";
export const TYPICAL_CUSTOMER_REJECTED = "TYPICAL_CUSTOMER_REJECTED";

export const ESTABLISHMENT_LIST = "ESTABLISHMENT_LIST";
export const ESTABLISHMENT_LIST_FULFILLED = "ESTABLISHMENT_LIST_FULFILLED";
export const ESTABLISHMENT_LIST_REJECTED = "ESTABLISHMENT_LIST_REJECTED";

export const MY_ESTABLISHMENT_LIST = "MY_ESTABLISHMENT_LIST";
export const MY_ESTABLISHMENT_LIST_FULFILLED = "MY_ESTABLISHMENT_LIST_FULFILLED";
export const MY_ESTABLISHMENT_LIST_REJECTED = "MY_ESTABLISHMENT_LIST_REJECTED";

export const SELECT_ESTABLISHMENT = "SELECT_ESTABLISHMENT";

export const FETCH_CAMPAIGN = "FETCH_CAMPAIGN";
export const FETCH_CAMPAIGN_FULFILLED = "FETCH_CAMPAIGN_FULFILLED";
export const FETCH_CAMPAIGN_REJECTED = "FETCH_CAMPAIGN_REJECTED";

export const CAMPAIGN_PROPERTY_UPDATE = "CAMPAIGN_PROPERTY_UPDATE";

export const CAMPAIGN_ANALYTICS = "CAMPAIGN_ANALYTICS";
export const CAMPAIGN_ANALYTICS_FULFILLED = "CAMPAIGN_ANALYTICS_FULFILLED";
export const CAMPAIGN_ANALYTICS_REJECTED = "CAMPAIGN_ANALYTICS_REJECTED";

export const CAMPAIGN_ANALYTICS_TRAFFIC = "CAMPAIGN_ANALYTICS_TRAFFIC";
export const CAMPAIGN_ANALYTICS_TRAFFIC_FULFILLED = "CAMPAIGN_ANALYTICS_TRAFFIC_FULFILLED";
export const CAMPAIGN_ANALYTICS_TRAFFIC_REJECTED = "CAMPAIGN_ANALYTICS_TRAFFIC_REJECTED";

export const CAMPAIGN_ANALYTICS_AFFLUENCE = "CAMPAIGN_ANALYTICS_AFFLUENCE";
export const CAMPAIGN_ANALYTICS_AFFLUENCE_FULFILLED = "CAMPAIGN_ANALYTICS_AFFLUENCE_FULFILLED";
export const CAMPAIGN_ANALYTICS_AFFLUENCE_REJECTED = "CCAMPAIGN_ANALYTICS_AFFLUENCE_REJECTED";

export const CAMPAIGN_ANALYTICS_TYPICAL_CUSTOMER = "CAMPAIGN_ANALYTICS_TYPICAL_CUSTOMER";
export const CAMPAIGN_ANALYTICS_TYPICAL_CUSTOMER_FULFILLED = "CAMPAIGN_ANALYTICS_TYPICAL_CUSTOMER";
export const CAMPAIGN_ANALYTICS_TYPICAL_CUSTOMER_REJECTED = "CAMPAIGN_ANALYTICS_TYPICAL_CUSTOMER_REJECTED";

export const CAMPAIGN_ANALYTICS_KEY_DATA = "CAMPAIGN_ANALYTICS_KEY_DATA";
export const CAMPAIGN_ANALYTICS_KEY_DATA_FULFILLED = "CAMPAIGN_ANALYTICS_KEY_DATA_FULFILLED";
export const CAMPAIGN_ANALYTICS_KEY_DATA_REJECTED = "CAMPAIGN_ANALYTICS_KEY_DATA_REJECTED";

export const CAMPAIGN_CREDIT_MODAL_TOGGLE = "CAMPAIGN_CREDIT_MODAL_TOGGLE";

export const CAMPAIGN_CREDIT_VALUE_CHANGE = "CAMPAIGN_CREDIT_VALUE_CHANGE";

export const CAMPAIGN_UPLOAD_VIDEO = "CAMPAIGN_UPLOAD_VIDEO";
export const CAMPAIGN_UPLOAD_VIDEO_FULFILLED = "CAMPAIGN_UPLOAD_VIDEO_FULFILLED";
export const CAMPAIGN_UPLOAD_VIDEO_REJECTED = "CAMPAIGN_UPLOAD_VIDEO_REJECTED";

export const ESTABLISHMENT_DOWNLOAD = "ESTABLISHMENT_DOWNLOAD";
export const ESTABLISHMENT_DOWNLOAD_FULFILLED = "ESTABLISHMENT_DOWNLOAD_FULFILLED";
export const ESTABLISHMENT_DOWNLOAD_REJECTED = "ESTABLISHMENT_DOWNLOAD_REJECTED";

export const ESTABLISHMENT_ADD = "ESTABLISHMENT_ADD";
export const ESTABLISHMENT_ADD_FULFILLED = "ESTABLISHMENT_ADD_FULFILLED";
export const ESTABLISHMENT_ADD_REJECTED = "ESTABLISHMENT_ADD_REJECTED";

export const ESTABLISHMENT_ADD_MODAL_TOGGLE = "ESTABLISHMENT_ADD_MODAL_TOGGLE";

export const ESTABLISHMENT_CHANGE_PLACE = "ESTABLISHMENT_CHANGE_PLACE";

export const WALLET = "WALLET";
export const WALLET_FULFILLED = "WALLET_FULFILLED";
export const WALLET_REJECTED = "WALLET_REJECTED";

export const WALLET_TRANSACTIONS = "WALLET_TRANSACTIONS";
export const WALLET_TRANSACTIONS_FULFILLED = "WALLET_TRANSACTIONS_FULFILLED";
export const WALLET_TRANSACTIONS_REJECTED = "WALLET_TRANSACTIONS_REJECTED";

/* eslint-enable */
