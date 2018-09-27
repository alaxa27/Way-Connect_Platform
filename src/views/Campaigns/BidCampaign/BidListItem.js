import React, {Component} from "react";
import * as FontAwesome from "react-icons/lib/fa";
import Eye from "./view.png";
import Cart from "./shopping_cart_ok.png";
import InputRange from "react-input-range";
import {translate} from "react-i18next";
import PropTypes from "prop-types";

class BidListItem extends Component {
  render() {
    const { item, index, t } = this.props;
    return (
      <div className={"bids__item" + (index === 4 ? " active": "")} key={index}>
        <div className="bids__item-nr">
          <div>
            #{item.rank}
          </div>
          <FontAwesome.FaStar/>
        </div>
        <div className="bids__item-body">
          <div className="bids__item-info">
            <div className="bids__item-title">
              <div className="bids__item-title--main">
                {item.name}
              </div>
              <div className="bids__item-title--sub">
                {t("bidCampaign.bid.title")} {item.lastBid}
              </div>
            </div>
            <div className="bids__item-box">
              <img src={Eye} alt="View"/>
              <span className="font-weight-bold mr-2">$</span>
              <span className="mr-2">
                {item.bid}
              </span>
              <span className="line-through font-weight-bold">{t("bidCampaign.bid.wc")}</span>
            </div>
            <div className="bids__item-box">
              <img className="mr-2" src={Eye} alt="View"/>
              <span>
                {item.cart}
              </span>
            </div>
            <div className="bids__item-box">
            </div>
          </div>
          <div className="bids__item-progress">
            <div className="bid-progress-bar mr-3">
              <InputRange maxValue={100} minValue={0} value={70} disabled={true} onChange={(val) => {console.log(val);}} />
            </div>
            <div className="bids__item-progress-value">
              70%
            </div>
          </div>
        </div>
      </div>  
    );
  }
}

BidListItem.propTypes = {
  item: PropTypes.object,
  index: PropTypes.number,
  t: PropTypes.func
};

export default translate("translations")(BidListItem);
