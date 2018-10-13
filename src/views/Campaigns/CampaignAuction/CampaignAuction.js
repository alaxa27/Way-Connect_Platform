import React, {Component} from "react";
import {Row, Col} from "reactstrap";
import {translate} from "react-i18next";
import PropTypes from "prop-types";
import AuctionList from "./AuctionList";
import NewAuction from "./NewAuction";
import AuctionMeta from "./AuctionMeta";
import AuctionTotal from "./AuctionTotal";
import {connect} from "react-redux";
import {compose} from "recompose";
import CreditCampaign from "../../../components/Modal/CreditCampaign";

const mapStateToProps = state => ({
  creditModalShown: state.campaign.creditModalShown,
});

class CampaignAuction extends Component {
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
    const { creditModalShown, t } = this.props;
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

    const history = [1,2,3];

    return (<div className="page-bid-campaign sub-page-wrapper animated fadeIn my-4">
      {creditModalShown &&
        <CreditCampaign
          title={t("createCampaign.comingSoon.title")}
          description={t("createCampaign.comingSoon.description")}
        />
      }
      <Row>
        <Col>
          <AuctionTotal data={topTrackData} />
        </Col>
      </Row>
      <Row>
        <Col xs="12">
          <AuctionMeta />
        </Col>
        <Col lg="6">
          <AuctionList data={data} />
        </Col>
        <Col lg="6">
          <NewAuction history={history} />
        </Col>
      </Row>
    </div>);
  }
}

CampaignAuction.propTypes = {
  t: PropTypes.func,
  creditModalShown: PropTypes.bool,
};

export default compose(connect(mapStateToProps, null), translate("translations"))(CampaignAuction);
