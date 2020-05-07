import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BASE_URL } from "./config";
import {Route, Switch} from "react-router";
import Login from "./Login";
import { Link } from 'react-router-dom'

const axios = require("axios").default;

axios.defaults.baseURL = BASE_URL;
axios.defaults.headers.common.Authorization =
  "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE1ODgwMDQ1OTksImV4cCI6MTU4ODAwODE5OSwicm9sZXMiOlsiUk9MRV9VU0VSIl0sInVzZXJuYW1lIjoiemtvZWxwaW4ifQ.vNRJKrb3SWM0NW0pbqb20MmDtZiOXqmf-IUYHsvCNf_SAVV_ouWV7NQBuLQDgJH5kKM57UT2P6n9Cvh3PpNotqfxQKXLQPqlFqa7Lf_zapwc2tK_XG4SSoi2S1j0d_x-if2YW1PLHjL5Qmx603Ith5VD3RI3G-CvwbvJ_IMMunfyzKmMIP6iRZlD240lSJ6KUrCgxosF-QRiTepw89SyMDpZDs4dEksX0hl7IwLeIkLkZyZfubHQVGhwNWYiPHKyj-u05Fznu-v7x6TAXzcUuVj89ot_Yxmb7ui7z0cOa7hJSoqHyJpS9CsXjIwuTJ-beU8JPwGLyNa5KtR8Llc9CQpPB4CDMJ6ieFqrunLoopW_xXu-0wv6iFVTi4H5mfmwSlVq7tkKxkVymp8pOKn1Zpv2yGSFVLiYrh_HIatcTywO-4R6mvBl3R9wBKJ82lYTmMufeL5jAEaURTkX8LVcshVGYsn12gsQdH427w0GZuwAuhiN8KasMXdHr0FB-Y24EpSXPWIdUmbViejWjr_jcvbev3lOqoqvFkU--omXi49r9iWsFhFARpXKRBNqCWeMT1x3UOpNpP5Co18Ynqj_5ocXwtTpg29j3NY1g9IXZ1Jc-RQq9APEEYhWIRVBxI7_2FLozzGJ1SI3bpoKleg_GyCA3NRpR3ArefxQxwNayuY";
axios.defaults.headers.post["Content-Type"] =
  "application/x-www-form-urlencoded";

function App() {
  axios.get("/api/products").then(function (response) {
    console.log(response.data);
    console.log(response.status);
    console.log(response.statusText);
    console.log(response.headers);
    console.log(response.config);
  });
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>My react js application.</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Link to="/login">Login Form</Link>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/miss" render={() => (<div>Miss</div>)} />
        </Switch>
      </header>
    </div>
  );
}

export default App;
