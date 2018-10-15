import React, {Component} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import * as FontAwesome from "react-icons/lib/fa";
import {Row, Col} from "reactstrap";
import ResearchFilters from "../../../components/ResearchFilters/ResearchFilters";
import TypologieList from "../../../components/TypologieList/TypologieList";
import {fetchFilterData, createCampaign} from "../../../actions/campaignActions";
import ValidatorService from "../../../services/ValidatorService";
import ReduxBlockUi from "react-block-ui/redux";
import { Redirect } from "react-router-dom";

const mapStateToProps = state => ({
  filterData: state.campaign.filterData,
  name: state.campaign.newCampaign.name,
  communicationType: state.campaign.newCampaign.communicationType,
  companyName: state.campaign.newCampaign.companyName,
  productDescription: state.campaign.newCampaign.productDescription,
  created: state.campaign.newCampaign.created,
});

const mapDispatchToProps = dispatch => ({
  fetchFilterData: payload => dispatch(fetchFilterData(payload)),
  createCampaign: payload => dispatch(createCampaign(payload)),
});

class CreateCampaign extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fixed: false,
      validationError: false,
    };
    const { fetchFilterData } = this.props;
    fetchFilterData();
    this.validator = new ValidatorService().getValidator();
  }

  handleCreateCampaign = () => {
    const { createCampaign, name, communicationType, companyName, productDescription } = this.props;
    if(this.validator.allValid()){
      createCampaign({
        name,
        company_name: companyName,
        description: productDescription,
        type: communicationType,
      });
    } else {
        this.validator.showMessages();
        this.setState({
          validationError: true
        });
    }
  }

  render() {
    const { created } = this.props;
    if(created) {
      return <Redirect to="/campaigns/2/bid"/>;
    }
    return (
      <ReduxBlockUi tag="div" block="CREATE_CAMPAIGN" unblock={["CREATE_CAMPAIGN_FULFILLED", "CREATE_CAMPAIGN_REJECTED"]}>
        <div className="sub-page-wrapper animated fadeIn">
          <Row>
            <Col>
              <div className="c-breadcrumbs">
                <div className="c-breadcrumbs__item">
                  <div className="c-breadcrumbs__label">
                    <FontAwesome.FaCircle className="orange-circle"/>
                    Typologie list
                  </div>
                </div>
              </div>
              <TypologieList validator={this.validator} validationError={this.state.validationError} />
            </Col>
          </Row>
          <Row>
            <Col>
              <div className="c-breadcrumbs">
                <div className="c-breadcrumbs__item">
                  <div className="c-breadcrumbs__label">
                    <FontAwesome.FaCircle className="green-circle"/>
                    Research Filters
                  </div>
                </div>
              </div>
              <ResearchFilters fixed={this.state.fixed} handleCreateCampaign={this.handleCreateCampaign} />
            </Col>
          </Row>
        </div>
      </ReduxBlockUi>
    );
  }
}

CreateCampaign.propTypes = {
  dispatch: PropTypes.func,
  filterData: PropTypes.object.isRequired,
  fetchFilterData: PropTypes.func,
  createCampaign: PropTypes.func,
  name: PropTypes.string,
  communicationType: PropTypes.string,
  companyName: PropTypes.string,
  productDescription: PropTypes.string,
  created: PropTypes.string,
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateCampaign);
