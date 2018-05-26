import React, {Component} from "react";
import {
  Row,
  Col,
} from "reactstrap";

class ConfigVideo extends Component {
  constructor(props) {
    super(props);
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
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
              </div>
            </Col>
          </Row>
          <Row>
            <Col lg={{
                  size: 4,
                  offset: 4
                }}>
              <div className="video__file-upload">
                <button className="bid-btn bid-btn-dark">
                    Upload a file (mp4, m4v, avi, flv)
                </button>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}
export default ConfigVideo;
