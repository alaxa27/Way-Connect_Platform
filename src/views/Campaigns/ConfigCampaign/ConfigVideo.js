import React, {Component} from "react";
import {
  Row,
  Col,
  Button,
} from "reactstrap";
import {translate} from "react-i18next";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {uploadVideo} from "../../../actions/campaignActions";
import {compose} from "recompose";
import { Redirect } from "react-router-dom";

const mapStateToProps = state => ({
  videoUpload: state.campaign.videoUpload
});

const mapDispatchToProps = dispatch => ({
  uploadVideo: payload => dispatch(uploadVideo(payload)),
});

class ConfigVideo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      minAllowedLength: 15,
      lengthError: null
    };
  }

  handleVideoUpload = (e) => {
    const { campaignId, uploadVideo } = this.props;

    const file = e.target.files[0];
    const that = this;

    const formData = new FormData();
    formData.append("video", file);
    formData.append("campaign", campaignId);
    formData.append("redirection", "");

    var video = document.createElement("video");
    video.preload = "metadata";

    video.onloadedmetadata = function() {
      window.URL.revokeObjectURL(video.src);
      var duration = video.duration;
      if(duration < that.state.minAllowedLength) {
        that.setState({
          lengthError: `Video should have length more than ${that.state.minAllowedLength} seconds`
        });
      } else {
        uploadVideo(formData);
      }
    };
    video.src = URL.createObjectURL(file);
  }

  handleTriggerVideoUpload = () => {
    document.getElementById('fileInput').click();
  }

  render() {
    const { t, videoUpload, campaignId } = this.props;
    if(videoUpload.success) {
      return <Redirect to={`/campaigns/${campaignId}/auction`} />;
    }
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
      <div>
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
                  <button className="bid-btn bid-btn--dark" onClick={this.handleTriggerVideoUpload}>
                    {t("configCampaign.video.upload.title")}
                  </button>
                  {this.state.lengthError &&
                    <div className="alert alert-danger">
                      {this.state.lengthError}
                    </div>
                  }
                  <input id="fileInput" type="file" onChange={this.handleVideoUpload} className="d-none"/>
                </div>
              </Col>
            </Row>
          </div>
        </div>
        <Row>
          <Col>
            <div className="border-top text-right px-3">
              <Button className="bid-btn">{t("configCampaign.tabs.submit.title")}</Button>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}
ConfigVideo.propTypes = {
  t: PropTypes.func,
  campaignId: PropTypes.string,
  videoUpload: PropTypes.object,
  uploadVideo: PropTypes.func,
};

export default compose(connect(mapStateToProps, mapDispatchToProps), translate("translations"))(ConfigVideo);
