import React, { Component } from "react";
import PropTypes from "prop-types";
import {
    Row,
    Col,
    Card,
    CardBody,
    CardTitle,
} from "reactstrap";
import {Bar} from "react-chartjs-2";
import ReduxBlockUi from "react-block-ui/redux";

const title = "Affluence";

class Affluence extends Component {
  static propTypes = {
    data: PropTypes.object
  }
  render() {
    const { data } = this.props;
    return (
      <ReduxBlockUi tag="div" block="AFFLUENCE" unblock={["AFFLUENCE_FULFILLED", "AFFLUENCE_REJECTED"]}>
        <Card className="affluence-card">
          <CardBody>
            <Row>
              <Col>
                <CardTitle className="mb-0">{title}</CardTitle>
                <div className="small text-muted">November 2017</div>
              </Col>
            </Row>
            <div className="chart-wrapper" style={{height: "380px", marginTop: "40px"}}>
              <Bar data={data} height={380} options={{maintainAspectRatio: false}} />
            </div>
          </CardBody>
        </Card>
      </ReduxBlockUi>
    );
  }
}

export default Affluence;
