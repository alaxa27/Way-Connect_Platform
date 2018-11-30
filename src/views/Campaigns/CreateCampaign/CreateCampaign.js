import React, {Component} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import * as FontAwesome from "react-icons/lib/fa";
import {Row, Col} from "reactstrap";
import ResearchFilters from "../../../components/ResearchFilters/ResearchFilters";
import TypologieList from "../../../components/TypologieList/TypologieList";
import {createCampaign, clearResearchFilterCache} from "../../../actions/campaignActions";
import ValidatorService from "../../../services/ValidatorService";
import ReduxBlockUi from "react-block-ui/redux";
import {Redirect} from "react-router-dom";
import { translate } from "react-i18next";
import { compose } from 'recompose';

const mapStateToProps = state => ({
  filterData: state.campaign.filterData,
  name: state.campaign.newCampaign.name,
  communicationType: state.campaign.newCampaign.communicationType,
  companyName: state.campaign.newCampaign.companyName,
  productDescription: state.campaign.newCampaign.productDescription,
  newCampaign: state.campaign.newCampaign
});

const mapDispatchToProps = dispatch => ({
  clearResearchFilterCache: () => dispatch(clearResearchFilterCache()),
  createCampaign: payload => dispatch(createCampaign(payload))
});

class CreateCampaign extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fixed: false,
      validationError: false
    };
    props.clearResearchFilterCache();
    this.validator = new ValidatorService().getValidator();
  }

  handleCreateCampaign = () => {
    const {createCampaign, name, communicationType, companyName, productDescription} = this.props;
    if (this.validator.allValid()) {
      createCampaign({name, company_name: companyName, description: productDescription, type: communicationType});
    } else {
      this.validator.showMessages();
      this.setState({validationError: true});
    }
  }

  render() {
    const { t } = this.props;
    if (this.props.newCampaign.created) {
      return <Redirect to={`/campaigns/${this.props.newCampaign.id}/config`}/>;
    }
    return (<ReduxBlockUi tag="div" block="CREATE_CAMPAIGN" unblock={["CREATE_CAMPAIGN_FULFILLED", "CREATE_CAMPAIGN_REJECTED"]}>
      <div className="sub-page-wrapper animated fadeIn">
        <Row>
          <Col>
            <div className="c-breadcrumbs">
              <div className="c-breadcrumbs__item">
                <div className="c-breadcrumbs__label">
                  <FontAwesome.FaCircle className="orange-circle"/>
                  {t('createCampaign.typologieList.title')}
                </div>
              </div>
            </div>
            <TypologieList validator={this.validator} validationError={this.state.validationError}/>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className="c-breadcrumbs">
              <div className="c-breadcrumbs__item">
                <div className="c-breadcrumbs__label">
                  <FontAwesome.FaCircle className="green-circle"/>
                  {t('researchFilters.title')}
                </div>
              </div>
            </div>
            <ResearchFilters fixed={this.state.fixed} />
          </Col>
        </Row>
        <Row>
          <Col md={{size: 6, offset: 6}}>
            <button className="bid-btn bid-btn--dark mt-4" onClick={this.handleCreateCampaign}>Start bidding</button>
          </Col>
        </Row>

      </div>
    </ReduxBlockUi>);
  }
}

CreateCampaign.propTypes = {
  t: PropTypes.func,
  dispatch: PropTypes.func,
  filterData: PropTypes.object.isRequired,
  clearResearchFilterCache: PropTypes.func,
  createCampaign: PropTypes.func,
  name: PropTypes.string,
  communicationType: PropTypes.string,
  companyName: PropTypes.string,
  productDescription: PropTypes.string,
  newCampaign: PropTypes.shape({
    created: PropTypes.boolean,
    id: PropTypes.string
  })
};

export default compose(connect(mapStateToProps, mapDispatchToProps), translate("translations"))(CreateCampaign);
