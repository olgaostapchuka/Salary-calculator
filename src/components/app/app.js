import React from "react";
import AppHeader from "../AppHeader";
import Form from "../Form";
import Result from "../Result";
import "./app.css";

const App = () => {
  return (
    <div className="app">
      <AppHeader />
      <div className="calculator">
        <Form />
        <Result />
      </div>
    </div>
  );
};

export default App;
