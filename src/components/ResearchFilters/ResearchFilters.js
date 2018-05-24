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
          value: "strawberry",
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
    return (<Row style={{
        width: "100%"
      }}>
      <Col><br/>
        <Col>
          <Col md="5">
            <label className="input-label">Gender</label>
            <div className="gender-radio-buttons">
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
          <div className="clearfix"></div>
          <Col>
            <div className="row" style={{
                margin: 0
              }}>
              <div className="col col-md-5">
                <div className="input-wrapper">
                  <label className="input-label">Professional status</label>
                  {/*<Input type="select" className="custom-selectbox" name="proStatus" value={this.state.proStatus} onChange={this.handleChange}>
                    <div className="custom-selectbox-main">
                      <option value="salary">Salary</option>
                      <option value="self_employed">Self Employed</option>
                      </div>
                    </Input>*/
                  }
                  <SelectBox options={this.state.workStatus} fixed={this.props.fixed}/>
                </div>

                <div className="input-wrapper">
                  <label className="input-label">Relationship status</label>
                  <div className="custom-selectbox-main">
                    {/*<Input type="select" className="custom-selectbox" name="relationaship" value={this.state.relationaship} onChange={this.handleChange}>
                      <option value="single">Single</option>
                      <option value="married">Married</option>
                    </Input>*/
                    }
                    <SelectBox options={this.state.workStatus} fixed={this.props.fixed}/>
                  </div>
                </div>

                <div className="input-wrapper">
                  <label className="input-label">Nationality</label>
                  <div className="custom-selectbox-main">
                    {/*<Input type="select" className="custom-selectbox" name="nationality" value={this.state.nationality} onChange={this.handleChange}>
                      <option value="indian">Indian</option>
                      <option value="australian">Australian</option>
                    </Input>*/
                    }
                    <SelectBox options={this.state.workStatus} fixed={this.props.fixed}/>
                  </div>
                </div>
              </div>

              <Col md={{
                  size: 5,
                  offset: 1
                }}>
                <div className="input-wrapper">
                  <label className="input-label">Hobbies</label>
                  <div className="custom-selectbox-main">
                    {/*<Input type="select" className="custom-selectbox" name="hobbies" value={this.state.hobbies} onChange={this.handleChange}>
                      <option value="technologies">Technologies</option>
                      <option value="fishing">Fishing</option>
                      <option value="cooking">Cooking</option>
                      <option value="traveling">Traveling</option>
                    </Input>*/
                    }
                    <SelectBox options={this.state.workStatus} fixed={this.props.fixed}/>
                  </div>
                </div>

                <div className="input-wrapper">
                  <label className="input-label">Location</label>
                  <div className="custom-selectbox-main">
                    {/*<Input type="select" className="custom-selectbox" name="location" value={this.state.location} onChange={this.handleChange}>
                      <option value="delhi">Delhi</option>
                      <option value="chandigarh">Chandigarh</option>
                    </Input>*/
                    }
                    <SelectBox options={this.state.workStatus} fixed={this.props.fixed}/>
                  </div>
                </div>

                <div className="input-wrapper">
                  <label className="input-label">Additional Content</label>
                  <div className="custom-selectbox-main">
                    {/*<Input type="select" className="custom-selectbox" name="additional" value={this.state.additional} onChange={this.handleChange}>
                      <option value="additional">Additional</option>
                    </Input>*/
                    }
                    <SelectBox options={this.state.workStatus} fixed={this.props.fixed}/>
                  </div>
                </div>
              </Col>
              <div className="clearfix"></div>
            </div>
            <br/>
            <Col>
              <span className="filters-completed">Filters completed</span>
            </Col>
          </Col>
        </Col>
      </Col>
    </Row>);
  }
}

export default ResearchFilters;
