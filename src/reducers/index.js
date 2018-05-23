import { combineReducers } from "redux";

import example from "./example";
import login from "./login";
import forgotPassword from "./forgotPassword";
import resetPassword from "./resetPassword";
import register from "./register";
import listCampaigns from "./listCampaigns";
import promotion from "./promotion";
import establishment from "./establishment";

export default combineReducers({ example, login, forgotPassword, resetPassword, register, listCampaigns, promotion, establishment });
