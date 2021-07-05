import React, { useContext } from "react";
import "./disability.css";
import { Select } from "antd";
import { DataContext } from "../../providers/CalculatorProvider";
const { Option } = Select;

const Disability = () => {
  const { setDisability } = useContext(DataContext);

  function onChangeDisability(value) {
    setDisability(value);
  }
  return (
    <div className="disability">
      <label className="disability-label" htmlFor="disabilitySelect">
        Disability
      </label>
       
      <Select
        id="disabilitySelect"
        defaultValue="not"
        className="disability-select"
        onChange={onChangeDisability}
      >
        <Option value="not">not</Option>
        <Option value="first_second_group">1st or 2nd group</Option>
        <Option value="third_group">3rd group</Option>
      </Select>
    </div>
  );
};

export default Disability;
