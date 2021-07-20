import React, { useContext } from "react";
import "./resultnet.css";
import { DataContext } from "../../providers/CalculatorProvider";
import TAXES from "../../constants/constants";

const ResultNet = () => {
  const {
    direction,
    monthSalary,
    result,
    taxBook,
    pension,
    disability,
    personStatus,
    dependentsNumber,
    salaryTypeMonthly,
    nonTaxMin,
    hourlyRate,
    hoursInMonth,
  } = useContext(DataContext);

  return (
    <div className={`result-section ${!direction ? "hidden" : "shown"}`}>
      <h1 className="result-section-title">Calculation result</h1>
      <table className="table-result">
        <tbody>
          <tr className="row-result">
            <td>Net-Salary</td>
            <td className="row-result-eur" colSpan="2">
              {result.netSalary.toFixed(2)} EUR
            </td>
          </tr>
          <tr>
            <td>Social tax</td>
            <td>{result.socialTaxName}%</td>
            <td>{result.socialTax.toFixed(2)} EUR</td>
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
            <td>{TAXES.nonTaxDisability[disability]} EUR</td>
          </tr>

          <tr className={taxBook && personStatus ? "shown" : "hidden"}>
            <td>Non-taxable amount for repression person</td>
            <td></td>
            <td>{TAXES.nonTaxRepressed.amount} EUR</td>
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
            <td>{dependentsNumber + " x " + TAXES.nonTaxForDependents}</td>
            <td>{result.nonTaxForDependents.toFixed(2)} EUR</td>
          </tr>

          <tr
            data-marker=""
            className={
              (monthSalary < TAXES.incomeAmount && salaryTypeMonthly) ||
              (hourlyRate * hoursInMonth < TAXES.incomeAmount &&
                !salaryTypeMonthly)
                ? "shown"
                : "hidden"
            }
          >
            <td>Personal income tax</td>
            <td>{result.incomeTaxName}%</td>

            <td>
              {result.incomeTax.toFixed(2) > 0
                ? result.incomeTax.toFixed(2)
                : 0}
              EUR
            </td>
          </tr>

          <tr
            className={
              monthSalary > TAXES.incomeAmount ||
              hourlyRate * hoursInMonth > TAXES.incomeAmount
                ? "shown"
                : "hidden"
            }
          >
            <td>Personal income tax from income till 1667 EUR</td>
            <td>{result.incomeTaxName}%</td>

            <td>{result.incomeTaxTill1667eur.toFixed(2)} EUR</td>
          </tr>

          <tr
            className={
              monthSalary > TAXES.incomeAmount ||
              hourlyRate * hoursInMonth > TAXES.incomeAmount
                ? "shown"
                : "hidden"
            }
          >
            <td>
              Personal income tax ( {result.partAfter1667eur} EUR) , from part
              after 1667 EUR
            </td>
            <td>{TAXES.incomeTax.incomeFull}%</td>
            <td>{result.incomeTaxAfter1667eur.toFixed(2)} EUR</td>
          </tr>
          <tr>
            <td>Social tax, employer's part</td>
            <td>{TAXES.SocEmployerTax[pension]}%</td>

            <td>{result.socialEmployerTax.toFixed(2)} EUR</td>
          </tr>
          <tr>
            <td>Business risk fee</td>
            <td></td>
            <td>{TAXES.businessrisk} EUR</td>
          </tr>
          <tr>
            <td>Total employer's expenses</td>
            <td></td>
            <td>{result.totalExpenses.toFixed(2)} EUR</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ResultNet;
