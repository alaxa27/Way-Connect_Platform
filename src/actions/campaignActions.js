import {
  axiosInstance
} from "../constants/ApiConfig";
import _ from "underscore";

import {
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
} from "../constants/ActionTypes";

export function fetchCampaign(payload) {
  return async (dispatch, getState) => {
    dispatch({
      type: FETCH_CAMPAIGN
    });
    try {
      const response = await axiosInstance({
        method: "get",
        url: "/campaigns/"
        // url: `/campaigns/${payload.campaignId}/`,
      });
      // DEMO PURPOSES
      //This block will disappear when backend /campaign/:id/ will be working
      let campaign = response.data.filter(function(campaign) {
        return campaign.id.toString() === payload.campaignId;
      });

      campaign = campaign[0];

      switch (campaign.id) {
        case 43:
          campaign.status = "bidding";
          break;
        case 20:
          campaign.status = "delivered";
          break;
        default:
          campaign.status = "progress";
          break;
      }
      ////////////////
      dispatch({
        type: FETCH_CAMPAIGN_FULFILLED,
        payload: campaign
      });

    } catch (error) {
      // If error 404 should go back to /campaign/list
      dispatch({
        type: FETCH_CAMPAIGN_REJECTED,
        payload: error
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
      return _.reduce(chunk, (acc, val) => { return acc + val; });
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
        labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
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
