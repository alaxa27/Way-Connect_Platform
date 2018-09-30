import axios from "axios";
import { each, map, isNumber, isArray, isObject, first } from "underscore";

let backendHost;
const apiVersion = "v1";

const hostname = window && window.location && window.location.hostname;

const formatResponse = (data) => {
  each(data, (value, key) => {
    if(isNumber(value)) {
        data[key] = floor(value);
    } else if(isArray(value)) {
      if(isObject(first(value))) {
        formatResponse(value);
      } else {
        if(key !== "coordinates") {
          const newArray = map(value, item => floor(item));
          data[key] = newArray;
        }
      }
    } else if(isObject(value)) {
      formatResponse(value);
    }
  });
};

const floor = (value) => {
  return Math.floor(value * 100) / 100;
};

if (hostname === "way-connect.com") {
  backendHost = "https://api.way-connect.com";
} else if (hostname === "wayconnect-portal.herokuapp.com") {
  backendHost = "https://wayconnect.herokuapp.com";
} else {
  backendHost = "http://localhost:8000";
}

if (process.env.STAGE === "production") {
  backendHost = "https://api.way-connect.com";
} else {
  backendHost = "https://wayconnect-staging.herokuapp.com";
}
export const axiosInstance = axios.create({
  baseURL: backendHost,
  transformResponse: axios.defaults.transformResponse.concat((data) => {
    formatResponse(data);
    return data;
  })
});
