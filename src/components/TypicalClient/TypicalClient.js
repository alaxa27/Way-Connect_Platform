import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  Card,
  CardHeader,
  CardBody,
  Media
} from "reactstrap";
import TypicalClientImage from "./TypicalClientImage";
import TypicalClientList from "./TypicalClientList";
import ReduxBlockUi from "react-block-ui/redux";

class TypicalClient extends Component {
  constructor(props) {
      super(props);
  }
  render() {
    const { data, title } = this.props;
    return (
      <ReduxBlockUi tag="div" block="TYPICAL_CUSTOMER" unblock={["TYPICAL_CUSTOMER_FULFILLED", "TYPICAL_CUSTOMER_REJECTED"]}>
        <Card className="typical-client-card">
          <CardHeader>
            {title}
          </CardHeader>
          <CardBody>
            <Media>
              <Media left>
                <TypicalClientImage
                    src={"img/user-portrait.png"}
                  />
              </Media>
              <Media className="pl-3" body>
                <TypicalClientList
                    data={data}
                  />
              </Media>
            </Media>
          </CardBody>
        </Card>
      </ReduxBlockUi>
    );
  }
}

TypicalClient.propTypes = {
    data: PropTypes.object,
    title: PropTypes.string,
};

export default TypicalClient;
