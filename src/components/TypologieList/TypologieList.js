import React, {Component} from "react";
import {Row, Col, Input} from "reactstrap";
import ErrorMessageService from "../../services/ErrorMessageService";
import PropTypes from "prop-types";
import {updateCampaignProperty} from "../../actions/campaignActions";
import {connect} from "react-redux";

const mapStateToProps = state => ({
  name: state.campaign.newCampaign.name,
  communicationType: state.campaign.newCampaign.communicationType,
  companyName: state.campaign.newCampaign.companyName,
});

const mapDispatchToProps = dispatch => ({
  updateCampaignProperty: payload => dispatch(updateCampaignProperty(payload)),
});

class TypologieList extends Component {
  constructor(props) {
    super(props);
    this.errorMessageService = new ErrorMessageService();
  }

  render() {
    const { validator, updateCampaignProperty, name, communicationType, companyName } = this.props;
    return (
      <div className="typologie-list">
        <Row>
          <Col md="6" xs="12">
            <div className="input-wrapper">
              <label>The name of your campaign</label>
              <Input type="text" id="name" className="typologie-list__input" name="name" value={name} onChange={(e) => updateCampaignProperty({name: "name", value: e.target.value}) }/>
              {validator.message("name", name, "required", "text-danger", {
                required: this.errorMessageService.generateErrorMessage("Name", "required"),
              })}
            </div>

            <div className="input-wrapper">
              <label>Type of communication</label>
              <div className="c-radio">
                <Input type="radio" className="c-radio__item" id="brand" name="brand" value="BR" checked={communicationType === "BR"} onClick={e => { updateCampaignProperty({name: "communicationType", value: e.target.value}); }}/>
                <label htmlFor="brand" className="c-radio__label">Brand</label>
                <Input type="radio" className="c-radio__item" id="product" name="product" value="PR" checked={communicationType === "PR"} onClick={e => { updateCampaignProperty({name: "communicationType", value: e.target.value}); }}/>
                <label htmlFor="product" className="c-radio__label">Product</label>
              </div>
              {validator.message("communicationType", communicationType, "required|communicationType", "text-danger", {
                communicationType: this.errorMessageService.generateErrorMessage("Communication type", "required")
              })}
            </div>

            <div className="input-wrapper">
              <label>Name of the company</label>
              <Input type="text" id="companyName" className="typologie-list__input" name="companyName" value={companyName} onChange={(e) => updateCampaignProperty({ name: "companyName", value: e.target.value}) }/>
              {validator.message("companyName", companyName, "required", "text-danger", {
                required: this.errorMessageService.generateErrorMessage("Company name", "required"),
              })}
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

TypologieList.propTypes = {
  validator: PropTypes.object,
  updateCampaignProperty: PropTypes.func,
  name: PropTypes.string,
  communicationType: PropTypes.string,
  companyName: PropTypes.string,
};

export default connect(mapStateToProps, mapDispatchToProps)(TypologieList);
