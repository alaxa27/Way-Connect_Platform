import {
  axiosInstance
} from "../constants/ApiConfig";

import CookieService from "../services/CookieService";
import {
  LOGIN,
  LOGIN_FULFILLED,
  LOGIN_REJECTED,

  LOGOUT,
  LOGOUT_FULFILLED,
  LOGOUT_REJECTED
} from "../constants/ActionTypes";

export function login(payload) {
  return async (dispatch) => {
    dispatch({
      type: LOGIN
    });
    try {
      const response = await axiosInstance({
        method: "POST",
        url: "/auth/login/",
        data: {
          username: payload.username,
          password: payload.password
        }
      });

      const token = response.data.key;
      const remember = payload.remember;

      const cookieService = new CookieService();
      cookieService.setJwt(token, remember);

      dispatch({
        type: LOGIN_FULFILLED
      });
    } catch (error) {
      dispatch({
        type: LOGIN_REJECTED,
        payload: error
      });
    }
  };
}


export function logout(payload) {
  return async (dispatch) => {
    dispatch({
      type: LOGOUT
    });
    try {

      //Back doesn't allow logout atm.
      // const response = await axiosInstance({
      //   method: "GET",
      //   url: "/auth/logout/",
      // });

      const cookieService = new CookieService();
      cookieService.removeJwt();

      dispatch({
        type: LOGOUT_FULFILLED
      });
    } catch (error) {
      dispatch({
        type: LOGOUT_REJECTED,
        payload: error
      });
    }
  };
}
