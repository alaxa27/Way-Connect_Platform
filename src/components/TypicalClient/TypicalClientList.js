import React, { Component } from "react";
import PropTypes from "prop-types";
import TypicalClientItem from "./TypicalClientItem";
import _ from "underscore";

class TypicalClientList extends Component {
  static propTypes = {
    data: PropTypes.array
  }
  constructor(props) {
      super(props);
  }
  render() {
    const { data } = this.props;
    return (
      <ul className="typical-client p-0 m-0 list-unstyled">
        {_.map(data, (prop, key) => {
              return (
                <TypicalClientItem
                      key={prop.id}
                      prop={prop}
                      last={key === data.length - 1}
                  />
              );
          })}
      </ul>
    );
  }
}

export default TypicalClientList;
