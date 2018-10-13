import React, {Component} from "react";
import {Row, Col, Input} from "reactstrap";
import ErrorMessageService from "../../services/ErrorMessageService";
import PropTypes from "prop-types";

class TypologieList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...this.props,
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.errorMessageService = new ErrorMessageService();
  }

  handleInputChange(name, e) {
    this.setState({
        [name]: e.target.value
    });
  }

  handleBrandSelect = () => {
    this.setState(prevState => {
      return {
        communicationType: {
          ...prevState.communicationType,
          brand: true,
          product: false
        }
      };
    });
  }

  handleProductSelect = () => {
    this.setState(prevState => {
      return {
        communicationType: {
          ...prevState.communicationType,
          brand: false,
          product: true
        }
      };
    });
  }

  render() {
    const { validator } = this.props;
    return (
      <div className="typologie-list">
        <Row>
          <Col md="6" xs="12">
            <div className="input-wrapper">
              <label>The name of your campaign</label>
              <Input type="text" id="name" className="typologie-list__input" name="name" value={this.state.name} onChange={(e) => this.handleInputChange("name", e) }/>
              {validator.message("name", this.state.name, "required", "text-danger", {
                required: this.errorMessageService.generateErrorMessage("Name", "required"),
              })}
            </div>

            <div className="input-wrapper">
              <label>Type of communication</label>
              <div className="c-radio">
                <Input type="radio" className="c-radio__item" id="brand" name="brand" value="brand" checked={this.state.communicationType.brand} onClick={this.handleBrandSelect}/>
                <label htmlFor="brand" className="c-radio__label">Brand</label>
                <Input type="radio" className="c-radio__item" id="product" name="product" value="product" checked={this.state.communicationType.product} onClick={this.handleProductSelect}/>
                <label htmlFor="product" className="c-radio__label">Product</label>
              </div>
              {validator.message("communicationType", this.state.communicationType, "required|communicationType", "text-danger", {
                communicationType: this.errorMessageService.generateErrorMessage("Communication type", "required")
              })}
            </div>

            <div className="input-wrapper">
              <label>Name of the company</label>
              <Input type="text" id="companyName" className="typologie-list__input" name="companyName" value={this.state.companyName} onChange={(e) => this.handleInputChange("companyName", e) }/>
              {validator.message("companyName", this.state.companyName, "required", "text-danger", {
                required: this.errorMessageService.generateErrorMessage("Company name", "required"),
              })}
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

TypologieList.propTypes = {
  validator: PropTypes.object,
};

export default TypologieList;
