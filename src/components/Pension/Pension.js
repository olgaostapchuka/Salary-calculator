import React, { useContext } from "react";
import "./Pension.css";
import { Select } from "antd";
import { DataContext } from "../../providers/CalculatorProvider";
const { Option } = Select;

const Pension = () => {
  const { pension, setPension } = useContext(DataContext);

  function onChangePension(value) {
    setPension(value);
  }

  return (
    <div className="pension">
      <label className="pension-label" htmlFor="PensionSelect">
        Pension
      </label>
       
      <Select
        id="PensionSelect"
        defaultValue={pension}
        onChange={onChangePension}
        className="pension-select"
      >
        <Option value="not">not</Option>
        <Option value="benef">beneficiary of a retirement pension</Option>
        <Option value="national">national retirement pensioner</Option>
      </Select>
    </div>
  );
};

export default Pension;
