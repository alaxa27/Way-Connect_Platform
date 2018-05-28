import {
  FETCH_DASHBOARD,
  FETCH_DASHBOARD_FULFILLED,
  FETCH_DASHBOARD_REJECTED,

  DASHBOARD_STATS,
  DASHBOARD_STATS_FULFILLED,
  DASHBOARD_STATS_REJECTED,

} from "../constants/ActionTypes";
import _ from "underscore";

const statsDefault = {
  fetching: false,
  success: false,
  campaigns: {
    count: 0,
    plot: [
      0,
      0,
      0,
      0,
      0,
      0
    ]
  },
  connections: {
    count: 0,
    plot: [
      0,
      0,
      0,
      0,
      0,
      0
    ]
  },
  customers: {
    count: 0,
    plot: [
      0,
      0,
      0,
      0,
      0,
      0
    ]
  },
  establishments: {
    count: 0,
    plot: [
      0,
      0,
      0,
      0,
      0,
      0
    ]
  }
};


const initialState = {
  stats: statsDefault,
  fetching: false,
  success: false,
  error: null,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_DASHBOARD:
      return {
        ...state,
        fetching: true,
        succes: false,
        error: null
      };
    case FETCH_DASHBOARD_FULFILLED:
      return {
        ...state,
        fetching: false,
        success: true,
        error: null
      };
    case FETCH_DASHBOARD_REJECTED:
      return {
        ...state,
        fetching: false,
        success: false,
        error: action.payload
      };
    case DASHBOARD_STATS:
      return {
        ...state,
        fetching: true,
        success: false,
        error: null,
      };
    case DASHBOARD_STATS_FULFILLED:
      return {
        ...state,
        fetching: false,
        success: true,
        error: null,
        stats: {
          ...action.payload,
          fetching: false,
          success: true,
        }
      };
    case DASHBOARD_STATS_REJECTED:
      return {
        ...state,
        fetching: false,
        success: false,
        error: action.payload,
        stats: {
          ...state.stats,
          fetching: false,
          success: false,
        }
      };
    default:
      return { ...state
      };
  }
}
