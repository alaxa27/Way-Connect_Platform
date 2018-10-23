import React, { Component } from "react";
import PropTypes from "prop-types";
import {translate} from "react-i18next";
import { map } from "underscore";
import ScrollArea from "react-scrollbar";
import {compose} from "recompose";
import {connect} from "react-redux";
import { fetchWallet, fetchWalletTransactions } from "../../actions/walletActions";
import ReduxBlockUi from "react-block-ui/redux";
import { formatDate } from "../../services/DateFormatterService";

const mapStateToProps = state => ({
  fetching: state.wallet.fetching,
  error: state.wallet.error,
  wallet: state.wallet.wallet,
  transactions: state.wallet.transactions.items,
});

const mapDispatchToProps = dispatch => ({
  fetchWallet: () => dispatch(fetchWallet()),
  fetchWalletTransactions: () => dispatch(fetchWalletTransactions()),
});

class Aside extends Component {
  componentDidMount() {
    const { fetchWallet, fetchWalletTransactions } = this.props;
    fetchWallet();
    fetchWalletTransactions();
  }
  render() {
    const { t, wallet, transactions } = this.props;
    const env = process.env.STAGE;
    return (
      <ReduxBlockUi tag="div" block={["WALLET", "WALLET_TRANSACTIONS"]} unblock={["WALLET_FULFILLED", "WALLET_REJECTED", "WALLET_TRANSACTIONS_FULFILLED", "WALLET_TRANSACTIONS_REJECTED"]}>
        {env !== "production" ?
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
                {wallet.value === wallet.fixedValue ?
                  <div className="aside-menu__budget-item aside-menu__budget-item--active">
                    <div className="aside-menu__budget-label ml-4">
                      <div className="aside-menu__budget-label--small">
                        Budget total
                      </div>
                      <div className="aside-menu__budget-label--big">
                        {wallet.value} WC
                      </div>
                    </div>
                  </div>
                :
                  <React.Fragment>
                    <div className="aside-menu__budget-item aside-menu__budget-item--active">
                      <div className="aside-menu__budget-label ml-4">
                        <div className="aside-menu__budget-label--small">
                          Budget total
                        </div>
                        <div className="aside-menu__budget-label--big">
                          {wallet.value} WC
                        </div>
                      </div>
                    </div>
                    <div className="aside-menu__budget-item aside-menu__budget-item--inactive">
                      <div className="aside-menu__budget-label ml-4">
                        <div className="aside-menu__budget-label--small">
                          Budget immobilise
                        </div>
                        <div className="aside-menu__budget-label--big">
                          {wallet.fixedValue} WC
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
                  {transactions.length > 0 ?
                    map(transactions, (item, key) => {
                      return (
                        <div key={key} className="aside-menu__transactions-item px-2 py-1 mb-2">
                          <div className="aside-menu__transactions-box--small">
                            <div>
                              Cash
                            </div>
                            <div>
                              {formatDate(item.created_at)}
                            </div>
                          </div>
                          <div className="aside-menu__transactions-box aside-menu__transactions-box--big">
                            {item.value} WC
                          </div>
                        </div>
                      );
                    })
                  :
                    <div>No history available</div>
                  }
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
        }
      </ReduxBlockUi>
    );
  }
}

Aside.propTypes = {
  t: PropTypes.func,
  fetchWallet: PropTypes.func,
  wallet: PropTypes.object,
  history: PropTypes.array,
  fetchWalletTransactions: PropTypes.func,
  transactions: PropTypes.array,
};

export default compose(connect(mapStateToProps, mapDispatchToProps), translate("translations"))(Aside);
