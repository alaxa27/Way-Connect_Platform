import axios from "axios";

import {
  CONFIRM_REGISTRATION,
  CONFIRM_REGISTRATION_FULFILLED,
  CONFIRM_REGISTRATION_REJECTED
} from "../constants/ActionTypes";

export function confirmRegistration(payload) {
  return async (dispatch) => {
    dispatch({
      type: CONFIRM_REGISTRATION
    });
    try {
      console.log(decodeURIComponent(payload));
      await axios({
        method: "get",
        url: decodeURIComponent(payload),
      });
      dispatch({
        type: CONFIRM_REGISTRATION_FULFILLED,
      });
    } catch (error) {
      dispatch({
        type: CONFIRM_REGISTRATION_REJECTED,
        payload: error
      });
    }
  };
}
