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

const barOptions = {
  maintainAspectRatio: false,
  scales: {
    xAxes: [{
        gridLines: {
            display: false
        }
    }],
    yAxes: [{
        gridLines: {
            display: false
        }   
    }]
  }
};

class Affluence extends Component {
  render() {
    const { data } = this.props;
    return (
      <ReduxBlockUi tag="div" block="AFFLUENCE" unblock={["AFFLUENCE_FULFILLED", "AFFLUENCE_REJECTED"]}>
        <Card className="affluence-card">
          <CardBody>
            <Row>
              <Col>
                <CardTitle className="mb-0">{title}</CardTitle>
              </Col>
            </Row>
            <div className="chart-wrapper" style={{height: "380px", marginTop: "40px"}}>
              <Bar data={data} height={380} options={barOptions} />
            </div>
          </CardBody>
        </Card>
      </ReduxBlockUi>
    );
  }
}

Affluence.propTypes = {
    data: PropTypes.object
};

export default Affluence;
