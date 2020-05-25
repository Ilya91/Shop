import React, { Component } from "react";

class Article extends Component {
  render() {
    const { article } = this.props;
    return (
      <div key={article.id} className="col-12 col-sm-6 col-lg-4">
        <div className="single-blog-post style-2 mb-5">
          <div className="blog-thumbnail">
            <a href="/"><img src="img/bg-img/4.jpg" alt=""/></a>
          </div>
          <div className="blog-content">
            <span className="post-date">June 20, 2018</span>
            <a href="/" className="post-title">{article.title}</a>
            <a href="/" className="post-author">{article.author}</a>
          </div>
        </div>
      </div>
    );
  }
}
export default Article;
