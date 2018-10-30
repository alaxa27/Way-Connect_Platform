import React, {Component} from "react";
import PropTypes from "prop-types";
import {Route, Redirect, matchPath} from "react-router-dom";
import {connect} from "react-redux";
import {compose} from "recompose";

import * as FontAwesome from "react-icons/lib/fa";
import {Row, Col, Collapse} from "reactstrap";
import ConfigCampaign from "./ConfigCampaign/";
import CampaignAuction from "./CampaignAuction/";
import AnalyticsCampaign from "./AnalyticsCampaign/";
import ResearchFilters from "../../components/ResearchFilters/ResearchFilters";
import {translate} from "react-i18next";
import {fetchCampaign, clearCampaignCache} from "../../actions/campaignActions";

const mapStateToProps = store => ({campaign: store.campaign.campaign});

const mapDispatchToProps = dispatch => ({
  clearCampaignCache: payload => dispatch(clearCampaignCache(payload)),
  fetchCampaign: payload => dispatch(fetchCampaign(payload))
});

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
      toConfig: false
    };
    this.showFilter = this.showFilter.bind(this);

    this.props.clearCampaignCache();
    const campaignID = props.match.params.id;
    this.props.fetchCampaign(campaignID);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.campaign !== this.props.campaign) {
      if (this.props.campaign.communication === null && !matchPath(this.props.location.pathname, "/campaigns/:id/config")) {
        this.setState({toConfig: true});
      }
    }
  }

  showFilter() {
    this.setState({
      filter: !this.state.filter
    });
  }

  render() {
    const {t} = this.props;
    if (this.state.toConfig) {
      this.setState({
        toConfig: false
      });
      return (<Redirect to={"/campaigns/" + this.props.match.params.id + "/config"}/>);
    }

    return (<div className="sub-page-wrapper animated fadeIn">

      <div className="c-breadcrumbs">
        <div className="c-breadcrumbs__item">
          <Row>
            <Col>
              <label className="c-breadcrumbs__label w-100 d-flex align-items-center justify-content-between" onClick={this.showFilter}>
                <div>
                  <FontAwesome.FaCircle/> {t("campaigns.fixedFilters.title")}
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
            <ResearchFilters fixed={true} />
          </Collapse>
        </div>
      </div>

      <Route exact={true} path="/campaigns/:id/config" name="ConfigCampaign" component={ConfigCampaign}/>
      <Route exact={true} path="/campaigns/:id/auction" name="CampaignAuction" component={CampaignAuction}/>
      <Route exact={true} path="/campaigns/:id/analytics" name="AnalyticsCampaign" component={AnalyticsCampaign}/>
    </div>);
  }
}
Campaigns.propTypes = {
  t: PropTypes.func,
  clearCampaignCache: PropTypes.func,
  fetchCampaign: PropTypes.func,
  campaign: PropTypes.shape({
    communication: PropTypes.object
  }),
  location: PropTypes.shape({
    pathname: PropTypes.string
  })
};
export default compose(connect(mapStateToProps, mapDispatchToProps), translate("translations"))(Campaigns);
