import { axiosInstance } from "../constants/ApiConfig";

import { setJwt } from "../services/CookieService";
import {
  REGISTER,
  REGISTER_FULFILLED,
  REGISTER_REJECTED
} from "../constants/ActionTypes";

export function register(payload) {
  return async (dispatch) => {
    dispatch({
      type: REGISTER
    });
    try {
      const response = await axiosInstance({
        method: "POST",
        url: "/auth/registration/",
        data: {
          email: payload.email,
          password1: payload.password,
          password2: payload.passwordConfirmation,
          username: payload.username
        }
      });
      const token = response.data.key;
      setJwt(token);
      dispatch({
        type: REGISTER_FULFILLED,
      });

    } catch (error) {
      dispatch({
        type: REGISTER_REJECTED,
        payload: error
      });
    }
  };
}
