import React from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import ValidatorService from "../../services/ValidatorService";
import ErrorMessageService from "../../services/ErrorMessageService";
import { Redirect } from "react-router-dom";
import PropTypes from "prop-types";

class RestaurantForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        name: null,
        phone: null,
        address: null,
    };
    this.validator = new ValidatorService().getValidator();
    this.errorMessageService = new ErrorMessageService();
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleInputChange(name, e) {
    this.setState({
        [name]: e.target.value
    });
  }
  handleSubmit(e) {
    e.preventDefault();
    const { handleSubmitSuccess } = this.props;
    if(this.validator.allValid()){
        handleSubmitSuccess();
    } else {
        this.validator.showMessages();
        this.forceUpdate();
    }
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="modal-body__group mb-2">
          <div className="modal-body__label mb-2">
                    Name
          </div>
          <input type="text" className="w-100 py-1 px-3" name="name" placeholder="Name" onChange={(e) => this.handleInputChange("name", e)}/>
          {this.validator.message("name", this.state.name, "required", "text-danger name-error", {
                        required: this.errorMessageService.generateErrorMessage("Name", "required")
                    })}
        </div>
        <div className="modal-body__group mb-2">
          <div className="modal-body__label mb-2">
                    Phone
          </div>
          <input type="text" className="w-100 py-1 px-3" name="phone" placeholder="Phone" onChange={(e) => this.handleInputChange("phone", e)}/>
          {this.validator.message("phone", this.state.phone, "required", "text-danger phone-error", {
                        required: this.errorMessageService.generateErrorMessage("Phone", "required")
                    })}
        </div>
        <div className="modal-body__group mb-4">
          <div className="modal-body__label mb-2">
                    Address
          </div>
          <input type="text" className="w-100 py-1 px-3" name="address" placeholder="Address" onChange={(e) => this.handleInputChange("address", e)}/>
          {this.validator.message("address", this.state.address, "required", "text-danger address-error", {
                    required: this.errorMessageService.generateErrorMessage("Address", "required")
                })}
        </div>
        <button className="modal-body__submit bid-btn bid-btn-dark">
                Lets start
        </button>
      </form>
    );
  }
}

RestaurantForm.propTypes = {
    handleSubmitSuccess: PropTypes.func
};

export default RestaurantForm;