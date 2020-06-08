import React, { Component } from "react";
import {Card, CardBody, CardHeader, Table} from "reactstrap";
import { Link } from 'react-router-dom'
import {blogArticleListFetch} from '../../actions/articles'
import { connect } from 'react-redux'
import ArticleItem from "./ArticleItem";
import PaginationCustom from "./Pagination";

class Index extends Component {
  state = {
    error: null,
    isLoaded: false,
    articles: []
  }

  setTitleFef = (titleRef) => console.log(titleRef)

  componentDidMount() {
    this.props.blogArticleListFetch(1);
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps.match.params.page !== this.getParamPage()){

    }
  }

  getParamPage(){
    return Number(this.props.match.params.page) || 1;
  }

  render() {
    const { articles, pagination } = this.props
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
            <PaginationCustom/>
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
