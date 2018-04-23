import React, { Component } from 'react';
import * as FontAwesome from 'react-icons/lib/fa';
import * as MdIconPack from 'react-icons/lib/md';
import { Container, Row, Col, Button, Input, TabContent, TabPane, Nav, NavItem, NavLink } from 'reactstrap';
import Eye from './view.png';
import Cart from './shopping_cart_ok.png';
import InputRange from 'react-input-range';
import 'react-input-range/lib/css/index.css';
import classnames from 'classnames';
import DropzoneComponent from 'react-dropzone-component';                                                                                                                                                                                                                         

class Upload extends Component {
  constructor(props) {
      super(props)
      this.state = {
        filter: false,
        activeTab: '1',
        age: { min: 18, max: 24}
      }

      this.showFilter = this.showFilter.bind(this);
      this.toggle = this.toggle.bind(this);
  }

  showFilter(){
    this.setState({
      filter: !this.state.filter
    })
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }


  render() {
    const componentConfig = {
        iconFiletypes: ['.mp4', '.m4v', '.avi', '.flv'],
        showFiletypeIcon: true,
        postUrl: '/uploadHandler'
    };
    var djsConfig = { autoProcessQueue: false }
    var eventHandlers = { addedfile: (file) => console.log(file) }                                                                                                            
    
    return (
      <div className="sub-page-wrapper animated fadeIn">

        <div className="custom-breadcrumb-wrapper">
          <div className="custom-breadcrumb">
            <Row style={{width: '100%'}}>
              <Col xs="4" md="3">
                <label className="bidding-status-label" style={{color: '#cbcbcb'}}>
                  <FontAwesome.FaCircle />
                  Bidding
                </label>
              </Col>
              <Col xs="4" md="3">
                <label className="bidding-status-label" style={{color: '#989898'}}>
                  <FontAwesome.FaCircle />
                  In Progress
                </label>
              </Col>
              <Col xs="4" md="3">
                <label className="bidding-status-label" style={{color: '#cbcbcb'}}>
                  <FontAwesome.FaCircle />
                  Delivered
                </label>
              </Col>
            </Row>
          </div>
          <div className="custom-breadcrumb">
            <Row style={{width: '100%'}}>
              <Col>
                <label className="bidding-status-label" style={{color: '#989898'}} onClick={this.showFilter}>
                  <FontAwesome.FaCircle />
                  Filters fixed
                  {this.state.filter ? <FontAwesome.FaAngleDown /> : <FontAwesome.FaAngleLeft />}
                </label>
              </Col>
            </Row>

            {this.state.filter ? 
              <Row style={{width: '100%'}} className="animated fadeIn fadeOut">
                <Col><br/>
                  <Col>
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
                        <label className="age-title">{this.state.age.min}-{this.state.age.max}yo</label>
                        <div style={{paddingTop: 40}}>
                          <InputRange maxValue={100} minValue={0} value={this.state.age} onChange={age => this.setState({ age })} />
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
                      </div>
                      <br/>
                      <Col>
                        <span className="filters-completed">Filters completed</span>
                      </Col>
                    </Col>
                  </Col>
                </Col>
              </Row>
            :
              null
            }

          </div>
        </div>

        <div style={{marginTop: 20}}>
          <Row>
            
            <Col>
              <div className="video-uploading-tabs">
                <Nav tabs>
                  <NavItem>
                    <NavLink
                      className={classnames({ active: this.state.activeTab === '1' })}
                      onClick={() => { this.toggle('1'); }}
                    >
                      Video
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className={classnames({ active: this.state.activeTab === '2' })}
                      onClick={() => { this.toggle('2'); }}
                    >
                      Survey
                    </NavLink>
                  </NavItem>
                </Nav>
                <TabContent activeTab={this.state.activeTab}>
                  <TabPane tabId="1">
                    <Row>
                      <Col>
                        {/*<DropzoneComponent config={componentConfig}
                                               eventHandlers={eventHandlers}
                                               djsConfig={djsConfig} />*/}
                      </Col>
                    </Row>
                  </TabPane>
                  <TabPane tabId="2">
                    <Row>
                      <Col>
                        <Col>
                          <h2 className="way-heading" style={{fontSize: '24px', marginBottom: 0}}>Define a formulary</h2>
                          <div className="sep">&nbsp;</div>
                        </Col>

                        <Col className="formulary-input-wrap">
                          <label>Name your formulary</label>
                          <Input type="text" name="formularyName" />
                        </Col>

                        <Col className="formulary-input-wrap">
                          <label>Question 1</label>
                          <Input type="text" name="question1" />
                        </Col>

                        <Col xs="12" md={{size: 6, offset: 6}} className="formulary-input-wrap">
                          <Input type="text" name="answer1" />
                          <Button className="add-btn"><MdIconPack.MdAddCircleOutline /> add an answer</Button>
                        </Col>

                        <Col><div className="sep">&nbsp;</div></Col>

                        <Col className="formulary-input-wrap">
                          <label>Question 1</label>
                          <Input type="text" name="question1" />
                        </Col>

                        <Col xs="12" md={{size: 6, offset: 6}} className="formulary-input-wrap">
                          <Input type="text" name="answer1" />
                          <Button className="add-btn"><MdIconPack.MdAddCircleOutline /> add an answer</Button>
                        </Col>

                        <Col><div className="sep">&nbsp;</div></Col>

                        <Col className="formulary-input-wrap">
                          <Button className="add-btn"><MdIconPack.MdAddCircleOutline /> add an question</Button>
                        </Col>

                        <Col>
                          <Button className="bid-btn button-radius" style={{maxWidth: 200}}>Submit</Button>
                        </Col>

                      </Col>
                    </Row>
                  </TabPane>
                </TabContent>
              </div>
            </Col>

          </Row>
        </div>
        <br/>
      </div>
    )
  }
}
export default Upload;
