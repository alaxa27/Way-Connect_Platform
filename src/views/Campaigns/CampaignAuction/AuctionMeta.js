import React, {Component} from "react";
import {translate} from "react-i18next";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {compose} from "recompose";
import moment from "moment";

const mapStateToProps = state => ({
  campaign: state.campaign.campaign,
});

class AuctionMeta extends Component {
  render() {
    const { campaign, t } = this.props;
    const createdAt = moment(campaign.created_at);
    const now = moment();
    
    const diff = moment.duration(now.diff(createdAt));

    const days = diff.days();
    const hours = diff.hours();
    const minutes = diff.minutes();
    const seconds = diff.seconds();

    return (
      <div className="bid-meta my-2">
        <div className="bid-meta__elapsed mr-3 d-inline-block">
          <span className="bid-meta__type mr-2">
            {t("campaignAuction.bid.timeElapsed")}:
          </span>
          <span className="bid-meta__value">
            {days}d {hours}h {minutes}m {seconds}s
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

AuctionMeta.propTypes = {
  t: PropTypes.func,
  campaign: PropTypes.object,
};

export default compose(connect(mapStateToProps, null), translate("translations"))(AuctionMeta);
