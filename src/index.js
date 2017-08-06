import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import App from "./app";

const Application = App(BrowserRouter);
ReactDOM.render(<Application />, document.getElementById("root"));
