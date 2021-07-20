import React, { useContext } from "react";
import "./salarytype.css";
import Rate from "../Rate";
import MonthSalary from "../MonthSalary";
import HoursInMonth from "../HoursInMonth";
import { Select } from "antd";
import { DataContext } from "../../providers/CalculatorProvider";
const { Option } = Select;

const SalaryType = () => {
  const { salaryTypeMonthly, setSalaryTypeMonthly } = useContext(DataContext);

  const salaryTypeMode = (value) => {
    setSalaryTypeMonthly((value) => !value);
  };

  return (
    <>
      <div className="salary__type">
        <label className="salary__type-label" htmlFor="SalaryTypeSelect">
          Salary type
        </label>
        <Select
          id="SalaryTypeSelect"
          onChange={salaryTypeMode}
          defaultValue="monthlySalary"
        >
          <Option value="monthlySalary">monthly salary</Option>
          <Option value="hourlyRate">hourly rate</Option>
        </Select>
      </div>
      <div className={salaryTypeMonthly ? "hidden" : "shown"}>
        <Rate />
        <HoursInMonth />
      </div>
      <div className={!salaryTypeMonthly ? "hidden" : "shown"}>
        <MonthSalary />
      </div>
    </>
  );
};

export default SalaryType;
