import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  Media
} from "reactstrap";

class TypicalClientImage extends Component {
  static propTypes = {
    width: PropTypes.number,
    height: PropTypes.number
  }
  render() {
    const { width, height } = this.props;
    return (
      <Media
          style={{
            width: width,
            height: height,
            background: "#f0f3f5"
          }}
          className="p-3"
          object
          src="img/user-portrait.png"
          alt="Generic placeholder image"
      />
    );
  }
}

export default TypicalClientImage;
