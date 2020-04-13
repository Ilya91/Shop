import React from 'react';
import logo from './logo.svg';
import './App.css';
const axios = require('axios').default;

axios.defaults.baseURL = 'http://0.0.0.0:8081';
axios.defaults.headers.common['Authorization'] = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE1ODY3OTI3MDgsImV4cCI6MTU4Njc5NjMwOCwicm9sZXMiOlsiUk9MRV9VU0VSIl0sInVzZXJuYW1lIjoiemtvZWxwaW4ifQ.KUOqCq1hdrXoNQwX6M1mC0sbjtbeEPLhej7mcEJpOsQX-25Z196Xh0S-pNNo5-dKSETeUUWLo1Ln9GMW0JQIKggptYXwzRrPAQQRsrGEgai5PU6wlKde-d93SKjtGH0LJKSpSHAvifP5cbgyP5trNtKnvhZAsqSgqtyUqNvknRyOVU714wP7sYOpmELzEzvK1JOL25WODg6seoeXfQuf9-VZPBmDhQxUmuX-MCZ88u89OW2QC24bT_hk4CDEHxzCAlWQy_y-9_WE9rP8-9rjyw6UXI6oI7Yt5VcTG_NW6WmvYVhdzVBXQ_2OWqwMyTxt8JV6k-OK8Y3bT2NdFGizpvIb1gU0xMFCv2qVBslvd-c6SBpzwqghCJwQgmEhhsksIlOcLZSxeV09n-TM_mU0Si02EWi0BNxou-NGUycfhXbsJSE8wencGh9lwPS8BkUfFGxNgGKe7rh5GxPBqbBCQzr9u5oSaAo_Dk6tbBREVQyvZz7_cyIf5-G3VBstjT-1ywbbiZlXqaquZESf-rHZUA4sTBRWKvDvIoJGqNVUY3n5OF2Uq_1b0JnTj-Df4e5uk2RLsNNh7QkT-Bgknph1SW3vGcy8dzz-h7nfAkBua0NmaeC8pBNlVHvDEppo1N6E2Smp3AkqdK5FvYC1wvBSrgnR9AM21_XAGi2H4sh8FLA';
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

function App() {
  axios.get('/api/products')
    .then(function (response) {
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
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
