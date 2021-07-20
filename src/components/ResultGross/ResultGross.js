import React, { useContext } from "react";
import "./resultgross.css";
import { DataContext } from "../../providers/CalculatorProvider";

import TAXES from "../../constants/constants";

const ResultGross = () => {
  const {
    direction,
    result,
    taxBook,
    pension,
    disability,
    personStatus,
    dependentsNumber,
    nonTaxMin,
  } = useContext(DataContext);

  return (
    <div className={`result-section ${direction ? "hidden" : "shown"}`}>
      <h1 className="result-section-title">Calculation result</h1>

      <table className="table-result">
        <tbody>
          <tr className="row-result">
            <td>Gross-Salary</td>
            <td className="row-result-eur" colSpan="2">
              {result.grossSalary.toFixed(2)} EUR
            </td>
          </tr>
          <tr>
            <td>Social tax</td>
            <td>{result.socialTaxName}%</td>
            <td>{result.socialTaxGross.toFixed(2)} EUR</td>
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
            <td> {result.nonTaxMin ? result.nonTaxMin : "0.00"} EUR</td>
          </tr>

          <tr className={taxBook && dependentsNumber ? "shown" : "hidden"}>
            <td>Non-taxable amount for dependents</td>
            <td>{dependentsNumber + " x " + TAXES.nonTaxForDependents}</td>
            <td>{result.nonTaxForDependents.toFixed(2)} EUR</td>
          </tr>
          <tr>
            <td>Personal income tax</td>
            <td>{result.incomeTaxNameGross}%</td>
            {<td>{result.incomeTaxGross.toFixed(2)} EUR</td>}
          </tr>
          <tr>
            <td>Social tax, employer's part</td>
            <td>{TAXES.SocEmployerTax[pension]}%</td>
            <td>{result.socialEmployerTaxGross.toFixed(2)} EUR</td>
          </tr>
          <tr>
            <td>Business risk fee</td>
            <td></td>
            <td>{TAXES.businessrisk} EUR</td>
          </tr>
          <tr>
            <td>Total employer's expenses</td>
            <td></td>
            <td>{result.totalExpensesGross.toFixed(2)} EUR</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ResultGross;
