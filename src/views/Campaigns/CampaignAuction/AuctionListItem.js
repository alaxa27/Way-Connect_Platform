import React, {Component} from "react";
import * as FontAwesome from "react-icons/lib/fa";
import Eye from "./view.png";
import {Progress} from "reactstrap";
import {translate} from "react-i18next";
import PropTypes from "prop-types";
import {formatDate} from "../../../services/DateFormatterService";
import NumberUp from "../../../components/NumberUp";

class AuctionListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      averageRank: 0
    };

  }

  componentDidMount() {
    let averageRank = this.props.item.average_rank;
    if (averageRank !== 0) {
      averageRank = Math.ceil((1 / averageRank) * 100);
    } else {
      averageRank = 100;
    }
    setTimeout(() => {
        this.setState({averageRank});
      }, 1000);
  }
  render() {
    const {item, current, t} = this.props;
    return (<div className={"bids__item" + (
        current
        ? " bids__item--current"
        : "")}>
      <div className="bids__item-nr">
        <div>
          {this.props.index}
        </div>
        {
          (
            this.props.index === 1
            ? <FontAwesome.FaStar/>
            : null)
        }
      </div>
      <div className="bids__item-body">
        <div className="bids__item-info">
          <div className="bids__item-title">
            <div className="bids__item-title--main">
              {item.company_name}
            </div>
            <div className="bids__item-title--sub">
              {t("campaignAuction.bid.title") + " "}
              {formatDate(item.last_bid)}
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
              <NumberUp value={item.views}/>
            </span>
          </div>
          <div className="bids__item-box"></div>
        </div>
        <div className="bids__item-progress">
          <div className="bid-progress-bar mr-3">
            <Progress className="bid-progress-bar__progress" value={this.state.averageRank}/>
          </div>
          <div className="bids__item-progress-value">
            <NumberUp value={this.state.averageRank}/>
            {"%"}
          </div>
        </div>
      </div>
    </div>);
  }
}

AuctionListItem.propTypes = {
  item: PropTypes.object,
  index: PropTypes.number,
  t: PropTypes.func,
  current: PropTypes.bool
};

export default translate("translations")(AuctionListItem);
