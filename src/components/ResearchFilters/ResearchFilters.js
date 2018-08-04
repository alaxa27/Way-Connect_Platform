import React, {Component} from "react";
import PropTypes from "prop-types";
import {Row, Col, Input} from "reactstrap";
import InputRange from "react-input-range";
import "react-input-range/lib/css/index.css";

import SelectBox from "../SelectBox/SelectBox";

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
    this.handleChange = this.handleChange.bind(this);
    this.handleRangeChange = this.handleRangeChange.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const val = event.target.value;
    let gender = this.state.gender;
    gender[val] = !gender[val];
    if (!this.state.fixed) {
      this.setState({gender: gender});
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
            <InputRange maxValue={100} minValue={0} value={this.state.age} onChange={this.handleRangeChange}/>
          </div>
        </Col>
      </Row>
      <Row>
        <Col md="6" xs="12">
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
        </Col>
        <Col md="6" xs="12">
          <div className="input-wrapper">
            <label>Hobbies</label>
            <SelectBox name="hobbies" placeholder="Every status" options={this.state.hobbies} fixed={this.props.fixed}/>
          </div>

          <div className="input-wrapper">
            <label>Location</label>
            <SelectBox name="location" placeholder="Every status" options={this.state.workStatus} fixed={this.props.fixed}/>
          </div>

          <div className="input-wrapper">
            <label>Additional Content</label>
            <SelectBox name="additional-status" placeholder="Every status" options={this.state.workStatus} fixed={this.props.fixed}/>
          </div>
        </Col>
        {
          (
            this.props.fixed
            ? null
            : (<Col md="6" xs="12">
              <button className="bid-btn bid-btn--dark mt-4">Start bidding</button>
            </Col>))
        }
      </Row>
    </div>);
  }
}

export default ResearchFilters;
