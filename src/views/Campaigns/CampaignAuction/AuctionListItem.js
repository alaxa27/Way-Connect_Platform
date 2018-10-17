import React, {Component} from "react";
import * as FontAwesome from "react-icons/lib/fa";
import Eye from "./view.png";
import Cart from "./shopping_cart_ok.png";
import InputRange from "react-input-range";
import {translate} from "react-i18next";
import PropTypes from "prop-types";
import { formatDate } from "../../../services/DateFormatterService";

class AuctionListItem extends Component {
  render() {
    const { item, current, t } = this.props;
    return (
      <div className={"bids__item" + (current ? " bids__item--current" : "")}>
        <div className="bids__item-nr">
          <div>
            #{item.id}
          </div>
          <FontAwesome.FaStar/>
        </div>
        <div className="bids__item-body">
          <div className="bids__item-info">
            <div className="bids__item-title">
              <div className="bids__item-title--main">
                {item.company_name}
              </div>
              <div className="bids__item-title--sub">
                {t("campaignAuction.bid.title")} {formatDate(item.last_bid)}
              </div>
            </div>
            <div className="bids__item-box">
              <img src={Eye} alt="View"/>
              <span className="font-weight-bold mr-2">$</span>
              <span className="mr-2">
                {item.price}
              </span>
              <span className="line-through font-weight-bold">{t("campaignAuction.bid.wc")}</span>
            </div>
            <div className="bids__item-box">
              <img className="mr-2" src={Eye} alt="View"/>
              <span>
                {item.views}
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

AuctionListItem.propTypes = {
  item: PropTypes.object,
  index: PropTypes.number,
  t: PropTypes.func,
  current: PropTypes.bool
};

export default translate("translations")(AuctionListItem);
