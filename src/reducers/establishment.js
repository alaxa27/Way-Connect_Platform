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
  PROMOTIONS_FULFILLED,

  ESTABLISHMENT_LIST,
  ESTABLISHMENT_LIST_FULFILLED,

  MY_ESTABLISHMENT_LIST,
  MY_ESTABLISHMENT_LIST_FULFILLED,

  SELECT_ESTABLISHMENT,

  ESTABLISHMENT_DOWNLOAD,
  ESTABLISHMENT_DOWNLOAD_FULFILLED,
  ESTABLISHMENT_DOWNLOAD_REJECTED
} from "../constants/ActionTypes";
import _ from "underscore";
import {
  SSL_OP_NO_SESSION_RESUMPTION_ON_RENEGOTIATION
} from "constants";
import moment from 'moment';

const monthlyData = {
  visits: "0",
  visits_change: "0",
  customer_average_visits: "0",
  total_rewards: {
    value: "0",
    currency: ""
  }
};

const promotionsDefault = {
  data: [],
  limit: 10,
  offset: 0,
  total_count: 0,
  page: 0,
};

const establishmentsDefault = {
  items: [],
  fetching: false,
  limit: 10,
  offset: 0,
  total_count: 0,
  page: 0,
};

const myEstablishmentsDefault = {
  items: [],
  fetching: false,
  limit: 10,
  offset: 0,
  total_count: 0,
  page: 0,
};

const initialState = {
  fetching: false,
  success: false,
  error: null,

  id: 0,
  monthlyData: monthlyData,
  traffic: {
    period: "month",
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
  promotions: promotionsDefault,
  establishments: establishmentsDefault,
  myEstablishments: myEstablishmentsDefault,
  selectedEstablishment: null,

  downloading: false,
  establishmentsInXls: null
};

let trafficLabels = {
  month: ["startDate", "", "", "", "", "", "", "", "", "end"],
  year: ["start", "", "", "", "", "", "", "", "", "", "", "endDate"],
};

let trafficDatasets = [{
  label: "Visits",
  backgroundColor: "transparent",
  borderColor: "#F15A24",
  colorName: "primary",
  pointHoverBackgroundColor: "#fff",
  borderWidth: 3,
  data: [],
}];

let affluenceDatasets = [{
  label: "Affluence",
  backgEroundColor: "rgba(255,99,132,0.2)",
  borderColor: "rgba(255,99,132,1)",
  borderWidth: 1,
  hoverBackgroundColor: "rgba(255,99,132,0.4)",
  hoverBorderColor: "rgba(255,99,132,1)",
  data: []
}];

function getSummedTraffic(period, traffic) {
  let summedTraffic = [];
  switch (period) {
    case "month":
      const monthChunks = _.chunk(traffic, 3);
      summedTraffic = _.map(monthChunks, chunk => {
        return _.reduce(chunk, (acc, val) => {
          return acc + val;
        });
      });
      break;
    case "year":
      const yearChunks = _.chunk(traffic, 30);
      summedTraffic = _.map(yearChunks, chunk => {
        return _.reduce(chunk, (acc, val) => {
          return acc + val;
        });
      });
      break;
    default:
      break;
  }
  return summedTraffic;
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
        id: action.payload,
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
      let summedTraffic = getSummedTraffic(period, traffic);

      trafficLabels[period][0] = moment(action.payload[period].start_date).format('YYYY-MM-DD');
      trafficLabels[period][trafficLabels[period].length - 1] = moment(action.payload[period].end_date).format('YYYY-MM-DD');

      _.first(trafficDatasets).data = summedTraffic;
      return {
        ...state,
        traffic: {
          ...state.traffic,
          datasets: trafficDatasets,
          labels: trafficLabels[period]
        },
        trafficRaw: action.payload
      };
    case TRAFFIC_PERIOD_CHANGE:
      const changedPeriod = action.payload;
      const changedTraffic = state.trafficRaw[changedPeriod].traffic;
      let changedAverageTraffic = getSummedTraffic(changedPeriod, changedTraffic);

      trafficLabels[changedPeriod][0] = moment(state.trafficRaw[changedPeriod].start_date).format('YYYY-MM-DD');
      trafficLabels[changedPeriod][trafficLabels[changedPeriod].length - 1] = moment(state.trafficRaw[changedPeriod].end_date).format('YYYY-MM-DD');

      _.first(trafficDatasets).data = changedAverageTraffic;
      return {
        ...state,
        traffic: {
          ...state.traffic,
          period: changedPeriod,
          datasets: trafficDatasets,
          labels: trafficLabels[changedPeriod]
        },
      };
    case AFFLUENCE:
      return {
        ...state
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
        promotions: {...state.promotions, ...action.payload}
      };
    case ESTABLISHMENT_LIST:
      return {
        ...state,
        establishments: {
          ...state.establishments,
          fetching: true
        },
        selectedEstablishment: null
      };
    case ESTABLISHMENT_LIST_FULFILLED:
      return {
        ...state,
        establishments: {
          ...state.establishments,
          items: action.payload,
          fetching: false
        },
        selectedEstablishment: _.first(action.payload)
      };
    case MY_ESTABLISHMENT_LIST:
      return {
        ...state,
        myEstablishments: {
          ...state.myEstablishments,
          fetching: true
        },
      };
    case MY_ESTABLISHMENT_LIST_FULFILLED:
      return {
        ...state,
        myEstablishments: {
          ...state.myEstablishments,
          items: action.payload,
          fetching: false
        },
      };
    case SELECT_ESTABLISHMENT:
      return {
        ...state,
        selectedEstablishment: action.payload
      };
    case ESTABLISHMENT_DOWNLOAD:
      return {
        ...state,
        downloading: true,
        error: false
      };
    case ESTABLISHMENT_DOWNLOAD_FULFILLED:
      return {
        ...state,
        downloading: false,
        error: false,
        establishmentsInXls: action.payload
      };
    case ESTABLISHMENT_DOWNLOAD_REJECTED:
      return {
        ...state,
        downloading: false,
        error: action.payload,
        establishmentsInXls: null
      };
    default:
      return { ...state
      };
  }
}
