import React, {Component} from "react";
import * as MdIconPack from "react-icons/lib/md";
import {
  Row,
  Col,
  Button,
  Input,
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";
import classnames from "classnames";
import ConfigVideo from "./ConfigVideo";
import ConfigFormulary from "./ConfigFormulary";

class ConfigCampaign extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: "1"
    };
    this.toggle = this.toggle.bind(this);
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({activeTab: tab});
    }
  }

  render() {
    const componentConfig = {
      iconFiletypes: [
        ".mp4", ".m4v", ".avi", ".flv"
      ],
      showFiletypeIcon: true,
      postUrl: "/uploadHandler"
    };
    var djsConfig = {
      autoProcessQueue: false
    };
    var eventHandlers = {
      addedfile: (file) => console.log(file)
    };

    return (<div className="sub-page-wrapper animated fadeIn">

      <div style={{
          marginTop: 20
        }}>
        <Row>

          <Col>
            <div className="video-uploading-tabs">
              <Nav tabs>
                <NavItem>
                  <NavLink className={classnames({
                      active: this.state.activeTab === "1"
                    })} onClick={() => {
                      this.toggle("1");
                    }}>
                    Video
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className={classnames({
                      active: this.state.activeTab === "2"
                    })} onClick={() => {
                      this.toggle("2");
                    }}>
                    Survey
                  </NavLink>
                </NavItem>
              </Nav>
              <TabContent activeTab={this.state.activeTab}>
                <TabPane tabId="1" style={{
                    padding: 0
                }}>
                  <ConfigVideo/>
                </TabPane>

                <TabPane tabId="2" style={{
                    padding: 0
                  }}>
                  <ConfigFormulary/>
                </TabPane>

                <Col className="text-right border-top">
                  <Button className="bid-btn" style={{
                      maxWidth: 200
                    }}>Submit</Button>
                </Col>

              </TabContent>
            </div>
          </Col>

        </Row>
      </div>
      <br/>
    </div>);
  }
}
export default ConfigCampaign;
