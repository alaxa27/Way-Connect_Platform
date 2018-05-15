import React, {Component} from 'react';
import {
  Container,
  Row,
  Col,
} from 'reactstrap';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../../../actions/forgotPasswordActions';

@connect((store) => {
    let forgotPasswordStore = store.forgotPassword;
    return {
        fetching: forgotPasswordStore.fetching,
        success: forgotPasswordStore.success,
        error: forgotPasswordStore.error
    };
})
class ForgotPassword extends Component {
  constructor(props) {
      super(props)
      this.state = {
          email: "",
      };
      this.handleChangeEmail = this.handleChangeEmail.bind(this)
      this.handleReset = this.handleReset.bind(this)
  }

  handleChangeEmail(e) {
      this.setState({email: e.target.value})
  }

  handleReset(e) {
      e.preventDefault();
      this.props.dispatch(actions.requestForgotPasswordLink({
        email: this.state.email
      }));
  }

  render() {
    const { error, success, fetching } = this.props;
    return (
      <div className="app app--dark flex-row align-items-center">
        <Container>
          <Row className="justify-content-center">
            <Col md="6" lg="5">
              <div className="login d-flex align-items-center justify-content-center flex-column">
                <h1 className="font-weight-bold m-0 text-center">Way-connect</h1>
                <p className="mt-4 mb-0">
                  Enter your email address below and we'll send you a link to reset your password.
                </p>
                <div className="login__form w-100 mt-4">
                  <form onSubmit={this.handleReset}>
                    <div className="login__input-box mb-4">
                      {error ?
                          <div className="alert alert-danger">
                            An error occurred.
                          </div>
                      : success ?
                          <div className="alert alert-success">
                            The link to reset password has been sent to your email address.
                          </div>
                      :
                          null
                      }
                      <input type="email" className="login__input w-100 py-1 px-3" name="email" placeholder="Email" onChange={this.handleChangeEmail} />
                    </div>
                    <button type="submit" className="btn-login btn-app-login text-uppercase w-100 mb-1">
                      Send Link
                      {fetching ?
                          <span className="pl-2">...</span>
                      :
                          null
                      }
                    </button>
                    <div className="d-flex justify-content-between">
                      <Link className="login__link" to="register" >Register</Link>
                      <Link className="login__link" to="login" >Login</Link>
                    </div>
                    <a href="https://way-connect.com/" className="login__link mt-4 d-block">Go back to the website</a>
                  </form>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default ForgotPassword;
