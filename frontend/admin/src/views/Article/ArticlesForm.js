import React, { Component } from "react";
import { Field, reduxForm } from 'redux-form'
import {connect} from "react-redux";
import {userLoginAttempt} from "../../actions/login";

class ArticlesForm extends Component {

  onSubmit = (values) => {
    console.log(values)
  }
  render() {
    const { handleSubmit } = this.props
    return (
      <form onSubmit={handleSubmit(this.onSubmit())}>
        <div className="row">
          <div className="col-lg-6">
            <div className="form-group">
              <Field id="username" name="username" component="input" type="text" className="form-control" placeholder="Username"/>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <div className="form-group">
              <Field id="password" name="password" component="input" type="password" className="form-control" placeholder="Password"/>
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

const mapDispatchToProps = dispatch => ({
  userLoginAttempt: () => dispatch(userLoginAttempt())
})

ArticlesForm = reduxForm({
  // a unique name for the form
  form: 'articles'
})(ArticlesForm)

export default connect(null, mapDispatchToProps)(ArticlesForm)

