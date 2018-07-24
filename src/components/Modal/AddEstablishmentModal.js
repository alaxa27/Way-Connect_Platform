import React from "react";
import { Modal, Col, Row } from "reactstrap";
import PropTypes from "prop-types";
import RestaurantForm from "./RestaurantForm";
import HotelForm from "./HotelForm";
import * as establishmentActions from "../../actions/establishmentActions";
import {connect} from "react-redux";
import {translate} from "react-i18next";
import {compose} from "recompose";

const mapStateToProps = state => ({
  addEstablishmentError: state.establishment.addEstablishmentError,
  addEstablishmentSuccess: state.establishment.addEstablishmentSuccess,
  activeType: state.establishment.addEstablishmentActiveType
});

const mapDispatchToProps = dispatch => ({
  addEstablishment: payload => dispatch(establishmentActions.addEstablishment(payload)),
  changePlace: payload => dispatch(establishmentActions.changePlace(payload))
});

class AddEstablishmentModal extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmitSuccess = this.handleSubmitSuccess.bind(this);
  }
  handleSubmitSuccess(formState) {
    const { addEstablishment, activeType } = this.props;
    addEstablishment({...formState, establishmentType: activeType});
  }
  render() {
    const { isOpen, toggleModal, addEstablishmentError, addEstablishmentSuccess, changePlace, activeType, t } = this.props;
    return (
      <Modal isOpen={isOpen} toggle={toggleModal} className="add-establishment-modal">
        <div className="container-fluid">
          {!addEstablishmentSuccess ?
            <div className="modal-body">
              <div className="modal-body__heading">
                <img src="../img/b1.png" alt="Logo" className="modal-body__img" />
                <div className="modal-body__title modal-body__title--big mb-3">
                  {t('addEstablishment.step1.title')}
                </div>
                <div className="modal-body__title">
                  {t('addEstablishment.step1.subtitle')}
                </div>
              </div>                    
              <div className="modal-body__content my-4">
                <div className="modal-body__types">
                  <div className="modal-body__label mb-2">
                    {t('addEstablishment.step1.placeType.title')}
                  </div>
                  <div className="modal-body__types mb-2">
                    <Row>
                      <Col md="6" xs="12" className="mb-2">
                        <button type="submit" className={"modal-body__type bid-btn" + (activeType === "restaurant" ? " bid-btn-dark" : "")} onClick={() => { changePlace("restaurant"); }}>{t('addEstablishment.step1.placeType.restaurant')}</button>
                      </Col>
                      <Col md="6" xs="12">
                        <button type="submit" className={"modal-body__type bid-btn" + (activeType === "hotel" ? " bid-btn-dark" : "")} onClick={() => { changePlace("hotel"); }}>{t('addEstablishment.step1.placeType.hotel')}</button>
                      </Col>
                    </Row>
                  </div>
                </div>
                <div className="modal-body__form">
                  {activeType=== "restaurant" ?
                    <RestaurantForm 
                                handleSubmitSuccess={this.handleSubmitSuccess}
                                error={addEstablishmentError.restaurant}
                            />
                        : activeType === "hotel" ?
                          <HotelForm 
                                handleSubmitSuccess={this.handleSubmitSuccess}
                                error={addEstablishmentError.hotel}
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
                {t('addEstablishment.step2.title')}
                </div>
                <div className="modal-body__title">
                {t('addEstablishment.step2.subtitle')}
                </div>
                <button onClick={toggleModal} className="modal-body__submit bid-btn bid-btn-dark btn-block mt-4 mb-5">
                {t('addEstablishment.step1.subtitle')}
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
    toggleModal: PropTypes.func,
    isOpen: PropTypes.bool,
    addEstablishmentError: PropTypes.object,
    addEstablishmentSuccess: PropTypes.bool,
    addEstablishment: PropTypes.func,
    changePlace: PropTypes.func,
    activeType: PropTypes.string,
    t: PropTypes.func
};

export default compose(connect(mapStateToProps, mapDispatchToProps), translate("translations"))(AddEstablishmentModal);
