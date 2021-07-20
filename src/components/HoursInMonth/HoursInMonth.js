import React, { useContext } from "react";
import "./hoursinmonth.css";
import { InputNumber } from "antd";
import { DataContext } from "../../providers/CalculatorProvider";

const HoursInMonth = () => {
  const { hoursInMonth, setHoursInMonth } = useContext(DataContext);

  return (
    <div className="hours-in-month">
      <label className="hours-in-month-label" htmlFor="hoursInMonthInput">
        Hours in month
      </label>
      <InputNumber
        id="hoursInMonthInput"
        min={1}
        max={744}
        defaultValue={hoursInMonth}
        onChange={setHoursInMonth}
      />
    </div>
  );
};

export default HoursInMonth;
