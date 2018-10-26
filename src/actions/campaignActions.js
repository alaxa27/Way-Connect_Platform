import {
  axiosInstance
} from "../constants/ApiConfig";
import _ from "underscore";

import {
  CLEAN_CAMPAIGN_CACHE,

  FETCH_FILTER_DATA,
  FETCH_FILTER_DATA_FULFILLED,
  FETCH_FILTER_DATA_REJECTED,

  RESEARCH_FILTER_CHANGE,

  AUCTION_ESTIMATE,
  AUCTION_ESTIMATE_FULFILLED,
  AUCTION_ESTIMATE_REJECTED,

  FETCH_AUCTION,
  FETCH_AUCTION_FULFILLED,
  FETCH_AUCTION_REJECTED,

  FETCH_CAMPAIGN,
  FETCH_CAMPAIGN_FULFILLED,
  FETCH_CAMPAIGN_REJECTED,

  CAMPAIGN_ANALYTICS,
  CAMPAIGN_ANALYTICS_FULFILLED,
  CAMPAIGN_ANALYTICS_REJECTED,

  CAMPAIGN_ANALYTICS_AFFLUENCE,
  CAMPAIGN_ANALYTICS_AFFLUENCE_FULFILLED,

  CAMPAIGN_ANALYTICS_TRAFFIC,
  CAMPAIGN_ANALYTICS_TRAFFIC_FULFILLED,

  CAMPAIGN_ANALYTICS_TYPICAL_CUSTOMER,
  CAMPAIGN_ANALYTICS_TYPICAL_CUSTOMER_FULFILLED,
  CAMPAIGN_ANALYTICS_TYPICAL_CUSTOMER_REJECTED,

  CAMPAIGN_ANALYTICS_KEY_DATA,
  CAMPAIGN_ANALYTICS_KEY_DATA_FULFILLED,

  CAMPAIGN_CREDIT_MODAL_TOGGLE,

  CREDIT_CAMPAIGN,
  CREDIT_CAMPAIGN_FULFILLED,
  CREDIT_CAMPAIGN_REJECTED,

  CAMPAIGN_PROPERTY_UPDATE,

  CREATE_CAMPAIGN,
  CREATE_CAMPAIGN_FULFILLED,
  CREATE_CAMPAIGN_REJECTED,

  BID_CAMPAIGN,
  BID_CAMPAIGN_FULFILLED,
  BID_CAMPAIGN_REJECTED,

  BID_HISTORY,
  BID_HISTORY_FULFILLED,
  BID_HISTORY_REJECTED,

  CAMPAIGN_UPLOAD_VIDEO,
  CAMPAIGN_UPLOAD_VIDEO_FULFILLED,
  CAMPAIGN_UPLOAD_VIDEO_REJECTED,
} from "../constants/ActionTypes";

import {
  fetchWallet
} from "./walletActions";

const STATUS = require("../data/status");

export function cleanCampaignCache(payload) {
  return async (dispatch, getState) => {
    dispatch({
      type: CLEAN_CAMPAIGN_CACHE
    });
  };
}

export function fetchFilterData(payload) {
  return async (dispatch, getState) => {
    dispatch({
      type: FETCH_FILTER_DATA
    });

    try {
      const response = await axiosInstance({
        method: "get",
        url: "/customers/hobbies/",
      });

      const hobbies = response.data.map((item) => {
        return {
          "label": item.name,
          "value": item.id
        };
      });

      dispatch({
        type: FETCH_FILTER_DATA_FULFILLED,
        payload: {
          hobbies: hobbies,
          workStatus: STATUS["PROFESSIONAL"],
          relationshipStatus: STATUS["RELATIONSHIP"],
          country: STATUS["NATIONALITY"],
        }
      });
    } catch (error) {
      dispatch({
        type: FETCH_FILTER_DATA_REJECTED
      });

    }

  };
}

export function fetchCampaign(payload) {
  return async (dispatch, getState) => {
    dispatch({
      type: FETCH_CAMPAIGN
    });
    try {
      const response = await axiosInstance({
        method: "get",
        url: "/campaigns/" + payload
      });

      let res_filters = JSON.parse(response.data.filters);

      dispatch({
        type: FETCH_CAMPAIGN_FULFILLED,
        payload: { ...response.data,
          filters: res_filters,
          id: payload
        }
      });
    } catch (error) {
      dispatch({
        type: FETCH_CAMPAIGN_REJECTED
      });
    }
  };
}

export function fetchCampaignAnalyticsPageData(payload) {
  return async (dispatch, getState) => {
    dispatch({
      type: CAMPAIGN_ANALYTICS,
    });
    try {
      const campaignId = payload.campaignId;
      await dispatch(fetchKeyData({
        campaignId
      }));
      await dispatch(fetchAffluence({
        campaignId
      }));
      await dispatch(fetchTraffic({
        campaignId
      }));
      await dispatch(fetchTypicalCustomer({
        campaignId
      }));
      dispatch({
        type: CAMPAIGN_ANALYTICS_FULFILLED,
      });
    } catch (error) {
      dispatch({
        type: CAMPAIGN_ANALYTICS_REJECTED,
        payload: error
      });
    }
  };
}

function fetchKeyData(payload) {
  return async (dispatch, getState) => {
    dispatch({
      type: CAMPAIGN_ANALYTICS_KEY_DATA,
    });
    try {
      const response = await axiosInstance({
        method: "get",
        url: `/campaigns/${payload.campaignId}/key_data/`,
      });
      const result = { ...response.data,
        expense: {
          value: response.data.money,
          currency: response.data.money_currency
        }
      };
      dispatch({
        type: CAMPAIGN_ANALYTICS_KEY_DATA_FULFILLED,
        payload: result
      });
    } catch (error) {
      throw new Error();
    }
  };
}

function fetchAffluence(payload) {
  return async (dispatch, getState) => {
    dispatch({
      type: CAMPAIGN_ANALYTICS_AFFLUENCE,
    });
    try {
      const response = await axiosInstance({
        method: "get",
        url: `/campaigns/${payload.campaignId}/affluence`,
      });
      dispatch({
        type: CAMPAIGN_ANALYTICS_AFFLUENCE_FULFILLED,
        payload: response.data
      });
    } catch (error) {
      throw new Error();
    }
  };
}

function getSummedTraffic(traffic) {
  const monthChunks = _.chunk(traffic, 3);
  const summedTraffic = _.map(monthChunks, chunk => {
    return _.reduce(chunk, (acc, val) => {
      return acc + val;
    });
  });
  return summedTraffic;
}

function fetchTraffic(payload) {
  return async (dispatch, getState) => {
    dispatch({
      type: CAMPAIGN_ANALYTICS_TRAFFIC,
    });
    try {
      const response = await axiosInstance({
        method: "get",
        url: `/campaigns/${payload.campaignId}/traffic`,
      });
      let traffic = {
        labels: ["startDate", "", "", "", "", "", "", "", "", "end"],
        datasets: [{
            label: "Views",
            backgroundColor: "transparent",
            borderColor: "#F15A24",
            colorName: "primary",
            pointHoverBackgroundColor: "#fff",
            borderWidth: 3,
            data: getSummedTraffic(response.data.views.traffic),
          },
          {
            label: "Clicks",
            backgroundColor: "transparent",
            borderColor: "#20a8d8",
            colorName: "info",
            pointHoverBackgroundColor: "#fff",
            borderWidth: 3,
            data: getSummedTraffic(response.data.clicks.traffic),
          },
        ],
      };
      dispatch({
        type: CAMPAIGN_ANALYTICS_TRAFFIC_FULFILLED,
        payload: traffic
      });
    } catch (error) {
      throw new Error();
    }
  };
}

function fetchTypicalCustomer(payload) {
  return async (dispatch, getState) => {
    dispatch({
      type: CAMPAIGN_ANALYTICS_TYPICAL_CUSTOMER,
    });
    try {
      const response = await axiosInstance({
        method: "get",
        url: `/campaigns/${payload.campaignId}/typical_customer`,
      });
      dispatch({
        type: CAMPAIGN_ANALYTICS_TYPICAL_CUSTOMER_FULFILLED,
        payload: response.data
      });
    } catch (error) {
      dispatch({
        type: CAMPAIGN_ANALYTICS_TYPICAL_CUSTOMER_REJECTED,
        payload: error
      });
    }
  };
}

export function changeResearchFilter(payload) {
  return async (dispatch, getState) => {
    dispatch({
      type: RESEARCH_FILTER_CHANGE,
      payload
    });
    const filters = getState().campaign.researchFilters;
    const data = {
      price: "1.00",
      filters: {
        gender: filters.male ? "M" : filters.female ? "F" : "",
        age_min: filters.age_min,
        age_max: filters.age_max
      },
    };
    dispatch(estimateAuction(data));
  };
}

export function estimateAuction(payload) {
  return async (dispatch, getState) => {
    dispatch({
      type: AUCTION_ESTIMATE,
    });
    try {
      const response = await axiosInstance({
        method: "post",
        url: "/auctions/estimate/",
        data: payload
      });
      dispatch({
        type: AUCTION_ESTIMATE_FULFILLED,
        payload: response.data
      });
    } catch (error) {
      dispatch({
        type: AUCTION_ESTIMATE_REJECTED
      });
    }
  };
}

export function toggleCreditCampaignModal() {
  return async (dispatch, getState) => {
    dispatch({
      type: CAMPAIGN_CREDIT_MODAL_TOGGLE,
    });
  };
}

export function creditCampaign(payload) {
  return async (dispatch, getState) => {
    dispatch({
      type: CREDIT_CAMPAIGN
    });
    try {
      const action = (payload.amount > 0 ? "deposit" : "withdraw");
      const amount = (payload.amount > 0 ? payload.amount : -payload.amount);
      const response = await axiosInstance({
        method: "post",
        url: `/campaigns/${payload.campaignID}/${action}/`,
        data: {
          amount: Math.round(amount * 100) / 100
        }
      });
      dispatch({
        type: CREDIT_CAMPAIGN_FULFILLED,
        payload: response.data
      });
      dispatch(fetchCampaign(payload.campaignID));
      dispatch(fetchWallet());
      dispatch(toggleCreditCampaignModal());
    } catch (error) {
      dispatch({
        type: CREDIT_CAMPAIGN_REJECTED,
        payload: error
      });
    }
  };
}

export function createCampaign(payload) {
  return async (dispatch, getState) => {
    dispatch({
      type: CREATE_CAMPAIGN,
    });
    try {
      const response = await axiosInstance({
        method: "post",
        url: "/campaigns/",
        data: payload
      });
      dispatch({
        type: CREATE_CAMPAIGN_FULFILLED,
        payload: response.data.id
      });
    } catch (error) {
      dispatch({
        type: CREATE_CAMPAIGN_REJECTED,
        payload: error
      });
    }
  };
}

export function updateCampaignProperty(payload) {
  return async (dispatch, getState) => {
    dispatch({
      type: CAMPAIGN_PROPERTY_UPDATE,
      payload
    });
  };
}

export function fetchAuction(campaignId) {
  return async (dispatch, getState) => {
    dispatch({
      type: FETCH_AUCTION
    });
    try {
      const response = await axiosInstance({
        method: "get",
        url: `/campaigns/${campaignId}/auction/`
      });
      dispatch({
        type: FETCH_AUCTION_FULFILLED,
        payload: response.data
      });
    } catch (error) {
      dispatch({
        type: FETCH_AUCTION_REJECTED
      });
    }
  };
}

export function bidCampaign(payload) {
  return async (dispatch, getState) => {
    dispatch({
      type: BID_CAMPAIGN
    });
    try {
      const response = await axiosInstance({
        method: "post",
        url: `/campaigns/${payload.campaignId}/bid/`,
        data: {
          price: payload.price
        }
      });
      dispatch({
        type: BID_CAMPAIGN_FULFILLED,
        payload: response.data
      });
      dispatch(fetchCampaign(payload.campaignId));
      dispatch(fetchAuction(payload.campaignId));
      dispatch(fetchBidHistory(payload.campaignId));
    } catch (error) {
      dispatch({
        type: BID_CAMPAIGN_REJECTED,
        payload: error
      });
    }
  };
}

export function fetchBidHistory(campaignId) {
  return async (dispatch, getState) => {
    dispatch({
      type: BID_HISTORY
    });
    try {
      const response = await axiosInstance({
        method: "get",
        url: `/campaigns/${campaignId}/bid/`,
      });
      dispatch({
        type: BID_HISTORY_FULFILLED,
        payload: response.data.reverse()
      });
    } catch (error) {
      dispatch({
        type: BID_HISTORY_REJECTED
      });
    }
  };
}

export function uploadVideo(payload) {
  return async (dispatch, getState) => {
    dispatch({
      type: CAMPAIGN_UPLOAD_VIDEO
    });
    try {
      const response = await axiosInstance({
        method: "post",
        url: "/campaigns/communications/videos",
        data: {
          campaign: payload.campaign,
          video: payload.video,
          redirection: payload.redirection,
        }
      });
      dispatch({
        type: CAMPAIGN_UPLOAD_VIDEO_FULFILLED,
        payload: response.data
      });
    } catch (error) {
      dispatch({
        type: CAMPAIGN_UPLOAD_VIDEO_REJECTED,
        payload: error
      });
    }
  };
}
