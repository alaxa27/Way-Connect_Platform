import React, { Component } from 'react';
import TypicalClientItem from "./TypicalClientItem";
import _ from "underscore";

class TypicalClientList extends Component {
  constructor(props) {
      super(props);
  }
  render() {
    const { properties } = this.props;
    return (
      <ul className="typical-client p-0 m-0 list-unstyled">
          {_.map(properties, (prop, key) => {
              return (
                  <TypicalClientItem
                      key={prop.id}
                      prop={prop}
                      last={key === properties.length - 1}
                  />
              );
          })}
      </ul>
    )
  }
}

export default TypicalClientList;
