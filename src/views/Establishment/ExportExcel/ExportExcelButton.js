import React, { Component } from "react";
import {
    Button
} from "reactstrap";
import * as FontAwesome from "react-icons/lib/fa";
import PropTypes from "prop-types";

const title = "Export Excel";

class ExportExcelButton extends Component {
  render() {
    const { action } = this.props;
    return (
      <Button 
        className="bid-btn d-flex align-items-center justify-content-center" 
        style={{width: "250px", fontSize: "18px", marginTop: 25}}
        onClick={() => action()}
      >
        <FontAwesome.FaFileExcelO size={28} className="mr-2" />
        {title}
      </Button>
    );
  }
}

ExportExcelButton.propTypes = {
  action: PropTypes.func,
};

export default ExportExcelButton;
