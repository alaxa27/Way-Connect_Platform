import React, { Component } from "react";
import PropTypes from "prop-types";
import {translate} from "react-i18next";
import { Progress, Button } from "reactstrap";
import { map } from "underscore";

class Aside extends Component {
  render() {
    const { t } = this.props;
    const history = [0,1,2,3,4,5,6,7,8,9];
    return (
      <aside className="aside-menu">
        <div className="aside-menu__top my-4 pb-4 mx-3">
          <div className="aside-menu__title">
            {t("walletManager.title")}
          </div>
          <div className="btn currency-icon">
            +<i className="fa fa-usd"></i>
          </div>
        </div>
        <div className="aside-menu__wallet">
          <div className="aside-menu__budget px-3 mb-4">
            <div className="aside-menu__budget-item" style={{flexGrow: "0.5", background: "orange"}}>
              <div className="aside-menu__budget-label ml-4">
                <div className="aside-menu__budget-label--small">
                  Budget total
                </div>
                <div className="aside-menu__budget-label--big">
                  4000 WC
                </div>
              </div>
            </div>
            <div className="aside-menu__budget-item" style={{flexGrow: "0.5", background: "grey"}}>
              <div className="aside-menu__budget-label ml-4">
                <div className="aside-menu__budget-label--small">
                  Budget total
                </div>
                <div className="aside-menu__budget-label--big">
                  4000 WC
                </div>
              </div>
            </div>
          </div>
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
        </div>
      </aside>
    );
  }
}

Aside.propTypes = {
  t: PropTypes.func
};

export default translate("translations")(Aside);
