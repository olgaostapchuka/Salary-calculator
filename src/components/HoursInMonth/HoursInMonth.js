import React from "react";
import "./hoursinmonth.css";
import "antd/dist/antd.css";
import { InputNumber } from "antd";

const HoursInMonth = () => {
  return (
    <div className="hours-in-month">
      <label className="hours-in-month-label" htmlFor="hoursInMonthInput">
        Hours in month
      </label>
      <InputNumber
        id="hoursInMonthInput"
        min={1}
        max={10000}
        defaultValue={null}
      />
    </div>
  );
};

export default HoursInMonth;
