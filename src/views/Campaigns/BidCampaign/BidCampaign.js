import React, { Component } from "react";
import * as FontAwesome from "react-icons/lib/fa";
import { Container, Row, Col, Button, Input } from "reactstrap";
import Eye from "./view.png";
import Cart from "./shopping_cart_ok.png";
import InputRange from "react-input-range";
import "react-input-range/lib/css/index.css";

class BidCampaign extends Component {
  constructor(props) {
      super(props);
      this.state = {
        value: 30,
        period: 1,
        number: 78,
        bidWrap: false,
      };
      this.toggleBid = this.toggleBid.bind(this);
      this.handleChange = this.handleChange.bind(this);
      this.handleInputChange = this.handleInputChange.bind(this);
      this.hit = this.hit.bind(this);
  }

  hit(){
    this.setState({
      bidWrap: false
    });
  }

  handleInputChange(event) {
      this.setState({
        gender: event.target.value
      });
  }

  handleChange(event) {
    const data = event.target;
    const value = data.value;
    const name = data.name;
    this.setState({
      [name]: value
    });
  }

  toggleBid(){
    this.setState({
      bidWrap: !this.state.bidWrap
    });
  }


  render() {
    const data = [
      {
        rank: 1,
        name: "Teads.tv",
        lastBid: "18:22",
        view: 600,
        bid: 6,
        cart: 200,
        status: "Delivered"
      },
      {
        rank: 2,
        name: "Teads.tv",
        lastBid: "18:22",
        view: 600,
        bid: 6,
        cart: 200,
        status: "Bidding"
      },
      {
        rank: 3,
        name: "Teads.tv",
        lastBid: "18:22",
        view: 600,
        bid: 6,
        cart: 200,
        status: "Bidding"
      },
      {
        rank: 4,
        name: "Teads.tv",
        lastBid: "18:22",
        view: 600,
        bid: 6,
        cart: 200,
        status: "Progress"
      },
      {
        rank: 5,
        name: "Teads.tv",
        lastBid: "18:22",
        view: 600,
        bid: 6,
        cart: 200,
        status: "Progress"
      },
      {
        rank: 6,
        name: "Teads.tv",
        lastBid: "18:22",
        view: 600,
        bid: 6,
        cart: 200,
        status: "Bidding"
      },
      {
        rank: 7,
        name: "Teads.tv",
        lastBid: "18:22",
        view: 600,
        bid: 6,
        cart: 200,
        status: "Progress"
      },
      {
        rank: 8,
        name: "Teads.tv",
        lastBid: "18:22",
        view: 600,
        bid: 6,
        cart: 200,
        status: "Progress"
      },
      {
        rank: 9,
        name: "Teads.tv",
        lastBid: "18:22",
        view: 600,
        bid: 6,
        cart: 200,
        status: "Progress"
      }
    ];
    const showData = data.map((list, i) =>
      <tr key={list.rank}>
        <td><h3><span>#{list.rank}</span>{i === 0 ? <FontAwesome.FaStar /> : null }</h3></td>
        <td>
          <label>{list.name}</label>
          <span>last bid at {list.lastBid}</span>
        </td>
        <td>
          <p>
            <label className="pull-left">
              <img src={Eye} alt="View" />
              {i === 0 || i === 1 || i === 2 ?
                <span style={{position: "relative", left: -5, backgroundColor: "#fff"}}>$</span>
                :
                <span style={{position: "relative", left: -5, backgroundColor: "#cbcbcb"}}>$</span>
                }
            </label>
            <label className="pull-left">{list.bid} <span className="line-through">WC</span></label>
          </p>
        </td>
        <td>
          <p>
            <label className="pull-left"><img src={Eye} alt="View" /></label>
            <label className="pull-left">{list.view}</label>
          </p>
        </td>
        <td>
          <p>
            <label className="pull-left"><img src={Cart} alt="Cart" /></label>
            <label className="pull-left">{list.cart}</label>
          </p>
        </td>
      </tr>
      );
    return (
      <div className="sub-page-wrapper animated fadeIn">

        <div>
          <Row>
            <Col md="6">
              <div className="search-list-wrap">
                <table className="search-table">
                  <tbody>
                    {showData}
                  </tbody>
                </table>
              </div>
            </Col>
            <Col md="6">
              <div className="search-detail-wrap">
                <div className="search-detail-head">
                  <h1>Bakery</h1>
                  <label>1950/4000 views available</label>
                  <span>9 peoples are interested about this product</span>
                </div>
                <div className="bidding-panel">
                  <div className="quote-detail">
                    <label>Repetition</label>
                    <div onClick={this.hit}>
                      <InputRange maxValue={1000} minValue={0} value={this.state.value} onChange={value => this.setState({ value })} />
                    </div>
                    <span className="pull-right right-slider-label">{this.state.value}</span>
                    <div className="clearfix"></div>
                    <br/><br/>
                    <label>Period</label>
                    <div onClick={this.hit}>
                      <InputRange maxValue={12} minValue={0} value={this.state.period} onChange={period => this.setState({ period })} />
                    </div>
                    <span className="pull-left right-slider-label">0</span>
                    <span className="pull-right right-slider-label">{this.state.period} month</span>
                    <div className="clearfix"></div>

                    {this.state.bidWrap ? null :
                    <Button className="get-quotations-btn button-radius" onClick={this.toggleBid}>Get quotations</Button>
                    }
                  </div>
                </div>
              </div>
              {this.state.bidWrap &&
                <div className="bidding-area animated fadeIn">
                  <label>Number</label>
                  <InputRange maxValue={100} minValue={0} value={this.state.number} onChange={number => this.setState({ number })} />
                  <span className="pull-left right-slider-label">0</span>
                  <span className="pull-right right-slider-label">100</span>
                  <div className="clearfix"></div>

                  <Row>
                    <Col>
                      <label className="total-cost-label">Total 250 <span className="line-through">WC</span></label>
                      <label className="ready-status"><FontAwesome.FaCircle /> Ready for biding</label>
                    </Col>
                    <Col>
                      <Button className="bid-btn button-radius">Bid</Button>
                    </Col>
                  </Row>

                </div>
              }
            </Col>
          </Row>
        </div>
        <br/>
      </div>
    );
  }
}
export default BidCampaign;
