import React, {Component} from "react";
import PropTypes from "prop-types";
import {Route, Redirect} from "react-router-dom";
import * as FontAwesome from "react-icons/lib/fa";
import {
  Row,
  Col,
  Collapse
} from "reactstrap";
import ConfigCampaign from "./ConfigCampaign/";
import CampaignAuction from "./CampaignAuction/";
import AnalyticsCampaign from "./AnalyticsCampaign/";
import ResearchFilters from "../../components/ResearchFilters/ResearchFilters";
import {translate} from "react-i18next";

class Campaigns extends Component {
  static propTypes = {
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
  }

  showFilter() {
    this.setState({
      filter: !this.state.filter
    });
  }

  render() {
    const { t } = this.props;
    return (<div className="sub-page-wrapper animated fadeIn">

      <div className="c-breadcrumbs">
        <div className="c-breadcrumbs__item">
          <Row>
            <Col>
              <label className="c-breadcrumbs__label w-100 d-flex align-items-center justify-content-between" onClick={this.showFilter}>
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
          <Collapse isOpen={this.state.filter}>
            <ResearchFilters {...this.state}/>
          </Collapse>
        </div>
      </div>

      <Route exact path="/campaigns/:id/config" name="ConfigCampaign" component={ConfigCampaign}/>
      <Route exact path="/campaigns/:id/auction" name="CampaignAuction" component={CampaignAuction}/>
      <Route exact path="/campaigns/:id/analytics" name="AnalyticsCampaign" component={AnalyticsCampaign}/>
    </div>);
  }
}
Campaigns.propTypes = {
  t: PropTypes.func,
};
export default translate("translations")(Campaigns);
