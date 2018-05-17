import React, {Component} from 'react';
import {Row, Col, Input} from 'reactstrap';
import InputRange from 'react-input-range';
import 'react-input-range/lib/css/index.css';
import * as FontAwesome from 'react-icons/lib/fa';

class ResearchFilters extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);

  }

  handleInputChange(event) {
    this.setState({gender: event.target.value});
  }

  handleChange(event) {
    const data = event.target;
    const value = data.value;
    const name = data.name;
    this.setState({[name]: value});
  }

  renderResearchFilters(show) {
    if (show) {
      return (<Row style={{
          width: '100%'
        }} className="animated fadeIn fadeOut">
        <Col><br/>
          <Col>
            <Col md="5">
              <label className="input-label">Gender</label>
              <div className="gender-radio-buttons">
                <Input type="radio" id="male" name="gender" value="male" checked={this.props.gender === 'male'} onChange={this.handleInputChange}/>
                <label htmlFor="male" className="pull-left">Male</label>
                <Input type="radio" id="female" name="gender" value="female" checked={this.props.gender === 'female'} onChange={this.handleInputChange}/>
                <label htmlFor="female" className="pull-right">Female</label>
                <div className="clearfix"></div>
              </div>
              <div className="input-wrapper">
                <label className="input-label pull-left">Age</label>
                <label className="age-title">{this.props.age.min}-{this.props.age.max}yo</label>
                <div style={{
                    paddingTop: 40
                  }}>
                  <InputRange maxValue={100} minValue={0} value={this.props.age} onChange={age => this.setState({age})}/>
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
                    <div className="custom-selectbox-main">
                      <Input type="select" className="custom-selectbox" name="proStatus" value={this.props.proStatus} onChange={this.handleChange}>
                        <option value="salary">Salary</option>
                        <option value="self_employed">Self Employed</option>
                      </Input>
                      <FontAwesome.FaArrowCircleODown className="custom-selectbox-arrow"/>
                    </div>
                  </div>

                  <div className="input-wrapper">
                    <label className="input-label">Relationship status</label>
                    <div className="custom-selectbox-main">
                      <Input type="select" className="custom-selectbox" name="relationaship" value={this.props.relationaship} onChange={this.handleChange}>
                        <option value="single">Single</option>
                        <option value="married">Married</option>
                      </Input>
                      <FontAwesome.FaArrowCircleODown className="custom-selectbox-arrow"/>
                    </div>
                  </div>

                  <div className="input-wrapper">
                    <label className="input-label">Nationality</label>
                    <div className="custom-selectbox-main">
                      <Input type="select" className="custom-selectbox" name="nationality" value={this.props.nationality} onChange={this.handleChange}>
                        <option value="indian">Indian</option>
                        <option value="australian">Australian</option>
                      </Input>
                      <FontAwesome.FaArrowCircleODown className="custom-selectbox-arrow"/>
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
                      <Input type="select" className="custom-selectbox" name="hobbies" value={this.props.hobbies} onChange={this.handleChange}>
                        <option value="technologies">Technologies</option>
                        <option value="fishing">Fishing</option>
                        <option value="cooking">Cooking</option>
                        <option value="traveling">Traveling</option>
                      </Input>
                      <FontAwesome.FaArrowCircleODown className="custom-selectbox-arrow"/>
                    </div>
                  </div>

                  <div className="input-wrapper">
                    <label className="input-label">Location</label>
                    <div className="custom-selectbox-main">
                      <Input type="select" className="custom-selectbox" name="location" value={this.props.location} onChange={this.handleChange}>
                        <option value="delhi">Delhi</option>
                        <option value="chandigarh">Chandigarh</option>
                      </Input>
                      <FontAwesome.FaArrowCircleODown className="custom-selectbox-arrow"/>
                    </div>
                  </div>

                  <div className="input-wrapper">
                    <label className="input-label">Additional Content</label>
                    <div className="custom-selectbox-main">
                      <Input type="select" className="custom-selectbox" name="additional" value={this.props.additional} onChange={this.handleChange}>
                        <option value="additional">Additional</option>
                      </Input>
                      <FontAwesome.FaArrowCircleODown className="custom-selectbox-arrow"/>
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
      </Row>)
    } else {
      return null;
    }
  }

  render() {
    return this.renderResearchFilters(this.props.filter)
  }
}

export default ResearchFilters;
