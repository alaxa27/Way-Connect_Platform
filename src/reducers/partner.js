import {
    PARTNER_PAGE,
    PARTNER_PAGE_FULFILLED,
    PARTNER_PAGE_REJECTED,

    MONTHLY_DATA,
    MONTHLY_DATA_FULFILLED,

    TRAFFIC,
    TRAFFIC_FULFILLED,
    TRAFFIC_PERIOD_CHANGE,

    AFFLUENCE,
    AFFLUENCE_FULFILLED,

    TYPICAL_CUSTOMER,
    TYPICAL_CUSTOMER_FULFILLED,

    PROMOTIONS,
    PROMOTIONS_FULFILLED
} from "../constants/ActionTypes";
import _ from "underscore";

const initialState = {
    fetching: false,
    success: false,
    error: null,

    monthlyData: null,
    traffic: {
        period: "month",
        labels: ["M", "T", "W", "Th", "F", "Sa", "Su"],
        datasets: []
    },
    trafficRaw: null,
    affluence: {
        labels: [
            "00h", "01h", "02h", "03h", "04h", "05h", "06h", "07h", "08h", "09h", "10h", "11h",
            "12h", "13h", "14h", "15h", "16h", "17h", "18h", "19h", "20h", "21h", "22h", "23h"
        ],
        datasets: []
    },
    typicalCustomer: null,
    promotions: [],
    promotionsLimit: 10,
    promotionsOffset: 0,
    promotionsTotalCount: 0
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
    }
];

let affluenceDatasets = [
    {
        label: "Affluence",
        backgroundColor: "rgba(255,99,132,0.2)",
        borderColor: "rgba(255,99,132,1)",
        borderWidth: 1,
        hoverBackgroundColor: "rgba(255,99,132,0.4)",
        hoverBorderColor: "rgba(255,99,132,1)",
        data: []
    }
];

export default function reducer(state = initialState, action) {
  switch (action.type) {
      case PARTNER_PAGE:
          return {
              ...state,
              fetching: true,
              success: false,
              error: null,
          };
      case PARTNER_PAGE_FULFILLED:
          return {
              ...state,
              fetching: false,
              success: true,
              error: null,
          };
      case PARTNER_PAGE_REJECTED:
          return {
              ...state,
              fetching: false,
              success: false,
              error: action.payload
          };
      case MONTHLY_DATA:
          return {
              ...state,
          };
      case MONTHLY_DATA_FULFILLED:
          return {
              ...state,
              monthlyData: action.payload
          };
      case TRAFFIC:
          return {
              ...state,
          };
      case TRAFFIC_FULFILLED:
          const period = state.traffic.period;
          _.first(trafficDatasets).data = action.payload[period].traffic;
          return {
              ...state,
              traffic: {
                  ...state.traffic,
                  datasets: trafficDatasets
              },
              trafficRaw: action.payload
          };
      case TRAFFIC_PERIOD_CHANGE:
          _.first(trafficDatasets).data = state.trafficRaw[action.payload].traffic;
          return {
              ...state,
              traffic: {
                  ...state.traffic,
                  period: action.payload,
                  datasets: trafficDatasets
              },
          };
      case AFFLUENCE:
          return {
              ...state,
          };
      case AFFLUENCE_FULFILLED:
          _.first(affluenceDatasets).data = action.payload.affluence;
          return {
              ...state,
              affluence: {
                  ...state.affluence,
                  datasets: affluenceDatasets
              },
          };
          return {
              ...state,
              affluence: action.payload
          };
      case TYPICAL_CUSTOMER:
          return {
              ...state,
              typicalCustomer: null
          };
      case TYPICAL_CUSTOMER_FULFILLED:
          return {
              ...state,
              typicalCustomer: action.payload
          };
      case PROMOTIONS:
          return {
              ...state,
          };
      case PROMOTIONS_FULFILLED:
          return {
              ...state,
              promotions: action.payload.promotions.results,
              promotionsOffset: action.payload.offset,
              promotionsTotalCount: action.payload.promotions.count
          };
      default:
          return {...state};
  }
}
