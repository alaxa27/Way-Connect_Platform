import React, { Component } from "react";
import PropTypes from "prop-types";

import {
  isEmpty,
  get,
} from "lodash";
import moment from "moment";
const langFormat = {
  en: {
    Days: "Days",
    Day: "Day",
    Hours: "Hours",
    Min: "Min",
    Sec: "Sec",
  },
  th: {
    Days: "วัน",
    Day: "วัน",
    Hours: "ชั่วโมง",
    Min: "นาที",
    Sec: "วินาที",
  },
};

class Countdown extends Component {
  constructor(props) {
    super(props);

    this.state = {
      days: 0,
      hours: 0,
      min: 0,
      sec: 0,
    };
  }

  componentDidMount() {
    // update every second
    this.interval = setInterval(() => {
      const date = this.calculateCountdown(moment(this.props.date).format());
      date ? this.setState(date) : this.stop();
    }, 1000);
  }

  componentWillUnmount() {
    this.stop();
  }

  calculateCountdown() {
    let diff = (Date.parse(new Date(endDate)) - Date.parse(new Date())) / 1000;

    // clear countdown when date is reached
    if (diff <= 0) return false;

    const timeLeft = {
      years: 0,
      days: 0,
      hours: 0,
      min: 0,
      sec: 0
    };

    // calculate time difference between now and expected date
    if (diff >= (365.25 * 86400)) { // 365.25 * 24 * 60 * 60
      timeLeft.years = Math.floor(diff / (365.25 * 86400));
      diff -= timeLeft.years * 365.25 * 86400;
    }
    if (diff >= 86400) { // 24 * 60 * 60
      timeLeft.days = Math.floor(diff / 86400);
      diff -= timeLeft.days * 86400;
    }
    if (diff >= 3600) { // 60 * 60
      timeLeft.hours = Math.floor(diff / 3600);
      diff -= timeLeft.hours * 3600;
    }
    if (diff >= 60) {
      timeLeft.min = Math.floor(diff / 60);
      diff -= timeLeft.min * 60;
    }
    timeLeft.sec = diff;

    return timeLeft;
  }

  stop() {
    clearInterval(this.interval);
    const {
      onEndCountdown
    } = this.props;
    onEndCountdown(0);
  }

  addLeadingZeros(value, setDoubleZero) {
    value = String(value);
    if(setDoubleZero === true){
      while (value.length < 2) {
        value = "0" + value;
      }
    }
    return value;
  }

  render() {
    const countDown = this.state;
    const {
      lang,
      displayText,
      lastTextTime,
      beforeTextTime,
      isDayDoubleZero,
      isHoursDoubleZero,
      isMinDoubleZero,
      isSecDoubleZero,
    } = this.props;

    const getLangFormat = isEmpty(displayText) ? langFormat[lang] : displayText;

    return (
      <div className="react-countdown-container">
        <div className="react-countdown-box">
          <div className="react-countdown-element">
            <div className="react-countdown-time-text">{countDown.days === 1 ? getLangFormat.Day : getLangFormat.Days }</div>
            <div className="react-countdown-time"><span className="react-countdown-before-text-day">{ get(beforeTextTime, "Day", "") }</span> {this.addLeadingZeros(countDown.days, isDayDoubleZero)} <span className="react-countdown-last-text-day">{ get(lastTextTime, "Day", "") }</span></div>
          </div>
        </div>

        <div className="react-countdown-box">
          <div className="react-countdown-element">
            <div className="react-countdown-time-text">{ getLangFormat.Hours }</div>
            <div className="react-countdown-time"><span className="react-countdown-before-text-hours">{ get(beforeTextTime, "Hours", "") }</span> {this.addLeadingZeros(countDown.hours, isHoursDoubleZero)} <span className="react-countdown-last-text-hours">{ get(lastTextTime, "Hours", "") }</span></div>
          </div>
        </div>


        <div className="react-countdown-box">
          <div className="react-countdown-element">
            <div className="react-countdown-time-text">{ getLangFormat.Min }</div>
            <div className="react-countdown-time"><span className="react-countdown-before-text-min">{ get(beforeTextTime, "Min", "") }</span> {this.addLeadingZeros(countDown.min, isMinDoubleZero)} <span className="react-countdown-last-text-min">{ get(lastTextTime, "Min", "") }</span></div>
          </div>
        </div>

        <div className="react-countdown-box">
          <div className="react-countdown-element">
            <div className="react-countdown-time-text">{ getLangFormat.Sec }</div>
            <div className="react-countdown-time"><span className="react-countdown-before-text-sec">{ get(beforeTextTime, "Sec", "") }</span> {this.addLeadingZeros(countDown.sec, isSecDoubleZero)} <span className="react-countdown-last-text-sec">{ get(lastTextTime, "Sec", "") }</span></div>
          </div>
        </div>
      </div>
    );
  }
}

Countdown.propTypes = {
  date: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  onEndCountdown: PropTypes.func,
  lang: PropTypes.string,
  displayText: PropTypes.object,
  lastTextTime: PropTypes.object,
  beforeTextTime: PropTypes.object,
  isDayDoubleZero: PropTypes.bool,
  isHoursDoubleZero: PropTypes.bool,
  isMinDoubleZero: PropTypes.bool,
  isSecDoubleZero: PropTypes.bool,
};

Countdown.defaultProps = {
  date: new Date(),
  onEndCountdown: () => null,
  lang: "en",
  lastTextTime: {},
  beforeTextTime: {},
  isDayDoubleZero: true,
  isHoursDoubleZero: true,
  isMinDoubleZero: true,
  isSecDoubleZero: true,
};

export default Countdown;
