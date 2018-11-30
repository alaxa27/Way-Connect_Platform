import React from "react";
import PropTypes from "prop-types";
import {translate} from "react-i18next";

const Lock = ({ t, children }) => {
  return (
    <div className="lock">
      <div className="lock__wrapper">
        {children}
      </div>
      <div className="lock__text">
        <img src="../img/lock.png" alt="Logo" style={{width: "100px"}} />
        <div>
          {t("module.notConfigured")}
        </div>
      </div>
    </div>
  );
};

Lock.propTypes = {
  t: PropTypes.func,
  children: PropTypes.node,
};

export default translate("translations")(Lock);
