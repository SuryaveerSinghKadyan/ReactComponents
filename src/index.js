import React from "react";
import ReactDOM from "react-dom";
//to Import the created components use relative path of the component's folder.
import App from "./Components/App";

ReactDOM.render(
  //  Using the ComponentName as HTML element's syntax, this automatically executes that particlar component's file's content.
  <App />,
  document.getElementById("root")
);
