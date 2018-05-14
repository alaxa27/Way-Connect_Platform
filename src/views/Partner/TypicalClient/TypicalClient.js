import React, { Component } from 'react';
import * as FontAwesome from 'react-icons/lib/fa';
import {
  Card,
  CardHeader,
  CardBody,
  Media
} from 'reactstrap';
import TypicalClientImage from "./TypicalClientImage";
import TypicalClientList from "./TypicalClientList";

const title = "Client Type";

const colors = {
  gender: '#FC6600',
  age: '#FC6600',
  nationality: '#F9812A',
  profStatus: '#F9A602',
  relStatus: '#FFBF00'
};

class TypicalClient extends Component {
  constructor(props) {
      super(props);
  }
  render() {
    return (
      <Card>
        <CardHeader>
            {title}
        </CardHeader>
        <CardBody>
          <Media>
            <Media left href="#">
              <TypicalClientImage
                width={135}
                height={135}
              />
            </Media>
            <Media body style={{paddingLeft: '1.25rem'}}>
              <TypicalClientList
                colors={colors}
              />
            </Media>
          </Media>
        </CardBody>
      </Card>
    )
  }
}

export default TypicalClient;
