import React, {Component} from "react";
import {Row, Col} from "reactstrap";
import "react-input-range/lib/css/index.css";
import {translate} from "react-i18next";
import PropTypes from "prop-types";
import BidList from "./BidList";
import NewBid from "./NewBid";
import BidMeta from "./BidMeta";
import BidTotal from "./BidTotal";

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
      }, {
        rank: 2,
        name: "Teads.tv",
        lastBid: "18:22",
        view: 600,
        bid: 6,
        cart: 200,
      }, {
        rank: 3,
        name: "Teads.tv",
        lastBid: "18:22",
        view: 600,
        bid: 6,
        cart: 200,
      }, {
        rank: 4,
        name: "Teads.tv",
        lastBid: "18:22",
        view: 600,
        bid: 6,
        cart: 200,
      }, {
        rank: 5,
        name: "Teads.tv",
        lastBid: "18:22",
        view: 600,
        bid: 6,
        cart: 200,
      }, {
        rank: 6,
        name: "Teads.tv",
        lastBid: "18:22",
        view: 600,
        bid: 6,
        cart: 200,
      }, {
        rank: 7,
        name: "Teads.tv",
        lastBid: "18:22",
        view: 600,
        bid: 6,
        cart: 200,
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

    const history = [1,2,3,4,5,6,7];

    return (<div className="page-bid-campaign sub-page-wrapper animated fadeIn my-4">
      <Row>
        <Col>
          <BidTotal data={topTrackData} />
        </Col>
      </Row>
      <Row>
        <Col xs="12">
          <BidMeta />
        </Col>
        <Col lg="6">            
          <BidList data={data} />
        </Col>
        <Col lg="6">
          <NewBid history={history} />
        </Col>
      </Row>
    </div>);
  }
}

BidCampaign.propTypes = {
  t: PropTypes.func,
};

export default translate("translations")(BidCampaign);
