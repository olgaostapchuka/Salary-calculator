import React from "react";
import "./nontaxmin.css";
import "antd/dist/antd.css";
import { InputNumber } from "antd";

const NonTaxMin = () => {
  return (
    <div className="non-tax-min">
      <label className="non-tax-min-label" htmlFor="nonTaxMinInput">
        Non-taxable minimum, EUR
      </label>
      <InputNumber
        id="nonTaxMinInput"
        min={1}
        max={10000}
        defaultValue={null}
      />
    </div>
  );
};

export default NonTaxMin;
