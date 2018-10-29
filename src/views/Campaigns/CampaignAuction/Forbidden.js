import React from "react";
import {translate} from "react-i18next";
import PropTypes from "prop-types";

const Forbidden = ({ t, toggleCreditCampaignModal }) => (
  <div className="bid__forbidden p-3">
    <div className="bid__forbidden-wrapper"></div>
    <div className="bid__forbidden-info">
      <div className="bid__forbidden-icon mb-3">
        <i className="fa fa-exclamation-triangle" aria-hidden="true"></i>
      </div>
      <div className="bid__forbidden-title mb-5">
        {t("campaignAuction.bid.notAvailable")}
      </div>
      <div className="bid__forbidden-action">
        <div className="btn bid-btn bid-btn--dark" onClick={() => {
                toggleCreditCampaignModal();
            }}>
          {t("campaignAuction.bid.creditCampaign")}
        </div>
      </div>
    </div>
  </div>
);

Forbidden.propTypes = {
  t: PropTypes.func,
  toggleCreditCampaignModal: PropTypes.func
};

export default translate("translations")(Forbidden);