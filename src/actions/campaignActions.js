import {
  axiosInstance
} from "../constants/ApiConfig";

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
      let campaign = response.data.filter(function(campaign) {
        return campaign.id.toString() === payload.campaignId;
      });

      campaign = campaign[0];

      campaign.status = "progress";
      dispatch({
        type: FETCH_CAMPAIGN_FULFILLED,
        payload: campaign
      });

    } catch (error) {
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
      // await dispatch(fetchAffluence({
      //     campaignId
      // }));
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
        url: `/campaigns/${payload.campaignId}/key_data`,
      });
      dispatch({
        type: CAMPAIGN_ANALYTICS_KEY_DATA_FULFILLED,
        payload: response.data
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
        labels: ["M", "T", "W", "Th", "F", "Sa", "Su"],
        datasets: [{
            label: "Views",
            backgroundColor: "transparent",
            borderColor: "#F15A24",
            colorName: "primary",
            pointHoverBackgroundColor: "#fff",
            borderWidth: 3,
            data: response.data.views.traffic,
          },
          {
            label: "Clicks",
            backgroundColor: "transparent",
            borderColor: "#20a8d8",
            colorName: "info",
            pointHoverBackgroundColor: "#fff",
            borderWidth: 3,
            data: response.data.clicks.traffic,
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
