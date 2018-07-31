import React, {Component} from "react";
import {translate} from "react-i18next";
import PropTypes from "prop-types";

class BidMeta extends Component {
  render() {
    const { t } = this.props;
    return (
      <div className="time-stats my-2">
        <div className="time-stats__elapsed mr-3 d-inline-block">
          <span className="time-stats__type mr-2">
            {t("bidCampaign.bid.timeElapsed")}
          </span>
          <span className="time-stats__value">
            10d 11h 12m 13s
          </span>
        </div>
        <div className="time-stats__remaining d-inline-block">
          <span className="time-stats__type mr-2">
            {t("bidCampaign.bid.timeRemaining")}
          </span>
          <span className="time-stats__value">
            00d 11h 12m 13s
          </span>
        </div>
      </div>
    );
  }
}

BidMeta.propTypes = {
  t: PropTypes.func
};

export default translate("translations")(BidMeta);
