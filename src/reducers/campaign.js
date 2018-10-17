import {
  FETCH_FILTER_DATA,
  FETCH_FILTER_DATA_FULFILLED,
  FETCH_FILTER_DATA_REJECTED,

  RESEARCH_FILTER_CHANGE,

  FETCH_AUCTION,
  FETCH_AUCTION_FULFILLED,
  FETCH_AUCTION_REJECTED,

  AUCTION_ESTIMATE,
  AUCTION_ESTIMATE_FULFILLED,
  AUCTION_ESTIMATE_REJECTED,

  CREATE_CAMPAIGN,
  CREATE_CAMPAIGN_FULFILLED,
  CREATE_CAMPAIGN_REJECTED,

  FETCH_CAMPAIGN,
  FETCH_CAMPAIGN_FULFILLED,
  FETCH_CAMPAIGN_REJECTED,

  CAMPAIGN_ANALYTICS,
  CAMPAIGN_ANALYTICS_FULFILLED,
  CAMPAIGN_ANALYTICS_REJECTED,

  CAMPAIGN_ANALYTICS_TRAFFIC,
  CAMPAIGN_ANALYTICS_TRAFFIC_FULFILLED,

  CAMPAIGN_ANALYTICS_AFFLUENCE,
  CAMPAIGN_ANALYTICS_AFFLUENCE_FULFILLED,

  CAMPAIGN_ANALYTICS_TYPICAL_CUSTOMER,
  CAMPAIGN_ANALYTICS_TYPICAL_CUSTOMER_FULFILLED,
  CAMPAIGN_ANALYTICS_TYPICAL_CUSTOMER_REJECTED,

  CAMPAIGN_ANALYTICS_KEY_DATA,
  CAMPAIGN_ANALYTICS_KEY_DATA_FULFILLED,

  CAMPAIGN_CREDIT_MODAL_TOGGLE,

  CAMPAIGN_CREDIT_VALUE_CHANGE,

  CAMPAIGN_PROPERTY_UPDATE,

  BID_CAMPAIGN,
  BID_CAMPAIGN_FULFILLED,
  BID_CAMPAIGN_REJECTED,

  BID_CHANGE,

  BID_HISTORY,
  BID_HISTORY_FULFILLED,
  BID_HISTORY_REJECTED,
} from "../constants/ActionTypes";
import _ from "underscore";

const campaignDefaults = {
  id: null,
  name: "",
  company_name: "",
  description: "",
  type: "",
  created_at: "",
  updated_at: "",
  filters: "",
  price: 0,
  repetitions: 0,
  budget: 0,
  targeted_customers: 0,
  spent_budget: 0,
  views: 0,

  fetching: false,
  success: false,
  error: null,
};

const keyDataDefaults = {
  views: "0",
  customers: "0",
  clicks: "0",
  expense: {
    value: "0",
    currency: ""
  }
};

const typicalCustomerDefaults = {
  age: 0,
  country: {
    label: "Unknown",
    value: 0
  },
  gender: {
    label: "Unknown",
    value: 0
  },
  relationship_status: {
    label: "Unknown",
    value: 0
  },
  work_status: {
    label: "Unknown",
    value: 0
  },
};

const trafficDefaults = {
  labels: ["startDate", "", "", "", "", "", "", "", "", "end"],
  datasets: [{
      label: "Views",
      backgroundColor: "transparent",
      borderColor: "#F15A24",
      colorName: "primary",
      pointHoverBackgroundColor: "#fff",
      borderWidth: 3,
      data: [],
    },
    {
      label: "Clicks",
      backgroundColor: "transparent",
      borderColor: "#20a8d8",
      colorName: "info",
      pointHoverBackgroundColor: "#fff",
      borderWidth: 3,
      data: [],
    },
  ]
};

const filterDataDefaults = {
  fetching: false,
  fetched: false,
  workStatus: [],
  relationshipStatus: [],
  nationality: [],
  hobbies: [],
  gender: {
    male: false,
    female: false
  },
  age: {
    min: 18,
    max: 24
  },
  recallMarketing: 0
};

const researchFilterDefaults = {
  male: false,
  female: false,
  age: {
    min: 18,
    max: 24
  },
  workStatus: [],
  relationshipStatus: [],
  nationality: [],
  hobbies: [],
  recallMarketing: 0,
  users: 0,
  price: 0
};

const initialState = {
  fetching: false,
  success: false,
  error: null,

  newCampaign: {
    name: "",
    companyName: "",
    productDescription: "",
    communicationType: "",
    created: false,
  },
  campaign: campaignDefaults,
  filterData: filterDataDefaults,
  traffic: trafficDefaults,
  keyData: keyDataDefaults,
  typicalCustomer: typicalCustomerDefaults,
  affluence: null,

  researchFilters: researchFilterDefaults,

  creditModalShown: false,
  credit: {
    min: 0,
    max: 7500,
    current: 750
  },

  bid: 0,
  bidAttempt: {
    executing: false,
    error: null,
    success: false,
  },
  bidHistory: {
    error: null,
    fetching: false,
    items: []
  },
  auction: {
    error: null,
    fetching: true,
    items: []
  }
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_FILTER_DATA:
      return { ...state,
        filterData: {
          ...state.filterData,
          fetching: true,
          fetched: false
        }
      };
    case FETCH_FILTER_DATA_FULFILLED:
      return { ...state,
        filterData: { ...state.filterData,
          ...action.payload,
          fetching: false,
          fetched: true
        }
      };
    case FETCH_FILTER_DATA_REJECTED:
      return { ...state,
        filterData: {
          ...state.filterData,
          fetching: false,
          fetched: false
        }
      };
    case FETCH_CAMPAIGN:
      return {
        ...state,
        campaign: {
          ...state.campaign,
          ...action.payload,
          fetching: true,
          success: false,
          error: null
        }
      };
    case FETCH_CAMPAIGN_FULFILLED:
      let filters = {};
      if(action.payload.filters !== "{}") {
        filters = action.payload.filters;
      }
      return {
        ...state,
        campaign: {
          ...state.campaign,
          ...action.payload,
          fetching: false,
          success: true,
          error: null
        },
        researchFilters: {
          ...state.researchFilters,
          ...filters,
        }
      };
    case FETCH_CAMPAIGN_REJECTED:
      return {
        ...state,
        campaign: {
          ...state.campaign,
          fetching: false,
          success: false,
          error: action.payload
        }
      };
    case CAMPAIGN_ANALYTICS:
      return {
        ...state,
        fetching: true,
        success: false,
        error: null,
      };
    case CAMPAIGN_ANALYTICS_FULFILLED:
      return {
        ...state,
        fetching: false,
        success: true,
        error: null,
      };
    case CAMPAIGN_ANALYTICS_REJECTED:
      return {
        ...state,
        fetching: false,
        success: false,
        error: action.payload
      };
    case CAMPAIGN_ANALYTICS_TRAFFIC:
      return {
        ...state,
      };
    case CAMPAIGN_ANALYTICS_TRAFFIC_FULFILLED:
      return {
        ...state,
        traffic: action.payload,
      };
    case CAMPAIGN_ANALYTICS_AFFLUENCE:
      return {
        ...state,
      };
    case CAMPAIGN_ANALYTICS_AFFLUENCE_FULFILLED:
      return {
        ...state,
        affluence: action.payload
      };
    case CAMPAIGN_ANALYTICS_TYPICAL_CUSTOMER:
      return {
        ...state,
      };
    case CAMPAIGN_ANALYTICS_TYPICAL_CUSTOMER_FULFILLED:
      return {
        ...state,
        typicalCustomer: action.payload
      };
    case CAMPAIGN_ANALYTICS_TYPICAL_CUSTOMER_REJECTED:
      return {
        ...state,
      };
    case CAMPAIGN_ANALYTICS_KEY_DATA:
      return {
        ...state,
      };
    case CAMPAIGN_ANALYTICS_KEY_DATA_FULFILLED:
      return {
        ...state,
        keyData: action.payload
      };
    case RESEARCH_FILTER_CHANGE:
      return {
        ...state,
        researchFilters: {
          ...state.researchFilters,
          [action.payload.name]: action.payload.value
        }
      };

    case AUCTION_ESTIMATE:
      return {
        ...state,
      };
    case AUCTION_ESTIMATE_FULFILLED:
      return {
        ...state,
        researchFilters: {
          ...state.researchFilters,
          users: action.payload.customer_count,
          price: action.payload.price
        }
      };
    case AUCTION_ESTIMATE_REJECTED:
      return {
        ...state,
      };

    case CREATE_CAMPAIGN:
      return {
        ...state,
        newCampaign: {
          ...state.newCampaign,
          created: false,
        }
      };
    case CREATE_CAMPAIGN_FULFILLED:
      return {
        ...state,
        newCampaign: {
          ...state.newCampaign,
          created: true,
        }
      };
    case CREATE_CAMPAIGN_REJECTED:
      return {
        ...state,
        newCampaign: {
          ...state.newCampaign,
          created: false,
        }
      };

    case CAMPAIGN_CREDIT_MODAL_TOGGLE:
      return {
        ...state,
        creditModalShown: !state.creditModalShown
      };
    case CAMPAIGN_CREDIT_VALUE_CHANGE:
      let value = action.payload;
      const { max, min } = state.credit;
      if(value > max) {
        value = max;
      }
      if(value < min) {
        value = min;
      }
      return {
        ...state,
        credit: {
          ...state.credit,
          current: value
        }
      };
    case CAMPAIGN_PROPERTY_UPDATE:
      return {
        ...state,
        newCampaign: {
          ...state.newCampaign,
          [action.payload.name]: action.payload.value
        }
      };

    case FETCH_AUCTION:
      return {
        ...state,
        auction: {
          ...state.auction,
          fetching: true,
          error: null
        }
      };
    case FETCH_AUCTION_FULFILLED:
      return {
        ...state,
        auction: {
          ...state.auction,
          fetching: false,
          error: null,
          items: action.payload
        }
      };
    case FETCH_AUCTION_REJECTED:
      return {
        ...state,
        auction: {
          ...state.auction,
          fetching: false,
          error: action.payload,
          items: []
        }
      };

    case BID_CAMPAIGN:
      return {
        ...state,
        bidAttempt: {
          ...state.bidAttempt,
          executing: true,
          error: null,
          success: false
        }
      };
    case BID_CAMPAIGN_FULFILLED:
      return {
        ...state,
        bidAttempt: {
          ...state.bidAttempt,
          executing: false,
          error: null,
          success: true
        }
      };
    case BID_CAMPAIGN_REJECTED:
      return {
        ...state,
        bidAttempt: {
          ...state.bidAttempt,
          executing: false,
          error: action.payload,
          success: false
        }
      };

    case BID_CHANGE:
      return {
        ...state,
        bid: action.payload,
      };

    case BID_HISTORY:
      return {
        ...state,
        bidHistory: {
          ...state.bidHistory,
          fetching: true,
          error: null,
        }
      };
    case BID_HISTORY_FULFILLED:
      return {
        ...state,
        bidHistory: {
          ...state.bidHistory,
          fetching: false,
          error: null,
          items: action.payload
        }
      };
    case BID_HISTORY_REJECTED:
      return {
        ...state,
        bidHistory: {
          ...state.bidHistory,
          fetching: false,
          error: action.payload,
          items: []
        }
      };

    default:
      return { ...state
      };
  }
}
