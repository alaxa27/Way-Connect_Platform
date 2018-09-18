import {
  PROMOTIONS,
  PROMOTIONS_REJECTED,
  PROMOTIONS_FULFILLED,
  PROMOTIONS_LOAD_MORE,
  PROMOTIONS_SHOW_ACTIVATION_CONFIRMATION,
  PROMOTIONS_HIDE_ACTIVATION_CONFIRMATION,

  PROMOTIONS_ACTIVATE,
  PROMOTIONS_ACTIVATE_FULFILLED,
  PROMOTIONS_ACTIVATE_REJECTED
} from "../constants/ActionTypes";

const initialState = {
    fetching: false,
    promotions: [],
    totalCount: 0,
    error: null,
    activationConfirmationShown: false,
    activating: false
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
        case PROMOTIONS_SHOW_ACTIVATION_CONFIRMATION:
          return {
              ...state,
              activationConfirmationShown: action.payload
          };
        case PROMOTIONS_HIDE_ACTIVATION_CONFIRMATION:
          return {
              ...state,
              activationConfirmationShown: false
          };
        case PROMOTIONS_ACTIVATE:
            return {
                ...state,
                activating: true,
                error: null
            };
        case PROMOTIONS_ACTIVATE_FULFILLED:
            return {
                ...state,
                activating: false,
                error: null,
                activationConfirmationShown: false
            };
        case PROMOTIONS_ACTIVATE_REJECTED:
          return {
              ...state,
              activating: false,
              error: action.payload
          };
      default:
          return {...state};
  }
}
