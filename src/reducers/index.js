// This will can combine one or more Reducer functions and export it through Redux's combineReducer helper.
import { combineReducers } from "redux";

import example from "./example";
import login from './login';

export default combineReducers({ example, login });

// Example for combining multiple reducers:
// export default combineReducers({ count, secondCounter });
