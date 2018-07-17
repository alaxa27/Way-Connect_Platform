import React, {Component} from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { fetchCampaigns } from "../../../actions/listCampaignsActions";
import CampaignType from "./ListCampaignType";
import ComingSoon from "../../../components/Modal/ComingSoon";

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
    return (
      <div className="sub-page-wrapper animated fadeIn">
        <div className="campaign-types-container">
          <CampaignType title="Bidding" campaigns={this.props.campaigns} status="bidding" canAddNew/>
          <CampaignType title="In Progress" campaigns={this.props.campaigns} status="progress"/>
          <CampaignType title="Delivered" campaigns={this.props.campaigns} status="delivered"/>
        </div>
        <ComingSoon />
      </div>
    );
  }
}
export default ListCampaign;
