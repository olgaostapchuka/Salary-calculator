import React from "react";
import "./taxbook.css";
import "antd/dist/antd.css";
import { Checkbox } from "antd";

const TaxBook = () => {
  return (
    <div className="taxbook">
      <Checkbox />
      <label className="taxbook-label">Employer has your tax book</label>
    </div>
  );
};

export default TaxBook;
