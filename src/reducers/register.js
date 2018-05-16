import {
  REGISTER,
  REGISTER_FULFILLED,
  REGISTER_REJECTED
} from "../constants/ActionTypes";
import CookieService from "../services/CookieService";

const initialState = {
    fetching: false,
    success: false,
    error: null
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
      case REGISTER:
          return {
              ...state,
              fetching: true,
              success: false,
              error: null
          };
      case REGISTER_FULFILLED:
          const token = action.payload.token;
          const cookieService = new CookieService();
          cookieService.setJwt(token);
          return {
              ...state,
              fetching: false,
              success: true,
              error: null
          };
      case REGISTER_REJECTED:
          return {
              ...state,
              fetching: false,
              success: false,
              error: action.payload
          };
      default:
          return {...state};
  }
}
