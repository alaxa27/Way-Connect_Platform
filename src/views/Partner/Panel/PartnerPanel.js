import React, { Component } from 'react';
import {
    Col,
} from 'reactstrap';

class PartnerPanel extends Component {
  render() {
    const { index } = this.props;
    return (
        <Col xs="12" sm="6" lg="3">
            <div className={"partner-panel partner-panel--" + index}>
                <h2>82%</h2>
                <div className="clearfix"></div>
                <span>Confirmed targeting</span>
            </div>
        </Col>
    )
  }
}

export default PartnerPanel;
