import React, {Component} from 'react';
import {
  Container,
  Row,
  Col,
} from 'reactstrap';
import {Link} from 'react-router-dom';

class ForgotPassword extends Component {
  constructor(props) {
      super(props)
      this.state = {
          email: "",
      }

      this.handleChangeEmail = this.handleChangeEmail.bind(this)
      this.handleReset = this.handleReset.bind(this)
  }

  handleChangeEmail(e) {
      this.setState({email: e.target.value})
  }

  handleReset(e) {
      console.log('handleReset');
  }

  render() {
    return (<div className="app app--dark flex-row align-items-center">
      <Container>
        <Row className="justify-content-center">
          <Col md="6">
            <div className="login d-flex align-items-center justify-content-center flex-column">
              <img src="../img/login_logo.png" alt="Logo" className="login__logo-img mb-4" />
              <h1 className="font-weight-bold m-0">Way-connect</h1>
              <div className="login__form w-100">
                <form onSubmit={this.handleReset}>
                  <div className="login__input-box mt-5 mb-3">
                    <input type="email" className="login__input w-100 py-1 px-3" name="email" placeholder="Email" onChange={this.handleChangeEmail} />
                  </div>
                  <button type="submit" className="btn-login btn-fb-login text-uppercase w-100 mb-2">
                    Send Link
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
    </div>);
  }
}

export default ForgotPassword;
