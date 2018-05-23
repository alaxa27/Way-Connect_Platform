import React, { Component } from "react";
import * as FontAwesome from "react-icons/lib/fa";
import * as MdIconPack from "react-icons/lib/md";
import { Container, Row, Col, Button, Input, TabContent, TabPane, Nav, NavItem, NavLink } from "reactstrap";
import Eye from "./view.png";
import Cart from "./shopping_cart_ok.png";
import InputRange from "react-input-range";
import "react-input-range/lib/css/index.css";
import classnames from "classnames";
import DropzoneComponent from "react-dropzone-component";

class ConfigCampaign extends Component {
  constructor(props) {
      super(props);
      this.state = {
        activeTab: "1",
      };

      this.toggle = this.toggle.bind(this);
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
        iconFiletypes: [".mp4", ".m4v", ".avi", ".flv"],
        showFiletypeIcon: true,
        postUrl: "/uploadHandler"
    };
    var djsConfig = { autoProcessQueue: false };
    var eventHandlers = { addedfile: (file) => console.log(file) };

    return (
      <div className="sub-page-wrapper animated fadeIn">

        <div style={{marginTop: 20}}>
          <Row>

            <Col>
              <div className="video-uploading-tabs">
                <Nav tabs>
                  <NavItem>
                    <NavLink
                      className={classnames({ active: this.state.activeTab === "1" })}
                      onClick={() => { this.toggle("1"); }}
                    >
                      Video
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className={classnames({ active: this.state.activeTab === "2" })}
                      onClick={() => { this.toggle("2"); }}
                    >
                      Survey
                    </NavLink>
                  </NavItem>
                </Nav>
                <TabContent activeTab={this.state.activeTab}>
                  <TabPane tabId="1" style={{padding: 0}}>
                    {/*<DropzoneComponent config={componentConfig}
                                             eventHandlers={eventHandlers}
                                             djsConfig={djsConfig} />*/}
                    <div className="video text-center">
                      <div className="container-fluid">
                        <Row>
                          <Col>
                            <img src="../img/video-size-01.png" alt="Image" className="video__image" />
                          </Col>
                        </Row>
                        <Row>
                          <Col lg={{size: 8, offset: 2}}>
                            <div className="video__teaser">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
                            </div>
                          </Col>
                        </Row>
                        <Row>
                          <Col lg={{size: 4, offset: 4}}>
                            <div className="video__file-upload">
                              <button className="bid-btn bid-btn-dark">
                                  Upload a file (mp4, m4v, avi, flv)
                              </button>
                            </div>
                          </Col>
                        </Row>
                      </div>
                    </div>
                  </TabPane>
                  <TabPane tabId="2" style={{padding: 0}}>
                    <Row>
                      <Col>
                        <Col>
                          <h2 className="way-heading" style={{fontSize: "24px", marginBottom: 0, marginTop: "25px"}}>Define a formulary</h2>
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
                          <Button className="add-btn"><MdIconPack.MdAddCircleOutline /> add a question</Button>
                        </Col>

                      </Col>
                    </Row>
                  </TabPane>

                  <Col className="text-right border-top">
                    <Button className="bid-btn" style={{maxWidth: 200}}>Submit</Button>
                  </Col>

                </TabContent>
              </div>
            </Col>

          </Row>
        </div>
        <br/>
      </div>
    );
  }
}
export default ConfigCampaign;
