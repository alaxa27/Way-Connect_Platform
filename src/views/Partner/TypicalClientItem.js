import React, { Component } from 'react';
import * as FontAwesome from 'react-icons/lib/fa';

class TypicalClientItem extends Component {
  render() {
    const { color, prop, value, last} = this.props;
    return (
      <li className="client-type-container__item d-flex align-items-center">
        <div className="client-type-container__color" style={{background: color}}></div>
        <div className={"client-type-container__body d-flex align-items-center ml-2 py-1" + (last ? ' client-type-container__body--last' : '')}>
          <div className="client-type-container__prop">
              {prop}
          </div>
          <div className="client-type-container__value text-right">
              {value}
          </div>
          <a href="#" className="client-type-container__settings text-right pl-2">
            <FontAwesome.FaCog />
          </a>
        </div>
      </li>
    )
  }
}

export default TypicalClientItem;