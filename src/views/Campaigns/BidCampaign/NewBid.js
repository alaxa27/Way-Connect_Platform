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

class NewBid extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bidValue: ""
    };
  }
  onBidChange = (value) => {
    this.setState({
      bidValue: value.replace(/[^0-9,]/g, "").replace(/(\,.*)\,/g, "$1")
    });
  }
  render() {
    const { history, t } = this.props;
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
                {t("bidCampaign.bid.notAvailable")}
              </div>
              <div className="bid__forbidden-action">
                <button className="bid-btn bid-btn--dark">
                  {t("bidCampaign.bid.creditCampaign")}
                </button>
              </div>
            </div>
          </div>
          <div className="bid__block bid__block--no-border bid__block--auto d-flex flex-column p-3">
            <div className="bid__subtitle mb-3">
              {t("bidCampaign.bid.historyTitle")}
            </div>
            <div className="bid__history p-2">
              {map(history, (item, i) => {
                  return (
                    <div className={"bid__history-block"} key={i}>
                      <div className="bid__boxes bid__boxes--shadow">
                        <div className="bid__box bid__box--bordered p-3">
                          <i className="fa fa-user"></i>
                          <span className="bid__box-title mr-2">{t("bidCampaign.bid.concurrents")}</span>
                          <span className="font-weight-bold">122</span>
                        </div>
                        <div className="bid__box bid__box--bordered p-3">
                          <i className="fa fa-clock-o mr-2"></i>
                          <span className="bid__box-title mr-2">{t("bidCampaign.bid.from")}</span>
                          <span className="w-100 text-right">26/05/2018 18:22</span>
                        </div>
                        <div className="bid__box w-100 d-flex align-items-center justify-content-between p-3">
                          <div className="bid__box-wrapper">
                            <i className="fa fa-usd"></i>
                            <span className="bid__box-title mr-2">{t("bidCampaign.bid.maxPrice")}</span>
                          </div>
                          <span className="font-weight-bold">4,5 WC</span>
                        </div>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
          <div className="bid__block px-3 pb-3">
              
            <div className="bid__boxes">
              <div className="bid__box bid__box--bordered bid__box--separated d-flex align-items-center justify-content-between">
                <div className="bid__box-wrapper">
                  <i className="fa fa-user"></i>
                  <span className="mr-2">{t("bidCampaign.bid.targetUsers")}</span>
                </div>
                <span className="font-weight-bold">700</span>
              </div>
              <div className="bid__box py-2">
                  New price
              </div>
              <div className="bid__box bid__box--separated d-flex align-items-center justify-content-between">
                <div className="bid__box-wrapper">
                  <i className="fa fa-usd"></i>
                  <span className="mr-2">{t("bidCampaign.bid.minPrice")}</span>
                </div>
                <span className="font-weight-bold">4,5 WC</span>
              </div>
              <Input className="bid__box bid__box--colored bid__box--new-bid text-center" type="text" name="newBid" value={this.state.bidValue} onChange={e => { this.onBidChange(e.target.value); }}/>
            </div>
            
          </div>
          <div className="bid__block p-3 bid__add d-flex align-items-center justify-content-end">
            <button className="bid-btn bid-btn--dark">
              {t("bidCampaign.bid.bid")}
            </button>
          </div>
        </CardBody>
      </Card>
    );
  }
}

NewBid.propTypes = {
  history: PropTypes.array,
  t: PropTypes.func
};

export default translate("translations")(NewBid);
