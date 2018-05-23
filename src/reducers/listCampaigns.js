import {
  FETCH_CAMPAIGNS,
  FETCH_CAMPAIGNS_FULFILLED,
  FETCH_CAMPAIGNS_REJECTED
} from "../constants/ActionTypes";

const campaigns = [{
  name: "",
  view_price: "",
  viewed: "",
  viewers: "",
  status: "",
  id: 0,
  owner: "",
  filters: {}
}];

const initialState = {
  campaigns: campaigns,
  fetching: false,
  success: false,
  error: {}
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_CAMPAIGNS:
      return {
        ...state,
        fetching: true,
        success: false,
        error: false
      };
    case FETCH_CAMPAIGNS_FULFILLED:
      return {
        ...state,
        campaigns: action.payload,
        fetching: false,
        success: true,
        error: false
      };
    case FETCH_CAMPAIGNS_REJECTED:
      return {
        ...state,
        fetching: false,
        success: false,
        error: action.payload
      };
    default:
      return { ...state
      };
  }
}
