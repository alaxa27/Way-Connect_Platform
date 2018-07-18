import React, { Component } from "react";


class Aside extends Component {
  render() {
    return (
      <aside className="aside-menu text-center">
        <div className="aside-menu__title aside-menu__title--colored mt-4">
          Wallet Manager
        </div>
        <div className="aside-menu__coming-soon">
          <img src="../img/shiba-01.png" alt="Logo" className="modal-body__img" />
          <div className="aside-menu__title aside-menu__title--big mb-3">
            Coming Soon
          </div>
          <div className="aside-menu__title">
            You will soon be able to create your own advertising campaign.
          </div>
        </div>
      </aside>
    );
  }
}

export default Aside;
