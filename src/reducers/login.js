// Reducers receive information from Actions in the form of "Type" and "Payload".
// And they perform a task or execute a fuction accordingly.

// For example, on receiving action type of "INCREMENT_NUM",
// the reducer function will increment the value stored in state, which is 0 initially.

// Read more on Reducers - https://redux.js.org/docs/basics/Reducers.html

import {
  LOGIN,
  LOGIN_REJECTED,
  LOGIN_FULFILLED
} from "../constants/ActionTypes";

const initialState = {
    fetching: false,
    user: null,
    errorMessage: null
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
      case LOGIN:
          return {
              ...state,
              fetching: true
          };
      case LOGIN_FULFILLED:
          return {
              ...state,
              fetching: false,
              user: {}
          };
      case LOGIN_REJECTED:
          return {
              ...state,
              fetching: false,
              errorMessage: action.payload
          };
      default:
          return {...state};
  }
}
