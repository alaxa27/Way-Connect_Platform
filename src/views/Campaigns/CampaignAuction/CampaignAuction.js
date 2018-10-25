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
import {fetchCampaign, fetchAuction, fetchBidHistory} from "../../../actions/campaignActions";
import {Redirect} from "react-router-dom";

const mapStateToProps = state => ({creditModalShown: state.campaign.creditModalShown, campaign: state.campaign.campaign});

const mapDispatchToProps = dispatch => ({
  fetchCampaign: payload => dispatch(fetchCampaign(payload)),
  fetchAuction: campaignId => dispatch(fetchAuction(campaignId)),
  fetchBidHistory: campaignId => dispatch(fetchBidHistory(campaignId))
});

class CampaignAuction extends Component {
  componentDidMount() {
    const {fetchCampaign, fetchAuction, fetchBidHistory, match} = this.props;
    const campaignId = match.params.id;
    fetchAuction(campaignId);
    fetchBidHistory(campaignId);
  }
  render() {
    const {creditModalShown, campaign, t} = this.props;
    if (campaign.error) {
      return <Redirect to="/campaigns/list"/>;
    }
    return (<div className="page-bid-campaign sub-page-wrapper animated fadeIn my-4">
      {creditModalShown && <CreditCampaign title={t("createCampaign.comingSoon.title")} description={t("createCampaign.comingSoon.description")}/>}
      <Row>
        <Col>
          <AuctionTotal data={{budget: parseFloat(campaign.budget),
            spent_budget: parseFloat(campaign.spent_budget)}}/>
        </Col>
      </Row>
      <Row>
        <Col xs="12">
          <AuctionMeta/>
        </Col>
        <Col lg="6">
          <AuctionList/>
        </Col>
        <Col lg="6">
          <NewAuction/>
        </Col>
      </Row>
    </div>);
  }
}

CampaignAuction.propTypes = {
  t: PropTypes.func,
  creditModalShown: PropTypes.bool,
  fetchCampaign: PropTypes.func,
  fetchAuction: PropTypes.func,
  match: PropTypes.shape({
    params: PropTypes.shape({id: PropTypes.string})
  }),
  campaign: PropTypes.object,
  fetchBidHistory: PropTypes.func
};

export default compose(connect(mapStateToProps, mapDispatchToProps), translate("translations"))(CampaignAuction);
