import React from "react";
import {Row, Col} from "reactstrap";
import moment from "moment";

import Countdown from "../Countdown";

const launchDate = moment("2018-08-05");

const ComingSoon = () => {
  return (
    <div className="modal-outline">
      <div className="modal-body">
        <div className="modal-body__heading">
          <img src="../img/shiba-01.png" alt="Logo" className="modal-body__img" />
          <Row>
            <Col xs="12" sm={{size: 10, offset: 1}}>
              <div className="modal-body__title modal-body__title--big mb-3">
                Coming Soon
              </div>
            </Col>
            <Col xs="12" sm={{size: 10, offset: 1}}>
              <div className="modal-body__title">
                You will soon be able to create your own advertising campaign.
              </div>
            </Col>
          </Row>
        </div>
        <div className="modal-body__content my-4">
          <Countdown
          date={launchDate.toString()}
          onEndCountdown={ (count) => console.log(count) }
          displayText={{
            Days: "Days",
            Hours: "Hours",
            Min: "Minutes",
            Sec: "Seconds"
          }}
        />
        </div>
      </div>
    </div>
  );
};

ComingSoon.propTypes = {
};

export default ComingSoon;
