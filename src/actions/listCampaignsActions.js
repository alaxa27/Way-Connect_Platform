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
      const campaigns = response.data.map((item, key) => {
        // DEMO PURPOSES
        switch (item.id) {
          case 43:
            item.status = "bidding";
            break;
          case 20:
            item.status = "delivered";
            break;
          default:
            item.status = "progress";
            break;
        }
        ////////////////
        return { ...item,
          name: "Optician",
          view_price: "5",
          viewed: "3500",
          viewers: "12",
          bought: "500",
        };
      });
      dispatch({
        type: FETCH_CAMPAIGNS_FULFILLED,
        payload: campaigns
      });
    } catch (error) {
      dispatch({
        type: FETCH_CAMPAIGNS_REJECTED,
        payload: error
      });
    }
  };
}
