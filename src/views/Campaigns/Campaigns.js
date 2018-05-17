import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import * as FontAwesome from 'react-icons/lib/fa';
import { Container, Row, Col, Button, Input } from 'reactstrap';
import InputRange from 'react-input-range';
import 'react-input-range/lib/css/index.css';

import ConfigCampaign from './ConfigCampaign/';
import BidCampaign from './BidCampaign/';
import AnalyticsCampaign from './AnalyticsCampaign/';

import ResearchFilters from '../../components/ResearchFilters/ResearchFilters.js';



class Campaigns extends Component {
  constructor(props) {
      super(props)
      this.state = {
        filter: false,
        fixed: true,
        gender: 'male',
        proStatus: 'salary',
        nationality: 'indian',
        relationaship: 'married',
        additional: '',
        location: 'chandigarh',
        hobbies: 'traveling',
        age: {
          min: 18,
          max: 24
        }
      }
      this.showFilter = this.showFilter.bind(this);
  }

  showFilter(){
    this.setState({
      filter: !this.state.filter
    })
  }

  render() {
    return (
      <div className="sub-page-wrapper animated fadeIn">

        <div className="custom-breadcrumb-wrapper">
          <div className="custom-breadcrumb">
            <Row style={{width: '100%'}}>
              <Col xs="4" md="3">
                <label className="bidding-status-label" style={{color: '#cbcbcb'}}>
                  <FontAwesome.FaCircle />
                  Bidding
                </label>
              </Col>
              <Col xs="4" md="3">
                <label className="bidding-status-label" style={{color: '#989898'}}>
                  <FontAwesome.FaCircle />
                  In Progress
                </label>
              </Col>
              <Col xs="4" md="3">
                <label className="bidding-status-label" style={{color: '#cbcbcb'}}>
                  <FontAwesome.FaCircle />
                  Delivered
                </label>
              </Col>
            </Row>
          </div>
          <div className="custom-breadcrumb">
            <Row style={{width: '100%'}}>
              <Col>
                <label className="bidding-status-label" style={{color: '#989898'}} onClick={this.showFilter}>
                  <FontAwesome.FaCircle />
                  Filters fixed
                  {this.state.filter ? <FontAwesome.FaAngleDown /> : <FontAwesome.FaAngleLeft />}
                </label>
              </Col>
            </Row>
            <ResearchFilters {...this.state} />
          </div>
        </div>

        <Route path="/campaigns/:id/config" name="ConfigCampaign" component={ConfigCampaign} />
        <Route path="/campaigns/:id/bid" name="BidCampaign" component={BidCampaign}/>
        <Route path="/campaigns/:id/analytics" name="AnalyticsCampaign" component={AnalyticsCampaign}/>
      </div>
    )
  }
}
export default Campaigns;
