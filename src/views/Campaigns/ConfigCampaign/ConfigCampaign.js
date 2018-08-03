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
import {translate} from "react-i18next";
import PropTypes from "prop-types";

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
    const { t } = this.props;
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

    return (<div className="config-campaign sub-page-wrapper animated fadeIn">
      <Row className="my-4">
        <Col>
          <div className="tabs">
            <Nav tabs>
              <NavItem>
                <NavLink className={classnames({
                      active: this.state.activeTab === "1"
                    })} onClick={() => {
                      this.toggle("1");
                    }}>
                  {t("configCampaign.tabs.video.title")}
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className={classnames({
                      active: this.state.activeTab === "2"
                    })} onClick={() => {
                      this.toggle("2");
                    }}>
                  {t("configCampaign.tabs.survey.title")}
                </NavLink>
              </NavItem>
            </Nav>
            <TabContent activeTab={this.state.activeTab}>
              <TabPane tabId="1" className="p-0">
                <ConfigVideo/>
              </TabPane>

              <TabPane tabId="2" className="p-0">
                <ConfigFormulary/>
              </TabPane>

              <Col className="text-right border-top">
                <Button className="bid-btn">{t("configCampaign.tabs.submit.title")}</Button>
              </Col>

            </TabContent>
          </div>
        </Col>
      </Row>
    </div>);
  }
}
ConfigCampaign.propTypes = {
  t: PropTypes.func,
};
export default translate("translations")(ConfigCampaign);
