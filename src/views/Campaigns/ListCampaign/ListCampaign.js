import React, {Component} from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { fetchCampaigns } from "../../../actions/listCampaignsActions";
import CampaignType from "./ListCampaignType";
import ComingSoon from "../../../components/Modal/ComingSoon";
import {translate} from "react-i18next";

@connect((store) => {
  let listCampaignsStore = store.listCampaigns;
  return {campaigns: listCampaignsStore.campaigns};
})
class ListCampaign extends Component {
  static propTypes = {
    dispatch: PropTypes.func,
    campaigns: PropTypes.array
  }
  constructor(props) {
    super(props);
    this.state = {};

    this.props.dispatch(fetchCampaigns());
  }

  render() {
    const { t } = this.props;
    return (
      <div className="sub-page-wrapper animated fadeIn">
        <CampaignType title={t("campaigns.bidding.title")} campaigns={this.props.campaigns} status="bidding" canAddNew/>
        <CampaignType title={t("campaigns.inProgress.title")} campaigns={this.props.campaigns} status="progress"/>
        <CampaignType title={t("campaigns.delivered.title")} campaigns={this.props.campaigns} status="delivered"/>
        {(process.env.STAGE === "production" ? <ComingSoon /> : null)}
      </div>
    );
  }
}
ListCampaign.propTypes = {
  t: PropTypes.func,
};
export default translate("translations")(ListCampaign);
