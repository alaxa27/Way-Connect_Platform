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
import {Link, Redirect} from "react-router-dom";
import {connect} from "react-redux";
import * as actions from "../../../actions/loginActions";
import CookieService from "../../../services/CookieService";

@connect((store) => {
  let loginStore = store.login;
  return {fetching: loginStore.fetching, isAuthenticated: loginStore.isAuthenticated, error: loginStore.error};
})
class Login extends Component {
  static propTypes = {
    dispatch: PropTypes.func,
    error: PropTypes.bool,
    fetching: PropTypes.bool,
    isAuthenticated: PropTypes.bool,
    location: PropTypes.object
  }
  constructor(props) {
    super(props);
    const redirect = (
      new CookieService().getJwt()
      ? true
      : false);
    this.state = {
      username: "",
      password: "",
      remember: false,
      redirect: redirect
    };
    this.handleChangeUsername = this.handleChangeUsername.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
    this.handleRemember = this.handleRemember.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
  }

  handleChangeUsername(e) {
    this.setState({username: e.target.value});
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
    this.props.dispatch(actions.login({username: this.state.username, password: this.state.password, remember: this.state.remember}));
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
              <form onSubmit={this.handleLogin}>
                <div className="login__input-box my-4">
                  {
                    error
                      ? <div className="alert alert-danger">
                        {"You can't log in with provided credentials"}
                      </div>
                      : null
                  }
                  <input type="text" className="login__input w-100 py-1 px-3 mb-2" name="username" placeholder="Username or email" onChange={this.handleChangeUsername}/>
                  <input type="password" className="login__input w-100 py-1 px-3 mb-3" name="password" placeholder="Password" onChange={this.handleChangePassword}/>
                  <div className="d-flex align-items-center checkbox-wrapper">
                    <input type="checkbox" className="checkbox" onChange={this.handleRemember}/>
                    <span className="checkmark"></span>
                    <label className="ml-5">Remember me</label>
                  </div>
                </div>
                <button type="submit" className="btn-login btn-app-login text-uppercase w-100 mb-2">
                  Login {
                    fetching
                      ? <span className="pl-2">...</span>
                      : null
                  }
                </button>
                <button className="btn-login btn-fb-login text-uppercase w-100 mb-1">
                  Login with facebook
                </button>
                <div className="d-flex justify-content-between">
                  <Link className="login__link" to="register">Register</Link>
                  <Link className="login__link" to="forgot-password">Forgot your password?</Link>
                </div>
                <a href="https://way-connect.com/" className="login__link mt-4 d-block">Go back to the website</a>
              </form>
            </div>
          </Col>
        </Row>
      </Container>
    </div>);
  }
}

export default Login;
