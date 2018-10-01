import React, {Component} from "react";
import PropTypes from "prop-types";
import {Row, Col, Input} from "reactstrap";
import InputRange from "react-input-range";
import "react-input-range/lib/css/index.css";
import SelectBox from "../SelectBox/SelectBox";
import { connect } from "react-redux";
import * as actions from "../../actions/campaignActions";
import Map from "../Map";
import Checkbox from "../Checkbox/";
import ComingSoon from "../../components/Modal/ComingSoon";
import {translate} from "react-i18next";
import {compose} from "recompose";
import moment from "moment";

const mapStateToProps = state => ({
  researchFilters: state.campaign.researchFilters,
  filterData: state.campaign.filterData
});

const mapDispatchToProps = dispatch => ({
  changeResearchFilter: payload => dispatch(actions.changeResearchFilter(payload))
});

class ResearchFilters extends Component {
  render() {
    const { changeResearchFilter, filterData, researchFilters, t } = this.props;
    return (<div className="research-filters">
      <Row>
        <Col md="6" xs="12">

          <div className="input-wrapper">
            <label>Gender</label>
            <div className="c-radio">
              <Input type="radio" className="c-radio__item" id="male" name="gender_male" value="male" checked={researchFilters.male} onClick={() => {changeResearchFilter({name: "male", value: !researchFilters.male});}}/>
              <label htmlFor="male" className="c-radio__label">Male</label>
              <Input type="radio" className="c-radio__item" id="female" name="gender_female" value="female" checked={researchFilters.female} onClick={() => {changeResearchFilter({name: "female",  value: !researchFilters.female});}}/>
              <label htmlFor="female" className="c-radio__label">Female</label>
            </div>
          </div>
          <div className="input-wrapper d-flex justify-content-between">
            <label>Age</label>
            <label className="research-filters__preview">{researchFilters.age.min}-{researchFilters.age.max}yo</label>
          </div>
          <div className="input-wrapper">
            <InputRange maxValue={100} minValue={0} value={researchFilters.age} onChange={value => {changeResearchFilter({name: "age",  value});}}/>
          </div>

          <div className="input-wrapper">
            <label>Work status</label>
            <SelectBox name="work-status" placeholder="Every status" options={filterData.workStatus} fixed={this.props.fixed} onChange={value => {changeResearchFilter({name: "workStatus",  value});}} value={researchFilters.workStatus} />
          </div>

          <div className="input-wrapper">
            <label>Relationship status</label>
            <SelectBox name="relationship-status" placeholder="Every status" options={filterData.relationshipStatus} fixed={this.props.fixed} onChange={value => {changeResearchFilter({name: "relationshipStatus",  value});}} value={researchFilters.relationshipStatus}/>
          </div>

          <div className="input-wrapper">
            <label>Nationality</label>
            <SelectBox name="nationality" placeholder="Every status" options={filterData.nationality} fixed={this.props.fixed} onChange={value => {changeResearchFilter({name: "nationality",  value});}} value={researchFilters.nationality}/>
          </div>

          <div className="input-wrapper">
            <label>Hobbies</label>
            <SelectBox name="hobbies" placeholder="Every status" options={filterData.hobbies} fixed={this.props.fixed} onChange={value => {changeResearchFilter({name: "hobbies",  value});}} value={researchFilters.hobbies}/>
          </div>

          <div className="input-wrapper">
            <div className="feature-coming-soon">
              <ComingSoon 
                  title={t("createCampaign.comingSoon.title")}
                  minified
              />
              <div className="d-flex justify-content-between mt-4">
                <label>Recall marketing</label>
                <label className="research-filters__preview">
                  {researchFilters.recallMarketing === 1 ? researchFilters.recallMarketing + " view in a row" : researchFilters.recallMarketing + " views in a row"}
                </label>
              </div>
              <div className="input-wrapper">
                <InputRange maxValue={10} minValue={0} value={researchFilters.recallMarketing} onChange={value => {changeResearchFilter({name: "recallMarketing",  value});}} />
              </div>
            </div>
          </div>

          <div className="input-wrapper mt-4 pb-4 research-filters__meta">
            <div className="research-filters__users">
              <i className="fa fa-user mr-2"></i>
              <span className="mr-3">
                Users
              </span>
              <span className="font-weight-bold">
                {researchFilters.users}
              </span>
            </div>
            <div className="research-filters__price">
              <i className="fa fa-usd mr-2"></i>
              <span className="mr-3">
                Price from
              </span>
              <span className="font-weight-bold">
                {researchFilters.priceFrom}
              </span>
            </div>
          </div>

        </Col>
        {this.props.fixed ? 
          null
        : 
          <Col md="6" xs="12">
            <div className="feature-coming-soon">
              <ComingSoon 
                title={t("createCampaign.comingSoon.title")}
                description={t("createCampaign.comingSoon.description")}
                launchDate={moment("2018-10-28")}
              />
              <div className="input-wrapper">
                <label>Select establishments</label>
                <div className="map-wrapper">
                  <Map center={[0, 0]} zoom={7} />
                </div>
              </div>
              <div className="input-wrapper mt-4">
                <div className="research-filters__establishments">
                  <div className="research-filters__establishments-wrapper">
                    <div className="research-filters__establishment-select-all pl-3 mb-2">
                      <Checkbox 
                        label={"Select all"}
                      />
                    </div>
                    <div className="research-filters__establishments-box p-2">
                      <div className="research-filters__establishments-item research-filters__establishments-item--selected p-2">
                        <Checkbox 
                          label={"Establishment 1"}
                        />
                      </div>
                      <div className="research-filters__establishments-item p-2">
                        <Checkbox 
                          label={"Establishment 2"}
                        />
                      </div>
                      <div className="research-filters__establishments-item p-2">
                        <Checkbox 
                          label={"Establishment 3"}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="research-filters__establishments-choose mx-3">
                    <i className="fa fa-arrow-circle-right" aria-hidden="true"></i>
                  </div>

                  <div className="research-filters__establishments-wrapper">
                    <div className="research-filters__establishment-remove-all pl-3 mb-2">
                      <i className="fa fa-trash-o mr-3" aria-hidden="true"></i>Remove all
                    </div>
                    <div className="research-filters__establishments-box p-2">
                      <div className="research-filters__establishments-item p-2">
                        <i className="fa fa-trash-o mr-3" aria-hidden="true"></i> Establishment 1
                      </div>
                      <div className="research-filters__establishments-item p-2">
                        <i className="fa fa-trash-o mr-3" aria-hidden="true"></i> Establishment 2
                      </div>
                    </div>
                  </div>

                </div>
              </div>
              <button className="bid-btn bid-btn--dark mt-4">Start bidding</button>
            </div>
          </Col>
        }
      </Row>
    </div>);
  }
}

ResearchFilters.propTypes = {
  t: PropTypes.func,
  fixed: PropTypes.bool,
  changeResearchFilter: PropTypes.func,
  filterData: PropTypes.object,
  researchFilters: PropTypes.object
};

export default compose(connect(mapStateToProps, mapDispatchToProps), translate("translations"))(ResearchFilters);
