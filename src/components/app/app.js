import React from "react";
import AppHeader from "../AppHeader";
import Form from "../Form";
import ResultNet from "../ResultNet";
import ResultGross from "../ResultGross";
import "./app.css";
import { DataProvider } from "../../providers/CalculatorProvider";

const App = () => {
  return (
    <DataProvider>
      <div className="app">
        <AppHeader />
        <div className="calculator">
          <Form />
          <ResultNet />
          <ResultGross />
        </div>
      </div>
    </DataProvider>
  );
};

export default App;
