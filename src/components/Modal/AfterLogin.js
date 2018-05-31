import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import ValidatorService from "../../services/ValidatorService";
import ErrorMessageService from "../../services/ErrorMessageService";
import { Redirect } from "react-router-dom";

class AfterLogin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        activePlace: 'society',
        activityArea: null,
        name: null,
        address: null,
        firstStepSuccess: false,
        modalCompleted: false
    };
    this.validator = new ValidatorService().getValidator();
    this.errorMessageService = new ErrorMessageService();
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleModalComplete = this.handleModalComplete.bind(this);
  }
  handleInputChange(name, e) {
    this.setState({
        [name]: e.target.value
    });
  }
  handleSubmit(e) {
    e.preventDefault();

    if(this.validator.allValid() ){
        this.handleSubmitSuccess();
    } else {
        this.validator.showMessages();
        this.forceUpdate();
    }
  }
  handlePlaceChange(name) {
    this.setState({
        activePlace: name
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
        <Modal isOpen={isOpen}>
            <ModalBody>
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
                                <div className="after-login__types d-flex justify-content-between mb-2">
                                    <button type="submit" className={"after-login__type bid-btn" + (this.state.activePlace === 'society' ? " bid-btn-dark" : "")} onClick={() => { this.handlePlaceChange('society') }}>Society</button>
                                    <button type="submit" className={"after-login__type bid-btn mx-2" + (this.state.activePlace === 'restaurant' ? " bid-btn-dark" : "")} onClick={() => { this.handlePlaceChange('restaurant') }}>Restaurant</button>
                                    <button type="submit" className={"after-login__type bid-btn" + (this.state.activePlace === 'hotel' ? " bid-btn-dark" : "")} onClick={() => { this.handlePlaceChange('hotel') }}>Hotel</button>
                                </div>
                            </div>
                            <div className="after-login__form">
                                <form onSubmit={this.handleSubmit}>
                                    {this.state.activePlace === 'society' ?
                                        <div className="after-login__group mb-2">
                                            <div className="after-login__label mb-2">
                                                Activity area
                                            </div>
                                            <input type="text" className="w-100 py-1 px-3" name="activityArea" placeholder="Activity area" onChange={(e) => this.handleInputChange("activityArea", e)}/>
                                            {this.validator.message("activityArea", this.state.activityArea, "required", "text-danger activityArea-error", {
                                                required: this.errorMessageService.generateErrorMessage("Activity Area", "required")
                                            })}
                                        </div>
                                    :
                                        null
                                    }
                                    <div className="after-login__group mb-2">
                                        <div className="after-login__label mb-2">
                                            Name
                                        </div>
                                        <input type="text" className="w-100 py-1 px-3" name="name" placeholder="Name" onChange={(e) => this.handleInputChange("name", e)}/>
                                        {this.validator.message("name", this.state.activityArea, "required", "text-danger name-error", {
                                            required: this.errorMessageService.generateErrorMessage("Name", "required")
                                        })}
                                    </div>
                                    <div className="after-login__group mb-4">
                                        <div className="after-login__label mb-2">
                                            Address
                                        </div>
                                        <input type="text" className="w-100 py-1 px-3" name="address" placeholder="Address" onChange={(e) => this.handleInputChange("address", e)}/>
                                        {this.validator.message("address", this.state.activityArea, "required", "text-danger address-error", {
                                            required: this.errorMessageService.generateErrorMessage("Address", "required")
                                        })}
                                    </div>                                
                                    <button type="submit" className="after-login__submit bid-btn bid-btn-dark">
                                        Let's start
                                    </button>
                                </form>
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
            </ModalBody>
        </Modal>
    );
  }
}

export default AfterLogin;