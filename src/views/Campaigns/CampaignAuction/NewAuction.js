import React, {Component} from "react";
import InputRange from "react-input-range";
import {translate} from "react-i18next";
import PropTypes from "prop-types";
import { map } from "underscore";
import {
  Card,
  CardBody,
} from "reactstrap";
import ScrollArea from "react-scrollbar";
import { Input } from "reactstrap";
import { toggleCreditCampaignModal, bidCampaign, changeBid } from "../../../actions/campaignActions";
import {connect} from "react-redux";
import {compose} from "recompose";
import { Alert } from "reactstrap";
import ReduxBlockUi from "react-block-ui/redux";
import { formatDate } from "../../../services/DateFormatterService";

const mapStateToProps = state => ({
  campaign: state.campaign.campaign,
  bid: state.campaign.bid,
  bidHistory: state.campaign.bidHistory.items,
});

const mapDispatchToProps = dispatch => ({
  toggleCreditCampaignModal: () => dispatch(toggleCreditCampaignModal()),
  bidCampaign: (payload) => dispatch(bidCampaign(payload)),
  changeBid: (payload) => dispatch(changeBid(payload)),
});

class NewAuction extends Component {
  render() {
    const { bidCampaign, campaign, toggleCreditCampaignModal, changeBid, bid, bidHistory, t } = this.props;
    return (
      <Card className="bid">
        <CardBody className="p-0 d-flex flex-column">
          <div className="bid__forbidden p-3 d-none">
            <div className="bid__forbidden-wrapper"></div>
            <div className="bid__forbidden-info">
              <div className="bid__forbidden-icon mb-3">
                <i className="fa fa-exclamation-triangle" aria-hidden="true"></i>
              </div>
              <div className="bid__forbidden-title mb-5">
                {t("campaignAuction.bid.notAvailable")}
              </div>
              <div className="bid__forbidden-action">
                <button className="bid-btn bid-btn--dark" onClick={() => { toggleCreditCampaignModal(); }}>
                  {t("campaignAuction.bid.creditCampaign")}
                </button>
              </div>
            </div>
          </div>
          <ReduxBlockUi tag="div" block="BID_HISTORY" unblock={["BID_HISTORY_FULFILLED", "BID_HISTORY_REJECTED"]}>
            <div className="bid__block bid__block--no-border d-flex flex-column p-3">
              <div className="bid__subtitle mb-3">
                {t("campaignAuction.bid.historyTitle")}
              </div>
              <ScrollArea
                speed={0.8}
                className="bid__history"
                contentClassName="p-2"
                horizontal={false}
              >
                {map(bidHistory, (item, i) => {
                    return (
                      <div className={"bid__history-block"} key={item.id}>
                        <div className="bid__boxes bid__boxes--shadow">
                          <div className="bid__box bid__box--bordered p-3">
                            <i className="fa fa-user"></i>
                            <span className="bid__box-title mr-2">{t("campaignAuction.bid.concurrents")}</span>
                            <span className="font-weight-bold">{item.competitors}</span>
                          </div>
                          <div className="bid__box bid__box--bordered p-3">
                            <i className="fa fa-clock-o mr-2"></i>
                            <span className="bid__box-title mr-2">{t("campaignAuction.bid.from")}</span>
                            <span className="w-100 text-right">{formatDate(item.created_at)}</span>
                          </div>
                          <div className="bid__box w-100 d-flex align-items-center justify-content-between p-3">
                            <div className="bid__box-wrapper">
                              <i className="fa fa-usd"></i>
                              <span className="bid__box-title mr-2">{t("campaignAuction.bid.maxPrice")}</span>
                            </div>
                            <span className="font-weight-bold">{item.price} WC</span>
                          </div>
                        </div>
                      </div>
                    );
                  })}
              </ScrollArea>
            </div>
          </ReduxBlockUi>
          <div className="bid__block px-3 pb-3">
              
            <div className="bid__boxes">
              <div className="bid__box bid__box--bordered bid__box--separated d-flex align-items-center justify-content-between">
                <div className="bid__box-wrapper">
                  <i className="fa fa-user"></i>
                  <span className="mr-2">{t("campaignAuction.bid.targetUsers")}</span>
                </div>
                <span className="font-weight-bold">700</span>
              </div>
              <div className="bid__box py-2">
                  New price
              </div>
              <div className="bid__box bid__box--separated d-flex align-items-center justify-content-between">
                <div className="bid__box-wrapper">
                  <i className="fa fa-usd"></i>
                  <span className="mr-2">{t("campaignAuction.bid.minPrice")}</span>
                </div>
                <span className="font-weight-bold">4,5 WC</span>
              </div>
              <Input className="bid__box bid__box--colored bid__box--new-bid text-center" type="text" name="newBid" value={bid} onChange={e => { changeBid(e.target.value); }}/>
            </div>
            
          </div>
          <div className="bid__block p-3 bid__add d-flex align-items-center justify-content-end">
            <button className="bid-btn bid-btn--dark" onClick={() => { bidCampaign({campaignId: campaign.id, price: bid});} }>
              {t("campaignAuction.bid.bid")}
            </button>
          </div>
        </CardBody>
      </Card>
    );
  }
}

NewAuction.propTypes = {
  bidHistory: PropTypes.array,
  toggleCreditCampaignModal: PropTypes.func,
  bidCampaign: PropTypes.func,
  campaign: PropTypes.object,
  changeBid: PropTypes.func,
  bid: PropTypes.number,
  t: PropTypes.func,
};

export default compose(connect(mapStateToProps, mapDispatchToProps), translate("translations"))(NewAuction);
