import React, {Component} from 'react';
import {
  Container,
  Row,
  Col,
} from 'reactstrap';
import { connect } from 'react-redux';
import * as actions from '../../../actions/resetPasswordActions';
import { withRouter } from 'react-router';

@connect((store) => {
    let resetPasswordStore = store.resetPassword;
    return {
        fetching: resetPasswordStore.fetching,
        success: resetPasswordStore.success,
        error: resetPasswordStore.error
    };
})
class ResetPassword extends Component {
  constructor(props) {
      super(props);
      this.state = {
          password: "",
          passwordConfirmation: "",
          uid: null,
          token: null
      };
      this.handleChangePassword = this.handleChangePassword.bind(this);
      this.handleChangePasswordConfirmation = this.handleChangePasswordConfirmation.bind(this);
      this.handleReset = this.handleReset.bind(this);
  }

  componentWillMount() {
      const params = this.props.match.params;
      this.setState({uid: params.uid, token: params.token});
  }

  handleChangePassword(e) {
      this.setState({password: e.target.value})
  }

  handleChangePasswordConfirmation(e) {
      this.setState({passwordConfirmation: e.target.value})
  }

  handleReset(e) {
      e.preventDefault();
      this.props.dispatch(actions.resetPassword({
          password: this.state.password,
          passwordConfirmation: this.state.passwordConfirmation,
          uid: this.state.uid,
          token: this.state.token
      }));
  }

  componentWillReceiveProps(nextProps) {
      const { success, history } = nextProps;
      if(success) {
          history.push('/login');
      }
  }

  render() {
    const { error } = this.props;
    return (<div className="app app--dark flex-row align-items-center">
      <Container>
        <Row className="justify-content-center">
          <Col md="6" lg="5">
            <div className="login d-flex align-items-center justify-content-center flex-column">
              <h1 className="font-weight-bold m-0 text-center">Way-connect</h1>
              <div className="login__form w-100 mt-4">
                <form onSubmit={this.handleReset}>
                  <div className="login__input-box mb-4">
                      {error ?
                          <div className="alert alert-danger">
                              Something went wrong
                          </div>
                      :
                          null
                      }
                    <input type="password" className="login__input w-100 py-1 px-3 mb-2" name="email" placeholder="Password" onChange={this.handleChangePassword} />
                    <input type="password" className="login__input w-100 py-1 px-3" name="email" placeholder="Repeat password" onChange={this.handleChangePasswordConfirmation} />
                  </div>
                  <button type="submit" className="btn-login btn-app-login text-uppercase w-100 mb-2">
                    Reset Password
                  </button>
                  <a href="https://way-connect.com/" className="login__link mt-4 d-block">Go back to the website</a>
                </form>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>);
  }
}

export default withRouter(ResetPassword);
