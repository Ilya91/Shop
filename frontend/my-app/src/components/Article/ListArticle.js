import React from "react";

class ListArticle extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
  }

  render() {
    const {articles} = this.props;
    return (
      <div className="container">
        <div className="row">
          {
            articles && articles.map(article => (
                <div key={article.id} className="col-12 col-sm-6 col-lg-4">
                  <div className="single-blog-post style-2 mb-5">
                    <div className="blog-thumbnail">
                      <a href="#"><img src="img/bg-img/4.jpg" alt=""/></a>
                    </div>
                    <div className="blog-content">
                      <span className="post-date">June 20, 2018</span>
                      <a href="#" className="post-title">{article.title}</a>
                      <a href="#" className="post-author">{article.author}</a>
                    </div>
                  </div>
                </div>
              )
            )
          }
          {/*<div className="col-12 col-sm-6 col-lg-4">*/}
          {/*  <div className="single-blog-post style-2 mb-5">*/}
          {/*    <div className="blog-thumbnail">*/}
          {/*      <a href="#"><img src="img/bg-img/4.jpg" alt=""/></a>*/}
          {/*    </div>*/}


          {/*    <div className="blog-content">*/}
          {/*      <span className="post-date">June 20, 2018</span>*/}
          {/*      <a href="#" className="post-title">Elon Musk: Tesla worker admitted to sabotage</a>*/}
          {/*      <a href="#" className="post-author">By Michael Smith</a>*/}
          {/*    </div>*/}
          {/*  </div>*/}
          {/*</div>*/}


          {/*<div className="col-12 col-sm-6 col-lg-4">*/}
          {/*  <div className="single-blog-post style-2 mb-5">*/}

          {/*    <div className="blog-thumbnail">*/}
          {/*      <a href="#"><img src="img/bg-img/5.jpg" alt=""/></a>*/}
          {/*    </div>*/}


          {/*    <div className="blog-content">*/}
          {/*      <span className="post-date">June 20, 2018</span>*/}
          {/*      <a href="#" className="post-title">Rachel Sm ith breaks down while discussing border crisis </a>*/}
          {/*      <a href="#" className="post-author">By Michael Smith</a>*/}
          {/*    </div>*/}
          {/*  </div>*/}
          {/*</div>*/}


          {/*<div className="col-12 col-sm-6 col-lg-4">*/}
          {/*  <div className="single-blog-post style-2 mb-5">*/}

          {/*    <div className="blog-thumbnail">*/}
          {/*      <a href="#"><img src="img/bg-img/6.jpg" alt=""/></a>*/}
          {/*    </div>*/}


          {/*    <div className="blog-content">*/}
          {/*      <span className="post-date">June 20, 2018</span>*/}
          {/*      <a href="#" className="post-title">Dow falls 287 points as trade war fears escalate</a>*/}
          {/*      <a href="#" className="post-author">By Michael Smith</a>*/}
          {/*    </div>*/}
          {/*  </div>*/}
          {/*</div>*/}


          {/*<div className="col-12 col-sm-6 col-lg-4">*/}
          {/*  <div className="single-blog-post style-2 mb-5">*/}

          {/*    <div className="blog-thumbnail">*/}
          {/*      <a href="#"><img src="img/bg-img/7.jpg" alt=""/></a>*/}
          {/*    </div>*/}


          {/*    <div className="blog-content">*/}
          {/*      <span className="post-date">June 20, 2018</span>*/}
          {/*      <a href="#" className="post-title">Elon Musk: Tesla worker admitted to sabotage</a>*/}
          {/*      <a href="#" className="post-author">By Michael Smith</a>*/}
          {/*    </div>*/}
          {/*  </div>*/}
          {/*</div>*/}


          {/*<div className="col-12 col-sm-6 col-lg-4">*/}
          {/*  <div className="single-blog-post style-2 mb-5">*/}

          {/*    <div className="blog-thumbnail">*/}
          {/*      <a href="#"><img src="img/bg-img/8.jpg" alt=""/></a>*/}
          {/*    </div>*/}


          {/*    <div className="blog-content">*/}
          {/*      <span className="post-date">June 20, 2018</span>*/}
          {/*      <a href="#" className="post-title">Rachel Sm ith breaks down while discussing border crisis </a>*/}
          {/*      <a href="#" className="post-author">By Michael Smith</a>*/}
          {/*    </div>*/}
          {/*  </div>*/}
          {/*</div>*/}


          {/*<div className="col-12 col-sm-6 col-lg-4">*/}
          {/*  <div className="single-blog-post style-2 mb-5">*/}

          {/*    <div className="blog-thumbnail">*/}
          {/*      <a href="#"><img src="img/bg-img/9.jpg" alt=""/></a>*/}
          {/*    </div>*/}


          {/*    <div className="blog-content">*/}
          {/*      <span className="post-date">June 20, 2018</span>*/}
          {/*      <a href="#" className="post-title">Dow falls 287 points as trade war fears escalate</a>*/}
          {/*      <a href="#" className="post-author">By Michael Smith</a>*/}
          {/*    </div>*/}
          {/*  </div>*/}
          {/*</div>*/}

          <div className="col-12">
            <div className="load-more-button text-center">
              <a href="#" className="btn newsbox-btn">Load More</a>
            </div>
          </div>

        </div>
      </div>
    );
  }
}
export default ListArticle;
