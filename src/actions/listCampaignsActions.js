import {
  axiosInstance
} from "../constants/ApiConfig";

import {
  FETCH_CAMPAIGNS,
  FETCH_CAMPAIGNS_FULFILLED,
  FETCH_CAMPAIGNS_REJECTED
} from "../constants/ActionTypes";

export function fetchCampaigns(payload) {
  return async (dispatch) => {
    dispatch({
      type: FETCH_CAMPAIGNS
    });
    try {
      const response = await axiosInstance({
        method: "GET",
        url: "/campaigns",
      });
      dispatch({
        type: FETCH_CAMPAIGNS_FULFILLED,
        payload: response.data.reverse()
      });
    } catch (error) {
      dispatch({
        type: FETCH_CAMPAIGNS_REJECTED,
        payload: error
      });
    }
  };
}
