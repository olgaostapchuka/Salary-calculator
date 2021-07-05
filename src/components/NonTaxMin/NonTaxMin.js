import React, { useContext } from "react";
import "./nontaxmin.css";
import { InputNumber } from "antd";
import { DataContext } from "../../providers/CalculatorProvider";

const NonTaxMin = () => {
  const { nonTaxMin, setNonTaxMin } = useContext(DataContext);
  return (
    <div className="non-tax-min">
      <label className="non-tax-min-label" htmlFor="nonTaxMinInput">
        Non-taxable minimum, EUR
      </label>
      <InputNumber
        id="nonTaxMinInput"
        min={0.01}
        max={100000}
        defaultValue={nonTaxMin}
        onChange={setNonTaxMin}
        step="0.01"
      />
    </div>
  );
};

export default NonTaxMin;
