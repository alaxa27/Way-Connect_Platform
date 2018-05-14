import React, { Component } from 'react';
import TypicalClientItem from "./TypicalClientItem";

class TypicalClientList extends Component {
  constructor(props) {
      super(props);
  }
  render() {
    const { colors } = this.props;
    return (
      <ul className="typical-client p-0 m-0 list-unstyled">
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
    )
  }
}

export default TypicalClientList;
