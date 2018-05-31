import React, {Component} from "react";
import PropTypes from "prop-types";
import {
  Container,
  Row,
  Col
} from "reactstrap";
import { Link, Redirect } from "react-router-dom";
import ErrorMessageService from "../../../services/ErrorMessageService";
import ValidatorService from "../../../services/ValidatorService";
import * as actions from "../../../actions/registerActions";
import { connect } from "react-redux";

const mapStateToProps = state => ({
    fetching: state.register.fetching,
    success: state.register.success,
    error: state.register.error
});

const mapDispatchToProps = dispatch => ({
    register: payload => dispatch(actions.register(payload))
});

export class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: null,
            lastName: null,
            username: null,
            email: null,
            password: null,
            passwordConfirmation: null
        };
        this.handleRegister = this.handleRegister.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.validator = new ValidatorService().getValidator();
        this.errorMessageService = new ErrorMessageService();
    }

    handleRegister(e) {
        e.preventDefault();

        const { register } = this.props;

        if(this.validator.allValid() ){
            register({
                email: this.state.email,
                password: this.state.password,
                passwordConfirmation: this.state.passwordConfirmation,
                username: this.state.username
            });
        } else {
            this.validator.showMessages();
            this.forceUpdate();
        }
    }

    handleInputChange(name, e) {
      this.setState({
          [name]: e.target.value
      });
    }

    render() {
      const { error, fetching, success } = this.props;

      if(success) {
          return <Redirect to="/dashboard" />;
      }

      return (
        <div className="app app--dark flex-row align-items-center">
          <Container>
            <Row className="justify-content-center">
              <Col md="6" lg="5">
                <div className="login d-flex align-items-center justify-content-center flex-column">
                  <img src="../img/newaccount.png" alt="Logo" className="login__logo-img mb-3" />
                  <h1 className="font-weight-bold text-center m-0">Create an account</h1>
                  <form id="register-form" className="w-100" onSubmit={this.handleRegister}>
                    <div className="login__input-box my-4">
                      {error ?
                        <div className="alert alert-danger">
                          {"You can't register with provided credentials"}
                        </div>
                      :
                          null
                      }
                      <input type="text" className="login__input w-100 py-1 px-3 my-2" name="username" placeholder="Choose a login" onChange={(e) => this.handleInputChange("username", e)}/>
                      {this.validator.message("username", this.state.username, "required", "text-danger username-error", {
                          required: this.errorMessageService.generateErrorMessage("Username", "required")
                      })}
                      <input type="email" className="login__input w-100 py-1 px-3 my-2" name="email" placeholder="Your e-mail address" onChange={(e) => this.handleInputChange("email", e)}/>
                      {this.validator.message("email", this.state.email, "required|email", "text-danger email-error", {
                          required: this.errorMessageService.generateErrorMessage("Email", "required"),
                          email: this.errorMessageService.generateErrorMessage("Email", "email")
                      })}
                      <input type="password" className="login__input w-100 py-1 px-3 my-2" name="password" placeholder="Type a password" onChange={(e) => this.handleInputChange("password", e)}/>
                      {this.validator.message("password", this.state.password, "required|min:8", "text-danger password-error", {
                          required: this.errorMessageService.generateErrorMessage("Password", "required"),
                          min: this.errorMessageService.generateErrorMessage("Password", "min", 8)
                      })}
                      <input type="password" className="login__input w-100 py-1 px-3 my-2" name="passwordConfirmation" placeholder="Confirm password" onChange={(e) => this.handleInputChange("passwordConfirmation", e)}/>
                      {this.validator.message("passwordConfirmation", this.state.passwordConfirmation, `required|password_confirmation:${this.state.password}`, "text-danger passwordConfirmation-error", {
                          required: this.errorMessageService.generateErrorMessage("Password confirmation", "required"),
                          password_confirmation: this.errorMessageService.generateErrorMessage("Password confirmation", "password_confirmation")
                      })}
                    </div>
                    <button type="submit" className="btn-login btn-app-login text-uppercase w-100 mb-1">
                      Register
                      {fetching ?
                        <span className="loader pl-2">...</span>
                            :
                            null
                        }
                    </button>
                    <div className="d-flex justify-content-between">
                      <a id="link-login" className="login__link" href="#login" >Login</a>
                    </div>
                    <a id="link-go-back" href="https://way-connect.com/" className="login__link mt-4 d-block">Go back to the website</a>
                  </form>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      );
  }
}

Register.propTypes = {
    dispatch: PropTypes.func,
    success: PropTypes.bool,
    error: PropTypes.object,
    fetching: PropTypes.bool,
    register: PropTypes.func
};

export default connect(mapStateToProps, mapDispatchToProps)(Register);