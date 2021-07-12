import Taxes from "../constants/constants";

/* Gross > Net */
export let GrossToNet = true;

export const getSocialTax = (monthSalary) => (monthSalary * Taxes.social) / 100;

export const getSocialTaxPensionBenef = (monthSalary) =>
  (monthSalary * Taxes.socialPensionBenef) / 100;

export const getSocialTaxPensionNational = (monthSalary) =>
  (monthSalary * Taxes.socialPensionNational) / 100;

export const getSocialEmployerTax = (monthSalary) =>
  (monthSalary * Taxes.socialEmployer) / 100;

export const getSocEmployerTaxBenef = (monthSalary) =>
  (monthSalary * Taxes.socEmplPensionBenef) / 100;

export const getSocEmployerTaxNational = (monthSalary) =>
  (monthSalary * Taxes.socEmplPensionNational) / 100;

export const getNonTaxForDependents = (dependentsNumber) =>
  dependentsNumber * Taxes.amount;

export const getIncomeTax = (
  monthSalary,
  socialTax,
  nonTaxForDependents,
  nonTaxMin
) =>
  ((monthSalary - socialTax - nonTaxForDependents - nonTaxMin) * Taxes.income) /
  100;

export const getIncomeTaxBenef = (
  monthSalary,
  socialTaxPensionBenef,
  nonTaxForDependents,
  nonTaxMin
) =>
  ((monthSalary - socialTaxPensionBenef - nonTaxForDependents - nonTaxMin) *
    Taxes.income) /
  100;

export const getIncomeTaxNational = (
  monthSalary,
  socialTaxPensionNational,
  nonTaxForDependents,
  nonTaxMin
) =>
  ((monthSalary - socialTaxPensionNational - nonTaxForDependents - nonTaxMin) *
    Taxes.income) /
  100;

export const getIncomeTaxDisabilityFirst = (
  monthSalary,
  socialTax,
  nonTaxForDependents,
  nonTaxMin
) =>
  ((monthSalary -
    socialTax -
    nonTaxForDependents -
    nonTaxMin -
    Taxes.disability_first_second) *
    Taxes.income) /
  100;

export const getIncomeTaxDisabilityThird = (
  monthSalary,
  socialTax,
  nonTaxForDependents,
  nonTaxMin
) =>
  ((monthSalary -
    socialTax -
    nonTaxForDependents -
    nonTaxMin -
    Taxes.disability_third) *
    Taxes.income) /
  100;

export const getIncomeTaxBenefPensDisFirst = (
  monthSalary,
  socialTaxPensionBenef,
  nonTaxForDependents,
  nonTaxMin
) =>
  ((monthSalary -
    socialTaxPensionBenef -
    nonTaxForDependents -
    nonTaxMin -
    Taxes.disability_first_second) *
    Taxes.income) /
  100;

export const getNoTaxBookIncomeTax = (monthSalary, socialTax) =>
  (monthSalary * Taxes.incomeFull - socialTax * Taxes.income) / 100;

export const getNoTaxBookIncomeTaxBenef = (
  monthSalary,
  socialTaxPensionBenef
) =>
  (monthSalary * Taxes.incomeFull - socialTaxPensionBenef * Taxes.income) / 100;

export const getNoTaxBookIncomeTaxNational = (
  monthSalary,
  socialTaxPensionNational
) =>
  (monthSalary * Taxes.incomeFull - socialTaxPensionNational * Taxes.income) /
  100;

export const getTotalExpenses = (monthSalary, socialEmployerTax) =>
  monthSalary + socialEmployerTax + Taxes.businessrisk;

export const getTotalExpensesBenef = (monthSalary, socEmployerTaxBenef) =>
  monthSalary + socEmployerTaxBenef + Taxes.businessrisk;

export const getTotalExpensesNational = (monthSalary, socEmployerTaxNational) =>
  monthSalary + socEmployerTaxNational + Taxes.businessrisk;

export const getNetSalary = (monthSalary, incomeTax, socialTax) =>
  monthSalary - incomeTax - socialTax;

export const getNetSalaryNoTaxBook = (
  monthSalary,
  noTaxBookIncomeTax,
  socialTax
) => monthSalary - noTaxBookIncomeTax - socialTax;

export const getNetSalaryBenef = (
  monthSalary,
  incomeTaxBenef,
  socialTaxPensionBenef
) => monthSalary - incomeTaxBenef - socialTaxPensionBenef;

export const getNetSalaryNational = (
  monthSalary,
  incomeTaxNational,
  socialTaxPensionNational
) => monthSalary - incomeTaxNational - socialTaxPensionNational;

export const getNetSalaryDisabilityFirst = (
  monthSalary,
  incomeTaxDisabilityFirst,
  socialTax
) => monthSalary - incomeTaxDisabilityFirst - socialTax;

export const getNetSalaryDisabilityThird = (
  monthSalary,
  incomeTaxDisabilityThird,
  socialTax
) => monthSalary - incomeTaxDisabilityThird - socialTax;

export const getNetSalaryBenefDisFirst = (
  monthSalary,
  incomeTaxBenefPensDisFirst,
  socialTaxPensionBenef
) => monthSalary - incomeTaxBenefPensDisFirst - socialTaxPensionBenef;

export const getNoTaxBookNetSalaryBenef = (
  monthSalary,
  noTaxBookIncomeTaxBenef,
  socialTaxPensionBenef
) => monthSalary - noTaxBookIncomeTaxBenef - socialTaxPensionBenef;

export const getNoTaxBookNetSalaryNational = (
  monthSalary,
  noTaxBookIncomeTaxNational,
  socialTaxPensionNational
) => monthSalary - noTaxBookIncomeTaxNational - socialTaxPensionNational;

/* Net > Gross */
export const getSocialTaxGross = (grossSalary) =>
  (grossSalary * Taxes.social) / 100;

export const getSocialEmployerTaxGross = (grossSalary) =>
  (grossSalary * Taxes.socialEmployer) / 100;

export const getTotalExpensesGross = (grossSalary, getSocialEmployerTaxGross) =>
  grossSalary + getSocialEmployerTaxGross + Taxes.businessrisk;

export const getIncomeTaxGross = (
  grossSalary,
  socialTaxGross,
  nonTaxForDependents,
  nonTaxMin
) =>
  ((grossSalary - socialTaxGross - nonTaxForDependents - nonTaxMin) *
    Taxes.income) /
  100;

export const getGrossSalary = (monthSalary) =>
  monthSalary /
  (1 - Taxes.social / 100 - (Taxes.income / 100) * (1 - Taxes.social / 100));

/* Hourly Salary NET  */

export const getHourlyRateSalaryNet = (hourlyRate, hoursInMonth) =>
  hourlyRate * hoursInMonth;

export const getSocialTaxHourlyRateNet = (hourlyRate, hoursInMonth) =>
  (hourlyRate * hoursInMonth * Taxes.social) / 100;

export const getIncomeTaxHourlyRateNet = (
  hourlyRate,
  hoursInMonth,
  socialTaxHourlyRateNet,
  nonTaxForDependents,
  nonTaxMin
) =>
  ((hourlyRate * hoursInMonth -
    socialTaxHourlyRateNet -
    nonTaxForDependents -
    nonTaxMin) *
    Taxes.income) /
  100;

export const getNetSalaryHourlyRate = (
  hourlyRate,
  hoursInMonth,
  incomeTaxHourlyRateNet,
  socialTaxHourlyRateNet
) =>
  hourlyRate * hoursInMonth - incomeTaxHourlyRateNet - socialTaxHourlyRateNet;

export const getNetSocEmployerTaxHourlyRate = (hourlyRate, hoursInMonth) =>
  (hourlyRate * hoursInMonth * Taxes.socialEmployer) / 100;

export const getNetTotalExpensesHourlyRate = (
  hourlyRate,
  hoursInMonth,
  netSocEmployerTaxHourlyRate
) =>
  hourlyRate * hoursInMonth + netSocEmployerTaxHourlyRate + Taxes.businessrisk;
