import React, { Component } from "react";
import PropTypes from "prop-types";
import {
    Col,
} from "reactstrap";
import CountUp from "react-countup";
import ReduxBlockUi from "react-block-ui/redux";

class Panel extends Component {
  static propTypes = {
    index: PropTypes.number,
    value: PropTypes.string,
    currency: PropTypes.string,
    title: PropTypes.string,
  };

  static defaultProps = {
    currency: ""
  }

  render() {
    const { index, title, value, currency } = this.props;
    return (
      <ReduxBlockUi tag="div" block="CAMPAIGN_ANALYTICS_KEY_DATA" unblock={["CAMPAIGN_ANALYTICS_KEY_DATA_FULFILLED", "CAMPAIGN_ANALYTICS_KEY_DATA_REJECTED"]}>
        <div className={"establishment-panel establishment-panel--" + index}>
          <h2>
            <CountUp start={0} end={value} duration={3} />
            {" " + currency}
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
