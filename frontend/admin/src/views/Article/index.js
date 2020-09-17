import React, { Component } from "react";
import {Card, CardBody, CardHeader, Table} from "reactstrap";
import { Link } from 'react-router-dom'
import {blogArticleListFetch, listArticlesSetPage} from '../../actions/articles'
import { connect } from 'react-redux'
import ArticleItem from "./ArticleItem";
import PaginationCustom from "./Pagination";

class Index extends Component {
  state = {
    error: null,
    isLoaded: false,
    articles: []
  }

  setTitleFef = (titleRef) => titleRef

  componentDidMount() {
    this.props.blogArticleListFetch();
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps.currentPage !== this.props.currentPage){
      this.props.blogArticleListFetch(this.props.currentPage);
    }
  }

  render() {
    const { articles, listArticlesSetPage, currentPage } = this.props
    return (
      <div className="col-12 col-sm-6 col-lg-12">
        <Card>
          <CardHeader>
            <span className='float-left'><i className="fa fa-align-justify"></i> List of Articles</span>
            <div className="mb-3 mb-xl-0 col-sm-4 col-md-2 col-xl">
              <Link to='/articles/add' className="btn btn-primary float-right" role="button">Create Article</Link>
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
            <PaginationCustom currentPage={currentPage} pageCount={5} setPage={listArticlesSetPage}/>
          </CardBody>
        </Card>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  ...state.articles
})


const mapDispatchToProps = {
  blogArticleListFetch, listArticlesSetPage
}

export default connect(mapStateToProps, mapDispatchToProps)(Index)
