import { combineReducers } from "redux";

import login from "./login";
import forgotPassword from "./forgotPassword";
import resetPassword from "./resetPassword";
import register from "./register";
import confirmRegistration from "./confirmRegistration";
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
    confirmRegistration,
    promotion,
    establishment,
    listCampaigns,
    campaign
});
