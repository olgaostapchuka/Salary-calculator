import React from "react";
import "./MonthSalary.css";
import "antd/dist/antd.css";
import { InputNumber } from "antd";

const MonthSalary = () => {
  return (
    <div className="month-salary">
      <label className="month-salary-label" htmlFor="monthSalaryInput">
        Month Salary, EUR
      </label>
      <InputNumber
        id="monthSalaryInput"
        min={1}
        max={10000}
        defaultValue={null}
      />
    </div>
  );
};

export default MonthSalary;
