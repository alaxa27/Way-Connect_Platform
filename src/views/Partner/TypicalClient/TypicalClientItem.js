import React, { Component } from 'react';
import * as FontAwesome from 'react-icons/lib/fa';

class TypicalClientItem extends Component {
  render() {
    const { color, prop, value, last} = this.props;
    return (
      <li className="typical-client__item d-flex align-items-center">
        <div className="typical-client__color" style={{background: color}}></div>
        <div className={"typical-client__body d-flex align-items-center ml-2 py-1" + (last ? ' typical-client__body--last' : '')}>
          <div className="typical-client__prop">
              {prop}
          </div>
          <div className="typical-client__value text-right">
              {value}
          </div>
          <a href="#" className="typical-client__settings text-right pl-2">
            <FontAwesome.FaCog />
          </a>
        </div>
      </li>
    )
  }
}

export default TypicalClientItem;