import { combineReducers } from "redux";

import example from "./example";
import login from './login';
import forgotPassword from './forgotPassword';
import resetPassword from './resetPassword';
import register from './register';

export default combineReducers({ example, login, forgotPassword, resetPassword, register });