import React, { Component } from "react";
import PropTypes from "prop-types";
import {
    Col,
} from "reactstrap";
import CountUp from "react-countup";
import ReduxBlockUi from "react-block-ui/redux";

class Panel extends Component {
  render() {
    const { index, title, value, currency = "", locked = false} = this.props;
    let decimals = 2;
    switch(index) {
      case 1: 
        decimals = 0;
        break;
      default:
        decimals = 2;
        break;
    }
    return (
      <ReduxBlockUi tag="div" block="CAMPAIGN_ANALYTICS_KEY_DATA" unblock={["CAMPAIGN_ANALYTICS_KEY_DATA_FULFILLED", "CAMPAIGN_ANALYTICS_KEY_DATA_REJECTED"]}>
        <div className={"stats-panel stats-panel--" + index}>
          {!locked ? 
            <h2 className="m-0">
              <CountUp start={0} end={value} duration={3} decimals={decimals} />
              <span className="currency">
                {" " + currency}
              </span>
            </h2> : 
            <img src="../img/lock.png" style={{width: "40px", height: "auto"}}/>
        }
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
    locked: PropTypes.bool,
};

export default Panel;
