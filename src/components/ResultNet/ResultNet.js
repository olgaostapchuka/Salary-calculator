import React, { useContext } from "react";
import "./resultnet.css";
import { DataContext } from "../../providers/CalculatorProvider";
import Taxes from "../../constants/constants";

const ResultNet = () => {
  const {
    direction,
    salaryTypeMonthly,
    result,
    taxBook,
    monthSalary,
    pension,
    disability,
    personStatus,
    dependentsNumber,
    nonTaxMin,
  } = useContext(DataContext);

  return (
    <div className={`result-section ${!direction ? "hidden" : "shown"}`}>
      <h1 className="result-section-title">Calculation result</h1>
      <table className="table-result">
        <tbody>
          <tr className="row-result">
            <td>Net-Salary</td>
            <td
              className="row-result-eur {salaryTypeMonthly ? 'shown' : 'hidden'}"
              colSpan="2"
            >
              <span
                className={
                  salaryTypeMonthly &&
                  taxBook &&
                  pension === "not" &&
                  disability === "not" &&
                  !personStatus
                    ? "shown"
                    : "hidden"
                }
              >
                {result.netSalary.toFixed(2)} EUR
              </span>
              <span
                className={!taxBook && pension === "not" ? "shown" : "hidden"}
              >
                {result.netSalaryNoTaxBook.toFixed(2)} EUR
              </span>
              <span
                className={
                  taxBook && pension === "benef" && disability === "not"
                    ? "shown"
                    : "hidden"
                }
              >
                {result.netSalaryBenef.toFixed(2)} EUR
              </span>
              <span
                className={
                  taxBook && pension === "national" ? "shown" : "hidden"
                }
              >
                {result.netSalaryNational.toFixed(2)} EUR
              </span>
              <span
                className={!taxBook && pension === "benef" ? "shown" : "hidden"}
              >
                {result.noTaxBookNetSalaryBenef.toFixed(2)} EUR
              </span>
              <span
                className={
                  !taxBook && pension === "national" ? "shown" : "hidden"
                }
              >
                {result.noTaxBookNetSalaryNational.toFixed(2)} EUR
              </span>
              <span
                className={
                  taxBook &&
                  disability === "first_second_group" &&
                  pension === "benef"
                    ? "shown"
                    : "hidden"
                }
              >
                {result.netSalaryBenefDisFirst.toFixed(2)} EUR
              </span>
              <span
                className={
                  taxBook && disability === "third_group" ? "shown" : "hidden"
                }
              >
                {result.netSalaryDisabilityThird.toFixed(2)} EUR
              </span>
              <span
                className={
                  taxBook && disability === "first_second_group"
                    ? "shown"
                    : "hidden"
                }
              >
                {result.netSalaryDisabilityFirst.toFixed(2)} EUR
              </span>
              <span className={taxBook && personStatus ? "shown" : "hidden"}>
                {result.netSalaryDisabilityFirst.toFixed(2)} EUR
              </span>
              <span className={!salaryTypeMonthly ? "shown" : "hidden"}>
                {result.netSalaryHourlyRate.toFixed(2)} EUR
              </span>
            </td>
          </tr>
          <tr>
            <td>Social tax</td>
            <td>
              <span
                className={taxBook && pension === "not" ? "shown" : "hidden"}
              >
                {Taxes.social}%
              </span>

              <span
                className={taxBook && pension === "benef" ? "shown" : "hidden"}
              >
                {Taxes.socialPensionBenef}%
              </span>

              <span
                className={!taxBook && pension === "not" ? "shown" : "hidden"}
              >
                {Taxes.social}%
              </span>
              <span
                className={!taxBook && pension === "benef" ? "shown" : "hidden"}
              >
                {Taxes.socialPensionBenef}%
              </span>
              <span
                className={
                  taxBook && pension === "national" ? "shown" : "hidden"
                }
              >
                {Taxes.socialPensionNational}%
              </span>
              <span
                className={
                  !taxBook && pension === "national" ? "shown" : "hidden"
                }
              >
                {Taxes.socialPensionNational}%
              </span>
            </td>
            <td className={salaryTypeMonthly ? "shown" : "hidden"}>
              <span
                className={
                  pension !== "benef" && pension !== "national"
                    ? "shown"
                    : "hidden"
                }
              >
                {result.socialTax.toFixed(2)} EUR
              </span>
              <span className={pension === "benef" ? "shown" : "hidden"}>
                {result.socialTaxPensionBenef.toFixed(2)} EUR
              </span>
              <span className={pension === "national" ? "shown" : "hidden"}>
                {result.socialTaxPensionNational.toFixed(2)} EUR
              </span>
            </td>
            <td className={!salaryTypeMonthly ? "shown" : "hidden"}>
              {result.socialTaxHourlyRateNet.toFixed(2)} EUR
            </td>
          </tr>

          <tr
            className={
              (taxBook && disability === "first_second_group") ||
              disability === "third_group"
                ? "shown"
                : "hidden"
            }
          >
            <td>Non-taxable amount for disability</td>
            <td></td>
            <td>
              <span
                className={
                  taxBook && disability === "first_second_group"
                    ? "shown"
                    : "hidden"
                }
              >
                {Taxes.disability_first_second} EUR
              </span>

              <span
                className={
                  taxBook && disability === "third_group" ? "shown" : "hidden"
                }
              >
                {Taxes.disability_third} EUR
              </span>
            </td>
          </tr>

          <tr className={taxBook && personStatus ? "shown" : "hidden"}>
            <td>Non-taxable amount for repression person</td>
            <td></td>
            <td>{Taxes.disability_first_second} EUR</td>
          </tr>

          <tr className={taxBook && nonTaxMin ? "shown" : "hidden"}>
            <td>Non-taxable minimum</td>
            <td></td>
            <td>
              {result.nonTaxMin ? result.nonTaxMin.toFixed(2) : "0.00"} EUR
            </td>
          </tr>
          <tr className={taxBook && dependentsNumber ? "shown" : "hidden"}>
            <td>Non-taxable amount for dependents</td>
            <td>{dependentsNumber + " x " + Taxes.amount}</td>
            <td>{result.nonTaxForDependents.toFixed(2)} EUR</td>
          </tr>
          <tr>
            <td>Personal income tax</td>
            <td>
              <span className={taxBook ? "shown" : "hidden"}>
                {Taxes.income}%
              </span>
              <span
                className={!taxBook && pension === "not" ? "shown" : "hidden"}
              >
                {monthSalary +
                  " x " +
                  Taxes.incomeFull +
                  " - " +
                  result.socialTax.toFixed(2) +
                  " x " +
                  Taxes.income}
                %
              </span>
              <span
                className={!taxBook && pension === "benef" ? "shown" : "hidden"}
              >
                {monthSalary +
                  " x " +
                  Taxes.incomeFull +
                  "%" +
                  " - " +
                  result.socialTaxPensionBenef.toFixed(2) +
                  " x " +
                  Taxes.income}
                %
              </span>
              <span
                className={
                  !taxBook && pension === "national" ? "shown" : "hidden"
                }
              >
                {monthSalary +
                  " x " +
                  Taxes.incomeFull +
                  "%" +
                  " - " +
                  result.socialTaxPensionNational.toFixed(2) +
                  " x " +
                  Taxes.income}
                %
              </span>
            </td>

            <td className={salaryTypeMonthly ? "shown" : "hidden"}>
              <span
                className={
                  taxBook &&
                  pension === "not" &&
                  disability === "not" &&
                  !personStatus
                    ? "shown"
                    : "hidden"
                }
              >
                {result.incomeTax.toFixed(2)} EUR
              </span>
              <span
                className={!taxBook && pension === "not" ? "shown" : "hidden"}
              >
                {result.noTaxBookIncomeTax.toFixed(2)} EUR
              </span>
              <span
                className={
                  taxBook &&
                  pension === "benef" &&
                  disability !== "first_second_group"
                    ? "shown"
                    : "hidden"
                }
              >
                {result.incomeTaxBenef.toFixed(2)} EUR
              </span>
              <span
                className={!taxBook && pension === "benef" ? "shown" : "hidden"}
              >
                {result.noTaxBookIncomeTaxBenef.toFixed(2)} EUR
              </span>
              <span
                className={
                  taxBook && pension === "national" ? "shown" : "hidden"
                }
              >
                {result.incomeTaxNational.toFixed(2)} EUR
              </span>
              <span
                className={
                  !taxBook && pension === "national" ? "shown" : "hidden"
                }
              >
                {result.noTaxBookIncomeTaxNational.toFixed(2)} EUR
              </span>
              <span
                className={
                  taxBook &&
                  disability === "first_second_group" &&
                  pension !== "benef"
                    ? "shown"
                    : "hidden"
                }
              >
                {result.incomeTaxDisabilityFirst.toFixed(2)} EUR
              </span>
              <span
                className={
                  taxBook && disability === "third_group" ? "shown" : "hidden"
                }
              >
                {result.incomeTaxDisabilityThird.toFixed(2)} EUR
              </span>
              <span
                className={
                  taxBook &&
                  disability === "first_second_group" &&
                  pension === "benef"
                    ? "shown"
                    : "hidden"
                }
              >
                {result.incomeTaxBenefPensDisFirst.toFixed(2)} EUR
              </span>
              <span className={taxBook && personStatus ? "shown" : "hidden"}>
                {result.incomeTaxDisabilityFirst.toFixed(2)} EUR
              </span>
            </td>

            <td className={!salaryTypeMonthly ? "shown" : "hidden"}>
              {result.incomeTaxHourlyRateNet.toFixed(2)} EUR
            </td>
          </tr>
          <tr>
            <td>Social tax, employer's part</td>
            <td>
              <span
                className={
                  taxBook && pension !== "benef" && pension !== "national"
                    ? "shown"
                    : "hidden"
                }
              >
                {Taxes.socialEmployer}%
              </span>
              <span
                className={taxBook && pension === "benef" ? "shown" : "hidden"}
              >
                {Taxes.socEmplPensionBenef}%
              </span>
              <span
                className={
                  taxBook && pension === "national" ? "shown" : "hidden"
                }
              >
                {Taxes.socEmplPensionNational}%
              </span>
              <span
                className={
                  !taxBook && pension === "national" ? "shown" : "hidden"
                }
              >
                {Taxes.socEmplPensionNational}%
              </span>
            </td>

            <td className={salaryTypeMonthly ? "shown" : "hidden"}>
              <span
                className={
                  pension !== "benef" && pension !== "national"
                    ? "shown"
                    : "hidden"
                }
              >
                {result.socialEmployerTax.toFixed(2)} EUR
              </span>
              <span className={pension === "benef" ? "shown" : "hidden"}>
                {result.socEmployerTaxBenef.toFixed(2)} EUR
              </span>
              <span className={pension === "national" ? "shown" : "hidden"}>
                {result.socEmployerTaxNational.toFixed(2)} EUR
              </span>
            </td>

            <td className={!salaryTypeMonthly ? "shown" : "hidden"}>
              {result.netSocEmployerTaxHourlyRate.toFixed(2)} EUR
            </td>
          </tr>
          <tr>
            <td>Business risk fee</td>
            <td></td>
            <td>{Taxes.businessrisk} EUR</td>
          </tr>
          <tr>
            <td>Total employer's expenses</td>
            <td></td>
            <td className={salaryTypeMonthly ? "shown" : "hidden"}>
              <span
                className={
                  pension !== "benef" && pension !== "national"
                    ? "shown"
                    : "hidden"
                }
              >
                {result.totalExpenses.toFixed(2)} EUR
              </span>
              <span className={pension === "benef" ? "shown" : "hidden"}>
                {result.totalExpensesBenef.toFixed(2)} EUR
              </span>
              <span className={pension === "national" ? "shown" : "hidden"}>
                {result.totalExpensesNational.toFixed(2)} EUR
              </span>
            </td>
            <td className={!salaryTypeMonthly ? "shown" : "hidden"}>
              {result.netTotalExpensesHourlyRate.toFixed(2)} EUR
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ResultNet;
