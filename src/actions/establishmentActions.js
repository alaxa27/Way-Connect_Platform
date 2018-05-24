import {
  axiosInstance
} from "../constants/ApiConfig";

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

  PROMOTIONS,
  PROMOTIONS_FULFILLED,

  TYPICAL_CUSTOMER,
  TYPICAL_CUSTOMER_FULFILLED,
} from "../constants/ActionTypes";

export function fetchEstablishmentPageData(payload) {
  return async (dispatch, getState) => {
    dispatch({
      type: ESTABLISHMENT_PAGE,
    });
    try {
      const establishmentID = payload.establishmentID;
      await dispatch(fetchMonthlyData({
        establishmentID
      }));
      await dispatch(fetchTraffic({
        establishmentID
      }));
      await dispatch(fetchAffluence({
        establishmentID
      }));
      await dispatch(fetchPromotions({
          limit: payload.limit,
          offset: payload.offset,
          establishmentID
      }));
      await dispatch(fetchTypicalCustomer({
        establishmentID
      }));
      dispatch({
        type: ESTABLISHMENT_PAGE_FULFILLED,
      });
    } catch (error) {
      dispatch({
        type: ESTABLISHMENT_PAGE_REJECTED,
        payload: error
      });
    }
  };
}

function fetchMonthlyData(payload) {
  return async (dispatch, getState) => {
    dispatch({
      type: MONTHLY_DATA,
    });
    try {
      const response = await axiosInstance({
        method: "get",
        url: `/establishments/${payload.establishmentID}/monthly_data`,
      });

      const monthlyData = { ...response.data };
      monthlyData.customer_average_visits *= 100;
      const currency = Object.keys(monthlyData.total_rewards)[0];

      monthlyData.total_rewards = {
        value: monthlyData.total_rewards[currency],
        currency: currency
      };

      dispatch({
        type: MONTHLY_DATA_FULFILLED,
        payload: monthlyData
      });
    } catch (error) {
      throw new Error();
    }
  };
}

function fetchTraffic(payload) {
  return async (dispatch, getState) => {
    dispatch({
      type: TRAFFIC,
    });
    try {
      const response = await axiosInstance({
        method: "get",
        url: `/establishments/${payload.establishmentID}/traffic`,
      });
      dispatch({
        type: TRAFFIC_FULFILLED,
        payload: response.data
      });
    } catch (error) {
      throw new Error();
    }
  };
}

export function trafficPeriodChange(payload) {
  return async (dispatch, getState) => {
    dispatch({
      type: TRAFFIC_PERIOD_CHANGE,
      payload: payload
    });
  };
}

function fetchAffluence(payload) {
  return async (dispatch, getState) => {
    dispatch({
      type: AFFLUENCE,
    });
    try {
      const response = await axiosInstance({
        method: "get",
        url: `/establishments/${payload.establishmentID}/affluence`,
      });
      dispatch({
        type: AFFLUENCE_FULFILLED,
        payload: response.data
      });
    } catch (error) {
      throw new Error();
    }
  };
}

export function fetchPromotions(payload) {
  return async (dispatch, getState) => {
    dispatch({
      type: PROMOTIONS,
    });
    try {
      const response = await axiosInstance({
        method: "get",
        url: `/establishments/${payload.establishmentID}/discount_activations/?limit=${payload.limit}&offset=${payload.offset}`,
      });
      dispatch({
        type: PROMOTIONS_FULFILLED,
        payload: {
          promotions: response.data,
          offset: payload.offset
        }
      });
    } catch (error) {
      throw new Error();
    }
  };
}

function fetchTypicalCustomer(payload) {
  return async (dispatch, getState) => {
    dispatch({
      type: TYPICAL_CUSTOMER,
    });
    try {
      const response = await axiosInstance({
        method: "get",
        url: `/establishments/${payload.establishmentID}/typical_customer`,
      });
      dispatch({
        type: TYPICAL_CUSTOMER_FULFILLED,
        payload: response.data
      });
    } catch (error) {
      throw new Error();
    }
  };
}
