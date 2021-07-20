import React, { useContext } from "react";
import { Checkbox } from "antd";
import "./personStatus.css";
import { DataContext } from "../../providers/CalculatorProvider";

const PersonStatus = () => {
  const { setPersonStatus } = useContext(DataContext);

  const handlePersonStatus = () => {
    setPersonStatus((value) => !value);
  };
  return (
    <div className="person-status">
      <Checkbox
        id="personStatus"
        defaultChecked={false}
        onChange={handlePersonStatus}
      />
      <label className="person-status-label" htmlFor="personStatus">
        Politically repressed person or national resistance movement status
        person
      </label>
    </div>
  );
};

export default PersonStatus;
