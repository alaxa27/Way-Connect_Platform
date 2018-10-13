import React, {Component} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import * as FontAwesome from "react-icons/lib/fa";
import {Row, Col} from "reactstrap";
import ResearchFilters from "../../../components/ResearchFilters/ResearchFilters";
import TypologieList from "../../../components/TypologieList/TypologieList";
import {fetchFilterData, createCampaign} from "../../../actions/campaignActions";
import ValidatorService from "../../../services/ValidatorService";

const mapStateToProps = state => ({
  filterData: state.campaign.filterData,
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
      additional: "",
      location: "chandigarh",
      hobbies: "traveling",
      communicationType: {
        brand: false,
        product: false
      },
      name: "",
      companyName: ""
    };
    const { fetchFilterData } = this.props;
    fetchFilterData();
    this.validator = new ValidatorService().getValidator();
  }

  handleCreateCampaign = () => {
    const { createCampaign } = this.props;
    if(this.validator.allValid()){
      createCampaign({
        name: "",
        company_name: "",
        type: ""
      });
    } else {
        this.validator.showMessages();
        this.forceUpdate();
    }
  }

  render() {
    return (<div className="sub-page-wrapper animated fadeIn">
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
          <TypologieList {...this.state} validator={this.validator}/>
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
    </div>);
  }
}

CreateCampaign.propTypes = {
  dispatch: PropTypes.func,
  filterData: PropTypes.object.isRequired,
  fetchFilterData: PropTypes.func,
  createCampaign: PropTypes.func,
};
export default connect(mapStateToProps, mapDispatchToProps)(CreateCampaign);
