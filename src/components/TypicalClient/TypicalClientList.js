import React, { Component } from "react";
import TypicalClientItem from "./TypicalClientItem";
import _ from "underscore";

class TypicalClientList extends Component {
  constructor(props) {
      super(props);
  }
  render() {
    const { data } = this.props;
    return (
      <ul className="typical-client p-0 m-0 list-unstyled">
        {_.map(data, (value, prop) => {
              return (
                <TypicalClientItem
                      key={prop}
                      title={prop}
                      value={value}
                  />
              );
          })}
      </ul>
    );
  }
}

export default TypicalClientList;
