import React, { Component } from "react";
import PropTypes from "prop-types";
import { Switch, Route, Redirect } from "react-router-dom";
import * as FontAwesome from "react-icons/lib/fa";
import { Container, Row, Col, Button, Input, Collapse } from "reactstrap";
import InputRange from "react-input-range";
import "react-input-range/lib/css/index.css";

import ConfigCampaign from "./ConfigCampaign/";
import BidCampaign from "./BidCampaign/";
import AnalyticsCampaign from "./AnalyticsCampaign/";

import ResearchFilters from "../../components/ResearchFilters/ResearchFilters.js";



class Campaigns extends Component {
  static propTypes = {
    match: PropTypes.shape({
      params: PropTypes.shape({
        id: PropTypes.string
      })
    })
  }
  constructor(props) {
      super(props);
      this.state = {
        filter: false,
        fixed: true,
        gender: "male",
        proStatus: "salary",
        nationality: "indian",
        relationaship: "married",
        additional: "",
        location: "chandigarh",
        hobbies: "traveling",
        age: {
          min: 18,
          max: 24
        }
      };
      this.showFilter = this.showFilter.bind(this);
  }

  showFilter(){
    this.setState({
      filter: !this.state.filter
    });
  }

  render() {
    return (
      <div className="sub-page-wrapper animated fadeIn">

        <div className="custom-breadcrumb-wrapper">
          <div className="custom-breadcrumb">
            <Row style={{width: "100%"}}>
              <Col xs="4" md="3">
                <label className="bidding-status-label" style={{color: "#cbcbcb"}}>
                  <FontAwesome.FaCircle />
                  Bidding
                </label>
              </Col>
              <Col xs="4" md="3">
                <label className="bidding-status-label" style={{color: "#989898"}}>
                  <FontAwesome.FaCircle />
                  In Progress
                </label>
              </Col>
              <Col xs="4" md="3">
                <label className="bidding-status-label" style={{color: "#cbcbcb"}}>
                  <FontAwesome.FaCircle />
                  Delivered
                </label>
              </Col>
            </Row>
          </div>
          <div className="custom-breadcrumb">
            <Row style={{width: "100%"}}>
              <Col>
                <label className="bidding-status-label" style={{color: "#989898"}} onClick={this.showFilter}>
                  <FontAwesome.FaCircle />
                  Filters fixed
                  {this.state.filter ? <FontAwesome.FaAngleDown /> : <FontAwesome.FaAngleLeft />}
                </label>
              </Col>
            </Row>
            <Collapse isOpen={this.state.filter} style={{
                  width: "100%"
                }}>
              <ResearchFilters {...this.state} />
            </Collapse>
          </div>
        </div>

        <Route exact path="/campaigns/:id/config" name="ConfigCampaign" component={ConfigCampaign} />
        <Route exact path="/campaigns/:id/bid" name="BidCampaign" component={BidCampaign}/>
        <Route exact path="/campaigns/:id/analytics" name="AnalyticsCampaign" component={AnalyticsCampaign}/>
        <Redirect to={`/campaigns/${this.props.match.params.id}/analytics`} />
      </div>
    );
  }
}
export default Campaigns;
