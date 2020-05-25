import React, { Component } from "react";
import { Field, reduxForm } from 'redux-form'

class LoginForm extends Component {

  onSubmit = () => {

  }

  render() {
    const { handleSubmit } = this.props
    return (
                    <form onSubmit={handleSubmit(this.onSubmit())}>
                      <div className="row">
                        <div className="col-lg-6">
                          <div className="form-group">
                            <Field id="name" name="firstName" component="input" type="text" className="form-control" placeholder="Name"/>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-lg-6">
                          <div className="form-group">
                            <Field id="email" name="firstName" component="input" type="email" className="form-control" placeholder="E-mail"/>
                          </div>
                        </div>
                        <div className="col-12">
                          <button className="btn newsbox-btn mt-30 col-lg-6" type="submit">Send</button>
                        </div>
                      </div>
                    </form>
    );
  }
}

LoginForm = reduxForm({
  // a unique name for the form
  form: 'login'
})(LoginForm)

export default LoginForm
