import React from "react";
import PropTypes from "prop-types";
import ReactDOM from "react-dom";
import {HashRouter, Route, Switch, Redirect} from "react-router-dom";
import {I18nextProvider} from "react-i18next";
import {Provider} from "react-redux";

import i18n from "./constants/i18n";
import store from "./store";

// Styles
// Import Flag Icons Set
import "flag-icon-css/css/flag-icon.min.css";
// Import Font Awesome Icons Set
import "font-awesome/css/font-awesome.min.css";
// Import Simple Line Icons Set
import "simple-line-icons/css/simple-line-icons.css";
// Import Main styles for this application
import "../scss/style.scss";
// Temp fix for reactstrap
import "../scss/core/_dropdown-menu-right.scss";

// Containers
import Full from "./containers/Full/";

// Views
import Login from "./views/Pages/Login/";
import Logout from "./views/Pages/Logout/";
import Register from "./views/Pages/Register/";
import ConfirmRegistration from "./views/Pages/ConfirmRegistration/";
import ConfirmationSent from "./views/Pages/ConfirmationSent/";
import ForgotPassword from "./views/Pages/ForgotPassword/";
import ResetPassword from "./views/Pages/ResetPassword/ResetPassword";
import Page404 from "./views/Pages/Page404/";
import Page500 from "./views/Pages/Page500/";
import {getJwt} from "./services/CookieService";

const PrivateRoute = ({
  component: Component,
  ...rest
}) => (<Route {...rest} render={(props) => (
    getJwt()
    ? <Component {...props}/>
    : <Redirect to={{
        pathname: "/login",
        state: {
          from: props.location
        }
      }}/>)}/>);
PrivateRoute.propTypes = {
  component: PropTypes.func,
  location: PropTypes.object
};

ReactDOM.render((<I18nextProvider i18n={i18n}>
  <Provider store={store}>
    <HashRouter>
      <Switch>
        <Route exact={true} path="/login" name="Login Page" component={Login}/>
        <Route exact={true} path="/logout" name="Logout Page" component={Logout}/>
        <Route exact={true} path="/register" name="Register Page" component={Register}/>
        <Route exact={true} path="/register/confirm" name="Confirmation Sent Page" component={ConfirmationSent}/>
        <Route exact={true} path="/confirm-registration/:activateUrl" name="Confirm Registration Page" component={ConfirmRegistration}/>
        <Route exact={true} path="/forgot-password" name="Forgot Password Page" component={ForgotPassword}/>
        <Route exact={true} path="/reset-password/:uid/:token" name="Reset Password Page" component={ResetPassword}/>
        <Route exact={true} path="/404" name="Page 404" component={Page404}/>
        <Route exact={true} path="/500" name="Page 500" component={Page500}/>
        <PrivateRoute path="/" name="Home" component={Full}/>
      </Switch>
    </HashRouter>
  </Provider>
</I18nextProvider>), document.getElementById("root"));
