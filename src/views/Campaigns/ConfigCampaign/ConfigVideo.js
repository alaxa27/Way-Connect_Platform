import React, {Component} from "react";
import {
  Row,
  Col,
  Button,
  Input,
  FormGroup, 
  Label, 
  FormText,
  Form
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
    this.handleVideoUpload = this.handleVideoUpload.bind(this);
  }

  handleVideoUpload(e) {
    const { campaignId, uploadVideo } = this.props;
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("video", file);
    formData.append("campaign", campaignId);
    formData.append("redirection", "");
    uploadVideo(formData);
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
                <Form className="mt-3" encType="multipart/form-data">
                  <FormGroup>
                    <Label for="phone">Phone number</Label>
                    <Input type="text" name="phone" id="phone" placeholder="Enter your phone" />
                  </FormGroup>
                  <FormGroup>
                    <Label for="exampleFile" sm={2}>File</Label>
                    <Col sm={10}>
                      <Input type="file" name="file" id="exampleFile" onChange={this.handleVideoUpload} />
                      <FormText color="muted">
                        {'This is some placeholder block-level help text for the above input. It is a bit lighter and easily wraps to a new line.'}
                      </FormText>
                    </Col>
                  </FormGroup>
                </Form>
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
