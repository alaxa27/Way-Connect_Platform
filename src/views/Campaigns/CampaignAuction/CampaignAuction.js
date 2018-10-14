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
import { fetchCampaign } from "../../../actions/campaignActions";
import { Redirect } from "react-router-dom";

const mapStateToProps = state => ({
  creditModalShown: state.campaign.creditModalShown,
  campaign: state.campaign.campaign,
});

const mapDispatchToProps = dispatch => ({
  fetchCampaign: payload => dispatch(fetchCampaign(payload)),
});

class CampaignAuction extends Component {
  componentDidMount() {
    const { fetchCampaign, match } = this.props;
    fetchCampaign(match.params.id);
  }
  render() {
    const { creditModalShown, campaign, t } = this.props;
    if(campaign.error) {
      return <Redirect to="/campaigns/list" />;
    }
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
  fetchCampaign: PropTypes.func,
  match: PropTypes.shape({
    params: PropTypes.shape({
        id: PropTypes.string
    }),
  }),
  campaign: PropTypes.object,
};

export default compose(connect(mapStateToProps, mapDispatchToProps), translate("translations"))(CampaignAuction);
