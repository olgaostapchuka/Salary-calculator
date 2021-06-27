import React from "react";
import { Checkbox } from "antd";
import "./personStatus.css";
import "antd/dist/antd.css";

const PersonStatus = () => {
  return (
    <div className="person-status">
      <Checkbox />
      <label className="person-status-label">
        Politically repressed person or national resistance movement status
        person
      </label>
    </div>
  );
};

export default PersonStatus;
