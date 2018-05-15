import {
  LOGIN,
  LOGIN_REJECTED,
  LOGIN_FULFILLED
} from "../constants/ActionTypes";

const initialState = {
    fetching: false,
    user: null,
    error: null
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
      case LOGIN:
          return {
              ...state,
              fetching: true,
              user: null,
              error: null
          };
      case LOGIN_FULFILLED:
          return {
              ...state,
              fetching: false,
              user: {},
              error: null
          };
      case LOGIN_REJECTED:
          return {
              ...state,
              fetching: false,
              user: null,
              error: action.payload
          };
      default:
          return {...state};
  }
}
