import React from "react";
import {Row, Col} from "reactstrap";
import {translate} from "react-i18next";
import Countdown from "../Countdown";
import PropTypes from "prop-types";

const ComingSoon = ({ t, title, description, launchDate, minified }) => {
  return (
    minified ?
      <div className="modal-outline modal-outline--minified">
        <div className="modal-body modal-body--transparent">
          <div className="modal-body__heading">
            <div className="modal-body__title">
              {title}
            </div>
          </div>
        </div>
      </div>
    :
      <div className="modal-outline">
        <div className="modal-body">
          <div className="modal-body__heading">
            <img src="../img/shiba-01.png" alt="Logo" className="modal-body__img" />
            <Row>
              <Col xs="12" sm={{size: 10, offset: 1}}>
                <div className="modal-body__title modal-body__title--big mb-3">
                  {title}
                </div>
              </Col>
              <Col xs="12" sm={{size: 10, offset: 1}}>
                <div className="modal-body__title">
                  {description}
                </div>
              </Col>
            </Row>
          </div>
          <div className="modal-body__content my-4">
            <Countdown
              date={launchDate.toString()}
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
  title: PropTypes.string,
  description: PropTypes.string,
  launchDate: PropTypes.object,
  minified: PropTypes.bool
};

export default translate("translations")(ComingSoon);
