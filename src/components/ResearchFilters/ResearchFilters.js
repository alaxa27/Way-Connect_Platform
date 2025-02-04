import React, {Component} from "react";
import PropTypes from "prop-types";
import {Row, Col, Input} from "reactstrap";
import InputRange from "react-input-range";
import _ from "underscore";
import SelectBox from "../SelectBox/SelectBox";
import {connect} from "react-redux";
import {fetchFilterData, changeResearchFilter, estimateAuction} from "../../actions/campaignActions";
import Map from "../Map";
import Checkbox from "../Checkbox/";
import ComingSoon from "../../components/Modal/ComingSoon";
import {translate} from "react-i18next";
import {compose} from "recompose";
import moment from "moment";

const mapStateToProps = state => ({researchFilters: state.campaign.researchFilters, filterData: state.campaign.filterData});

const mapDispatchToProps = dispatch => ({
  fetchFilterData: () => dispatch(fetchFilterData()),
  changeResearchFilter: payload => dispatch(changeResearchFilter(payload)),
  estimateAuction: payload => dispatch(estimateAuction(payload))
});

class ResearchFilters extends Component {

  constructor(props) {
    super(props);
    this.state = {
      filterOpts: {},
      gender: "",
      age: {
        min: 0,
        max: 100
      },
      workStatus: [],
      relationshipStatus: [],
      country: [],
      hobbies: []
    };
    props.fetchFilterData();
    if (!props.fixed) {
      props.estimateAuction(props.researchFilters.filters);
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.filterData !== this.props.filterData) {
      this.setState({filterOpts: this.props.filterData.filters});
    }

    if (prevProps.researchFilters !== this.props.researchFilters) {
      if (this.props.fixed) {
        this.setState({
          age: {
            min: this.props.researchFilters.filters.age_min,
            max: this.props.researchFilters.filters.age_max
          }
        });
      }
    }
  }

  _compareValueAndKeep(filters, status) {
    return _.filter(status, e => _.contains(filters, e.value));
  }

  _standardizeArray(values) {
    let array = [];
    for (var i = 0; i < values.length; i++) {
      array.push(values[i].value);
    }
    return array;
  }

  _standardizeString(values) {
    let string = "";
    for (var i = 0; i < values.length; i++) {
      string += `${ (
        i === 0
        ? ""
        : ",")}${values[i].value}`;
    }
    return string;
  }

  _destandardizeArray(array, status) {
    return this._compareValueAndKeep(array, status);
  }

  _destandardizeString(string, status) {
    let array = string.split(",");
    return this._destandardizeArray(array, status);
  }

  _changeGender(gender, state) {
    const anti_gender = (
      gender === "M"
      ? "F"
      : "M");
    const both = "";

    switch (state) {
      case gender:
        return anti_gender;
      case anti_gender:
        return both;
      case both:
        return anti_gender;
    }
  }

  _changeAge(age) {
    if (!this.props.fixed) {
      this.setState({age});
    }
  }

  render() {
    const {researchFilters, t} = this.props;
    const filters = researchFilters.filters;

    const changeResearchFilter = (obj) => (
      this.props.fixed
      ? null
      : this.props.changeResearchFilter(obj));

    return (<div className="research-filters">
      <Row>
        <Col md="6" xs="12">

          <div className="input-wrapper">
            <label>
              {t("researchFilters.gender.title")}
            </label>
            <div className="c-radio">
              <Input type="radio" className="c-radio__item" id="male" name="gender_male" value="male" checked={(filters.gender === "M" || filters.gender === "")} onClick={() => {
                  changeResearchFilter({
                    name: "gender",
                    value: this._changeGender("M", filters.gender)
                  });
                }}/>
              <label htmlFor="male" className="c-radio__label">
                {t("researchFilters.gender.male")}
              </label>
              <Input type="radio" className="c-radio__item" id="female" name="gender_female" value="female" checked={(filters.gender === "F" || filters.gender === "")} onClick={() => {
                  changeResearchFilter({
                    name: "gender",
                    value: this._changeGender("F", filters.gender)
                  });
                }}/>
              <label htmlFor="female" className="c-radio__label">
                {t("researchFilters.gender.female")}
              </label>
            </div>
          </div>
          <div className="input-wrapper d-flex justify-content-between">
            <label>
              {t("researchFilters.age")}
            </label>
            <label className="research-filters__preview">{this.state.age.min}-{this.state.age.max}yo</label>
          </div>
          <div className="input-wrapper">
            <InputRange maxValue={100} minValue={0} value={{
                min: this.state.age.min,
                max: this.state.age.max
              }} onChange={value => {
                this._changeAge(value);
              }} onChangeComplete={value => {
                changeResearchFilter({name: "age_min", value: value.min});
                changeResearchFilter({name: "age_max", value: value.max});
              }}/>
          </div>

          <div className="input-wrapper">
            <label>
              {t("researchFilters.workStatus")}
            </label>
            <SelectBox name="work-status" placeholder="Every status" options={this.state.filterOpts.work_status} fixed={this.props.fixed} onChange={value => {
                changeResearchFilter({name: "work_status__in", value: this._standardizeString(value)});
              }} value={this._destandardizeString(filters.work_status__in, this.state.filterOpts.work_status)}/>
          </div>

          <div className="input-wrapper">
            <label>
              {t("researchFilters.relationshipStatus")}
            </label>
            <SelectBox name="relationship-status" placeholder="Every status" options={this.state.filterOpts.relationship_status} fixed={this.props.fixed} onChange={value => {
                changeResearchFilter({name: "relationship_status__in", value: this._standardizeString(value)});
              }} value={this._destandardizeString(filters.relationship_status__in, this.state.filterOpts.relationship_status)}/>
          </div>

          <div className="input-wrapper">
            <label>
              {t("researchFilters.nationality")}
            </label>
            <SelectBox name="nationality" placeholder="Every status" options={this.state.filterOpts.country} fixed={this.props.fixed} onChange={value => {
                changeResearchFilter({name: "country__in", value: this._standardizeString(value)});
              }} value={this._destandardizeString(filters.country__in, this.state.filterOpts.country)}/>
          </div>

          <div className="input-wrapper">
            <label>
              {t("researchFilters.hobbies")}
            </label>
            <SelectBox name="hobbies" placeholder="Every status" options={this.state.filterOpts.hobbies} fixed={this.props.fixed} onChange={value => {
                changeResearchFilter({name: "hobbies", value: this._standardizeArray(value)});
              }} value={this._destandardizeArray(filters.hobbies, this.state.filterOpts.hobbies)}/>
          </div>

          <div className="input-wrapper">
            <div className="feature-coming-soon">
              <ComingSoon title={t("createCampaign.comingSoon.title")} minified="minified"/>
              <div className="d-flex justify-content-between mt-4">
                <label>
                  {t("researchFilters.recallMarketing")}
                </label>
                <label className="research-filters__preview">
                  {
                    researchFilters.recallMarketing === 1
                      ? researchFilters.recallMarketing + " view in a row"
                      : researchFilters.recallMarketing + " views in a row"
                  }
                </label>
              </div>
              <div className="input-wrapper">
                <InputRange maxValue={10} minValue={0} value={researchFilters.recallMarketing} onChange={value => {
                    changeResearchFilter({name: "recallMarketing", value});
                  }}/>
              </div>
            </div>
          </div>

          <div className="input-wrapper mt-4 pb-4 research-filters__meta">
            <div className="research-filters__users">
              <i className="fa fa-user mr-2"></i>
              <span className="mr-3">
                {t("researchFilters.users")}
              </span>
              <span className="font-weight-bold">
                {researchFilters.users}
              </span>
            </div>
            <div className="research-filters__price">
              <i className="fa fa-usd mr-2"></i>
              <span className="mr-3">
                {t("researchFilters.priceFrom")}
              </span>
              <span className="font-weight-bold">
                {researchFilters.price}
                WC
              </span>
            </div>
          </div>

        </Col>
        {
          this.props.fixed
            ? null
            : <Col md="6" xs="12">
              <div className="feature-coming-soon">
                <ComingSoon title={t("createCampaign.comingSoon.title")} description={t("createCampaign.comingSoon.description")} launchDate={moment("2018-11-28")}/>
                <div className="input-wrapper">
                  <label>Select establishments</label>
                  <div className="map-wrapper">
                    <Map center={[0, 0]} zoom={7}/>
                  </div>
                </div>
                <div className="input-wrapper mt-4">
                  <div className="research-filters__establishments">
                    <div className="research-filters__establishments-wrapper">
                      <div className="research-filters__establishment-select-all pl-3 mb-2">
                        <Checkbox label={"Select all"}/>
                      </div>
                      <div className="research-filters__establishments-box p-2">
                        <div className="research-filters__establishments-item research-filters__establishments-item--selected p-2">
                          <Checkbox label={"Establishment 1"}/>
                        </div>
                        <div className="research-filters__establishments-item p-2">
                          <Checkbox label={"Establishment 2"}/>
                        </div>
                        <div className="research-filters__establishments-item p-2">
                          <Checkbox label={"Establishment 3"}/>
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
                          <i className="fa fa-trash-o mr-3" aria-hidden="true"></i>
                            Establishment 1
                        </div>
                        <div className="research-filters__establishments-item p-2">
                          <i className="fa fa-trash-o mr-3" aria-hidden="true"></i>
                            Establishment 2
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
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
  fetchFilterData: PropTypes.func,
  changeResearchFilter: PropTypes.func,
  estimateAuction: PropTypes.func,
  filterData: PropTypes.object,
  researchFilters: PropTypes.object
};

export default compose(connect(mapStateToProps, mapDispatchToProps), translate("translations"))(ResearchFilters);
