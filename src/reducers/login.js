import {
  LOGIN,
  LOGIN_REJECTED,
  LOGIN_FULFILLED
} from "../constants/ActionTypes";

const initialState = {
    fetching: false,
    isAuthenticated: false,
    error: null
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
      case LOGIN:
          return {
              ...state,
              fetching: true,
              isAuthenticated: false,
              error: null
          };
      case LOGIN_FULFILLED:
          return {
              ...state,
              fetching: false,
              isAuthenticated: true,
              error: null
          };
      case LOGIN_REJECTED:
          return {
              ...state,
              fetching: false,
              isAuthenticated: false,
              error: action.payload
          };
      default:
          return {...state};
  }
}
