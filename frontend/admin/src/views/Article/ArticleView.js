import React, { Component } from "react";
import {Card, CardBody, CardHeader, Col, Row, Table} from "reactstrap";
import {blogArticleItemFetch} from "../../actions/articles";
import {connect} from "react-redux";

class ArticleView extends Component {
  state = {
    error: null,
    isLoaded: false,
    article: []
  }

  componentDidMount() {
    this.props.blogArticleItemFetch(this.props.match.params.id);
  }
  render() {
    const { article } = this.props
    return (
      <div className="animated fadeIn">
        <Row>
          <Col lg={6}>
            <Card>
              <CardHeader>
                <strong><i className="icon-info pr-1"></i>Article id: {this.props.match.params.id}</strong>
              </CardHeader>
              <CardBody>
                <Table responsive striped hover>
                  <tbody>
                  <tr>
                    <td><strong>Title</strong></td>
                    <td>{ article.title }</td>
                  </tr>
                  <tr>
                    <td><strong>Description</strong></td>
                    <td>{ article.description }</td>
                  </tr>
                  <tr>
                    <td><strong>Category</strong></td>
                    <td>{ article.categoryId }</td>
                  </tr>
                  <tr>
                    <td><strong>Author</strong></td>
                    <td>{ article.authorId }</td>
                  </tr>
                  <tr>
                    <td><strong>Created</strong></td>
                    <td>{ article.createdAt }</td>
                  </tr>
                  </tbody>
                </Table>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  ...state.article
})


const mapDispatchToProps = {
  blogArticleItemFetch
}

export default connect(mapStateToProps, mapDispatchToProps)(ArticleView)
