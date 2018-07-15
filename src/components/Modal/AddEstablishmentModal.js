import React from "react";
import { Modal, Col, Row } from "reactstrap";
import PropTypes from "prop-types";
import RestaurantForm from "./RestaurantForm";
import HotelForm from "./HotelForm";

class AddEstablishmentModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        activePlace: "restaurant",
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
      const { toggleModal } = this.props;
      toggleModal();
      this.setState({
          modalCompleted: true
      });
  }
  render() {
    const { isOpen, toggleModal } = this.props;
    return (
      <Modal isOpen={isOpen} toggle={toggleModal} className="add-establishment-modal">
          <div className="container-fluid">
            {!this.state.firstStepSuccess ?
              <div className="modal-body">
                <div className="modal-body__heading">
                  <img src="../img/b1.png" alt="Logo" className="modal-body__img" />
                  <div className="modal-body__title modal-body__title--big mb-3">
                                    Welcome!
                  </div>
                  <div className="modal-body__title">
                                    Last step before starting ...
                  </div>
                </div>                    
                <div className="modal-body__content my-4">
                  <div className="modal-body__types">
                    <div className="modal-body__label mb-2">
                                        Type of place
                    </div>
                    <div className="modal-body__types mb-2">
                      <Row>
                        <Col md="6" xs="12" className="mb-2">
                          <button type="submit" className={"modal-body__type bid-btn" + (this.state.activePlace === "restaurant" ? " bid-btn-dark" : "")} onClick={() => { this.handlePlaceChange("restaurant"); }}>Restaurant</button>
                        </Col>
                        <Col md="6" xs="12">
                          <button type="submit" className={"modal-body__type bid-btn" + (this.state.activePlace === "hotel" ? " bid-btn-dark" : "")} onClick={() => { this.handlePlaceChange("hotel"); }}>Hotel</button>
                        </Col>
                      </Row>
                    </div>
                  </div>
                  <div className="modal-body__form">
                    {this.state.activePlace === "restaurant" ?
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
                <div className="modal-body__dots d-flex justify-content-center">
                  <span className="modal-body__dot modal-body__dot--active mr-2"></span>
                  <span className="modal-body__dot"></span>
                </div>
              </div>
                    :
              <div className="modal-body">
                <div className="modal-body__heading">
                  <img src="../img/b1.png" alt="Logo" className="modal-body__img" />
                  <div className="modal-body__title modal-body__title--big mb-3">
                                    Great!
                  </div>
                  <div className="modal-body__title">
                                    We will contact you and deliver you a Way-Box in the next 72h.
                  </div>
                  <button onClick={this.handleModalComplete} className="modal-body__submit bid-btn bid-btn-dark btn-block mt-4 mb-5">
                                    Continue on the dashboard
                  </button>
                  <div className="modal-body__dots d-flex justify-content-center">
                    <span className="modal-body__dot mr-2"></span>
                    <span className="modal-body__dot modal-body__dot--active"></span>
                  </div>
                </div>
              </div>
                    }
          </div>
      </Modal>
    );
  }
}

AddEstablishmentModal.propTypes = {
    hide: PropTypes.func,
    isOpen: PropTypes.bool,
};

export default AddEstablishmentModal;