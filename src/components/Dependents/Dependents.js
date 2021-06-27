import React from "react";
import "./dependents.css";
import "antd/dist/antd.css";
import { InputNumber } from "antd";

const Dependents = () => {
  return (
    <div className="dependents">
      <label className="dependents-label" htmlFor="dependentInput">
        Number of dependents
      </label>
      <InputNumber
        id="dependentInput"
        min={1}
        max={10000}
        defaultValue={null}
      />
    </div>
  );
};

export default Dependents;
