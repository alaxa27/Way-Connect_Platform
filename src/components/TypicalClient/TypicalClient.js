import React, { Component } from 'react';
import {
  Card,
  CardHeader,
  CardBody,
  Media
} from 'reactstrap';
import TypicalClientImage from "./TypicalClientImage";
import TypicalClientList from "./TypicalClientList";

const title = "Client Type";

class TypicalClient extends Component {
  constructor(props) {
      super(props);
  }
  render() {
    const { data } = this.props;
    return (
      <Card className="typical-client-card">
        <CardHeader>
            {title}
        </CardHeader>
        <CardBody>
          <Media>
            <Media left href="#">
              <TypicalClientImage
                width={180}
                height={180}
              />
            </Media>
            <Media body style={{paddingLeft: '1.25rem'}}>
              <TypicalClientList
                data={data}
              />
            </Media>
          </Media>
        </CardBody>
      </Card>
    )
  }
}

export default TypicalClient;
