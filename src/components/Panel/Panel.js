import React, { Component } from "react";
import PropTypes from "prop-types";
import {
    Col,
} from "reactstrap";
import CountUp from "react-countup";
import ReduxBlockUi from "react-block-ui/redux";

class Panel extends Component {
  render() {
    const { index, title, value, currency = "" } = this.props;
    return (
      <ReduxBlockUi tag="div" block="CAMPAIGN_ANALYTICS_KEY_DATA" unblock={["CAMPAIGN_ANALYTICS_KEY_DATA_FULFILLED", "CAMPAIGN_ANALYTICS_KEY_DATA_REJECTED"]}>
        <div className={"stats-panel stats-panel--" + index}>
          <h2>
            <CountUp start={0} end={value} duration={3} />
            <span className="currency">
              {" " + currency}
            </span>
          </h2>
          <div className="clearfix"></div>
          <span className="title">
            {title}
          </span>
        </div>
      </ReduxBlockUi>
    );
  }
}

Panel.propTypes = {
    index: PropTypes.number,
    value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]),
    currency: PropTypes.string,
    title: PropTypes.string,
};

export default Panel;
