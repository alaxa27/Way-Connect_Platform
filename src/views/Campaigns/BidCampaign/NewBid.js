import React, {Component} from "react";
import InputRange from "react-input-range";
import {translate} from "react-i18next";
import PropTypes from "prop-types";
import { map } from "underscore";

class NewBid extends Component {
  render() {
    const { history, t } = this.props;
    return (
      <div className="bid">
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
        <div className="bid__block px-3 pt-3 pb-2">
          <div className="bid__title mb-3">
            {t("bidCampaign.bid.bid")}
          </div>
          <div className="bid__boxes">
            <div className="bid__box bid__box--bordered pb-2">
              <i className="fa fa-user mr-2"></i>
              <span className="bid__box-title mr-2">{t("bidCampaign.bid.users")}</span>
              <span className="font-weight-bold">122</span>
            </div>
            <div className="bid__box bid__box--bordered pb-2">
              <i className="fa fa-clock-o mr-2"></i>
              <span className="bid__box-title mr-2">{t("bidCampaign.bid.currentTime")}</span>
              <span className="font-weight-bold">26/05/2018 18:22</span>
            </div>
            <div className="bid__box pt-2">
              <i className="fa fa-usd mr-2"></i>
              <span className="bid__box-title mr-2">{t("bidCampaign.bid.averagePrice")}</span>
              <span className="font-weight-bold">4,5 WC</span>
            </div>
            <div className="bid__box pt-2">
              <i className="fa fa-line-chart mr-2"></i>
              <span className="bid__box-title mr-2">{t("bidCampaign.bid.boost")}</span>
              <span className="font-weight-bold">(+15%)</span>
            </div>
          </div>
        </div>
        <div className="bid__block p-3">
          <div className="bid__subtitle mb-3">
            {t("bidCampaign.bid.historyTitle")}
          </div>
          <div className="bid__history p-2">
            {map(history, (item, i) => {
              return (
                <div className={"bid__history-block"} key={i}>
                  <div className="bid__boxes">
                    <div className="bid__box bid__box--bordered p-2">
                      <i className="fa fa-user mr-2"></i>
                      <span className="bid__box-title mr-2">{t("bidCampaign.bid.users")}</span>
                      <span className="font-weight-bold">122</span>
                    </div>
                    <div className="bid__box bid__box--bordered p-2">
                      <i className="fa fa-clock-o mr-2"></i>
                      <span className="bid__box-title mr-2">{t("bidCampaign.bid.currentTime")}</span>
                      <span className="font-weight-bold">26/05/2018 18:22</span>
                    </div>
                    <div className="bid__box p-2">
                      <i className="fa fa-usd mr-2"></i>
                      <span className="bid__box-title mr-2">{t("bidCampaign.bid.averagePrice")}</span>
                      <span className="font-weight-bold">4,5 WC</span>
                    </div>
                    <div className="bid__box p-2">
                      <i className="fa fa-line-chart mr-2"></i>
                      <span className="bid__box-title mr-2">{t("bidCampaign.bid.boost")}</span>
                      <span className="font-weight-bold">(+15%)</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="bid__block p-3">
          <div className="bid__subtitle mb-3">
            {t("bidCampaign.bid.boost")}
          </div>
          <div className="bid__boost mb-3">
            <InputRange maxValue={100} minValue={0} value={15} formatLabel={value => `${value} %`} onChange={(val) => {console.log(val);}}/>
          </div>
        </div>
        <div className="bid__block p-3">
          <div className="bid__add d-flex align-items-center justify-content-between">
            <div className="d-flex align-items-center">
              <i className="fa fa-usd mr-3"></i>
              <div className="bid__average-price">
                <div>{t("bidCampaign.bid.averagePrice")}</div>
                <div className="bid__average-price-value font-weight-bold">122 {t("bidCampaign.bid.wc")}</div>
              </div>
            </div>
            <button className="bid-btn bid-btn--dark">
              {t("bidCampaign.bid.boostAction")}
            </button>
          </div>
        </div>
      </div>
    );
  }
}

NewBid.propTypes = {
  history: PropTypes.array,
  t: PropTypes.func
};

export default translate("translations")(NewBid);
