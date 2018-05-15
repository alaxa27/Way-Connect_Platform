import {
  RESET_PASSWORD,
  RESET_PASSWORD_FULFILLED,
  RESET_PASSWORD_REJECTED
} from "../constants/ActionTypes";

const initialState = {
    fetching: false,
    success: false,
    error: null
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
      case RESET_PASSWORD:
          return {
              ...state,
              fetching: true,
              success: false,
              error: null
          };
      case RESET_PASSWORD_FULFILLED:
          return {
              ...state,
              fetching: false,
              success: true,
              error: null
          };
      case RESET_PASSWORD_REJECTED:
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
