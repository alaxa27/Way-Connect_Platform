import React from "react";
import {Row, Col} from "reactstrap";
import moment from "moment";
import {translate} from "react-i18next";
import Countdown from "../Countdown";
import PropTypes from "prop-types";

const launchDate = moment("2018-09-28");

const ComingSoon = ({ t }) => {
  return (
    <div className="modal-outline">
      <div className="modal-body">
        <div className="modal-body__heading">
          <img src="../img/shiba-01.png" alt="Logo" className="modal-body__img" />
          <Row>
            <Col xs="12" sm={{size: 10, offset: 1}}>
              <div className="modal-body__title modal-body__title--big mb-3">
                {t("campaigns.comingSoon.title")}
              </div>
            </Col>
            <Col xs="12" sm={{size: 10, offset: 1}}>
              <div className="modal-body__title">
                {t("campaigns.comingSoon.description")}
              </div>
            </Col>
          </Row>
        </div>
        <div className="modal-body__content my-4">
          <Countdown
          date={launchDate.toString()}
          onEndCountdown={ (count) => console.log(count) }
          displayText={{
            Days: t("campaigns.comingSoon.countDown.days"),
            Hours: t("campaigns.comingSoon.countDown.hours"),
            Min: t("campaigns.comingSoon.countDown.minutes"),
            Sec: t("campaigns.comingSoon.countDown.seconds"),
          }}
        />
        </div>
      </div>
    </div>
  );
};

ComingSoon.propTypes = {
  t: PropTypes.func,
};

export default translate("translations")(ComingSoon);
