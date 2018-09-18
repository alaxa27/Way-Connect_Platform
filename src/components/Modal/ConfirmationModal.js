import React from "react";
import {translate} from "react-i18next";
import PropTypes from "prop-types";

const ConfirmationModal = ({ proceed, hide, t }) => {
  return (
    <div className="modal-outline">
      <div className="modal-body">
        <div className="modal-body__heading">
          Do you want to activate discount?
        </div>
        <div className="modal-body__content text-center my-4">
          <button className="modal-body__action modal-body__action--yes mr-2" onClick={proceed}>Yes</button>
          <button className="modal-body__action modal-body__action--no" onClick={hide}>No</button>
        </div>
      </div>
    </div>
  );
};

ConfirmationModal.propTypes = {
  t: PropTypes.func,
  proceed: PropTypes.func,
  hide: PropTypes.func
};

export default translate("translations")(ConfirmationModal);
