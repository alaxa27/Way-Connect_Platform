import React, {Component} from "react";
import {translate} from "react-i18next";
import PropTypes from "prop-types";

class BidMeta extends Component {
  render() {
    const { t } = this.props;
    return (
      <div className="bid-meta my-2">
        <div className="bid-meta__elapsed mr-3 d-inline-block">
          <span className="bid-meta__type mr-2">
            {t("bidCampaign.bid.timeElapsed")}:
          </span>
          <span className="bid-meta__value">
            10d 11h 12m 13s
          </span>
        </div>
        <div className="bid-meta__concurrents mr-3 d-inline-block">
          <span className="bid-meta__type mr-2">
            Concurrents:
          </span>
          <span className="bid-meta__value">
            122
          </span>
        </div>
        <div className="bid-meta__views d-inline-block">
          <span className="bid-meta__type mr-2">
            Views:
          </span>
          <span className="bid-meta__value">
            700
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
