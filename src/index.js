import React from "react";
import ReactDOM from "react-dom";

import * as serviceWorker from './service-worker';

import 'bootstrap/dist/css/bootstrap.min.css';

import App from './App';

const wrapper = document.getElementById("root");
wrapper ? ReactDOM.render(<App />, wrapper) : false;


serviceWorker.register();