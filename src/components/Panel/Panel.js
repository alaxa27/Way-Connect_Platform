import React, { Component } from "react";
import PropTypes from "prop-types";
import {
    Col,
} from "reactstrap";

class Panel extends Component {
  static propTypes = {
    index: PropTypes.number,
    value: PropTypes.string,
    title: PropTypes.string,
  }
  render() {
    return (
      <Col xs="12" md="6" lg="3">
        <div className={"establishment-panel establishment-panel--" + this.props.index}>
          <h2>{this.props.value}</h2>
          <div className="clearfix"></div>
          <span>{this.props.title}</span>
        </div>
      </Col>
    );
  }
}

export default Panel;
