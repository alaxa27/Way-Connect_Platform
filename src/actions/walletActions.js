import {
    axiosInstance
  } from "../constants/ApiConfig";
  import _ from "underscore";
  
  import {
    WALLET,
    WALLET_FULFILLED,
    WALLET_REJECTED,

    WALLET_TRANSACTIONS,
    WALLET_TRANSACTIONS_FULFILLED,
    WALLET_TRANSACTIONS_REJECTED,
  } from "../constants/ActionTypes";
  
  export function fetchWallet() {
    return async (dispatch, getState) => {
      dispatch({
        type: WALLET
      });
      try {
        const response = await axiosInstance({
          method: "get",
          url: "/wallets/",
        });
        dispatch({
          type: WALLET_FULFILLED,
          payload: {
              value: response.data.value,
              fixedValue: response.data.fixed_value,
          },
        });
      } catch (error) {
        dispatch({
          type: WALLET_FULFILLED,
          payload: {
              value: 100,
              fixedValue: 1000,
          }
        });
      }
    };
  }

  export function fetchWalletTransactions() {
    return async (dispatch, getState) => {
      dispatch({
        type: WALLET_TRANSACTIONS
      });
      try {
        const response = await axiosInstance({
          method: "get",
          url: "/wallets/transactions/",
        });
        dispatch({
          type: WALLET_TRANSACTIONS_FULFILLED,
          payload: response.data,
        });
      } catch (error) {
        dispatch({
          type: WALLET_TRANSACTIONS_FULFILLED,
          payload: [
            {
                "value": "1.00",
                "created_at": "2018-01-29T12:34:56.000000Z"
            }, {
                "value": "3.32",
                "created_at": "2018-01-29T12:34:56.000000Z"
            },
          ]
        });
      }
    };
  }