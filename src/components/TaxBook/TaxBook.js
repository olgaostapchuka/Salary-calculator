import React, { useContext } from "react";
import "./taxbook.css";
import { Checkbox } from "antd";
import { DataContext } from "../../providers/CalculatorProvider";

export const TaxBook = () => {
  const { setTaxBook } = useContext(DataContext);

  const enableTaxBook = () => {
    setTaxBook((value) => !value);
  };

  return (
    <div className="taxbook">
      <Checkbox defaultChecked={true} onChange={enableTaxBook} id="TaxBook" />
      <label className="taxbook-label" htmlFor="TaxBook">
        Employer has your tax book
      </label>
    </div>
  );
};

export default TaxBook;
