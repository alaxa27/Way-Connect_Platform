import React, { Component } from 'react';
import * as FontAwesome from 'react-icons/lib/fa';
import Eye from './view.png';
import Cart from './shopping_cart_ok.png';
import InputRange from 'react-input-range';
import 'react-input-range/lib/css/index.css';
import { Row, Col, Button, Input } from 'reactstrap';

class CreateCampaign extends Component {
  constructor(props) {
      super(props)
      this.state = {
        gender: 'male',
        proStatus: 'salary',
        nationality: 'indian',
        relationaship: 'married',
        additional: '',
        location: 'chandigarh',
        hobbies: 'traveling',
        value: { min: 18, max: 24},
      }
      this.handleInputChange = this.handleInputChange.bind(this);
      this.handleChange = this.handleChange.bind(this);
      this.handleMultiSelect = this.handleMultiSelect.bind(this);
  }

  handleInputChange(event) {
      this.setState({
        gender: event.target.value
      });
  }
  handleMultiSelect(selectedOption) {
      this.setState({ selectedOption });
  }
  handleChange(event) {
    const data = event.target;
    const value = data.value;
    const name = data.name;
    this.setState({
      [name]: value
    });
  }
  render() {
    const tableArray = [1, 2, 3, 4, 5, 6];
      const typologieList = tableArray.map(( list, i) => 
        <tr key={i} className={ i === 3 ? 'full-opacity' : null }>
          <td><label>Optician</label></td>
          <td><label><img src={Eye} alt="View" /><span style={{position: 'relative', left: -5, backgroundColor: '#dbdbdb'}}>$</span></label></td>
          <td><label>5 <span className="line-through">WC</span></label></td>
          <td><label><img src={Eye} alt="View" /></label></td>
          <td><label>3500</label></td>
          <td><label><FontAwesome.FaUser /> &nbsp; 12</label></td>
          <td><label><img src={Cart} alt="Cart" /> &nbsp; 500</label></td>
        </tr>
      )
    return (
      <div className="sub-page-wrapper animated fadeIn">
        <Row>
              <Col>
                <h2 className="way-heading" style={{fontSize: '24px'}}><FontAwesome.FaCircle className="yellow-circle" /> #1 Typologie list</h2>
                <Col>
                  <Col>
                    <table className="typology-table">
                      <tbody>
                        {typologieList}
                      </tbody>
                    </table>
                  </Col>
                </Col>
              </Col>
            </Row>
            <br/><br/>
            <Row>
              <Col>
                <h2 className="way-heading" style={{fontSize: '24px'}}><FontAwesome.FaCircle className="yellow-circle" /> #2 Research filter</h2>
                <Col><br/>
                  <Col md="5">
                    <label className="input-label">Gender</label>
                    <div className="gender-radio-buttons">
                      <Input type="radio" id="male" name="gender" value="male" checked={this.state.gender === 'male'} onChange={this.handleInputChange} />
                      <label htmlFor="male" className="pull-left">Male</label>
                      <Input type="radio" id="female" name="gender" value="female" checked={this.state.gender === 'female'} onChange={this.handleInputChange} />
                      <label htmlFor="female" className="pull-right">Female</label>
                      <div className="clearfix"></div>
                    </div>
                    <div className="input-wrapper">
                      <label className="input-label pull-left">Age</label>
                      <label className="age-title">{this.state.value.min}-{this.state.value.max}yo</label>
                      <div style={{paddingTop: 40}}>
                        <InputRange maxValue={100} minValue={0} value={this.state.value} onChange={value => this.setState({ value })} />
                      </div>
                    </div>
                  </Col>
                  <div className="clearfix"></div>
                  <Col>
                    <div className="row" style={{margin: 0}}>
                      <div className="col col-md-5">
                        <div className="input-wrapper">
                          <label className="input-label">Professional status</label>
                          <div className="custom-selectbox-main">
                            <Input type="select" className="custom-selectbox" name="proStatus" value={this.state.proStatus} onChange={this.handleChange}>
                              <option value="salary">Salary</option>
                              <option value="self_employed">Self Employed</option>
                            </Input>
                            <FontAwesome.FaArrowCircleODown className="custom-selectbox-arrow" />
                          </div>
                        </div>

                        <div className="input-wrapper">
                          <label className="input-label">Relationship status</label>
                          <div className="custom-selectbox-main">
                            <Input type="select" className="custom-selectbox" name="relationaship" value={this.state.relationaship} onChange={this.handleChange}>
                              <option value="single">Single</option>
                              <option value="married">Married</option>
                            </Input>
                            <FontAwesome.FaArrowCircleODown className="custom-selectbox-arrow" />
                          </div>
                        </div>

                        <div className="input-wrapper">
                          <label className="input-label">Nationality</label>
                          <div className="custom-selectbox-main">
                            <Input type="select" className="custom-selectbox" name="nationality" value={this.state.nationality} onChange={this.handleChange}>
                              <option value="indian">Indian</option>
                              <option value="australian">Australian</option>
                            </Input>
                            <FontAwesome.FaArrowCircleODown className="custom-selectbox-arrow" />
                          </div>
                        </div>
                      </div>

                      <Col md={{ size: 5, offset: 1}}>
                        <div className="input-wrapper">
                          <label className="input-label">Hobbies</label>
                          <div className="custom-selectbox-main">
                            <Input type="select" className="custom-selectbox" name="hobbies" value={this.state.hobbies} onChange={this.handleChange}>
                              <option value="technologies">Technologies</option>
                              <option value="fishing">Fishing</option>
                              <option value="cooking">Cooking</option>
                              <option value="traveling">Traveling</option>
                            </Input>
                            <FontAwesome.FaArrowCircleODown className="custom-selectbox-arrow" />
                          </div>
                        </div>

                        <div className="input-wrapper">
                          <label className="input-label">Location</label>
                          <div className="custom-selectbox-main">
                            <Input type="select" className="custom-selectbox" name="location" value={this.state.location} onChange={this.handleChange}>
                              <option value="delhi">Delhi</option>
                              <option value="chandigarh">Chandigarh</option>
                            </Input>
                            <FontAwesome.FaArrowCircleODown className="custom-selectbox-arrow" />
                          </div>
                        </div>

                        <div className="input-wrapper">
                          <label className="input-label">Additional Content</label>
                          <div className="custom-selectbox-main">
                            <Input type="select" className="custom-selectbox" name="additional" value={this.state.additional} onChange={this.handleChange}>
                              <option value="additional">Additional</option>
                            </Input>
                            <FontAwesome.FaArrowCircleODown className="custom-selectbox-arrow" />
                          </div>
                        </div>
                      </Col>
                      <div className="clearfix"></div>
                      <Col>
                        <Button className="submit-button">Submit</Button>
                      </Col>
                    </div>
                  </Col>
                </Col>
              </Col>
            </Row>
            <br/><br/>
      </div>
    )
  }
}
export default CreateCampaign;



