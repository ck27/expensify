import React from "react";
import ReactDOM from "react-dom";

import "normalize.css/normalize.css";
import "./styles/app.scss";

import AppRouter from "./routers/AppRouter";



ReactDOM.render(<AppRouter />, document.getElementById("app"));