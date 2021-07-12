import React, { useContext } from "react";
import "./MonthSalary.css";
import { DataContext } from "../../providers/CalculatorProvider";
import { InputNumber } from "antd";

const MonthSalary = () => {
  const { monthSalary, setMonthSalary } = useContext(DataContext);

  return (
    <div className="month-salary">
      <label className="month-salary-label" htmlFor="monthSalaryInput">
        Month Salary, EUR
      </label>
      <InputNumber
        id="monthSalaryInput"
        min={0.1}
        max={10000}
        defaultValue={monthSalary}
        onChange={setMonthSalary}
        step="0.01"
      />
    </div>
  );
};

export default MonthSalary;
