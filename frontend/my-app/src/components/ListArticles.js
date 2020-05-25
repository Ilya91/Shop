import React, {Component} from 'react'
import { connect } from 'react-redux'
import { getArticles } from '../actions/articles'
import Article from "./Article";

class ListArticles extends Component {
  componentDidMount() {
    this.props.getArticles();
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
  getArticles: () => dispatch(getArticles())
})

export default connect(mapStateToProps, mapDispatchToProps)(ListArticles)
