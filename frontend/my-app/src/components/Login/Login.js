import React, { Component } from "react";
import LoginForm from "./LoginForm";

class LoginPage extends Component {
  submit = values => {
    // print the form values to the console
    console.log(values)
  }
  render() {
    return (
      <div>
        <section className="contact-area section-padding-100">
          <div className="container">
            <div className="row justify-content-center">

              <div className="col-12 col-lg-8">
                <div className="contact-content mb-100">
                  <div className="contact-form-area mb-70">
                    <h4 className="mb-50">Login</h4>
                    <LoginForm onSubmit={this.submit} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default LoginPage
