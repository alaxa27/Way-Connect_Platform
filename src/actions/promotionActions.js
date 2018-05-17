import axios from "axios";
import {
  PROMOTIONS,
  PROMOTIONS_FULFILLED,
  PROMOTIONS_REJECTED,
  PROMOTIONS_LOAD_MORE
} from "../constants/ActionTypes";

export function fetch() {
  return async (dispatch) => {
    dispatch({
      type: PROMOTIONS
    });
    try {
      let response = [];
      const totalCount = 100;
      for(let i = 1; i <= 25; i++) {
          response.push({
              id: i,
              wc: 20,
              title: '#WFCD423',
              createdAt: '18/04/2018 18:22',
              visit: 18,
          })
      }
      dispatch({
        type: PROMOTIONS_FULFILLED,
        payload: {
          promotions: response,
          totalCount: totalCount
        }
      });
    } catch (error) {
      dispatch({
        type: PROMOTIONS_REJECTED,
        payload: error
      });
    }
  }
}

export function loadMore() {
    return async (dispatch) => {
        try {
            let response = [];
            for (let i = 1; i <= 25; i++) {
                response.push({
                    id: i + 100,
                    wc: 25,
                    title: '#WFCD4234',
                    createdAt: '18/04/2018 18:22:22',
                    visit: 19,
                })
            }
            dispatch({
                type: PROMOTIONS_LOAD_MORE,
                payload: {
                    promotions: response,
                }
            });
        } catch (error) {
            dispatch({
                type: PROMOTIONS_REJECTED,
                payload: error
            });
        }
    }
}
