import {
  REGISTER,
  REGISTER_FULFILLED,
  REGISTER_REJECTED,
} from "../constants/ActionTypes";

const initialState = {
    fetching: false,
    success: false,
    error: null,
    confirming: false
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
