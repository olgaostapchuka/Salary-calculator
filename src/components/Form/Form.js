import React from "react";
import Direction from "../Direction";
import SalaryType from "../SalaryType";
import MonthSalary from "../MonthSalary";
import TaxBook from "../TaxBook";
import Dependents from "../Dependents";
import NonTaxMin from "../NonTaxMin";
import Pension from "../Pension";
import Disability from "../Disability";
import PersonStatus from "../PersonStatus";

import "./form.css";

const Form = () => {
  return (
    <div className="form-container">
      <Direction />
      <SalaryType />
      <MonthSalary />
      <TaxBook />
      <Dependents />
      <NonTaxMin />
      <Pension />
      <Disability />
      <PersonStatus />
    </div>
  );
};

export default Form;
