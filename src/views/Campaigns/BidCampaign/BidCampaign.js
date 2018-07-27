import React, {Component} from "react";
import * as FontAwesome from "react-icons/lib/fa";
import {Container, Row, Col, Button, Input} from "reactstrap";
import Eye from "./view.png";
import Cart from "./shopping_cart_ok.png";
import InputRange from "react-input-range";
import "react-input-range/lib/css/index.css";
import {translate} from "react-i18next";
import PropTypes from "prop-types";
import { map } from "underscore";

class BidCampaign extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 30,
      period: 1,
      number: 78,
      bidWrap: false
    };
    this.toggleBid = this.toggleBid.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.hit = this.hit.bind(this);
  }

  hit() {
    this.setState({bidWrap: false});
  }

  handleInputChange(event) {
    this.setState({gender: event.target.value});
  }

  handleChange(event) {
    const data = event.target;
    const value = data.value;
    const name = data.name;
    this.setState({[name]: value});
  }

  toggleBid() {
    this.setState({
      bidWrap: !this.state.bidWrap
    });
  }

  render() {
    const { t } = this.props;
    const data = [
      {
        rank: 1,
        name: "Teads.tv",
        lastBid: "18:22",
        view: 600,
        bid: 6,
        cart: 200,
        status: t("campaigns.bidding.title")
      }, {
        rank: 2,
        name: "Teads.tv",
        lastBid: "18:22",
        view: 600,
        bid: 6,
        cart: 200,
        status: t("campaigns.bidding.title")
      }, {
        rank: 3,
        name: "Teads.tv",
        lastBid: "18:22",
        view: 600,
        bid: 6,
        cart: 200,
        status: t("campaigns.bidding.title")
      }, {
        rank: 4,
        name: "Teads.tv",
        lastBid: "18:22",
        view: 600,
        bid: 6,
        cart: 200,
        status: t("campaigns.inProgress.title")
      }, {
        rank: 5,
        name: "Teads.tv",
        lastBid: "18:22",
        view: 600,
        bid: 6,
        cart: 200,
        status: t("campaigns.inProgress.title")
      }, {
        rank: 6,
        name: "Teads.tv",
        lastBid: "18:22",
        view: 600,
        bid: 6,
        cart: 200,
        status: t("campaigns.bidding.title")
      }, {
        rank: 7,
        name: "Teads.tv",
        lastBid: "18:22",
        view: 600,
        bid: 6,
        cart: 200,
        status: t("campaigns.inProgress.title")
      }, {
        rank: 8,
        name: "Teads.tv",
        lastBid: "18:22",
        view: 600,
        bid: 6,
        cart: 200,
        status: t("campaigns.inProgress.title")
      }, {
        rank: 9,
        name: "Teads.tv",
        lastBid: "18:22",
        view: 600,
        bid: 6,
        cart: 200,
        status: t("campaigns.inProgress.title")
      }
    ];

    const topTrackData = {
      min: 0,
      max: 10000,
      value: 6000
    };

    const history = [1,2,3];

    return (<div className="sub-page-wrapper animated fadeIn">
      <div>
        <Row>
          <Col>
            <div className="my-4 top-track d-flex align-items-center">
              <InputRange maxValue={topTrackData.max} minValue={topTrackData.min} value={topTrackData.value} disabled={true} onChange={(val) => {console.log(val);}} />
              <div className="top-track-currency">
                +<i className="fa fa-usd"></i>
              </div>
            </div>
          </Col>
        </Row>

        <Row>
          <Col xs="12">
            <div className="time-stats my-2">
              <div className="time-stats__elapsed mr-3 d-inline-block">
                <span className="time-stats__type mr-2">
                  Time elapsed:
                </span>
                <span className="time-stats__value">
                  10d 11h 12m 13s
                </span>
              </div>
              <div className="time-stats__remaining d-inline-block">
                <span className="time-stats__type mr-2">
                  Time remaining:
                </span>
                <span className="time-stats__value">
                  00d 11h 12m 13s
                </span>
              </div>
            </div>
          </Col>
          <Col lg="6">            
            <div className="bids">
              {map(data, (item, index) => {
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
                            last bid at {item.lastBid}
                          </div>
                        </div>
                        <div className="bids__item-box">
                          <img src={Eye} alt="View"/>
                          <span className="font-weight-bold mr-2" style={{
                            position: "relative",
                            left: -5,
                          }}>$</span>
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
                          <img className="mr-2" src={Cart} alt="Cart"/>
                          <span className="mr-2">
                            4500
                          </span>
                          <span className="line-through font-weight-bold">{t("bidCampaign.bid.wc")}</span>
                        </div>
                      </div>
                      <div className="bids__item-progress">
                        <div className="bottom-track mr-3">
                          <InputRange maxValue={100} minValue={0} value={70} disabled={true} onChange={(val) => {console.log(val);}} />
                        </div>
                        <div className="bids__item-progress-value">
                          70%
                        </div>
                      </div>
                    </div>
                  </div>  
                );
              })}                          
            </div>
          </Col>
          <Col lg="6">
            <div className="bid">

              <div className="bid__forbidden p-3 d-none">
                <div className="bid__forbidden-wrapper"></div>
                <div className="bid__forbidden-info">
                  <div className="bid__forbidden-icon mb-3">
                    <i className="fa fa-exclamation-triangle" aria-hidden="true"></i>
                  </div>
                  <div className="bid__forbidden-title mb-5">
                    You cannot bid if your funds are empty
                  </div>
                  <div className="bid__forbidden-action">
                    <button className="bid-btn bid-btn-dark m-0 text-center">
                      Credit campaign
                    </button>
                  </div>
                </div>
              </div>

              <div className="bid__block px-3 pt-3 pb-2">
                <div className="bid__title mb-3">
                  Bid
                </div>
                <div className="bid__boxes">
                  <div className="bid__box bid__box--bordered pb-2">
                    <i className="fa fa-user mr-2"></i>
                    <span className="bid__box-title mr-2">Users</span>
                    <span className="font-weight-bold">122</span>
                  </div>
                  <div className="bid__box bid__box--bordered pb-2">
                    <i className="fa fa-clock-o mr-2"></i>
                    <span className="bid__box-title mr-2">Current time</span>
                    <span className="font-weight-bold">26/05/2018 18:22</span>
                  </div>
                  <div className="bid__box pt-2">
                    <i className="fa fa-usd mr-2"></i>
                    <span className="bid__box-title mr-2">Average price</span>
                    <span className="font-weight-bold">4,5 WC</span>
                  </div>
                  <div className="bid__box pt-2">
                    <i className="fa fa-line-chart mr-2"></i>
                    <span className="bid__box-title mr-2">Boost</span>
                    <span className="font-weight-bold">(+15%)</span>
                  </div>
                </div>
              </div>
              <div className="bid__block p-3">
                <div className="bid__subtitle mb-3">
                  Bid history
                </div>
                <div className="bid__history p-2">
                  {map(history, (item, i) => {
                    return (
                      <div className={"bid__history-block"} key={i}>
                        <div className="bid__boxes">
                          <div className="bid__box bid__box--bordered p-2">
                            <i className="fa fa-user mr-2"></i>
                            <span className="bid__box-title mr-2">Users</span>
                            <span className="font-weight-bold">122</span>
                          </div>
                          <div className="bid__box bid__box--bordered p-2">
                            <i className="fa fa-clock-o mr-2"></i>
                            <span className="bid__box-title mr-2">Current time</span>
                            <span className="font-weight-bold">26/05/2018 18:22</span>
                          </div>
                          <div className="bid__box p-2">
                            <i className="fa fa-usd mr-2"></i>
                            <span className="bid__box-title mr-2">Average price</span>
                            <span className="font-weight-bold">4,5 WC</span>
                          </div>
                          <div className="bid__box p-2">
                            <i className="fa fa-line-chart mr-2"></i>
                            <span className="bid__box-title mr-2">Boost</span>
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
                  Boost
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
                      <div>Average price</div>
                      <div className="bid__average-price-value font-weight-bold">122 WC</div>
                    </div>
                  </div>
                  <button className="bid-btn bid-btn-dark m-0 text-center">
                    Boost Auction
                  </button>
                </div>
              </div>

            </div>
          </Col>
        </Row>
      </div>
      <br/>
    </div>);
  }
}

BidCampaign.propTypes = {
  t: PropTypes.func,
};

export default translate("translations")(BidCampaign);
