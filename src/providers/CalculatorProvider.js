import { useState } from "react";
import React from "react";

import {
  getSocialTax,
  getSocialTaxName,
  getIncomeTax,
  getIncomeTaxName,
  getIncomeTaxAfter1667eur,
  getIncomeTaxTill1667eur,
  getPartAfter1667eur,
  getSocialEmployerTax,
  getNonTaxForDependents,
  getTotalExpenses,
  getNetSalary,
  getHourlyRateSalary,
  getGrossSalary,
  getSocialTaxGross,
  getIncomeTaxGross,
  getIncomeTaxNameGross,
  getSocialEmployerTaxGross,
  getTotalExpensesGross,
} from "../helpers";

const DEFAULT_VALUE = {
  direction: true,
  salaryTypeMonthly: true,
  pension: "not",
  monthSalary: 1000,
  hourlyRate: 10,
  hoursInMonth: 40,
  disability: "not",
  dependentsNumber: "",
  nonTaxMin: "",
  taxBook: true,
  personStatus: false,
};
export const DataContext = React.createContext();

export const DataProvider = ({ children }) => {
  const [direction, setDirection] = useState(DEFAULT_VALUE.direction);
  const [taxBook, setTaxBook] = useState(DEFAULT_VALUE.taxBook);
  const [pension, setPension] = useState(DEFAULT_VALUE.pension);
  const [disability, setDisability] = useState(DEFAULT_VALUE.disability);
  const [personStatus, setPersonStatus] = useState(DEFAULT_VALUE.personStatus);
  const [salaryTypeMonthly, setSalaryTypeMonthly] = useState(
    DEFAULT_VALUE.direction
  );
  const [monthSalary, setMonthSalary] = useState(DEFAULT_VALUE.monthSalary);
  const [dependentsNumber, setDependentsNumber] = useState(
    DEFAULT_VALUE.dependentsNumber
  );
  const [nonTaxMin, setNonTaxMin] = useState(DEFAULT_VALUE.nonTaxMin);
  const [hourlyRate, setHourlyRate] = useState(DEFAULT_VALUE.hourlyRate);
  const [hoursInMonth, setHoursInMonth] = useState(DEFAULT_VALUE.hoursInMonth);

  const socialTax = getSocialTax(
    monthSalary,
    hourlyRate,
    hoursInMonth,
    pension,
    salaryTypeMonthly
  );

  const socialTaxName = getSocialTaxName(pension);
  const socialEmployerTax = getSocialEmployerTax(
    monthSalary,
    pension,
    salaryTypeMonthly,
    hourlyRate,
    hoursInMonth
  );

  const nonTaxForDependents = getNonTaxForDependents(dependentsNumber);

  const incomeTax = getIncomeTax(
    monthSalary,
    socialTax,
    nonTaxForDependents,
    nonTaxMin,
    taxBook,
    disability,
    personStatus,
    salaryTypeMonthly,
    hourlyRate,
    hoursInMonth,
    setSalaryTypeMonthly
  );

  const partAfter1667eur = getPartAfter1667eur(
    monthSalary,
    hourlyRate,
    hoursInMonth,
    salaryTypeMonthly
  );
  const incomeTaxAfter1667eur = getIncomeTaxAfter1667eur(partAfter1667eur);
  const incomeTaxTill1667eur = getIncomeTaxTill1667eur(
    socialTax,
    nonTaxForDependents,
    nonTaxMin,
    disability
  );

  const incomeTaxName = getIncomeTaxName(
    monthSalary,
    taxBook,
    socialTax,
    salaryTypeMonthly,
    hourlyRate,
    hoursInMonth
  );

  const totalExpenses = getTotalExpenses(
    monthSalary,
    socialEmployerTax,
    salaryTypeMonthly,
    hoursInMonth,
    hourlyRate
  );

  const netSalary = getNetSalary(
    monthSalary,
    incomeTax,
    socialTax,
    salaryTypeMonthly,
    incomeTaxTill1667eur,
    incomeTaxAfter1667eur,
    hourlyRate,
    hoursInMonth
  );

  const hourlyRateSalary = getHourlyRateSalary(hourlyRate, hoursInMonth);

  const grossSalary = getGrossSalary(monthSalary, pension);
  const socialTaxGross = getSocialTaxGross(grossSalary, pension);
  const incomeTaxGross = getIncomeTaxGross(
    grossSalary,
    socialTaxGross,
    nonTaxForDependents,
    nonTaxMin,
    taxBook,
    pension
  );
  const incomeTaxNameGross = getIncomeTaxNameGross(
    grossSalary,
    taxBook,
    socialTaxGross
  );
  const socialEmployerTaxGross = getSocialEmployerTaxGross(
    grossSalary,
    pension
  );

  const totalExpensesGross = getTotalExpensesGross(
    grossSalary,
    socialEmployerTaxGross
  );

  return (
    <DataContext.Provider
      value={{
        direction,
        setDirection,
        taxBook,
        setTaxBook,
        pension,
        setPension,
        disability,
        setDisability,
        personStatus,
        setPersonStatus,
        setSalaryTypeMonthly,
        salaryTypeMonthly,
        monthSalary,
        setMonthSalary,
        dependentsNumber,
        setDependentsNumber,
        nonTaxMin,
        setNonTaxMin,
        hourlyRate,
        setHourlyRate,
        hoursInMonth,
        setHoursInMonth,
        result: {
          socialTax,
          socialTaxName,
          socialEmployerTax,
          incomeTax,
          incomeTaxName,
          incomeTaxAfter1667eur,
          incomeTaxTill1667eur,
          partAfter1667eur,
          nonTaxForDependents,
          totalExpenses,
          netSalary,
          hourlyRateSalary,
          grossSalary,
          socialTaxGross,
          incomeTaxGross,
          incomeTaxNameGross,
          socialEmployerTaxGross,
          totalExpensesGross,
          nonTaxMin,
        },
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
