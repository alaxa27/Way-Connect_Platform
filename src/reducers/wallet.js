import {
  WALLET,
  WALLET_FULFILLED,
  WALLET_REJECTED,

  WALLET_TRANSACTIONS,
  WALLET_TRANSACTIONS_FULFILLED,
  WALLET_TRANSACTIONS_REJECTED,
} from "../constants/ActionTypes";
import _ from "underscore";

const initialState = {
  fetching: false,
  wallet: {
    value: 0,
    fixedValue: 0,
  },
  transactions: {
    fetching: false,
    error: null,
    items: []
  },
  error: null,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case WALLET:
      return { 
        ...state,
        fetching: true,
        error: null,
      };
    case WALLET_FULFILLED:
      return { 
        ...state,
        fetching: false,
        error: null,
        wallet: {
          ...state.wallet,
          value: action.payload.value,
          fixedValue: action.payload.fixedValue,
        },
      };
    case WALLET_REJECTED:
      return { 
        ...state,
        fetching: false,
        error: action.payload,
        wallet: {
          ...state.wallet,
          value: 0,
          fixedValue: 0,
        },
      };

    case WALLET_TRANSACTIONS:
      return { 
        ...state,
        transactions: {
          ...state.transactions,
          fetching: true,
          error: null
        }
      };
    case WALLET_TRANSACTIONS_FULFILLED:
      return { 
        ...state,
        transactions: {
          ...state.transactions,
          fetching: false,
          error: null,
          items: action.payload
        }
      };
    case WALLET_REJECTED:
      return { 
        ...state,
        transactions: {
          ...state.transactions,
          fetching: false,
          error: action.payload,
          items: []
        }
      };
    default:
      return { 
        ...state
      };
  }
}
