import { combineReducers } from "redux";

import example from "./example";
import login from './login';
import forgotPassword from './forgotPassword';
import resetPassword from './resetPassword';

export default combineReducers({ example, login, forgotPassword, resetPassword });