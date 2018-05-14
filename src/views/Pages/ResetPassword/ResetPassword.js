import React, {Component} from 'react';
import {
  Container,
  Row,
  Col,
} from 'reactstrap';
import {Link} from 'react-router-dom';

class ResetPassword extends Component {
  constructor(props) {
      super(props)
      this.state = {
          password: "",
          passwordConfirmation: "",
      }

      this.handleChangePassword = this.handleChangePassword.bind(this)
      this.handleChangePasswordConfirmation = this.handleChangePasswordConfirmation.bind(this)
      this.handleReset = this.handleReset.bind(this)
  }

  handleChangePassword(e) {
      this.setState({password: e.target.value})
  }

  handleChangePasswordConfirmation(e) {
      this.setState({passwordConfirmation: e.target.value})
  }

  handleReset(e) {
      console.log('handleReset');
  }

  render() {
    return (<div className="app app--dark flex-row align-items-center">
      <Container>
        <Row className="justify-content-center">
          <Col md="5">
            <div className="login d-flex align-items-center justify-content-center flex-column">
              <h1 className="font-weight-bold m-0">Way-connect</h1>
              <div className="login__form w-100 mt-5">
                <form onSubmit={this.handleReset}>
                  <div className="login__input-box mb-4">
                    <input type="password" className="login__input w-100 py-1 px-3 mb-3" name="email" placeholder="Password" onChange={this.handleChangePassword} />
                    <input type="password" className="login__input w-100 py-1 px-3" name="email" placeholder="Repeat password" onChange={this.handleChangePasswordConfirmation} />
                  </div>
                  <button type="submit" className="btn-login btn-fb-login text-uppercase w-100 mb-2">
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

export default ResetPassword;
