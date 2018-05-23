import {
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

const keyData = {
    views: "0",
    customers: "0",
    clicks: "0",
    money: "0",
    money_currency: ""
};

const initialState = {
    fetching: false,
    success: false,
    error: null,

    traffic: {
        labels: ["M", "T", "W", "Th", "F", "Sa", "Su"],
        datasets: []
    },
    keyData: keyData,
    typicalCustomer: null,
};

let trafficDatasets = [
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
];

export default function reducer(state = initialState, action) {
  switch (action.type) {
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
          _.first(trafficDatasets).data = action.payload["views"].traffic;
          _.last(trafficDatasets).data = action.payload["clicks"].traffic;
          return {
              ...state,
              traffic: {
                  ...state.traffic,
                  datasets: trafficDatasets
              },
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
              typicalCustomer: null,
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
