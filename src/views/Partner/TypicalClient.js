import React, { Component } from 'react';
import * as FontAwesome from 'react-icons/lib/fa';
import {
  Card,
  CardHeader,
  CardBody,
  Media
} from 'reactstrap';
import TypicalClientItem from "./TypicalClientItem";
import TypicalClientImage from "./TypicalClientImage";

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
              <ul className="client-type-container p-0 m-0 list-unstyled">

                <TypicalClientItem
                  color={colors.gender}
                  prop={"Gender"}
                  value={"Male"}
                />

                <TypicalClientItem
                    color={colors.age}
                    prop={"Age"}
                    value={"22"}
                />

                <TypicalClientItem
                    color={colors.nationality}
                    prop={"Nationality"}
                    value={"Tunisian"}
                />

                <TypicalClientItem
                    color={colors.profStatus}
                    prop={"Professional Status"}
                    value={"Salary"}
                />

                <TypicalClientItem
                    color={colors.relStatus}
                    prop={"Relationship Status"}
                    value={"Single"}
                    last
                />

              </ul>
            </Media>
          </Media>
        </CardBody>
      </Card>
    )
  }
}

export default TypicalClient;
