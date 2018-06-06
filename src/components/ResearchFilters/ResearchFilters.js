import React, {Component} from "react";
import PropTypes from "prop-types";
import {Row, Col, Input} from "reactstrap";
import InputRange from "react-input-range";
import "react-input-range/lib/css/index.css";

import SelectBox from "../SelectBox/SelectBox";

class ResearchFilters extends Component {
  static propTypes = {
    fixed: PropTypes.bool
  }
  constructor(props) {
    super(props);
    this.state = {
      ...this.props,
      workStatus: [
        {
          value: "chocolate",
          label: "Chocolate"
        }, {
          value: "strawberry5",
          label: "Strawberry"
        }, {
          value: "strawberry4",
          label: "Strawberry"
        }, {
          value: "strawberry3",
          label: "Strawberry"
        }, {
          value: "strawberry2",
          label: "Strawberry"
        }, {
          value: "strawberry1",
          label: "Strawberry"
        }, {
          value: "vanilla",
          label: "Vanilla"
        }
      ]
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleRangeChange = this.handleRangeChange.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const val = event.target.value;
    let gender = this.state.gender;
    gender[val] = !gender[val];
    if (!this.state.fixed) {
      this.setState({
        gender: gender
      });
    }
  }

  handleRangeChange(age) {
    if (!this.state.fixed) {
      this.setState({age});
    }
  }

  handleChange(event) {
    const data = event.target;
    const value = data.value;
    const name = data.name;
    this.setState({[name]: value});
  }

  render() {
    return (
        <div className="research-filters">
          <Row>
            <Col md="6" xs="12">
              <label className="input-label">Gender</label>
              <div className="radio-buttons-container">
                <Input type="radio" id="male" name="gender_male" value="male" checked={this.state.gender.male} onClick={this.handleInputChange}/>
                <label htmlFor="male" className="pull-left">Male</label>
                <Input type="radio" id="female" name="gender_female" value="female" checked={this.state.gender.female} onClick={this.handleInputChange}/>
                <label htmlFor="female" className="pull-right">Female</label>
                <div className="clearfix"></div>
              </div>
              <div className="input-wrapper">
                <label className="input-label pull-left">Age</label>
                <label className="age-title">{this.state.age.min}-{this.state.age.max}yo</label>
                <div style={{
                    paddingTop: 40
                  }}>
                  <InputRange maxValue={100} minValue={0} value={this.state.age} onChange={this.handleRangeChange}/>
                </div>
              </div>
            </Col>
          </Row>
          <Row>
            <Col md="6" xs="12">
                <div className="input-wrapper">
                  <label className="input-label">Professional status</label>
                  <SelectBox name="work-status" placeholder="Every status" options={this.state.workStatus} fixed={this.props.fixed}/>
                </div>

                <div className="input-wrapper">
                  <label className="input-label">Relationship status</label>
                  <div className="custom-selectbox-main">
                    <SelectBox name="work-status" placeholder="Every status" options={this.state.workStatus} fixed={this.props.fixed}/>
                  </div>
                </div>

                <div className="input-wrapper">
                  <label className="input-label">Nationality</label>
                  <div className="custom-selectbox-main">
                    <SelectBox name="nationality" placeholder="Every status" options={this.state.workStatus} fixed={this.props.fixed}/>
                  </div>
                </div>
            </Col>
            <Col md="6" xs="12">
                <div className="input-wrapper">
                  <label className="input-label">Hobbies</label>
                  <div className="custom-selectbox-main">
                    <SelectBox name="hobbies" placeholder="Every status" options={this.state.workStatus} fixed={this.props.fixed}/>
                  </div>
                </div>

                <div className="input-wrapper">
                  <label className="input-label">Location</label>
                  <div className="custom-selectbox-main">
                    <SelectBox name="location" placeholder="Every status" options={this.state.workStatus} fixed={this.props.fixed}/>
                  </div>
                </div>

                <div className="input-wrapper">
                  <label className="input-label">Additional Content</label>
                  <div className="custom-selectbox-main">
                    <SelectBox name="additional-status" placeholder="Every status" options={this.state.workStatus} fixed={this.props.fixed}/>
                  </div>
                </div>
            </Col>
            <Col md="6" xs="12">
                <button className="bid-btn bid-btn-dark" style={{marginTop: '25px'}}>Start bidding</button>
            </Col>
          </Row>
    </div>);
  }
}

export default ResearchFilters;
