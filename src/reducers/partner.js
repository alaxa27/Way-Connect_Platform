import {
  PARTNER_PAGE_FETCH,
  PARTNER_PAGE_FETCH_FULFILLED,
  PARTNER_PAGE_FETCH_REJECTED,

  TRAFFIC,
  TRAFFIC_FULFILLED,

  AFFLUENCE,
  AFFLUENCE_FULFILLED,

  TYPICAL_CUSTOMER,
  TYPICAL_CUSTOMER_FULFILLED
} from "../constants/ActionTypes";

const initialState = {
    fetching: false,
    success: false,
    error: null,

    traffic: null,
    affluence: null,
    typicalCustomer: null
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
      case PARTNER_PAGE_FETCH:
          return {
              ...state,
              fetching: true,
              success: false,
              error: null,
          };
      case PARTNER_PAGE_FETCH_FULFILLED:
          return {
              ...state,
              fetching: false,
              success: true,
              error: null,
          };
      case PARTNER_PAGE_FETCH_REJECTED:
          return {
              ...state,
              fetching: false,
              success: false,
              error: action.payload
          };
      case TRAFFIC:
          return {
              ...state,
              traffic: null
          };
      case TRAFFIC_FULFILLED:
          return {
              ...state,
              traffic: action.payload
          };
      case AFFLUENCE:
          return {
              ...state,
              affluence: null
          };
      case AFFLUENCE_FULFILLED:
          return {
              ...state,
              affluence: action.payload
          };
      case TYPICAL_CUSTOMER:
          return {
              ...state,
              typicalCustomer: null
          };
      case TYPICAL_CUSTOMER_FULFILLED:
          return {
              ...state,
              typicalCustomer: action.payload
          };
      default:
          return {...state};
  }
}
