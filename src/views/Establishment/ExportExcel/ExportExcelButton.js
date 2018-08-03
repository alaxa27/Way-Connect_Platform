import React, { Component } from "react";
import {
    Button
} from "reactstrap";
import * as FontAwesome from "react-icons/lib/fa";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import * as actions from "../../../actions/establishmentActions";

const mapDispatchToProps = dispatch => ({
  downloadEstablishment: (payload) => dispatch(actions.downloadEstablishment(payload))
});

class ExportExcelButton extends Component {
  render() {
    const { title, establishmentId, downloadEstablishment } = this.props;
    return (
      <Button 
        className="bid-btn bid-btn--fixed d-flex align-items-center justify-content-center" 
        onClick={() => downloadEstablishment(establishmentId)}
      >
        <FontAwesome.FaFileExcelO size={28} className="mr-2" />
        {title}
      </Button>
    );
  }
}

ExportExcelButton.propTypes = {
  action: PropTypes.func,
  establishmentId: PropTypes.string,
  t: PropTypes.func,
  title: PropTypes.string,
  downloadEstablishment: PropTypes.func,
};

export default connect(null, mapDispatchToProps)(ExportExcelButton);
