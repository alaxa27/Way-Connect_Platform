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
      this.state = {
        properties: [
            {
                id: 1,
                color: colors.gender,
                prop: 'Gender',
                value: 'Male',
                percentage: 10,
            },
            {
                id: 2,
                color: colors.age,
                prop: 'Age',
                value: 22,
                percentage: 25
            },
            {
                id: 3,
                color: colors.nationality,
                prop: 'Nationality',
                value: 'Tunisian',
                percentage: 50,
            },
            {
                id: 4,
                color: colors.profStatus,
                prop: 'Professional Status',
                value: 'Salary',
                percentage: 15,
            },
            {
                id: 5,
                color: colors.relStatus,
                prop: 'Relationship Status',
                value: 'Single',
                percentage: 78,
            },
        ]
      }
  }
  render() {
    return (
      <Card className="mb-md-0 typical-client-card">
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
                properties={this.state.properties}
              />
            </Media>
          </Media>
        </CardBody>
      </Card>
    )
  }
}

export default TypicalClient;
