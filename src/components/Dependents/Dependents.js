import React, { useContext } from "react";
import "./dependents.css";

import { InputNumber } from "antd";
import { DataContext } from "../../providers/CalculatorProvider";

const Dependents = () => {
  const { dependentsNumber, setDependentsNumber } = useContext(DataContext);
  return (
    <div className="dependents">
      <label className="dependents-label" htmlFor="dependentInput">
        Number of dependents
      </label>
      <InputNumber
        id="dependentInput"
        min={1}
        max={10000}
        defaultValue={dependentsNumber}
        onChange={setDependentsNumber}
      />
    </div>
  );
};

export default Dependents;

/*<Formfield label="Number of dependents" id="dependentInput">      
<InputNumber
        id="dependentInput"
        min={1}
        max={10000}
        defaultValue={dependentsNumber}
        onChange={setDependentsNumber}
      /></Formfield>
*/
