import React, { Component } from 'react';
import {
    Col,
} from 'reactstrap';

class Panel extends Component {
  render() {
    return (
        <Col xs="12" sm="6" lg="3">
            <div className={"partner-panel partner-panel--" + this.props.index}>
                <h2>{this.props.value}</h2>
                <div className="clearfix"></div>
                <span>{this.props.title}</span>
            </div>
        </Col>
    )
  }
}

export default Panel;
