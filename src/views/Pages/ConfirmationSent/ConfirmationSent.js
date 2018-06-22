import React, {Component} from "react";
import {
  Container,
  Row,
  Col
} from "reactstrap";

export class ConfirmationSent extends Component {
    render() {
      return (
        <div className="app app--dark flex-row align-items-center">
          <Container>
            <Row className="justify-content-center">
              <Col md="6" lg="5">
                <div className="login d-flex align-items-center justify-content-center flex-column">
                  <img src="../img/login_logo.png" alt="Logo" className="login__logo-img mb-3"/>
                  <h1 className="font-weight-bold text-center mb-3">Confirm your email</h1>
                  <p>We have sent activation link to your email</p>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      );
  }
}

export default ConfirmationSent;
