import React, {Component} from "react";
import PropTypes from "prop-types";
import {
  Container,
  Row,
  Col
} from "reactstrap";
import * as actions from "../../../actions/confirmRegistrationActions";
import { connect } from "react-redux";

const mapStateToProps = state => ({
    confirming: state.confirmRegistration.confirming,
    success: state.confirmRegistration.success,
    error: state.confirmRegistration.error,
});

const mapDispatchToProps = dispatch => ({
    confirmRegistration: payload => dispatch(actions.confirmRegistration(payload))
});

export class ConfirmRegistration extends Component {
    constructor(props) {
        super(props);
        props.confirmRegistration(props.match.params.activateUrl);
    }
    render() {
      const { confirming, success, error } = this.props;
      return (
        <div className="app app--dark flex-row align-items-center">
          <Container>
            <Row className="justify-content-center">
              <Col md="6" lg="5">
                <div className="login d-flex align-items-center justify-content-center flex-column">
                  {confirming ?
                    <div className="loader">
                      <img src="../img/loader.gif" alt="Loader" />
                    </div>
                : success || error ?
                  <React.Fragment>
                    <img src="../img/login_logo.png" alt="Logo" className="login__logo-img mb-3"/>
                    <p className="my-3 text-center">Congratulations, your account has been confirmed</p>
                    <a id="link-login" className="login__link" href="#login" >Login</a>
                  </React.Fragment>
                : error ?
                  <React.Fragment>
                    <img src="../img/login_logo.png" alt="Logo" className="login__logo-img mb-3"/>
                    <p className="my-3 text-center">Something went wrong!</p>
                  </React.Fragment>
                :
                    null
                }
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      );
  }
}

ConfirmRegistration.propTypes = {
    confirmRegistration: PropTypes.func,
    match: PropTypes.shape({
        params: PropTypes.shape({activateUrl: PropTypes.string})
    }),
    confirming: PropTypes.bool,
    success: PropTypes.bool,
    error: PropTypes.object,
};

export default connect(mapStateToProps, mapDispatchToProps)(ConfirmRegistration);
