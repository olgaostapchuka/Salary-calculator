import { useState } from "react";
import React from "react";

import {
  getSocialTax,
  getSocialTaxPensionBenef,
  getSocialTaxPensionNational,
  getIncomeTax,
  getIncomeTaxBenef,
  getIncomeTaxNational,
  getIncomeTaxDisabilityFirst,
  getSocialEmployerTax,
  getNonTaxForDependents,
  getTotalExpenses,
  getTotalExpensesBenef,
  getTotalExpensesNational,
  getNetSalary,
  getNetSalaryBenef,
  getNetSalaryNational,
  getNetSalaryDisabilityFirst,
  getNetSalaryDisabilityThird,
  getNetSalaryBenefDisFirst,
  getIncomeTaxDisabilityThird,
  getIncomeTaxBenefPensDisFirst,
  getNoTaxBookNetSalaryBenef,
  getNoTaxBookNetSalaryNational,
  getGrossSalary,
  getSocialTaxGross,
  getIncomeTaxGross,
  getSocEmployerTaxBenef,
  getSocEmployerTaxNational,
  getNoTaxBookIncomeTax,
  getNoTaxBookIncomeTaxBenef,
  getNoTaxBookIncomeTaxNational,
  getNetSalaryNoTaxBook,
  getSocialEmployerTaxGross,
  getTotalExpensesGross,
  getSocialTaxHourlyRateNet,
  getIncomeTaxHourlyRateNet,
  getNetSalaryHourlyRate,
  getNetSocEmployerTaxHourlyRate,
  getNetTotalExpensesHourlyRate,
} from "../helpers";

const DEFAULT_VALUE = {
  direction: true,
  salaryTypeMonthly: true,
  pension: "not",
  monthSalary: 1000,
  hourlyRate: 0,
  hoursInMonth: 0,
  isActive: true,
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
  const [isActive, setActive] = useState(DEFAULT_VALUE.isActive);
  const [dependentsNumber, setDependentsNumber] = useState(
    DEFAULT_VALUE.dependentsNumber
  );
  const [nonTaxMin, setNonTaxMin] = useState(DEFAULT_VALUE.nonTaxMin);
  const [hourlyRate, setHourlyRate] = useState(DEFAULT_VALUE.hourlyRate);
  const [hoursInMonth, setHoursInMonth] = useState(DEFAULT_VALUE.hoursInMonth);

  const socialTax = getSocialTax(monthSalary);
  const socialTaxPensionBenef = getSocialTaxPensionBenef(monthSalary);
  const socialTaxPensionNational = getSocialTaxPensionNational(monthSalary);
  const socialEmployerTax = getSocialEmployerTax(monthSalary);
  const socEmployerTaxBenef = getSocEmployerTaxBenef(monthSalary);
  const socEmployerTaxNational = getSocEmployerTaxNational(monthSalary);
  const nonTaxForDependents = getNonTaxForDependents(dependentsNumber);
  const incomeTax = getIncomeTax(
    monthSalary,
    socialTax,
    nonTaxForDependents,
    nonTaxMin
  );

  const incomeTaxBenef = getIncomeTaxBenef(
    monthSalary,
    socialTaxPensionBenef,
    nonTaxForDependents,
    nonTaxMin
  );
  const noTaxBookIncomeTax = getNoTaxBookIncomeTax(monthSalary, socialTax);
  const noTaxBookIncomeTaxBenef = getNoTaxBookIncomeTaxBenef(
    monthSalary,
    socialTaxPensionBenef
  );

  const noTaxBookIncomeTaxNational = getNoTaxBookIncomeTaxNational(
    monthSalary,
    socialTaxPensionNational
  );

  const incomeTaxNational = getIncomeTaxNational(
    monthSalary,
    socialTaxPensionNational,
    nonTaxForDependents,
    nonTaxMin
  );

  const incomeTaxDisabilityFirst = getIncomeTaxDisabilityFirst(
    monthSalary,
    socialTax,
    nonTaxForDependents,
    nonTaxMin
  );

  const incomeTaxDisabilityThird = getIncomeTaxDisabilityThird(
    monthSalary,
    socialTax,
    nonTaxForDependents,
    nonTaxMin
  );

  const incomeTaxBenefPensDisFirst = getIncomeTaxBenefPensDisFirst(
    monthSalary,
    socialTaxPensionBenef,
    nonTaxForDependents,
    nonTaxMin
  );
  const totalExpenses = getTotalExpenses(monthSalary, socialEmployerTax);
  const totalExpensesBenef = getTotalExpensesBenef(
    monthSalary,
    socEmployerTaxBenef
  );

  const totalExpensesNational = getTotalExpensesNational(
    monthSalary,
    socEmployerTaxNational
  );

  const netSalary = getNetSalary(monthSalary, incomeTax, socialTax);
  const netSalaryNoTaxBook = getNetSalaryNoTaxBook(
    monthSalary,
    noTaxBookIncomeTax,
    socialTax
  );

  const netSalaryBenef = getNetSalaryBenef(
    monthSalary,
    incomeTaxBenef,
    socialTaxPensionBenef
  );

  const netSalaryNational = getNetSalaryNational(
    monthSalary,
    incomeTaxNational,
    socialTaxPensionNational
  );

  const netSalaryDisabilityFirst = getNetSalaryDisabilityFirst(
    monthSalary,
    incomeTaxDisabilityFirst,
    socialTax
  );

  const netSalaryDisabilityThird = getNetSalaryDisabilityThird(
    monthSalary,
    incomeTaxDisabilityThird,
    socialTax
  );

  const netSalaryBenefDisFirst = getNetSalaryBenefDisFirst(
    monthSalary,
    incomeTaxBenefPensDisFirst,
    socialTaxPensionBenef
  );

  const noTaxBookNetSalaryBenef = getNoTaxBookNetSalaryBenef(
    monthSalary,
    noTaxBookIncomeTaxBenef,
    socialTaxPensionBenef
  );
  const noTaxBookNetSalaryNational = getNoTaxBookNetSalaryNational(
    monthSalary,
    noTaxBookIncomeTaxNational,
    socialTaxPensionNational
  );

  const grossSalary = getGrossSalary(monthSalary);
  const socialTaxGross = getSocialTaxGross(grossSalary);
  const incomeTaxGross = getIncomeTaxGross(
    grossSalary,
    socialTaxGross,
    nonTaxForDependents,
    nonTaxMin
  );
  const socialEmployerTaxGross = getSocialEmployerTaxGross(grossSalary);
  const totalExpensesGross = getTotalExpensesGross(
    grossSalary,
    socialEmployerTaxGross
  );

  const socialTaxHourlyRateNet = getSocialTaxHourlyRateNet(
    hourlyRate,
    hoursInMonth
  );

  const incomeTaxHourlyRateNet = getIncomeTaxHourlyRateNet(
    hourlyRate,
    hoursInMonth,
    socialTaxHourlyRateNet,
    nonTaxForDependents,
    nonTaxMin
  );

  const netSalaryHourlyRate = getNetSalaryHourlyRate(
    hourlyRate,
    hoursInMonth,
    incomeTaxHourlyRateNet,
    socialTaxHourlyRateNet
  );

  const netSocEmployerTaxHourlyRate = getNetSocEmployerTaxHourlyRate(
    hourlyRate,
    hoursInMonth
  );

  const netTotalExpensesHourlyRate = getNetTotalExpensesHourlyRate(
    hourlyRate,
    hoursInMonth,
    netSocEmployerTaxHourlyRate
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
        isActive,
        setActive,
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
          socialTaxPensionBenef,
          socialTaxPensionNational,
          socialEmployerTax,
          socEmployerTaxBenef,
          socEmployerTaxNational,
          incomeTax,
          incomeTaxBenef,
          incomeTaxNational,
          incomeTaxDisabilityFirst,
          incomeTaxDisabilityThird,
          incomeTaxBenefPensDisFirst,
          nonTaxForDependents,
          totalExpenses,
          totalExpensesBenef,
          totalExpensesNational,
          netSalary,
          netSalaryBenef,
          netSalaryNational,
          netSalaryDisabilityFirst,
          netSalaryDisabilityThird,
          netSalaryBenefDisFirst,
          grossSalary,
          socialTaxGross,
          incomeTaxGross,
          socialEmployerTaxGross,
          totalExpensesGross,
          nonTaxMin,
          noTaxBookIncomeTax,
          noTaxBookIncomeTaxBenef,
          noTaxBookIncomeTaxNational,
          noTaxBookNetSalaryBenef,
          noTaxBookNetSalaryNational,
          netSalaryNoTaxBook,
          socialTaxHourlyRateNet,
          incomeTaxHourlyRateNet,
          netSalaryHourlyRate,
          netSocEmployerTaxHourlyRate,
          netTotalExpensesHourlyRate,
        },
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
