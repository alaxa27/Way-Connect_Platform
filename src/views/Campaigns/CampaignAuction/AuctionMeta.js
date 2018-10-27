import React, {Component} from "react";
import {translate} from "react-i18next";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {compose} from "recompose";
import moment from "moment";
import { Link } from "react-router-dom";

const mapStateToProps = state => ({
  campaign: state.campaign.campaign,
  competitors: state.campaign.auction.data.competitors,
});

class AuctionMeta extends Component {
  render() {
    const { campaign, competitors, t } = this.props;
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
            {competitors}
          </span>
        </div>
        <div className="bid-meta__views mr-3 d-inline-block">
          <span className="bid-meta__type mr-2">
            Views:
          </span>
          <span className="bid-meta__value">
            {campaign.views}
          </span>
        </div>
        <div className="bid-meta__analytics d-inline-block">
          <Link to={`/campaigns/${campaign.id}/analytics`} className="bid-btn bid-btn--orange d-block">Analytics</Link>
        </div>
      </div>
    );
  }
}

AuctionMeta.propTypes = {
  t: PropTypes.func,
  campaign: PropTypes.object,
  competitors: PropTypes.number,
};

export default compose(connect(mapStateToProps, null), translate("translations"))(AuctionMeta);
