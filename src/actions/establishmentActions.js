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
      await dispatch(fetchMonthlyData());
      await dispatch(fetchTraffic());
      await dispatch(fetchAffluence());
      await dispatch(fetchPromotions(payload));
      await dispatch(fetchTypicalCustomer());
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
                url: "/establishments/29/monthly_data",
            });
            dispatch({
                type: MONTHLY_DATA_FULFILLED,
                payload: response.data
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
        url: "/establishments/29/traffic",
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
        url: "/establishments/29/affluence",
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
        url: `/establishments/29/discount_activations/?limit=${payload.limit}&offset=${payload.offset}`,
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
        url: "/establishments/29/typical_customer",
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
