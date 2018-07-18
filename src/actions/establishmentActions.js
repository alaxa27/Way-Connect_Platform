import _ from "underscore";
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

  MY_ESTABLISHMENT_LIST,
  MY_ESTABLISHMENT_LIST_FULFILLED,

  SELECT_ESTABLISHMENT,

  ESTABLISHMENT_DOWNLOAD,
  ESTABLISHMENT_DOWNLOAD_FULFILLED,
  ESTABLISHMENT_DOWNLOAD_REJECTED,

  ESTABLISHMENT_ADD,
  ESTABLISHMENT_ADD_FULFILLED,
  ESTABLISHMENT_ADD_REJECTED,

  ESTABLISHMENT_ADD_MODAL_TOGGLE,

  ESTABLISHMENT_CHANGE_PLACE
} from "../constants/ActionTypes";

export function fetchEstablishmentPageData(payload) {
  return async (dispatch, getState) => {
    dispatch({
      type: ESTABLISHMENT_PAGE,
    });
    try {
      const establishmentID = payload.establishmentID;
      if (establishmentID === getState().establishment.id) {
        throw new Error("Already fetched;");
      }
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
        offset: 0,
        establishmentID
      }));
      await dispatch(fetchTypicalCustomer({
        establishmentID
      }));
      dispatch({
        type: ESTABLISHMENT_PAGE_FULFILLED,
        payload: establishmentID
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

      const monthlyData = { ...response.data
      };

      if (!_.isEmpty(monthlyData.total_rewards)) {
        const currency = Object.keys(monthlyData.total_rewards)[0];
        monthlyData.total_rewards = {
          value: monthlyData.total_rewards[currency],
          currency: currency
        };
      } else {
        monthlyData.total_rewards = {
          value: 0,
          currency: ""
        };
      }

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
      const promotionState = { ...getState().establishment.promotions
      };
      if (payload.offset === 0) {
        promotionState.data = [];
        promotionState.page = 0;
      }
      const response = await axiosInstance({
        method: "get",
        url: `/establishments/${payload.establishmentID}/discount_activations/?limit=${payload.limit}&offset=${payload.offset}`,
      });

      let promotions = {};
      if (Array.isArray(response.data)) {
        promotions = {
          data: [],
          offset: 0,
          total_count: 0,
          page: 1
        };
      } else {
        promotions = {
          data: [...promotionState.data, ...response.data.results],
          offset: payload.offset + payload.limit,
          total_count: response.data.count,
          page: promotionState.page + 1
        };
      }
      dispatch({
        type: PROMOTIONS_FULFILLED,
        payload: promotions
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

export function fetchMyEstablishmentList() {
  return async (dispatch, getState) => {
    dispatch({
      type: MY_ESTABLISHMENT_LIST,
    });
    try {
      const response = await axiosInstance({
        method: "get",
        url: "/establishments/",
        params: {
          owner: "me"
        }
      });
      dispatch({
        type: MY_ESTABLISHMENT_LIST_FULFILLED,
        payload: response.data
      });
    } catch (error) {
      throw new Error();
    }
  };
}

export function selectEstablishment(item) {
  return async dispatch => {
    dispatch({
      type: SELECT_ESTABLISHMENT,
      payload: item
    });
  };
}

export function downloadEstablishments() {
  return async (dispatch, getState) => {
    dispatch({
      type: ESTABLISHMENT_DOWNLOAD,
    });
    try {
      const response = await axiosInstance({
        method: "get",
        url: "/promotions/activations?format=xls"
      });
      dispatch({
        type: ESTABLISHMENT_DOWNLOAD_FULFILLED,
        payload: response.data
      });
    } catch (error) {
      dispatch({
        type: ESTABLISHMENT_DOWNLOAD_REJECTED,
        payload: error
      });
    }
  };
}

export function addEstablishment(payload) {
  return async (dispatch, getState) => {
    dispatch({
      type: ESTABLISHMENT_ADD,
    });
    try {
      const response = await axiosInstance({
        method: "post",
        url: "/contact/partner/",
        data: {
          name: payload.name,
          phone: payload.phone,
          address: payload.address,
          establishment_type: payload.establishmentType
        }
      });
      dispatch({
        type: ESTABLISHMENT_ADD_FULFILLED,
        payload: response.data
      });
    } catch (error) {
      dispatch({
        type: ESTABLISHMENT_ADD_REJECTED,
        payload: {
          establishmentType: payload.establishmentType,
          error: error.response.data
        }
      });
    }
  };
}

export function toggleAddModal() {
  return async dispatch => {
    dispatch({
      type: ESTABLISHMENT_ADD_MODAL_TOGGLE,
    });
  };
}

export function changePlace(payload) {
  return async dispatch => {
    dispatch({
      type: ESTABLISHMENT_CHANGE_PLACE,
      payload
    });
  };
}