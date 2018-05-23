import React, {Component} from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import * as FontAwesome from "react-icons/lib/fa";
import * as MdIconPack from "react-icons/lib/md";
import {Row, Col, Button} from "reactstrap";
import _ from "underscore";

import { fetchCampaigns } from "../../../actions/listCampaignsActions";
import CampaignType from "./ListCampaignType";

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
    return (<div className="sub-page-wrapper animated fadeIn">
      <div className="campaign-types-container">
        <CampaignType title="Bidding" campaigns={this.props.campaigns} status="bidding" canAddNew/>
        <CampaignType title="In Progress" campaigns={this.props.campaigns} status="progress"/>
        <CampaignType title="Delivered" campaigns={this.props.campaigns} status="delivered"/>
      </div>
    </div>);
  }
}
export default ListCampaign;
