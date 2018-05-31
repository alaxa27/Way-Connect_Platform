import React from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Col, Row } from "reactstrap";
import { Redirect } from "react-router-dom";
import PropTypes from "prop-types";
import SocietyForm from "./SocietyForm";
import RestaurantForm from "./RestaurantForm";
import HotelForm from "./HotelForm";

class AfterLogin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        activePlace: "society",
        firstStepSuccess: false,
        modalCompleted: false
    };
    this.handlePlaceChange = this.handlePlaceChange.bind(this);
    this.handleSubmitSuccess = this.handleSubmitSuccess.bind(this);
    this.handleModalComplete = this.handleModalComplete.bind(this);
  }
  handlePlaceChange(name) {
    this.setState({
        activePlace: name,
    });
  }
  handleSubmitSuccess() {
    this.setState({
        firstStepSuccess: true
    });
  }
  handleModalComplete() {
      const { hide } = this.props;
      hide();
      this.setState({
          modalCompleted: true
      });
  }
  render() {
    const { isOpen } = this.props;
    return (
      <Modal isOpen={isOpen} className="after-login-modal">
        <ModalBody>
          <div className="container-fluid">
            {!this.state.firstStepSuccess ?
                <div className="after-login">
                <div className="after-login__heading">
                    <img src="../img/shiba-01.png" alt="Logo" className="after-login__img" />
                    <div className="after-login__title after-login__title--big">
                                    Welcome!
                    </div>
                    <div className="after-login__title">
                                    Last step before starting ...
                    </div>
                </div>                    
                <div className="after-login__content my-4">
                    <div className="after-login__types">
                    <div className="after-login__label mb-2">
                                        Type of place
                    </div>
                    <div className="after-login__types mb-2">
                        <Row>
                            <Col md="4" xs="12" className="mb-2">
                                <button type="submit" className={"after-login__type bid-btn" + (this.state.activePlace === "society" ? " bid-btn-dark" : "")} onClick={() => { this.handlePlaceChange("society"); }}>Society</button>
                            </Col>
                            <Col md="4" xs="12" className="p-md-0 mb-2">
                                <button type="submit" className={"after-login__type bid-btn" + (this.state.activePlace === "restaurant" ? " bid-btn-dark" : "")} onClick={() => { this.handlePlaceChange("restaurant"); }}>Restaurant</button>
                            </Col>
                            <Col md="4" xs="12">
                                <button type="submit" className={"after-login__type bid-btn" + (this.state.activePlace === "hotel" ? " bid-btn-dark" : "")} onClick={() => { this.handlePlaceChange("hotel"); }}>Hotel</button>
                            </Col>
                        </Row>
                    </div>
                    </div>
                    <div className="after-login__form">
                    {this.state.activePlace === "society" ?
                        <SocietyForm 
                                handleSubmitSuccess={this.handleSubmitSuccess}
                            />
                        : this.state.activePlace === "restaurant" ?
                        <RestaurantForm 
                                handleSubmitSuccess={this.handleSubmitSuccess}
                            />
                        : this.state.activePlace === "hotel" ?
                        <HotelForm 
                                handleSubmitSuccess={this.handleSubmitSuccess}
                            />
                        :
                            null
                        }
                    </div>
                </div>
                <div className="after-login__dots d-flex justify-content-center">
                    <span className="after-login__dot after-login__dot--active mr-2"></span>
                    <span className="after-login__dot"></span>
                </div>
                </div>
                    :
                <div className="after-login">
                <div className="after-login__heading">
                    <img src="../img/shiba-02-01.png" alt="Logo" className="after-login__img" />
                    <div className="after-login__title after-login__title--big">
                                    Great!
                    </div>
                    <div className="after-login__title">
                                    Start your first campaign.
                    </div>
                    <button onClick={this.handleModalComplete} className="after-login__submit bid-btn bid-btn-dark btn-block mt-4 mb-5">
                                    Continue on the dashboard
                    </button>
                    <div className="after-login__dots d-flex justify-content-center">
                    <span className="after-login__dot mr-2"></span>
                    <span className="after-login__dot after-login__dot--active"></span>
                    </div>
                </div>
                </div>
                    }
            </div>
        </ModalBody>
      </Modal>
    );
  }
}

AfterLogin.propTypes = {
    hide: PropTypes.func,
    isOpen: PropTypes.bool,
};

export default AfterLogin;