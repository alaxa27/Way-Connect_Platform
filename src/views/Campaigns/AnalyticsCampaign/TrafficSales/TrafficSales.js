import React, {Component} from "react";
import {
  Row,
  Col,
  Progress,
  Card,
  CardHeader,
  CardBody
} from "reactstrap";
import {translate} from "react-i18next";
import PropTypes from "prop-types";

class TrafficSales extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { title, t } = this.props;
    return (<Card>
      <CardHeader>
        {title}
      </CardHeader>
      <CardBody>
        <Row>
          <Col>
            <ul className="horizontal-bars traffic-bars">
              <li>
                <div className="title">
                  {t("general.monday")}
                </div>
                <div className="bars">
                  <Progress className="progress-xs" color="info" value="34"/>
                  <Progress className="progress-xs" color="danger" value="78"/>
                </div>
              </li>
              <li>
                <div className="title">
                  {t("general.tuesday")}
                </div>
                <div className="bars">
                  <Progress className="progress-xs" color="info" value="56"/>
                  <Progress className="progress-xs" color="danger" value="94"/>
                </div>
              </li>
              <li>
                <div className="title">
                  {t("general.wednesday")}
                </div>
                <div className="bars">
                  <Progress className="progress-xs" color="info" value="12"/>
                  <Progress className="progress-xs" color="danger" value="67"/>
                </div>
              </li>
              <li>
                <div className="title">
                  {t("general.thursday")}
                </div>
                <div className="bars">
                  <Progress className="progress-xs" color="info" value="43"/>
                  <Progress className="progress-xs" color="danger" value="91"/>
                </div>
              </li>
              <li>
                <div className="title">
                  {t("general.friday")}
                </div>
                <div className="bars">
                  <Progress className="progress-xs" color="info" value="22"/>
                  <Progress className="progress-xs" color="danger" value="73"/>
                </div>
              </li>
              <li>
                <div className="title">
                  {t("general.saturday")}
                </div>
                <div className="bars">
                  <Progress className="progress-xs" color="info" value="53"/>
                  <Progress className="progress-xs" color="danger" value="82"/>
                </div>
              </li>
              <li>
                <div className="title">
                  {t("general.sunday")}
                </div>
                <div className="bars">
                  <Progress className="progress-xs" color="info" value="9"/>
                  <Progress className="progress-xs" color="danger" value="69"/>
                </div>
              </li>
            </ul>
          </Col>
        </Row>
      </CardBody>
    </Card>);
  }
}

TrafficSales.propTypes = {
  title: PropTypes.string,
  t: PropTypes.func,
};

export default translate("translations")(TrafficSales);
