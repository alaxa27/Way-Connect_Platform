import {
    ESTABLISHMENT_PAGE,
    ESTABLISHMENT_PAGE_FULFILLED,
    ESTABLISHMENT_PAGE_REJECTED,

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
import { SSL_OP_NO_SESSION_RESUMPTION_ON_RENEGOTIATION } from "constants";

const monthlyData = {
  visits: "0",
  visits_change: "0",
  customer_average_visits: "0",
  total_rewards: {
    value: "0",
    currency: ""
  }
};

const initialState = {
    fetching: false,
    success: false,
    error: null,

    monthlyData: monthlyData,
    traffic: {
        period: "year",
        labels: [],
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

let trafficLabels = {
    month: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
    year: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
};

let trafficDatasets = [
    {
        label: "Visits",
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
        backgEroundColor: "rgba(255,99,132,0.2)",
        borderColor: "rgba(255,99,132,1)",
        borderWidth: 1,
        hoverBackgroundColor: "rgba(255,99,132,0.4)",
        hoverBorderColor: "rgba(255,99,132,1)",
        data: []
    }
];

function getAverageTraffic(period, traffic) {
    let averageTraffic = [];
    switch(period) {
        case 'month':
            const monthChunks = _.chunk(traffic, 3);
            averageTraffic = _.map(monthChunks, chunk => {
                return _.reduce(chunk, (acc, val) => { return acc + val; }) / 3;
            });
            break;
        case 'year':
            const yearChunks = _.chunk(traffic, 30);
            averageTraffic = _.map(yearChunks, chunk => {
                return _.reduce(chunk, (acc, val) => { return acc + val; }) / 30;
            });
            break;
        default:
            break;
      }
    return averageTraffic;
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
      case ESTABLISHMENT_PAGE:
          return {
              ...state,
              fetching: true,
              success: false,
              error: null,
          };
      case ESTABLISHMENT_PAGE_FULFILLED:
          return {
              ...state,
              fetching: false,
              success: true,
              error: null,
          };
      case ESTABLISHMENT_PAGE_REJECTED:
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
          const traffic = action.payload[period].traffic;
          const labels = trafficLabels[period];
          let averageTraffic = getAverageTraffic(period, traffic);
          _.first(trafficDatasets).data = averageTraffic;
          return {
              ...state,
              traffic: {
                  ...state.traffic,
                  datasets: trafficDatasets,
                  labels: labels
              },
              trafficRaw: action.payload
          };
      case TRAFFIC_PERIOD_CHANGE:
          const changedPeriod = action.payload;
          const changedTraffic = state.trafficRaw[changedPeriod].traffic;
          const changedLabels = trafficLabels[changedPeriod];
          let changedAverageTraffic = getAverageTraffic(changedPeriod, changedTraffic);
          _.first(trafficDatasets).data = changedAverageTraffic;
          return {
              ...state,
              traffic: {
                  ...state.traffic,
                  period: changedPeriod,
                  datasets: trafficDatasets,
                  labels: changedLabels
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
