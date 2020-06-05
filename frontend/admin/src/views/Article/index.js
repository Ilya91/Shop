import React, { Component } from "react";
import {Badge, Card, CardBody, CardHeader, Pagination, PaginationItem, PaginationLink, Table} from "reactstrap";
import { Link } from 'react-router-dom'
import {blogArticleListFetch} from '../../actions/articles'
import { connect } from 'react-redux'
import ArticleItem from "./ArticleItem";

class Index extends Component {
  state = {
    error: null,
    isLoaded: false,
    articles: []
  }

  setTitleFef = (titleRef) => console.log(titleRef)

  componentDidMount() {
    this.props.blogArticleListFetch();
  }

  render() {
    const { articles } = this.props
    console.log(articles);
    return (
      <div className="col-12 col-sm-6 col-lg-12">
        <Card>
          <CardHeader>
            <span className='float-left'><i className="fa fa-align-justify"></i> List of Articles</span>
            <div className="mb-3 mb-xl-0 col-sm-4 col-md-2 col-xl">
              <Link to='articles/add' className="btn btn-primary float-right" role="button">Create Article</Link>
            </div>
          </CardHeader>
          <CardBody>
            <Table responsive>
              <thead>
              <tr ref={this.setTitleFef}>
                <th>Title</th>
                <th>Category</th>
                <th>Author</th>
                <th>Created</th>
              </tr>
              </thead>
              <tbody>
              {
                articles && articles.map(article => (
                    <ArticleItem article={article} key={article.id}/>
                  )
                )
              }
              </tbody>
            </Table>
            <Pagination>
              <PaginationItem>
                <PaginationLink previous tag="button"></PaginationLink>
              </PaginationItem>
              <PaginationItem active>
                <PaginationLink tag="button">1</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink tag="button">2</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink tag="button">3</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink tag="button">4</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink next tag="button"></PaginationLink>
              </PaginationItem>
            </Pagination>
          </CardBody>
        </Card>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  ...state.articles
})


const mapDispatchToProps = dispatch => ({
  blogArticleListFetch: () => dispatch(blogArticleListFetch())
})

export default connect(mapStateToProps, mapDispatchToProps)(Index)
