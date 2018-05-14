import React, {Component} from 'react';
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
} from 'reactstrap';
import {Link} from 'react-router-dom';

class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: "",
      password: ""
    }

    this.handleChangeUsername = this.handleChangeUsername.bind(this)
    this.handleChangePassword = this.handleChangePassword.bind(this)
    this.handleLogin = this.handleLogin.bind(this)
  }

  handleChangeUsername(e) {
    this.setState({username: e.target.value})
  }

  handleChangePassword(e) {
    this.setState({password: e.target.value})
  }

  handleLogin(e) {
    e.preventDefault();
    if (this.state.username === "demo" && this.state.password === "demo") {
      this.props.history.push("/dashboard")
    }
  }

  render() {
    return (<div className="app app--dark flex-row align-items-center">
      <Container>
        <Row className="justify-content-center">
          <Col md="6" lg="5">
            <div className="login d-flex align-items-center justify-content-center flex-column">
              <img src="../img/login_logo.png" alt="Logo" className="login__logo-img mb-3" />
              <h1 className="font-weight-bold text-center m-0">Way-connect</h1>
              <form onSubmit={this.handleLogin}>
                <div className="login__input-box my-4">
                  <input type="text" className="login__input w-100 py-1 px-3 mb-2" name="username" placeholder="Username or email" onChange={this.handleChangeUsername} />
                  <input type="password" className="login__input w-100 py-1 px-3 mb-3" name="password" placeholder="Password" onChange={this.handleChangePassword} />
                  <div className="d-flex align-items-center checkbox-wrapper">
                    <input type="checkbox" className="checkbox"/>
                    <span className="checkmark"></span>
                    <label className="ml-5">Remember me</label>
                  </div>
                </div>
                <button type="submit" className="btn-login btn-app-login text-uppercase w-100 mb-2">
                  Login
                </button>
                <button className="btn-login btn-fb-login text-uppercase w-100 mb-1">
                  Login with facebook
                </button>
                <div className="d-flex justify-content-between">
                  <Link className="login__link" to="register" >Register</Link>
                  <Link className="login__link" to="forgot-password" >Forgot your password?</Link>
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
