import React, { useContext } from "react";
import "./direction.css";
import { Radio } from "antd";
import { DataContext } from "../../providers/CalculatorProvider";

const Direction = () => {
  const { setDirection } = useContext(DataContext);

  const handleChange = () => {
    setDirection((value) => !value);
  };

  return (
    <div className="direction">
      <label className="direction-label">Direction</label> 
      <Radio.Group
        defaultValue="GrossNet"
        onChange={handleChange}
        buttonStyle="solid"
      >
        <Radio.Button value="GrossNet">Gross &gt; Net Salary</Radio.Button>
        <Radio.Button value="NetGross">Net &gt; Gross Salary</Radio.Button>
      </Radio.Group>
    </div>
  );
};

export default Direction;

/*
<label className="direction-label">Direction</label> 
<Radio.Group
  defaultValue="GrossNet"
  onChange={handleChange}
  buttonStyle="solid"
>
  <Radio.Button value="GrossNet">Gross &gt; Net Salary</Radio.Button>
  <Radio.Button value="NetGross">Net &gt; Gross Salary</Radio.Button>
</Radio.Group>*/
