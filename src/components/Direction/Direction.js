import React from "react";
import "./direction.css";
import "antd/dist/antd.css";
import { Radio } from "antd";

const Direction = () => {
  return (
    <div className="direction">
      <label className="direction-label">Direction</label> 
      <Radio.Group defaultValue="GrossNet" buttonStyle="solid">
        <Radio.Button value="GrossNet">Gross &gt; Net Salary</Radio.Button>
        <Radio.Button value="NetGross">Net &gt; Gross Salary</Radio.Button>
      </Radio.Group>
    </div>
  );
};

export default Direction;
