import axios from "axios";

import {
  FORGOT_PASSWORD,
  FORGOT_PASSWORD_FULFILLED,
  FORGOT_PASSWORD_REJECTED
} from "../constants/ActionTypes";

export function requestForgotPasswordLink(payload) {
  return async (dispatch, getState) => {
    dispatch({
      type: FORGOT_PASSWORD
    });
    try {
      const response = await axios({
        method: "POST",
        url: "https://wayconnect.herokuapp.com/auth/password/reset/",
        data: {
          email: payload.email,
        }
      });
      dispatch({
        type: FORGOT_PASSWORD_FULFILLED,
        payload: response.data
      })
    } catch (error) {
      dispatch({
        type: FORGOT_PASSWORD_REJECTED,
        payload: error
      });
    }
  }
}
