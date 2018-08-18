import React, {Component} from "react";
import PropTypes from "prop-types";
import {Row, Col, Input} from "reactstrap";
import InputRange from "react-input-range";
import "react-input-range/lib/css/index.css";
import SelectBox from "../SelectBox/SelectBox";
import Map from "../Map";

class ResearchFilters extends Component {
  static propTypes = {
    fixed: PropTypes.bool,
    workStatus: PropTypes.array
  }
  constructor(props) {
    super(props);
    this.state = {
      ...props
    };
  }

  handleInputChange = (event) => {
    const val = event.target.value;
    let gender = this.state.gender;
    gender[val] = !gender[val];
    if (!this.state.fixed) {
      this.setState({gender: gender});
    }
  }

  handleRangeChange = (age) => {
    if (!this.state.fixed) {
      this.setState({age});
    }
  }

  handleRecallMarketingChange = (value) => {
    this.setState({recallMarketing: value});
  }

  handleChange = (event) => {
    const data = event.target;
    const value = data.value;
    const name = data.name;
    this.setState({[name]: value});
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps !== this.props) {
      this.setState({...this.props});
    }
  }

  render() {
    return (<div className="research-filters">
      <Row>
        <Col md="6" xs="12">

          <div className="input-wrapper">
            <label>Gender</label>
            <div className="c-radio">
              <Input type="radio" className="c-radio__item" id="male" name="gender_male" value="male" checked={this.state.gender.male} onClick={this.handleInputChange}/>
              <label htmlFor="male" className="c-radio__label">Male</label>
              <Input type="radio" className="c-radio__item" id="female" name="gender_female" value="female" checked={this.state.gender.female} onClick={this.handleInputChange}/>
              <label htmlFor="female" className="c-radio__label">Female</label>
            </div>
          </div>
          <div className="input-wrapper d-flex justify-content-between">
            <label>Age</label>
            <label className="research-filters__preview">{this.state.age.min}-{this.state.age.max}yo</label>
          </div>
          <div className="input-wrapper">
            <InputRange maxValue={100} minValue={0} value={this.state.age} onChange={this.handleRangeChange} />
          </div>

          <div className="input-wrapper">
            <label>Work status</label>
            <SelectBox name="work-status" placeholder="Every status" options={this.state.workStatus} fixed={this.props.fixed}/>
          </div>

          <div className="input-wrapper">
            <label>Relationship status</label>
            <SelectBox name="relationship-status" placeholder="Every status" options={this.state.relationshipStatus} fixed={this.props.fixed}/>
          </div>

          <div className="input-wrapper">
            <label>Nationality</label>
            <SelectBox name="nationality" placeholder="Every status" options={this.state.nationality} fixed={this.props.fixed}/>
          </div>

          <div className="input-wrapper">
            <label>Hobbies</label>
            <SelectBox name="hobbies" placeholder="Every status" options={this.state.hobbies} fixed={this.props.fixed}/>
          </div>

          <div className="input-wrapper d-flex justify-content-between mt-4">
            <label>Recall marketing</label>
            <label className="research-filters__preview">
              {this.state.recallMarketing === 1 ? this.state.recallMarketing + " view in a row" : this.state.recallMarketing + " views in a row"}
            </label>
          </div>
          <div className="input-wrapper">
            <InputRange maxValue={10} minValue={0} value={this.state.recallMarketing} onChange={this.handleRecallMarketingChange} />
          </div>

          <div className="input-wrapper mt-4 pb-4 research-filters__meta">
            <div className="research-filters__users">
              <i className="fa fa-user mr-2"></i>
              <span className="mr-3">
                Utilisateurs
              </span>
              <span className="font-weight-bold">
                249
              </span>
            </div>
            <div className="research-filters__price">
              <i className="fa fa-usd mr-2"></i>
              <span className="mr-3">
                Price from
              </span>
              <span className="font-weight-bold">
                2,49 WC
              </span>
            </div>
          </div>

        </Col>
        {this.props.fixed ? 
          null
        : 
          <Col md="6" xs="12">
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
                    <input type="checkbox" className="mr-3" />Select all
                  </div>
                  <div className="research-filters__establishments-box p-2">
                    <div className="research-filters__establishments-item research-filters__establishments-item--selected p-2">
                      <input type="checkbox" className="mr-3" /> Establishment 1
                    </div>
                    <div className="research-filters__establishments-item p-2">
                      <input type="checkbox" className="mr-3" /> Establishment 2
                    </div>
                    <div className="research-filters__establishments-item p-2">
                      <input type="checkbox" className="mr-3" /> Establishment 3
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
          </Col>
        }
      </Row>
    </div>);
  }
}

export default ResearchFilters;
