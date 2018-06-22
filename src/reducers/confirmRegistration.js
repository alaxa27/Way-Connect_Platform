import {
  CONFIRM_REGISTRATION,
  CONFIRM_REGISTRATION_FULFILLED,
  CONFIRM_REGISTRATION_REJECTED
} from "../constants/ActionTypes";

const initialState = {
    confirming: false,
    error: null,
    success: false
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
      case CONFIRM_REGISTRATION:
          return {
              ...state,
              confirming: true,
              error: null,
              success: false
          };
      case CONFIRM_REGISTRATION_FULFILLED:
          return {
              ...state,
              confirming: false,
              error: null,
              success: true
          };
      case CONFIRM_REGISTRATION_REJECTED:
          return {
              ...state,
              confirming: false,
              error: action.payload,
              success: false
          };
      default:
          return {...state};
  }
}
