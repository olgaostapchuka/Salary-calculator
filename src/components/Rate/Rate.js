import React, { useContext } from "react";
import "./rate.css";
import { InputNumber } from "antd";
import { DataContext } from "../../providers/CalculatorProvider";

const Rate = () => {
  const { hourlyRate, setHourlyRate } = useContext(DataContext);

  return (
    <div className="rate">
      <label className="rate-label" htmlFor="RateInput">
        Rate, EUR
      </label>
      <InputNumber
        id="RateInput"
        min={1}
        max={73}
        defaultValue={hourlyRate}
        onChange={setHourlyRate}
      />
    </div>
  );
};

export default Rate;
