import {
  axiosInstance
} from "../constants/ApiConfig";

import {
  FETCH_DASHBOARD,
  FETCH_DASHBOARD_FULFILLED,
  FETCH_DASHBOARD_REJECTED,

  DASHBOARD_STATS,
  DASHBOARD_STATS_FULFILLED,

  ESTABLISHMENT_LIST,
  ESTABLISHMENT_LIST_FULFILLED,

  DASHBOARD_MAP_ZOOM,
} from "../constants/ActionTypes";

export function fetchDashboardData(payload) {
  return async (dispatch, getState) => {
    dispatch({
      type: FETCH_DASHBOARD,
    });
    try {
    await dispatch(fetchStats());
      await dispatch(fetchEstablishmentList());
      dispatch({
        type: FETCH_DASHBOARD_FULFILLED,
      });
    } catch (error) {
      dispatch({
        type: FETCH_DASHBOARD_REJECTED,
        payload: error
      });
    }
  };
}

function fetchStats(payload) {
  return async (dispatch, getState) => {
    dispatch({
      type: DASHBOARD_STATS,
    });
    try {
      const response = await axiosInstance({
        method: "get",
        url: "/stats/",
      });
      dispatch({
        type: DASHBOARD_STATS_FULFILLED,
        payload: response.data
      });
    } catch (error) {
      throw new Error();
    }
  };
}

export function fetchEstablishmentList() {
  return async (dispatch, getState) => {
    dispatch({
      type: ESTABLISHMENT_LIST,
    });
    try {
      const response = await axiosInstance({
        method: "get",
        url: "/establishments/",
      });
      dispatch({
        type: ESTABLISHMENT_LIST_FULFILLED,
        payload: response.data
      });
    } catch (error) {
      throw new Error();
    }
  };
}

export function changeMapZoom(payload) {
  return async (dispatch, getState) => {
    dispatch({
      type: DASHBOARD_MAP_ZOOM,
      payload
    });
  };
}