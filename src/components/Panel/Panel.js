import React, { Component } from "react";
import PropTypes from "prop-types";
import {
    Col,
} from "reactstrap";
import ReduxBlockUi from "react-block-ui/redux";

class Panel extends Component {
  static propTypes = {
    index: PropTypes.number,
    value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]),
    title: PropTypes.string,
  };
  render() {
    const { index, title, value } = this.props;
    return (
      <ReduxBlockUi tag="div" block="CAMPAIGN_ANALYTICS_KEY_DATA" unblock={["CAMPAIGN_ANALYTICS_KEY_DATA_FULFILLED", "CAMPAIGN_ANALYTICS_KEY_DATA_REJECTED"]}>
        <div className={"establishment-panel establishment-panel--" + index}>
          <h2>
            {value}
          </h2>
          <div className="clearfix"></div>
          <span>
            {title}
          </span>
        </div>
      </ReduxBlockUi>
    );
  }
}

export default Panel;
