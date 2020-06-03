import React, { Component } from "react";
import ArticlesForm from "./ArticlesForm";

class Index extends Component {
  submit = values => {
    // print the form values to the console
    console.log(values)
  }
  render() {
    return (
      <div className="col-12 col-sm-6 col-lg-4">
        <ArticlesForm  onSubmit={this.submit} />
      </div>
    );
  }
}
export default Index;
