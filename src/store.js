import {
  applyMiddleware,
  createStore
} from "redux";
import reduxMiddleware from "react-block-ui/reduxMiddleware";

import {
  createLogger
} from "redux-logger";
import thunk from "redux-thunk";
import promise from "redux-promise-middleware";

import reducer from "./reducers";

let middlewares = [
  promise(), thunk, reduxMiddleware
];

if (process.env.STAGE !== "production") {
  middlewares.push(createLogger());
}

const middleware = applyMiddleware(...middlewares);

export default createStore(reducer, middleware);
