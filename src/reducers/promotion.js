import {
  PROMOTIONS,
  PROMOTIONS_REJECTED,
  PROMOTIONS_FULFILLED,
  PROMOTIONS_LOAD_MORE
} from "../constants/ActionTypes";

const initialState = {
    fetching: false,
    promotions: [],
    totalCount: 0,
    error: null
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
      case PROMOTIONS:
          return {
              ...state,
              fetching: true,
              promotions: [],
              totalCount: 0,
              error: null
          };
      case PROMOTIONS_FULFILLED:
          return {
              ...state,
              fetching: false,
              promotions: action.payload.promotions,
              totalCount: action.payload.totalCount,
              error: null
          };
      case PROMOTIONS_LOAD_MORE:
          const currentPromotions = [...state.promotions];
          const newPromotions = action.payload.promotions;
          return {
              ...state,
              promotions: currentPromotions.concat(newPromotions)
          };
      case PROMOTIONS_REJECTED:
          return {
              ...state,
              fetching: false,
              promotions: [],
              totalCount: 0,
              error: action.payload
          };
      default:
          return {...state};
  }
}
