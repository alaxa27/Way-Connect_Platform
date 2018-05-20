import {
  axiosInstance
} from "../constants/ApiConfig";

import {
  PARTNER_PAGE,
  PARTNER_PAGE_FULFILLED,
  PARTNER_PAGE_REJECTED,

  TRAFFIC,
  TRAFFIC_FULFILLED,

  AFFLUENCE,
  AFFLUENCE_FULFILLED,

  PROMOTIONS,
  PROMOTIONS_FULFILLED,

  TYPICAL_CUSTOMER,
  TYPICAL_CUSTOMER_FULFILLED,
} from "../constants/ActionTypes";
import CookieService from "../services/CookieService";

const token = new CookieService().getJwt();

export function fetchPartnerPageData(payload) {
  return async (dispatch, getState) => {
    dispatch({
      type: PARTNER_PAGE,
    });
    try {
      await dispatch(fetchTraffic());
      await dispatch(fetchAffluence());
      // await dispatch(fetchPromotions());
      await dispatch(fetchTypicalCustomer());
      dispatch({
        type: PARTNER_PAGE_FULFILLED,
      });
    } catch (error) {
      dispatch({
        type: PARTNER_PAGE_REJECTED,
      });
    }
  }
}

function fetchTraffic(payload) {
  return async (dispatch, getState) => {
    dispatch({
      type: TRAFFIC,
    });
    try {
      const response = await axiosInstance({
        method: "get",
        url: "/establishments/1/traffic",
      });
      dispatch({
        type: TRAFFIC_FULFILLED,
        payload: response.data
      });
    } catch (error) {
      throw new Error();
    }
  }
}

function fetchAffluence(payload) {
  return async (dispatch, getState) => {
    dispatch({
      type: AFFLUENCE,
    });
    try {
      const response = await axiosInstance({
        method: "get",
        url: "/establishments/1/affluence",
      });
      dispatch({
        type: AFFLUENCE_FULFILLED,
        payload: response.data
      });
    } catch (error) {
      throw new Error();
    }
  }
}

function fetchPromotions(payload) {
  return async (dispatch, getState) => {
    dispatch({
      type: PROMOTIONS,
    });
    try {
      const response = await axiosInstance({
        method: "get",
        url: "/establishments/1/discount_activations",
      });
      dispatch({
        type: PROMOTIONS_FULFILLED,
        payload: response.data
      });
    } catch (error) {
      throw new Error();
    }
  }
}

function fetchTypicalCustomer(payload) {
  return async (dispatch, getState) => {
    dispatch({
      type: TYPICAL_CUSTOMER,
    });
    try {
      const response = await axiosInstance({
        method: "get",
        url: "/establishments/1/typical_customer",
      });
      dispatch({
        type: TYPICAL_CUSTOMER_FULFILLED,
        payload: response.data
      });
    } catch (error) {
      throw new Error();
    }
  }
}
