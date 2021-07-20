const TAXES = {
  SocialTax: {
    not: 10.5,
    benef: 9.76,
    national: 9.25,
  },
  SocEmployerTax: {
    not: 23.59,
    benef: 21.94,
    national: 20.77,
  },
  incomeTax: {
    income: 20,
    incomeFull: 23,
  },
  nonTaxDisability: {
    not: 0,
    first_second_group: 154,
    third_group: 120,
  },

  nonTaxRepressed: {
    amount: 154,
  },
  businessrisk: 0.36,
  nonTaxForDependents: 250,
  incomeAmount: 1667,
};

export default TAXES;
