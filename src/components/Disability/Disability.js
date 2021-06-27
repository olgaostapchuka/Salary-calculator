import React from "react";
import "./disability.css";
import "antd/dist/antd.css";
import { Select } from "antd";
const { Option } = Select;

const Disability = () => {
  return (
    <div className="disability">
      <label className="disability-label" htmlFor="disabilitySelect">
        Disability
      </label>
       
      <Select
        id="disabilitySelect"
        defaultValue="not"
        className="disability-select"
      >
        <Option value="first_second_group">1st or 2nd group</Option>
        <Option value="third_group">3rd group</Option>
      </Select>
    </div>
  );
};

export default Disability;
