import TAXES from "../constants/constants";

/* Gross > Net */

export const getSocialTax = (
  monthSalary,
  hourlyRate,
  hoursInMonth,
  pension,
  salaryTypeMonthly
) => {
  if (salaryTypeMonthly) {
    return (monthSalary * TAXES.SocialTax[pension]) / 100;
  } else {
    return (hourlyRate * hoursInMonth * TAXES.SocialTax[pension]) / 100;
  }
};

export const getSocialTaxName = (pension) => TAXES.SocialTax[pension];

export const getSocialEmployerTax = (
  monthSalary,
  pension,
  salaryTypeMonthly,
  hourlyRate,
  hoursInMonth
) => {
  if (salaryTypeMonthly) {
    return (monthSalary * TAXES.SocEmployerTax[pension]) / 100;
  } else {
    return (hourlyRate * hoursInMonth * TAXES.SocEmployerTax[pension]) / 100;
  }
};

export const getNonTaxForDependents = (dependentsNumber) =>
  dependentsNumber * TAXES.nonTaxForDependents;

export const getIncomeTax = (
  monthSalary,
  socialTax,
  nonTaxForDependents,
  nonTaxMin,
  taxBook,
  disability,
  personStatus,
  salaryTypeMonthly,
  hourlyRate,
  hoursInMonth
) => {
  if (!taxBook) {
    if (salaryTypeMonthly) {
      return (
        (monthSalary * TAXES.incomeTax.incomeFull -
          socialTax * TAXES.incomeTax.income) /
        100
      );
    } else {
      return (
        (hourlyRate * hoursInMonth * TAXES.incomeTax.incomeFull -
          socialTax * TAXES.incomeTax.income) /
        100
      );
    }
  } else if (!personStatus) {
    if (salaryTypeMonthly) {
      return (
        ((monthSalary -
          socialTax -
          TAXES.nonTaxDisability[disability] -
          nonTaxForDependents -
          nonTaxMin) *
          TAXES.incomeTax.income) /
        100
      );
    } else {
      return (
        ((hourlyRate * hoursInMonth -
          socialTax -
          TAXES.nonTaxDisability[disability] -
          nonTaxForDependents -
          nonTaxMin) *
          TAXES.incomeTax.income) /
        100
      );
    }
  } else {
    if (salaryTypeMonthly) {
      return (
        ((monthSalary -
          socialTax -
          TAXES.nonTaxDisability[disability] -
          nonTaxForDependents -
          TAXES.nonTaxRepressed.amount -
          nonTaxMin) *
          TAXES.incomeTax.income) /
        100
      );
    } else {
      return (
        ((hourlyRate * hoursInMonth -
          socialTax -
          TAXES.nonTaxDisability[disability] -
          nonTaxForDependents -
          TAXES.nonTaxRepressed.amount -
          nonTaxMin) *
          TAXES.incomeTax.income) /
        100
      );
    }
  }
};

export const getPartAfter1667eur = (
  monthSalary,
  hourlyRate,
  hoursInMonth,
  salaryTypeMonthly
) => {
  if (salaryTypeMonthly) {
    return monthSalary - TAXES.incomeAmount;
  } else {
    return hourlyRate * hoursInMonth - TAXES.incomeAmount;
  }
};

export const getIncomeTaxAfter1667eur = (partAfter1667eur) => {
  return (partAfter1667eur * TAXES.incomeTax.incomeFull) / 100;
};

export const getIncomeTaxTill1667eur = (
  socialTax,
  nonTaxForDependents,
  nonTaxMin,
  disability
) => {
  return (
    ((TAXES.incomeAmount -
      socialTax -
      TAXES.nonTaxDisability[disability] -
      nonTaxForDependents -
      TAXES.nonTaxRepressed.amount -
      nonTaxMin) *
      TAXES.incomeTax.income) /
    100
  );
};

export const getIncomeTaxName = (
  monthSalary,
  taxBook,
  socialTax,
  salaryTypeMonthly,
  hourlyRate,
  hoursInMonth
) => {
  if (taxBook) {
    return TAXES.incomeTax.income;
  } else if (salaryTypeMonthly) {
    return (
      monthSalary +
      " x " +
      TAXES.incomeTax.incomeFull +
      "% " +
      " - " +
      socialTax +
      " x " +
      TAXES.incomeTax.income
    );
  } else {
    return (
      hourlyRate * hoursInMonth +
      " x " +
      TAXES.incomeTax.incomeFull +
      "% " +
      " - " +
      socialTax +
      " x " +
      TAXES.incomeTax.income
    );
  }
};

export const getNetSalary = (
  monthSalary,
  incomeTax,
  socialTax,
  salaryTypeMonthly,
  incomeTaxTill1667eur,
  incomeTaxAfter1667eur,
  hoursInMonth,
  hourlyRate
) => {
  if (salaryTypeMonthly) {
    if (monthSalary > TAXES.incomeAmount) {
      return (
        monthSalary - socialTax - incomeTaxAfter1667eur - incomeTaxTill1667eur
      );
    } else {
      if (incomeTax < 0) {
        return monthSalary - socialTax;
      } else {
        return monthSalary - incomeTax - socialTax;
      }
    }
  } else {
    if (hoursInMonth * hourlyRate > TAXES.incomeAmount) {
      return (
        hoursInMonth * hourlyRate -
        socialTax -
        incomeTaxAfter1667eur -
        incomeTaxTill1667eur
      );
    } else {
      return hoursInMonth * hourlyRate - socialTax - incomeTax;
    }
  }
};

export const getHourlyRateSalary = (hoursInMonth, hourlyRate) => {
  return hoursInMonth * hourlyRate;
};

export const getTotalExpenses = (
  monthSalary,
  socialEmployerTax,
  salaryTypeMonthly,
  hoursInMonth,
  hourlyRate
) => {
  if (salaryTypeMonthly) {
    return monthSalary + socialEmployerTax + TAXES.businessrisk;
  } else {
    return hoursInMonth * hourlyRate + socialEmployerTax + TAXES.businessrisk;
  }
};

/* Net > Gross */

export const getSocialTaxGross = (grossSalary, pension) =>
  (grossSalary * TAXES.SocialTax[pension]) / 100;

export const getSocialEmployerTaxGross = (grossSalary, pension) =>
  (grossSalary * TAXES.SocEmployerTax[pension]) / 100;

export const getTotalExpensesGross = (grossSalary, getSocialEmployerTaxGross) =>
  grossSalary + getSocialEmployerTaxGross + TAXES.businessrisk;

/*export const getIncomeTaxGross = (
  grossSalary,
  socialTaxGross,
  nonTaxForDependents,
  nonTaxMin
) =>
  ((grossSalary - socialTaxGross - nonTaxForDependents - nonTaxMin) *
    TAXES.incomeTax.income) /
  100;*/

export const getIncomeTaxGross = (
  grossSalary,
  socialTaxGross,
  nonTaxForDependents,
  nonTaxMin,
  taxBook
) => {
  if (!taxBook) {
    return (
      (grossSalary * TAXES.incomeTax.incomeFull -
        socialTaxGross * TAXES.incomeTax.income) /
      100
    );
  } else {
    return (
      ((grossSalary - socialTaxGross - nonTaxForDependents - nonTaxMin) *
        TAXES.incomeTax.income) /
      100
    );
  }
};

export const getIncomeTaxNameGross = (
  monthSalary,
  taxBook,
  socialTaxGross,
  pension
) => {
  if (taxBook) {
    return TAXES.incomeTax.income;
  } else {
    return (
      monthSalary /
        (1 -
          TAXES.SocialTax[pension] / 100 -
          (TAXES.incomeTax.income / 100) *
            (1 - TAXES.SocialTax[pension] / 100)) +
      " x " +
      TAXES.incomeTax.incomeFull +
      "% " +
      " - " +
      socialTaxGross +
      " x " +
      TAXES.incomeTax.income
    );
  }
};

export const getGrossSalary = (monthSalary, pension) =>
  monthSalary /
  (1 -
    TAXES.SocialTax[pension] / 100 -
    (TAXES.incomeTax.income / 100) * (1 - TAXES.SocialTax[pension] / 100));
