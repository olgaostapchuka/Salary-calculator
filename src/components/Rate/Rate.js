import React from "react";
import "./rate.css";
import "antd/dist/antd.css";
import { InputNumber } from "antd";

const Rate = () => {
  return (
    <div className="rate">
      <label className="rate-label" htmlFor="RateInput">
        Rate, EUR
      </label>
      <InputNumber id="RateInput" min={1} max={10000} defaultValue={null} />
    </div>
  );
};

export default Rate;
