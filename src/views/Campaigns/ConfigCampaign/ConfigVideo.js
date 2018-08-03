import React, {Component} from "react";
import {
  Row,
  Col,
} from "reactstrap";
import {translate} from "react-i18next";
import PropTypes from "prop-types";

class ConfigVideo extends Component {
  constructor(props) {
    super(props);
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
    return (
      <div className="video text-center">
        <div className="container-fluid">
          <Row>
            <Col>
              {/*<DropzoneComponent config={componentConfig}
                   eventHandlers={eventHandlers}
                   djsConfig={djsConfig} />*/
                  }
            </Col>
          </Row>
          <Row>
            <Col>
              <img src="../img/video-size-01.png" alt="Image" className="video__image"/>
            </Col>
          </Row>
          <Row>
            <Col lg={{
                  size: 8,
                  offset: 2
                }}>
              <div className="video__teaser">
                {t("configCampaign.video.description")}
              </div>
            </Col>
          </Row>
          <Row>
            <Col lg={{
                  size: 4,
                  offset: 4
                }}>
              <div className="video__file-upload">
                <button className="bid-btn bid-btn--dark">
                  {t("configCampaign.video.upload.title")}
                </button>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}
ConfigVideo.propTypes = {
  t: PropTypes.func,
};
export default translate("translations")(ConfigVideo);
