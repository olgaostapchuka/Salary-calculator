import React, { useState } from "react";
import "./salarytype.css";
import "antd/dist/antd.css";
import Rate from "../Rate";
import MonthSalary from "../MonthSalary";
import HoursInMonth from "../HoursInMonth";
import { Select } from "antd";
const { Option } = Select;

const SalaryType = () => {
  const [isHidden, setActive] = useState(true);

  const ToggleClass = (value) => {
    if (value === "hourlyRate") {
      setActive(false);
    } else {
      setActive(true);
    }
  };

  return (
    <>
      <div className="salary__type">
        <label className="salary__type-label" htmlFor="SalaryTypeSelect">
          Salary type
        </label>
        <Select
          id="SalaryTypeSelect"
          onChange={ToggleClass}
          defaultValue="monthlySalary"
        >
          <Option value="monthlySalary">monthly salary</Option>
          <Option value="hourlyRate">hourly rate</Option>
        </Select>
      </div>
      <div className={isHidden ? "hidden" : "shown"}>
        <Rate />
        <HoursInMonth />
      </div>
      <div className={!isHidden ? "hidden" : "shown"}>
        <MonthSalary />
      </div>
    </>
  );
};

export default SalaryType;
