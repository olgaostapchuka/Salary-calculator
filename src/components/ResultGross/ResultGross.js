import React, { useContext } from "react";
import "./resultgross.css";
import { DataContext } from "../../providers/CalculatorProvider";

import Taxes from "../../constants/constants";

const ResultGross = () => {
  const { direction } = useContext(DataContext);
  const { result } = useContext(DataContext);

  return (
    <div className="result-section" className={direction ? "hidden" : "shown"}>
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
            <td>{Taxes.social}%</td>
            <td>{result.socialTaxGross.toFixed(2)} EUR</td>
          </tr>
          <tr>
            <td>Non-taxable minimum</td>
            <td></td>
            <td> {result.nonTaxMin ? result.nonTaxMin : "0.00"} EUR</td>
          </tr>
          <tr>
            <td>Non-taxable amount for dependents</td>
            <td></td>
            <td>{result.nonTaxForDependents.toFixed(2)} EUR</td>
          </tr>
          <tr>
            <td>Personal income tax</td>
            <td>{Taxes.income}%</td>
            {<td>{result.incomeTaxGross.toFixed(2)} EUR</td>}
          </tr>
          <tr>
            <td>Social tax, employer's part</td>
            <td>{Taxes.socialEmployer}%</td>
            <td>{result.socialEmployerTaxGross.toFixed(2)} EUR</td>
          </tr>
          <tr>
            <td>Business risk fee</td>
            <td></td>
            <td>{Taxes.businessrisk} EUR</td>
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
