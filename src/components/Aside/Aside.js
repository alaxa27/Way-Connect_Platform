import React, { Component } from "react";
import PropTypes from "prop-types";
import {translate} from "react-i18next";
import { Progress, Button } from "reactstrap";
import { map } from "underscore";
import ScrollArea from 'react-scrollbar';

class Aside extends Component {
  render() {
    const { t } = this.props;
    const history = [0,1,2,3,4,5,6,7,8,9];
    const budget = {
      total: 4000,
      immobilise: 4000
    };
    const env = process.env.NODE_ENV;
    return (
      env === "development" ?
        <aside className="aside-menu">
          <div className="aside-menu__top my-4 pb-4 mx-3">
            <div className="aside-menu__title aside-menu__title--colored">
              Wallet manager
            </div>
            <div className="btn currency-icon">
              +<i className="fa fa-usd"></i>
            </div>
          </div>
          <div className="aside-menu__wallet">
            <div className="aside-menu__budget px-3 mb-4">
              {budget.total === budget.immobilise ?
                <div className="aside-menu__budget-item" style={{flexGrow: "1", background: "grey"}}>
                  <div className="aside-menu__budget-label ml-4">
                    <div className="aside-menu__budget-label--small">
                      Budget total
                    </div>
                    <div className="aside-menu__budget-label--big">
                      {budget.total} WC
                    </div>
                  </div>
                </div>
              :
                <React.Fragment>
                  <div className="aside-menu__budget-item" style={{flexGrow: "0.5", background: "orange"}}>
                    <div className="aside-menu__budget-label ml-4">
                      <div className="aside-menu__budget-label--small">
                        Budget total
                      </div>
                      <div className="aside-menu__budget-label--big">
                        {budget.total} WC
                      </div>
                    </div>
                  </div>
                  <div className="aside-menu__budget-item" style={{flexGrow: "0.5", background: "grey"}}>
                    <div className="aside-menu__budget-label ml-4">
                      <div className="aside-menu__budget-label--small">
                        Budget immobilise
                      </div>
                      <div className="aside-menu__budget-label--big">
                        {budget.immobilise} WC
                      </div>
                    </div>
                  </div>
                </React.Fragment>
              }
            </div>
            <ScrollArea
              speed={0.8}
              className="aside-menu__scrollable-area"
              horizontal={false}
            >
              <div className="aside-menu__transactions p-3">
                <div className="aside-menu__transactions-title mb-2">
                  Transaction history
                </div>
                {map(history, (item, key) => {
                  return (
                    <div key={key} className="aside-menu__transactions-item px-2 py-1 mb-2">
                      <div className="aside-menu__transactions-box--small">
                        <div>
                          Cash
                        </div>
                        <div>
                          25/08/2018 18:52
                        </div>
                      </div>
                      <div className="aside-menu__transactions-box aside-menu__transactions-box--big">
                        550 WC
                      </div>
                    </div>
                  );
                })}
              </div>
            </ScrollArea>
          </div>
        </aside>
      :
        <aside className="aside-menu text-center px-2">
          <div className="aside-menu__title aside-menu__title--colored mt-4">
            {t("walletManager.top")}
          </div>
          <div className="aside-menu__coming-soon">
            <img src="../img/shiba-01.png" alt="Logo" className="modal-body__img" />
            <div className="aside-menu__title aside-menu__title--big mb-3">
              {t("walletManager.title")}
            </div>
            <div className="aside-menu__title">
              {t("walletManager.subtitle")}
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
