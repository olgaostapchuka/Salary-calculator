import { getIncomeTax, getNetSalary, getSocialTax } from "./index";

/*test("Social tax", () => {
  const socialTax = getSocialTax(1000, 10.5);
  expect(socialTax).toBe(105.0);
});

test("Net Salary", () => {
  const netSalary = getNetSalary(1000, 179, 105);
  expect(netSalary).toBe(716.0);
});*/

describe("Social tax", () => {
  test("without pension", () => {
    const socialTax = getSocialTax(1000, 10.5);
    expect(socialTax).toBe("105");
  });
  test("benef", () => {
    const socialTax = getSocialTax(1000, "benef");
    expect(socialTax).toBe("97.60");
  });
  test("national", () => {
    const socialTax = getSocialTax(1000, "national");
    expect(socialTax).toBe("92.50");
  });
});
