import React, {Component} from "react";
import InputRange from "react-input-range";
import {translate} from "react-i18next";
import PropTypes from "prop-types";
import {map} from "underscore";
import {
  Card,
  CardBody,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText
} from "reactstrap";
import ScrollArea from "react-scrollbar";
import {toggleCreditCampaignModal, bidCampaign} from "../../../actions/campaignActions";
import {connect} from "react-redux";
import {compose} from "recompose";
import ReduxBlockUi from "react-block-ui/redux";
import {formatDate} from "../../../services/DateFormatterService";
import NumberUp from "../../../components/NumberUp";
import Forbidden from "./Forbidden";

const mapStateToProps = store => ({campaign: store.campaign.campaign, bidHistory: store.campaign.bidHistory.items, minPrice: store.campaign.auction.data.min_price});

const mapDispatchToProps = dispatch => ({
  toggleCreditCampaignModal: () => dispatch(toggleCreditCampaignModal()),
  bidCampaign: (payload) => dispatch(bidCampaign(payload))
});

class NewAuction extends Component {

  constructor(props) {
    super(props);

    this.state = {
      bid: 0
    };
  }

  componentDidUpdate(prevProps) {
    if (this.props.campaign.price !== prevProps.campaign.price) {
      this.setState({bid: this.props.campaign.price});
    }
  }

  changeBid(value) {
    let regexValue = value.replace(/[^0-9.]/g, "").replace(/(\,.*)\,/g, "$1");
    this.setState({bid: regexValue});
  }

  _renderForbidden() {
    if (parseFloat(this.props.campaign.budget) > 0) {
      return (null);
    } else {
      return <Forbidden
        toggleCreditCampaignModal={this.props.toggleCreditCampaignModal}
      />;
    }
  }

  render() {
    const {
      bidCampaign,
      campaign,
      bidHistory,
      minPrice,
      t
    } = this.props;
    return (<Card className="bid">
      <CardBody className="p-0 d-flex flex-column">
        {this._renderForbidden.bind(this)()}
        <ReduxBlockUi tag="div" block="BID_HISTORY" unblock={["BID_HISTORY_FULFILLED", "BID_HISTORY_REJECTED"]}>
          <div className="bid__block bid__block--no-border d-flex flex-column p-3">
            <div className="bid__subtitle mb-3">
              {t("campaignAuction.bid.historyTitle")}
            </div>
            <ScrollArea speed={0.8} className="bid__history" contentClassName="p-2" horizontal={false}>
              {
                map(bidHistory, (item, key) => {
                  return (<div className={"bid__history-block"} key={key}>
                    <div className="bid__boxes bid__boxes--shadow">
                      <div className="bid__box bid__box--bordered p-3">
                        <i className="fa fa-user"></i>
                        <span className="bid__box-title mr-2">{t("campaignAuction.bid.concurrents")}</span>
                        <span className="font-weight-bold">
                          <NumberUp value={item.competitors} />
                        </span>
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
                        <span className="font-weight-bold">{item.price}
                          WC</span>
                      </div>
                    </div>
                  </div>);
                })
              }
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
              <span className="font-weight-bold">
                <NumberUp value={campaign.targeted_customers} />
              </span>
            </div>
            <div className="bid__box py-2">
              New price
            </div>
            <div className="bid__box bid__box--separated d-flex align-items-center justify-content-between">
              <div className="bid__box-wrapper">
                <i className="fa fa-usd"></i>
                <span className="mr-2">{t("campaignAuction.bid.minPrice")}</span>
              </div>
              <span className="font-weight-bold">{minPrice}
                WC</span>
            </div>
            <InputGroup className="bid__box bid__box--colored bid__box--new-bid">
              <Input className="bid__box bid__box--colored bid__box--new-bid text-center" type="text" name="newBid" value={this.state.bid} onChange={e => {
                  this.changeBid(e.target.value);
                }}/>
              <InputGroupAddon addonType="append">
                <InputGroupText>WC</InputGroupText>
              </InputGroupAddon>
            </InputGroup>
          </div>
        </div>
        <div className="bid__block p-3 bid__add d-flex align-items-center justify-content-end">

          <button className="bid-btn bid-btn--dark" onClick={() => {
              bidCampaign({campaignId: campaign.id, price: this.state.bid});
            }}>
            {t("campaignAuction.bid.bid")}
          </button>
        </div>
      </CardBody>
    </Card>);
  }
}

NewAuction.propTypes = {
  bidHistory: PropTypes.array,
  toggleCreditCampaignModal: PropTypes.func,
  bidCampaign: PropTypes.func,
  campaign: PropTypes.object,
  minPrice: PropTypes.string,
  t: PropTypes.func
};

export default compose(connect(mapStateToProps, mapDispatchToProps), translate("translations"))(NewAuction);
