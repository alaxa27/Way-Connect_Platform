import React, { Component } from "react";
import PropTypes from "prop-types";
import {translate} from "react-i18next";

class Aside extends Component {
  render() {
    const { t } = this.props;
    return (
      <aside className="aside-menu text-center px-2">
        <div className="aside-menu__title aside-menu__title--colored mt-4">
          {t('walletManager.top')}
        </div>
        <div className="aside-menu__coming-soon">
          <img src="../img/shiba-01.png" alt="Logo" className="modal-body__img" />
          <div className="aside-menu__title aside-menu__title--big mb-3">
            {t('walletManager.title')}
          </div>
          <div className="aside-menu__title">
            {t('walletManager.subtitle')}
          </div>
        </div>
      </aside>
    );
  }
}

Aside.propTypes = {
  t: PropTypes.func
};

export default translate("translations")(Aside);
