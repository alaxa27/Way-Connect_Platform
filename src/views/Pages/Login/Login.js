import React, {Component} from "react";
import PropTypes from "prop-types";
import {
  Container,
  Row,
  Col,
  CardGroup,
  Card,
  CardBody,
  Button,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Form
} from "reactstrap";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../../../actions/loginActions";
import { getJwt } from "../../../services/CookieService";

const mapStateToProps = state => ({
    fetching: state.login.fetching,
    isAuthenticated: state.login.isAuthenticated,
    error: state.login.error
});

const mapDispatchToProps = dispatch => ({
    login: credentials => dispatch(actions.login(credentials))
});

export class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      remember: false,
      redirect: getJwt()
    };
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
    this.handleRemember = this.handleRemember.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
  }

  handleChangeEmail(e) {
    this.setState({email: e.target.value});
  }

  handleChangePassword(e) {
    this.setState({password: e.target.value});
  }

  handleRemember() {
    this.setState({
      remember: !this.state.remember
    });
  }

  handleLogin(e) {
    e.preventDefault();
    const { login } = this.props;
    login({
        email: this.state.email,
        password: this.state.password,
        remember: this.state.remember
    });
  }

  render() {
    const {error, fetching, isAuthenticated, location} = this.props;

    if (isAuthenticated || this.state.redirect) {
      const redirectTo = location.state
        ? location.state.from.pathname
        : "/dashboard";
      return <Redirect to={redirectTo}/>;
    }

    return (<div className="app app--dark flex-row align-items-center">
      <Container>
        <Row className="justify-content-center">
          <Col md="6" lg="5">
            <div className="login d-flex align-items-center justify-content-center flex-column">
              <img src="../img/login_logo.png" alt="Logo" className="login__logo-img mb-3"/>
              <h1 className="font-weight-bold text-center m-0">Way-connect</h1>
              <form id="login-form" onSubmit={this.handleLogin}>
                <div className="login__input-box my-4">
                  {
                    error
                      ? <div className="alert alert-danger">
                        {"You can't log in with provided credentials"}
                      </div>
                      : null
                  }
                  <input type="text" className="login__input w-100 py-1 px-3 mb-2" name="email" placeholder="Email" onChange={this.handleChangeEmail}/>
                  <input type="password" className="login__input w-100 py-1 px-3 mb-3" name="password" placeholder="Password" onChange={this.handleChangePassword}/>
                  <div className="d-flex align-items-center checkbox-wrapper">
                    <input type="checkbox" name="remember" className="checkbox" onChange={this.handleRemember} />
                    <span className="checkmark"></span>
                    <label className="ml-5">Remember me</label>
                  </div>
                </div>
                <button type="submit" className="btn-login btn-app-login text-uppercase w-100 mb-2">
                  Login
                  {fetching ?
                    <span className="pl-2 loader">...</span>
                  :
                    null
                  }
                </button>
                <button className="btn-login btn-fb-login text-uppercase w-100 mb-1">
                  Login with facebook
                </button>
                <div className="d-flex justify-content-between">
                  <a id="link-register" className="login__link" href="#/register" >Register</a>
                  <a id="link-forgot-password" className="login__link" href="#/forgot-password" >Forgot your password?</a>
                </div>
                <a id="link-go-back" href="https://way-connect.com/" className="login__link mt-4 d-block">Go back to the website</a>
              </form>
            </div>
          </Col>
        </Row>
      </Container>
    </div>);
  }
}

Login.propTypes = {
    dispatch: PropTypes.func,
    error: PropTypes.object,
    fetching: PropTypes.bool,
    isAuthenticated: PropTypes.bool,
    location: PropTypes.object,
    login: PropTypes.func
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
