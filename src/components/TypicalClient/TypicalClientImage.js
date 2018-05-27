import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  Media
} from "reactstrap";

class TypicalClientImage extends Component {
  render() {
    const { width, height, src } = this.props;
    return (
      <Media
          style={{
            width: width,
            height: height,
            background: "#f0f3f5"
          }}
          className="p-3"
          object
          src={src}
          alt="Generic placeholder image"
      />
    );
  }
}

TypicalClientImage.propTypes = {
    width: PropTypes.number,
    height: PropTypes.number,
    src: PropTypes.string
};

export default TypicalClientImage;
