import React, { Component } from "react";
import {
  Media
} from "reactstrap";

class TypicalClientImage extends Component {
  render() {
    const { width, height } = this.props;
    return (
      <Media style={{width: width, height: height}} object src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Generic placeholder image" />
    );
  }
}

export default TypicalClientImage;
