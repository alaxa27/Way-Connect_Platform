import axios from "axios";
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
      const response = await axios({
        method: "POST",
        url: "https://wayconnect.herokuapp.com/auth/registration/",
        data: {
          email: payload.email,
          password1: payload.password,
          password2: payload.passwordConfirmation,
          username: payload.username
        }
      });
      dispatch({
        type: REGISTER_FULFILLED,
        payload: {
          token: response.data.key,
        }
      });
    } catch (error) {
      dispatch({
        type: REGISTER_REJECTED,
        payload: error
      });
    }
  }
}
