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

const title = "Client Type";
const clientImageDimensions = {
  width: 180,
  height: 180
};

class TypicalClient extends Component {
  constructor(props) {
      super(props);
  }
  render() {
    const { data } = this.props;
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
                    width={clientImageDimensions.width}
                    height={clientImageDimensions.height}
                    src={"img/user-portrait.png"}
                  />
              </Media>
              <Media body style={{paddingLeft: "1.25rem"}}>
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
    data: PropTypes.object
};

export default TypicalClient;
