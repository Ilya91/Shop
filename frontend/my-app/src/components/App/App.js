import React from "react";
import logo from "../../logo.svg";
import "./App.css";
import { BASE_URL } from "../../config";
import {Route, Switch} from "react-router";
import ListArticle from "../Article/ListArticle";
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import {blogArticleAdd, blogArticleList} from "../../actions/actions";

const axios = require("axios").default;

axios.defaults.baseURL = BASE_URL;
axios.defaults.headers.common.Authorization =
  "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE1ODkxMzg0OTUsImV4cCI6MTU4OTE0MjA5NSwicm9sZXMiOlsiUk9MRV9VU0VSIl0sInVzZXJuYW1lIjoiamFycmV0Lm1heWVyIn0.o8vGrNwyJwdTjL61DHjfkiuzlgRj_IpUe_wqDu3OqJJJgq49vtaAzonwuEOy94uj2dAs9MWd4d95ARMPk0KS5bqDSisv3beyBtFLqbkbUOcmmb1v-d2t_pPkS5OrArb8ySnR5m-G6KiRgXIPYd3gBDV0x6PVYme4yajEJkac0jOk4M88HZu2Mlx7DUYosTrnRGCnWoT7db20ye1nTxLk8136xFycm2LjPRLH5kzyKglnwbffvFOs6lT1S94H9w5_OFPvqkLA9ITwENduo8cj7FJL82raLVWa7K5-5JRe1p_acFIAZSQyz98FZ-WS0dWDqkSVS-ga0i-d-fsQt995KY7zJHRuPhx8R02j3CBY_e6d2mdexQzwjjQxxuo0XCQg-TQbbfnETNrAkIZzWKsb4jbhLVlcSOv-d9vtpPX2kCfJJ8N6nZSbQ-Oz25AGKg25XJPlkAOdlOVk2P5VuiyvwnlNO_aAe0WKU9M6G_TCFc1dcxbn38Xn65EL2e13xwCquAoCMD7CL64akC2sWgwZRJ9NqpkdQ_jvl2F7rlaQbJ-7yA5vxhGWXRGA39Vh79o9ziPbpiOLGvmksziL2e07E4dfVmOPikNRsUxWXp0HG0tXuPdHp2ZowP7IQP0l4LV4q65Dy3NlPcQkr1Ur2yQiLBCWQ4O_nlmMlexuD2pqdbc";
axios.defaults.headers.post["Content-Type"] =
  "application/x-www-form-urlencoded";

const mapStateToProps = state => ({
  ...state.blogArticleList
})

const mapDispatchToProps = {
  blogArticleList,
  blogArticleAdd
}

class App extends React.Component {
  // constructor(props) {
  //   super(props);
  //   axios.get("/api/articles").then(function (response) {
  //     console.log(response.data);
  //     console.log(response.status);
  //     console.log(response.statusText);
  //     console.log(response.headers);
  //     console.log(response.config);
  //   });
  // }
  componentDidMount() {
    this.props.blogArticleList();
  }
  render() {
    console.log(this.props);
    return (<ListArticle articles={this.props.articles}/>);
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
