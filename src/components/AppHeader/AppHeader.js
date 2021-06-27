import React from "react";
import "./appheader.css";

const AppHeader = () => {
  return (
    <div className="app-header">
      <h1 className="header-title">Salary Calculator</h1>
      <p className="header-desc">
        This salary calculator helps you to get a net salary from gross salary
        and vice versa using SRS data in Latvia.
      </p>
    </div>
  );
};

export default AppHeader;
