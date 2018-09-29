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
    return (
      <div className="typologie-list">
        <Row>
          <Col md="6" xs="12">
            <div className="input-wrapper">
              <label>The name of your campaign</label>
              <Input type="text" id="name" className="typologie-list__input" name="name" value={this.state.name} onChange={(e) => this.handleInputChange("name", e) }/>
            </div>

            <div className="input-wrapper">
              <label>Type of communication</label>
              <div className="c-radio">
                <Input type="radio" className="c-radio__item" id="brand" name="brand" value="brand" checked={this.state.communicationType.brand} onClick={this.handleBrandSelect}/>
                <label htmlFor="brand" className="c-radio__label">Brand</label>
                <Input type="radio" className="c-radio__item" id="product" name="product" value="product" checked={this.state.communicationType.product} onClick={this.handleProductSelect}/>
                <label htmlFor="product" className="c-radio__label">Product</label>
              </div>
            </div>

            <div className="input-wrapper">
              <label>Product description</label>
              <Input type="text" id="description" className="typologie-list__input" name="description" value={this.state.description} onChange={(e) => this.handleInputChange("description", e) }/>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

export default TypologieList;
