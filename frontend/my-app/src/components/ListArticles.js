import React, {Component} from 'react'
import { connect } from 'react-redux'
import { blogArticleListFetch } from '../actions/articles'
import Article from "./Article";

class ListArticles extends Component {
  state = {
    error: null,
    isLoaded: false,
    articles: []
  }

  componentDidMount() {
    this.props.blogArticleListFetch();
  }

  render() {
    const { articles } = this.props
    return (
      <div className="container">
        <div className="row">
          {
            articles && articles.map(article => (
              <Article article={article} key={article.id}/>
              )
            )
          }
          <div className="col-12">
            <div className="load-more-button text-center">
              <a href="/" className="btn newsbox-btn">Load More</a>
            </div>
          </div>

        </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(ListArticles)
