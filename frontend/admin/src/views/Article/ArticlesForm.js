import React, { Component } from "react";
import { Field, reduxForm } from 'redux-form'
import {connect} from "react-redux";
import {createNewArticle} from "../../actions/articles";
import {Button, Card, CardBody, CardFooter, CardHeader, Form, FormGroup, FormText, Input, Label} from "reactstrap";

class ArticlesForm extends Component {
  onSubmit = values => {
    let authorId = parseInt(values.authorId)
    return this.props.createNewArticle(
      values.title,
      authorId,
      1,
      values.description
    )
  }
  render() {
    const { handleSubmit } = this.props
    return (
        <Card>
          <CardHeader>
            <strong>Create</strong> Article
          </CardHeader>
          <CardBody>
            <form onSubmit={handleSubmit(this.onSubmit)} >
              <FormGroup>
                <Label htmlFor="title">Title</Label>
                <Field name="title" component="input" type="text" className="form-control" placeholder="Enter Title.."/>
              </FormGroup>
              <FormGroup>
                <Label htmlFor="description">Description</Label>
                <Field name="description" component="input" type="text" className="form-control" placeholder="Enter Description.."/>
              </FormGroup>
              <FormGroup>
                <Label htmlFor="author">Author</Label>
                <Field name="authorId" component="input" type="text" className="form-control" placeholder="Enter Author.."/>
              </FormGroup>
              <CardFooter>
                <Button type="submit" size="sm" color="primary"><i className="fa fa-dot-circle-o"></i> Submit</Button>
                <Button type="reset" size="sm" color="danger"><i className="fa fa-ban"></i> Reset</Button>
              </CardFooter>
            </form>
          </CardBody>
        </Card>
    );
  }
}

const mapDispatchToProps = {
  createNewArticle
}

ArticlesForm = reduxForm({
  form: 'articles'
})(ArticlesForm)

export default connect(null, mapDispatchToProps)(ArticlesForm)

