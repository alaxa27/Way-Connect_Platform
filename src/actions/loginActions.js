import axios from "axios";

import {
  LOGIN,
  LOGIN_FULFILLED,
  LOGIN_REJECTED
} from "../constants/ActionTypes";

export function login(payload) {
  console.log('login');
  return async (dispatch, getState) => {
    dispatch({
      type: LOGIN
    });
    try {
      const response = await axios({
        method: "POST",
        url: "https://wayconnect.herokuapp.com/auth/login/",
        data: {
          username: payload.username,
          password: payload.password
        }
      });
      dispatch({
        type: LOGIN_FULFILLED,
        payload: response.data
      })
    } catch (error) {
      dispatch({
        type: LOGIN_REJECTED,
        payload: error.response.data.non_field_errors
      });
    }
  }
}
