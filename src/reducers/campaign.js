import {
    FETCH_CAMPAIGN,
    FETCH_CAMPAIGN_FULFILLED,
    FETCH_CAMPAIGN_REJECTED,

    CAMPAIGN_ANALYTICS,
    CAMPAIGN_ANALYTICS_FULFILLED,
    CAMPAIGN_ANALYTICS_REJECTED,

    CAMPAIGN_ANALYTICS_TRAFFIC,
    CAMPAIGN_ANALYTICS_TRAFFIC_FULFILLED,

    CAMPAIGN_ANALYTICS_AFFLUENCE,
    CAMPAIGN_ANALYTICS_AFFLUENCE_FULFILLED,

    CAMPAIGN_ANALYTICS_TYPICAL_CUSTOMER,
    CAMPAIGN_ANALYTICS_TYPICAL_CUSTOMER_FULFILLED,
    CAMPAIGN_ANALYTICS_TYPICAL_CUSTOMER_REJECTED,

    CAMPAIGN_ANALYTICS_KEY_DATA,
    CAMPAIGN_ANALYTICS_KEY_DATA_FULFILLED
} from "../constants/ActionTypes";
import _ from "underscore";

const campaignDefaults = {
  id: null,
  filters: "",
  owner: "",
  status: ""
};

const keyDataDefaults = {
    views: "0",
    customers: "0",
    clicks: "0",
    money: "0",
    money_currency: ""
};

const typicalCustomerDefaults = {
    age: 0,
    country: {
        label: "Unknown",
        value: 0
    },
    gender: {
        label: "Unknown",
        value: 0
    },
    relationship_status: {
        label: "Unknown",
        value: 0
    },
    work_status: {
        label: "Unknown",
        value: 0
    },
};

const trafficDefaults = {
    labels: ["M", "T", "W", "Th", "F", "Sa", "Su"],
    datasets: [
        {
            label: "Views",
            backgroundColor: "transparent",
            borderColor: "#F15A24",
            colorName: "primary",
            pointHoverBackgroundColor: "#fff",
            borderWidth: 3,
            data: [],
        },
        {
            label: "Clicks",
            backgroundColor: "transparent",
            borderColor: "#20a8d8",
            colorName: "info",
            pointHoverBackgroundColor: "#fff",
            borderWidth: 3,
            data: [],
        },
    ]
};

const initialState = {
    fetching: false,
    success: false,
    error: null,

    campaign: campaignDefaults,
    traffic: trafficDefaults,
    keyData: keyDataDefaults,
    typicalCustomer: typicalCustomerDefaults,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
      case FETCH_CAMPAIGN:
        return {
          ...state,
          campaign: {
            ...action.payload,
            fetching: true,
            success: false,
            error: null
          }
        };
      case FETCH_CAMPAIGN_FULFILLED:
        return {
          ...state,
          campaign: {
            ...action.payload,
            fetching: false,
            success: true,
            error: null
          }
        };
      case FETCH_CAMPAIGN_REJECTED:
        return {
          ...state,
          campaign: {
            ...state.campaign,
            fetching: false,
            success: false,
            error: action.payload
          }
        };
      case CAMPAIGN_ANALYTICS:
          return {
              ...state,
              fetching: true,
              success: false,
              error: null,
          };
      case CAMPAIGN_ANALYTICS_FULFILLED:
          return {
              ...state,
              fetching: false,
              success: true,
              error: null,
          };
      case CAMPAIGN_ANALYTICS_REJECTED:
          return {
              ...state,
              fetching: false,
              success: false,
              error: action.payload
          };
      case CAMPAIGN_ANALYTICS_TRAFFIC:
          return {
              ...state,
          };
      case CAMPAIGN_ANALYTICS_TRAFFIC_FULFILLED:

          return {
              ...state,
              traffic: action.payload,
          };
      case CAMPAIGN_ANALYTICS_AFFLUENCE:
          return {
              ...state,
          };
      case CAMPAIGN_ANALYTICS_AFFLUENCE_FULFILLED:
          return {
              ...state,
          };
      case CAMPAIGN_ANALYTICS_TYPICAL_CUSTOMER:
          return {
              ...state,
          };
      case CAMPAIGN_ANALYTICS_TYPICAL_CUSTOMER_FULFILLED:
          return {
              ...state,
              typicalCustomer: action.payload
          };
      case CAMPAIGN_ANALYTICS_TYPICAL_CUSTOMER_REJECTED:
          return {
              ...state,
          };
      case CAMPAIGN_ANALYTICS_KEY_DATA:
          return {
              ...state,
          };
      case CAMPAIGN_ANALYTICS_KEY_DATA_FULFILLED:
          return {
              ...state,
              keyData: action.payload
          };
      default:
          return {...state};
  }
}
