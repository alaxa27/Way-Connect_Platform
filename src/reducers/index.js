import { combineReducers } from "redux";

import example from "./example";
import login from "./login";
import forgotPassword from "./forgotPassword";
import resetPassword from "./resetPassword";
import register from "./register";
import dashboard from "./dashboard";
import listCampaigns from "./listCampaigns";
import promotion from "./promotion";
import establishment from "./establishment";
import campaign from "./campaign";

export default combineReducers({
    login,
    forgotPassword,
    resetPassword,
    dashboard,
    register,
    promotion,
    establishment,
    listCampaigns,
    campaign
});
