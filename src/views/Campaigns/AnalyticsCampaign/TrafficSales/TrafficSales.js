import React, {Component} from "react";
import {
  Row,
  Col,
  Progress,
  Card,
  CardHeader,
  CardBody
} from "reactstrap";

const title = "Traffic & Sales";

class TrafficSales extends Component {
  constructor(props) {
    super(props);
  }
  render() {
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
                  Monday
                </div>
                <div className="bars">
                  <Progress className="progress-xs" color="info" value="34"/>
                  <Progress className="progress-xs" color="danger" value="78"/>
                </div>
              </li>
              <li>
                <div className="title">
                  Tuesday
                </div>
                <div className="bars">
                  <Progress className="progress-xs" color="info" value="56"/>
                  <Progress className="progress-xs" color="danger" value="94"/>
                </div>
              </li>
              <li>
                <div className="title">
                  Wednesday
                </div>
                <div className="bars">
                  <Progress className="progress-xs" color="info" value="12"/>
                  <Progress className="progress-xs" color="danger" value="67"/>
                </div>
              </li>
              <li>
                <div className="title">
                  Thursday
                </div>
                <div className="bars">
                  <Progress className="progress-xs" color="info" value="43"/>
                  <Progress className="progress-xs" color="danger" value="91"/>
                </div>
              </li>
              <li>
                <div className="title">
                  Friday
                </div>
                <div className="bars">
                  <Progress className="progress-xs" color="info" value="22"/>
                  <Progress className="progress-xs" color="danger" value="73"/>
                </div>
              </li>
              <li>
                <div className="title">
                  Saturday
                </div>
                <div className="bars">
                  <Progress className="progress-xs" color="info" value="53"/>
                  <Progress className="progress-xs" color="danger" value="82"/>
                </div>
              </li>
              <li>
                <div className="title">
                  Sunday
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
export default TrafficSales;
