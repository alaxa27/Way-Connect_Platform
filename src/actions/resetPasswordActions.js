import axios from "axios";

import {
  RESET_PASSWORD,
  RESET_PASSWORD_FULFILLED,
  RESET_PASSWORD_REJECTED
} from "../constants/ActionTypes";

export function resetPassword(payload) {
  return async (dispatch) => {
    dispatch({
      type: RESET_PASSWORD
    });
    try {
      const response = await axios({
        method: "POST",
        url: "https://wayconnect.herokuapp.com/auth/password/reset/confirm/",
        data: {
          new_password1: payload.password,
          new_password2: payload.passwordConfirmation,
          uid: payload.uid,
          token: payload.token
        }
      });
      dispatch({
        type: RESET_PASSWORD_FULFILLED,
        payload: response.data
      })
    } catch (error) {
      dispatch({
        type: RESET_PASSWORD_REJECTED,
        payload: error
      });
    }
  }
}
