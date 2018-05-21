import React, { Component } from "react";
import PropTypes from "prop-types";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";

import {logout} from "../../../actions/loginActions";

@connect((store) => {
  let loginStore = store.login;
  return {redirect: loginStore.isLoggedOut};
})
class Logout extends Component {
  static propTypes = {
    dispatch: PropTypes.func,
    redirect: PropTypes.bool
  }
  constructor(props) {
    super(props);

    this.props.dispatch(logout());
  }

  render() {
    if (this.props.redirect) {
      return (
        <Redirect to="/" />
      );
    } else {
      return null;
    }
  }

}

export default Logout;
