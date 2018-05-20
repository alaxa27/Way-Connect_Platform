import React, { Component } from "react";
import {
    Row,
    Col,
    Card,
    CardBody,
    CardTitle,
} from "reactstrap";
import {Bar} from "react-chartjs-2";

const barData = {
    labels: [
        "00h", "01h", "02h", "03h", "04h", "05h", "06h", "07h", "08h", "09h", "10h", "11h",
        "12h", "13h", "14h", "15h", "16h", "17h", "18h", "19h", "20h", "21h", "22h", "23h"
    ],
    datasets: [
        {
            label: "My First dataset",
            backgroundColor: "rgba(255,99,132,0.2)",
            borderColor: "rgba(255,99,132,1)",
            borderWidth: 1,
            hoverBackgroundColor: "rgba(255,99,132,0.4)",
            hoverBorderColor: "rgba(255,99,132,1)",
            data: [65, 59, 80, 81, 56, 55, 40]
        }
    ]
};

class Affluence extends Component {
  render() {
    return (
      <Card className="affluence-card">
        <CardBody>
          <Row>
            <Col>
              <CardTitle className="mb-0">Affluence</CardTitle>
              <div className="small text-muted">November 2017</div>
            </Col>
          </Row>
          <div className="chart-wrapper" style={{height: "380px", marginTop: "40px"}}>
            <Bar data={barData} height={380} options={{maintainAspectRatio: false}} />
          </div>
        </CardBody>
      </Card>
    );
  }
}

export default Affluence;
