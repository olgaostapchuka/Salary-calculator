import React from "react";
import "./Pension.css";
import "antd/dist/antd.css";
import { Select } from "antd";
const { Option } = Select;

const Pension = () => {
  return (
    <div className="pension">
      <label className="pension-label" htmlFor="PensionSelect">
        Pension
      </label>
       
      <Select id="PensionSelect" defaultValue="not" className="pension-select">
        <Option value="beneficiary">beneficiary of a retirement pension</Option>
        <Option value="national">national retirement pensioner</Option>
      </Select>
    </div>
  );
};

export default Pension;
