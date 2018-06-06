import React, {Component} from "react";
import PropTypes from "prop-types";
import {Row, Col, Input} from "reactstrap";
import InputRange from "react-input-range";
import "react-input-range/lib/css/index.css";

class TypologieList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...this.props,
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleRadioChange = this.handleRadioChange.bind(this);
  }

  handleInputChange(name, e) {
    this.setState({
        [name]: e.target.value
    });
  }

  handleRadioChange(name) {
    this.setState(prevState => ({
      communicationType: {
          ...prevState.communicationType,
          [name]: !prevState.communicationType[name]
      }
    }));
  }

  render() {
    return (
      <div className="typologie-list">
        <Row>
          <Col md="6" xs="12">
            <div className="input-wrapper">
              <label className="input-label">The name of your campaign</label>
              <Input type="text" id="name" className="create-campaign-input" name="name" value={this.state.name} onChange={(e) => this.handleInputChange("name", e) }/>
            </div>

            <div className="input-wrapper">
              <label className="input-label">Type of communication</label>
              <div className="radio-buttons-container">
                <Input type="radio" id="brand" name="brand" value="brand" checked={this.state.communicationType.brand} onClick={() => this.handleRadioChange("brand") }/>
                <label htmlFor="brand" className="pull-left">Brand</label>
                <Input type="radio" id="product" name="product" value="product" checked={this.state.communicationType.product} onClick={() => this.handleRadioChange("product") }/>
                <label htmlFor="product" className="pull-right">Product</label>
                <div className="clearfix"></div>
              </div>
            </div>

            <div className="input-wrapper">
              <label className="input-label">Product description</label>
              <Input type="text" id="description" className="create-campaign-input" name="description" value={this.state.description} onChange={(e) => this.handleInputChange("description", e) }/>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

export default TypologieList;
