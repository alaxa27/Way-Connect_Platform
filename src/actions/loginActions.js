import axios from "axios";
import {
  LOGIN,
  LOGIN_FULFILLED,
  LOGIN_REJECTED
} from "../constants/ActionTypes";

export function login(payload) {
  return async (dispatch) => {
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
        payload: {
          token: response.data.key,
          remember: payload.remember
        }
      });
    } catch (error) {
      dispatch({
        type: LOGIN_REJECTED,
        payload: error
      });
    }
  }
}
