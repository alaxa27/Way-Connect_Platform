import React, {Component} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {Switch, Route, Redirect} from "react-router-dom";
import * as FontAwesome from "react-icons/lib/fa";
import {
  Container,
  Row,
  Col,
  Button,
  Input,
  Collapse
} from "reactstrap";
import InputRange from "react-input-range";
import "react-input-range/lib/css/index.css";

import ConfigCampaign from "./ConfigCampaign/";
import BidCampaign from "./BidCampaign/";
import AnalyticsCampaign from "./AnalyticsCampaign/";

import ResearchFilters from "../../components/ResearchFilters/ResearchFilters";

import {fetchCampaign} from "../../actions/campaignActions";
import {translate} from "react-i18next";

@connect((store) => {
  let campaignStore = store.campaign;
  return {campaign: campaignStore.campaign};
})

class Campaigns extends Component {
  static propTypes = {
    dispatch: PropTypes.func,
    campaign: PropTypes.shape({
      status: PropTypes.string
    }),
    match: PropTypes.shape({
      params: PropTypes.shape({id: PropTypes.string})
    })
  }
  constructor(props) {
    super(props);
    this.state = {
      filter: false,
      fixed: true,
      gender: {
        male: true,
        female: false
      },
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
    this.renderRedirect = this.renderRedirect.bind(this);

    this.props.dispatch(fetchCampaign({campaignId: this.props.match.params.id}));
  }

  showFilter() {
    this.setState({
      filter: !this.state.filter
    });
  }

  renderStatusCircle(status) {
    if (status === this.props.campaign.status) {
      return "mark-" + status;
    } else {
      return null;
    }
  }

  renderRedirect() {
    let target = "";

    switch (this.props.campaign.status) {
      case "bidding":
        target = "bid";
        break;
      case "progress":
        target = "analytics";
        break;
      case "delivered":
        target = "analytics";
        break;
      default:
        return null;
    }

    return <Redirect to={`/campaigns/${this.props.match.params.id}/${target}`}/>;
  }

  render() {
    const { t } = this.props;
    return (<div className="sub-page-wrapper animated fadeIn">

      <div className="custom-breadcrumb-wrapper">
        <div className="custom-breadcrumb">
          <Row style={{
              width: "100%"
            }}>
            <Col xs="4" md="3">
              <label className="custom-breadcrumb__label">
                <FontAwesome.FaCircle className={this.renderStatusCircle("bidding")}/>
                {t("campaigns.bidding.title")}
              </label>
            </Col>
            <Col xs="4" md="3">
              <label className="custom-breadcrumb__label">
                <FontAwesome.FaCircle className={this.renderStatusCircle("progress")}/>
                {t("campaigns.inProgress.title")}
              </label>
            </Col>
            <Col xs="4" md="3">
              <label className="custom-breadcrumb__label">
                <FontAwesome.FaCircle className={this.renderStatusCircle("delivered")}/>
                {t("campaigns.delivered.title")}
              </label>
            </Col>
          </Row>
        </div>
        <div className="custom-breadcrumb">
          <Row style={{
              width: "100%"
            }}>
            <Col>
              <label className="custom-breadcrumb__label w-100 d-flex align-items-center justify-content-between" style={{
                  color: "#989898"
                }} onClick={this.showFilter}>
                <div>
                  <FontAwesome.FaCircle/>
                  {t("campaigns.fixedFilters.title")}
                </div>
                {
                  this.state.filter
                    ? <FontAwesome.FaAngleDown/>
                    : <FontAwesome.FaAngleLeft/>
                }
              </label>
            </Col>
          </Row>
          <Collapse isOpen={this.state.filter} style={{
              width: "100%"
            }}>
            <ResearchFilters {...this.state}/>
          </Collapse>
        </div>
      </div>

      <Route exact path="/campaigns/:id/config" name="ConfigCampaign" component={ConfigCampaign}/>
      <Route exact path="/campaigns/:id/bid" name="BidCampaign" component={BidCampaign}/>
      <Route exact path="/campaigns/:id/analytics" name="AnalyticsCampaign" component={AnalyticsCampaign}/> {this.renderRedirect()}
    </div>);
  }
}
Campaigns.propTypes = {
  t: PropTypes.func,
};
export default translate("translations")(Campaigns);
