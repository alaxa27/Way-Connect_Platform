import {
  FORGOT_PASSWORD,
  FORGOT_PASSWORD_FULFILLED,
  FORGOT_PASSWORD_REJECTED
} from "../constants/ActionTypes";

const initialState = {
    fetching: false,
    success: false,
    error: null
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
      case FORGOT_PASSWORD:
          return {
              ...state,
              fetching: true,
              success: false,
              error: null
          };
      case FORGOT_PASSWORD_FULFILLED:
          return {
              ...state,
              fetching: false,
              success: true,
              error: null
          };
      case FORGOT_PASSWORD_REJECTED:
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
