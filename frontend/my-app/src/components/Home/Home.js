import React, { Component } from "react";
import ListArticles from "../ListArticles";

class Home extends Component {
  render() {
    return (
      <div>
        <section className="breaking-news-area">
          <div className="container-fluid">
            <div className="row">
              <div className="col-12">
                <div className="breaking-news-ticker d-flex flex-wrap align-items-center">
                  <div className="title">
                    <h6>Trending</h6>
                  </div>
                  <div id="breakingNewsTicker" className="ticker">
                    <ul>
                      <li><a href="/">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada lorem
                        maximus mauris scelerisque, at rutrum nulla dictum.</a></li>
                      <li><a href="/">Welcome to Colorlib Family.</a></li>
                      <li><a href="/">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada lorem
                        maximus mauris scelerisque</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="hero-area">
          <div className="hero-post-slides owl-carousel">
            <div className="single-slide">
              <div className="container-fluid">
                <div className="row">
                  <div className="col-12 col-md-6">
                    <div className="single-blog-post style-1" data-animation="fadeInUpBig" data-delay="100ms"
                         data-duration="1000ms">
                      <div className="blog-thumbnail bg-overlay">
                        <a href="/"><img src="img/bg-img/1.jpg" alt=""/></a>
                      </div>
                      <div className="blog-content">
                        <span className="post-date">June 20, 2018</span>
                        <a href="/" className="post-title">Traffic Problems in Time Square</a>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-md-6">
                    <div className="single-blog-post style-1 mb-30" data-animation="fadeInUpBig" data-delay="300ms"
                         data-duration="1000ms">
                      <div className="blog-thumbnail bg-overlay">
                        <a href="/"><img src="img/bg-img/2.jpg" alt=""/></a>
                      </div>
                      <div className="blog-content">
                        <span className="post-date">June 20, 2018</span>
                        <a href="/" className="post-title">The best way to spend your holliday</a>
                      </div>
                    </div>
                    <div className="single-blog-post style-1" data-animation="fadeInUpBig" data-delay="500ms"
                         data-duration="1000ms">
                      <div className="blog-thumbnail bg-overlay">
                        <a href="/"><img src="img/bg-img/3.jpg" alt=""/></a>
                      </div>
                      <div className="blog-content">
                        <span className="post-date">June 20, 2018</span>
                        <a href="/" className="post-title">Sport results for the weekend games</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="single-slide">
              <div className="container-fluid">
                <div className="row">
                  <div className="col-12 col-md-6">
                    <div className="single-blog-post style-1" data-animation="fadeInUpBig" data-delay="100ms"
                         data-duration="1000ms">
                      <div className="blog-thumbnail bg-overlay">
                        <a href="/"><img src="img/bg-img/1.jpg" alt=""/></a>
                      </div>
                      <div className="blog-content">
                        <span className="post-date">June 20, 2018</span>
                        <a href="/" className="post-title">Traffic Problems in Time Square</a>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-md-6">
                    <div className="single-blog-post style-1 mb-30" data-animation="fadeInUpBig" data-delay="300ms"
                         data-duration="1000ms">
                      <div className="blog-thumbnail bg-overlay">
                        <a href="/"><img src="img/bg-img/2.jpg" alt=""/></a>
                      </div>
                      <div className="blog-content">
                        <span className="post-date">June 20, 2018</span>
                        <a href="/" className="post-title">The best way to spend your holliday</a>
                      </div>
                    </div>
                    <div className="single-blog-post style-1" data-animation="fadeInUpBig" data-delay="500ms"
                         data-duration="1000ms">
                      <div className="blog-thumbnail bg-overlay">
                        <a href="/"><img src="img/bg-img/3.jpg" alt=""/></a>
                      </div>
                      <div className="blog-content">
                        <span className="post-date">June 20, 2018</span>
                        <a href="/" className="post-title">Sport results for the weekend games</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
        <section className="intro-news-area section-padding-100-0 mb-70">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-12 col-lg-8">
                <div className="intro-news-tab">
                  <div className="intro-news-filter d-flex justify-content-between">
                    <h6>All the news</h6>
                    <nav>
                      <div className="nav nav-tabs" id="nav-tab" role="tablist">
                        <a className="nav-item nav-link active" id="nav1" data-toggle="tab" href="#nav-1" role="tab"
                           aria-controls="nav-1" aria-selected="true">Latest</a>
                        <a className="nav-item nav-link" id="nav2" data-toggle="tab" href="#nav-2" role="tab"
                           aria-controls="nav-2" aria-selected="false">Popular</a>
                        <a className="nav-item nav-link" id="nav3" data-toggle="tab" href="#nav-3" role="tab"
                           aria-controls="nav-3" aria-selected="false">International</a>
                        <a className="nav-item nav-link" id="nav4" data-toggle="tab" href="#nav-4" role="tab"
                           aria-controls="nav-4" aria-selected="false">Local</a>
                      </div>
                    </nav>
                  </div>

                  <div className="tab-content" id="nav-tabContent">

                    <div className="tab-pane fade show active" id="nav-1" role="tabpanel" aria-labelledby="nav1">
                      <div className="row">

                        <div className="col-12 col-sm-6">
                          <div className="single-blog-post style-2 mb-5">

                            <div className="blog-thumbnail">
                              <a href="/"><img src="img/bg-img/14.jpg" alt=""/></a>
                            </div>


                            <div className="blog-content">
                              <span className="post-date">June 20, 2018</span>
                              <a href="/" className="post-title">Elon Musk: Tesla worker admitted to sabotage</a>
                              <a href="/" className="post-author">By Michael Smith</a>
                            </div>
                          </div>
                        </div>


                        <div className="col-12 col-sm-6">
                          <div className="single-blog-post style-2 mb-5">

                            <div className="blog-thumbnail">
                              <a href="/"><img src="img/bg-img/15.jpg" alt=""/></a>
                            </div>


                            <div className="blog-content">
                              <span className="post-date">June 20, 2018</span>
                              <a href="/" className="post-title">Rachel Sm ith breaks down while discussing border
                                crisis</a>
                              <a href="/" className="post-author">By Michael Smith</a>
                            </div>
                          </div>
                        </div>


                        <div className="col-12 col-sm-6">
                          <div className="single-blog-post d-flex style-4 mb-30">

                            <div className="blog-thumbnail">
                              <a href="/"><img src="img/bg-img/16.jpg" alt=""/></a>
                            </div>


                            <div className="blog-content">
                              <span className="post-date">June 20, 2018</span>
                              <a href="/" className="post-title">Nearly a quarter have no emergency savings</a>
                            </div>
                          </div>
                        </div>


                        <div className="col-12 col-sm-6">
                          <div className="single-blog-post d-flex style-4 mb-30">

                            <div className="blog-thumbnail">
                              <a href="/"><img src="img/bg-img/17.jpg" alt=""/></a>
                            </div>


                            <div className="blog-content">
                              <span className="post-date">June 20, 2018</span>
                              <a href="/" className="post-title">Nearly a quarter have no emergency savings</a>
                            </div>
                          </div>
                        </div>


                        <div className="col-12 col-sm-6">
                          <div className="single-blog-post d-flex style-4 mb-30">

                            <div className="blog-thumbnail">
                              <a href="/"><img src="img/bg-img/18.jpg" alt=""/></a>
                            </div>


                            <div className="blog-content">
                              <span className="post-date">June 20, 2018</span>
                              <a href="/" className="post-title">Top bitcoin exchange says over $30 million stolen</a>
                            </div>
                          </div>
                        </div>


                        <div className="col-12 col-sm-6">
                          <div className="single-blog-post d-flex style-4 mb-30">

                            <div className="blog-thumbnail">
                              <a href="/"><img src="img/bg-img/19.jpg" alt=""/></a>
                            </div>


                            <div className="blog-content">
                              <span className="post-date">June 20, 2018</span>
                              <a href="/" className="post-title">Top bitcoin exchange says over $30 million stolen</a>
                            </div>
                          </div>
                        </div>


                        <div className="col-12 col-sm-6">
                          <div className="single-blog-post d-flex style-4 mb-30">

                            <div className="blog-thumbnail">
                              <a href="/"><img src="img/bg-img/20.jpg" alt=""/></a>
                            </div>


                            <div className="blog-content">
                              <span className="post-date">June 20, 2018</span>
                              <a href="/" className="post-title">Dow falls 287 points as trade war fears escalate</a>
                            </div>
                          </div>
                        </div>


                        <div className="col-12 col-sm-6">
                          <div className="single-blog-post d-flex style-4 mb-30">

                            <div className="blog-thumbnail">
                              <a href="/"><img src="img/bg-img/21.jpg" alt=""/></a>
                            </div>


                            <div className="blog-content">
                              <span className="post-date">June 20, 2018</span>
                              <a href="/" className="post-title">Dow falls 287 points as trade war fears escalate</a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="tab-pane fade" id="nav-2" role="tabpanel" aria-labelledby="nav2">
                      <div className="row">

                        <div className="col-12 col-sm-6">
                          <div className="single-blog-post style-2 mb-5">

                            <div className="blog-thumbnail">
                              <a href="/"><img src="img/bg-img/4.jpg" alt=""/></a>
                            </div>


                            <div className="blog-content">
                              <span className="post-date">June 20, 2018</span>
                              <a href="/" className="post-title">Elon Musk: Tesla worker admitted to sabotage</a>
                              <a href="/" className="post-author">By Michael Smith</a>
                            </div>
                          </div>
                        </div>


                        <div className="col-12 col-sm-6">
                          <div className="single-blog-post style-2 mb-5">

                            <div className="blog-thumbnail">
                              <a href="/"><img src="img/bg-img/5.jpg" alt=""/></a>
                            </div>


                            <div className="blog-content">
                              <span className="post-date">June 20, 2018</span>
                              <a href="/" className="post-title">Rachel Sm ith breaks down while discussing border
                                crisis</a>
                              <a href="/" className="post-author">By Michael Smith</a>
                            </div>
                          </div>
                        </div>


                        <div className="col-12 col-sm-6">
                          <div className="single-blog-post d-flex style-4 mb-30">

                            <div className="blog-thumbnail">
                              <a href="/"><img src="img/bg-img/16.jpg" alt=""/></a>
                            </div>


                            <div className="blog-content">
                              <span className="post-date">June 20, 2018</span>
                              <a href="/" className="post-title">Nearly a quarter have no emergency savings</a>
                            </div>
                          </div>
                        </div>


                        <div className="col-12 col-sm-6">
                          <div className="single-blog-post d-flex style-4 mb-30">

                            <div className="blog-thumbnail">
                              <a href="/"><img src="img/bg-img/17.jpg" alt=""/></a>
                            </div>


                            <div className="blog-content">
                              <span className="post-date">June 20, 2018</span>
                              <a href="/" className="post-title">Nearly a quarter have no emergency savings</a>
                            </div>
                          </div>
                        </div>


                        <div className="col-12 col-sm-6">
                          <div className="single-blog-post d-flex style-4 mb-30">

                            <div className="blog-thumbnail">
                              <a href="/"><img src="img/bg-img/18.jpg" alt=""/></a>
                            </div>


                            <div className="blog-content">
                              <span className="post-date">June 20, 2018</span>
                              <a href="/" className="post-title">Top bitcoin exchange says over $30 million stolen</a>
                            </div>
                          </div>
                        </div>


                        <div className="col-12 col-sm-6">
                          <div className="single-blog-post d-flex style-4 mb-30">

                            <div className="blog-thumbnail">
                              <a href="/"><img src="img/bg-img/19.jpg" alt=""/></a>
                            </div>


                            <div className="blog-content">
                              <span className="post-date">June 20, 2018</span>
                              <a href="/" className="post-title">Top bitcoin exchange says over $30 million stolen</a>
                            </div>
                          </div>
                        </div>


                        <div className="col-12 col-sm-6">
                          <div className="single-blog-post d-flex style-4 mb-30">

                            <div className="blog-thumbnail">
                              <a href="/"><img src="img/bg-img/20.jpg" alt=""/></a>
                            </div>


                            <div className="blog-content">
                              <span className="post-date">June 20, 2018</span>
                              <a href="/" className="post-title">Dow falls 287 points as trade war fears escalate</a>
                            </div>
                          </div>
                        </div>


                        <div className="col-12 col-sm-6">
                          <div className="single-blog-post d-flex style-4 mb-30">

                            <div className="blog-thumbnail">
                              <a href="/"><img src="img/bg-img/21.jpg" alt=""/></a>
                            </div>


                            <div className="blog-content">
                              <span className="post-date">June 20, 2018</span>
                              <a href="/" className="post-title">Dow falls 287 points as trade war fears escalate</a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="tab-pane fade" id="nav-3" role="tabpanel" aria-labelledby="nav3">
                      <div className="row">

                        <div className="col-12 col-sm-6">
                          <div className="single-blog-post style-2 mb-5">

                            <div className="blog-thumbnail">
                              <a href="/"><img src="img/bg-img/6.jpg" alt=""/></a>
                            </div>


                            <div className="blog-content">
                              <span className="post-date">June 20, 2018</span>
                              <a href="/" className="post-title">Elon Musk: Tesla worker admitted to sabotage</a>
                              <a href="/" className="post-author">By Michael Smith</a>
                            </div>
                          </div>
                        </div>


                        <div className="col-12 col-sm-6">
                          <div className="single-blog-post style-2 mb-5">

                            <div className="blog-thumbnail">
                              <a href="/"><img src="img/bg-img/7.jpg" alt=""/></a>
                            </div>


                            <div className="blog-content">
                              <span className="post-date">June 20, 2018</span>
                              <a href="/" className="post-title">Rachel Sm ith breaks down while discussing border
                                crisis</a>
                              <a href="/" className="post-author">By Michael Smith</a>
                            </div>
                          </div>
                        </div>


                        <div className="col-12 col-sm-6">
                          <div className="single-blog-post d-flex style-4 mb-30">

                            <div className="blog-thumbnail">
                              <a href="/"><img src="img/bg-img/16.jpg" alt=""/></a>
                            </div>


                            <div className="blog-content">
                              <span className="post-date">June 20, 2018</span>
                              <a href="/" className="post-title">Nearly a quarter have no emergency savings</a>
                            </div>
                          </div>
                        </div>


                        <div className="col-12 col-sm-6">
                          <div className="single-blog-post d-flex style-4 mb-30">

                            <div className="blog-thumbnail">
                              <a href="/"><img src="img/bg-img/17.jpg" alt=""/></a>
                            </div>


                            <div className="blog-content">
                              <span className="post-date">June 20, 2018</span>
                              <a href="/" className="post-title">Nearly a quarter have no emergency savings</a>
                            </div>
                          </div>
                        </div>


                        <div className="col-12 col-sm-6">
                          <div className="single-blog-post d-flex style-4 mb-30">

                            <div className="blog-thumbnail">
                              <a href="/"><img src="img/bg-img/18.jpg" alt=""/></a>
                            </div>


                            <div className="blog-content">
                              <span className="post-date">June 20, 2018</span>
                              <a href="/" className="post-title">Top bitcoin exchange says over $30 million stolen</a>
                            </div>
                          </div>
                        </div>


                        <div className="col-12 col-sm-6">
                          <div className="single-blog-post d-flex style-4 mb-30">

                            <div className="blog-thumbnail">
                              <a href="/"><img src="img/bg-img/19.jpg" alt=""/></a>
                            </div>


                            <div className="blog-content">
                              <span className="post-date">June 20, 2018</span>
                              <a href="/" className="post-title">Top bitcoin exchange says over $30 million stolen</a>
                            </div>
                          </div>
                        </div>


                        <div className="col-12 col-sm-6">
                          <div className="single-blog-post d-flex style-4 mb-30">

                            <div className="blog-thumbnail">
                              <a href="/"><img src="img/bg-img/20.jpg" alt=""/></a>
                            </div>


                            <div className="blog-content">
                              <span className="post-date">June 20, 2018</span>
                              <a href="/" className="post-title">Dow falls 287 points as trade war fears escalate</a>
                            </div>
                          </div>
                        </div>


                        <div className="col-12 col-sm-6">
                          <div className="single-blog-post d-flex style-4 mb-30">

                            <div className="blog-thumbnail">
                              <a href="/"><img src="img/bg-img/21.jpg" alt=""/></a>
                            </div>


                            <div className="blog-content">
                              <span className="post-date">June 20, 2018</span>
                              <a href="/" className="post-title">Dow falls 287 points as trade war fears escalate</a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="tab-pane fade" id="nav-4" role="tabpanel" aria-labelledby="nav4">
                      <div className="row">

                        <div className="col-12 col-sm-6">
                          <div className="single-blog-post style-2 mb-5">

                            <div className="blog-thumbnail">
                              <a href="/"><img src="img/bg-img/8.jpg" alt=""/></a>
                            </div>


                            <div className="blog-content">
                              <span className="post-date">June 20, 2018</span>
                              <a href="/" className="post-title">Elon Musk: Tesla worker admitted to sabotage</a>
                              <a href="/" className="post-author">By Michael Smith</a>
                            </div>
                          </div>
                        </div>


                        <div className="col-12 col-sm-6">
                          <div className="single-blog-post style-2 mb-5">

                            <div className="blog-thumbnail">
                              <a href="/"><img src="img/bg-img/9.jpg" alt=""/></a>
                            </div>


                            <div className="blog-content">
                              <span className="post-date">June 20, 2018</span>
                              <a href="/" className="post-title">Rachel Sm ith breaks down while discussing border
                                crisis</a>
                              <a href="/" className="post-author">By Michael Smith</a>
                            </div>
                          </div>
                        </div>


                        <div className="col-12 col-sm-6">
                          <div className="single-blog-post d-flex style-4 mb-30">

                            <div className="blog-thumbnail">
                              <a href="/"><img src="img/bg-img/16.jpg" alt=""/></a>
                            </div>


                            <div className="blog-content">
                              <span className="post-date">June 20, 2018</span>
                              <a href="/" className="post-title">Nearly a quarter have no emergency savings</a>
                            </div>
                          </div>
                        </div>


                        <div className="col-12 col-sm-6">
                          <div className="single-blog-post d-flex style-4 mb-30">

                            <div className="blog-thumbnail">
                              <a href="/"><img src="img/bg-img/17.jpg" alt=""/></a>
                            </div>


                            <div className="blog-content">
                              <span className="post-date">June 20, 2018</span>
                              <a href="/" className="post-title">Nearly a quarter have no emergency savings</a>
                            </div>
                          </div>
                        </div>


                        <div className="col-12 col-sm-6">
                          <div className="single-blog-post d-flex style-4 mb-30">

                            <div className="blog-thumbnail">
                              <a href="/"><img src="img/bg-img/18.jpg" alt=""/></a>
                            </div>


                            <div className="blog-content">
                              <span className="post-date">June 20, 2018</span>
                              <a href="/" className="post-title">Top bitcoin exchange says over $30 million stolen</a>
                            </div>
                          </div>
                        </div>


                        <div className="col-12 col-sm-6">
                          <div className="single-blog-post d-flex style-4 mb-30">

                            <div className="blog-thumbnail">
                              <a href="/"><img src="img/bg-img/19.jpg" alt=""/></a>
                            </div>


                            <div className="blog-content">
                              <span className="post-date">June 20, 2018</span>
                              <a href="/" className="post-title">Top bitcoin exchange says over $30 million stolen</a>
                            </div>
                          </div>
                        </div>


                        <div className="col-12 col-sm-6">
                          <div className="single-blog-post d-flex style-4 mb-30">

                            <div className="blog-thumbnail">
                              <a href="/"><img src="img/bg-img/20.jpg" alt=""/></a>
                            </div>


                            <div className="blog-content">
                              <span className="post-date">June 20, 2018</span>
                              <a href="/" className="post-title">Dow falls 287 points as trade war fears escalate</a>
                            </div>
                          </div>
                        </div>


                        <div className="col-12 col-sm-6">
                          <div className="single-blog-post d-flex style-4 mb-30">

                            <div className="blog-thumbnail">
                              <a href="/"><img src="img/bg-img/21.jpg" alt=""/></a>
                            </div>


                            <div className="blog-content">
                              <span className="post-date">June 20, 2018</span>
                              <a href="/" className="post-title">Dow falls 287 points as trade war fears escalate</a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              </div>


              <div className="col-12 col-sm-9 col-md-6 col-lg-4">
                <div className="sidebar-area">
                  <div className="single-widget-area newsletter-widget mb-30">
                    <h4>Subscribe to our newsletter</h4>
                    <form action="#" method="post">
                      <input type="email" name="nl-email" id="nlemail" placeholder="Your E-mail"/>
                        <button type="submit" className="btn newsbox-btn w-100">Subscribe</button>
                    </form>
                    <p className="mt-30">Nullam lacinia ex eleifend orci porttitor, suscipit interdum augue condimentum.
                      Etiam pretium turpis eget nibh . volutpat lobortis.</p>
                  </div>
                  <div className="single-widget-area add-widget mb-30">
                    <a href="/">
                      <img src="img/bg-img/add3.png" alt=""/>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="video-area bg-img bg-overlay bg-fixed">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="featured-video-area d-flex align-items-center justify-content-center">
                  <div className="video-content text-center">
                    <a href="/" className="video-btn"><i className="fa fa-play" aria-hidden="true"></i></a>
                    <span className="published-date">June 20, 2018</span>
                    <h3 className="video-title">Traffic Problems in Time Square</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="video-slideshow py-5">
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <div className="video-slides owl-carousel">
                    <div className="single-blog-post style-3">
                      <div className="blog-thumbnail">
                        <a href="/"><img src="img/bg-img/11.jpg" alt=""/></a>
                        <a href="/" className="video-btn"><i className="fa fa-play" aria-hidden="true"></i></a>
                      </div>
                      <div className="blog-content">
                        <span className="post-date">June 20, 2018</span>
                        <p className="post-title">Elon Musk: Tesla worker admitted to sabotage</p>
                        <a href="/" className="post-author">By Michael Smith</a>
                      </div>
                    </div>


                    <div className="single-blog-post style-3">

                      <div className="blog-thumbnail">
                        <a href="/"><img src="img/bg-img/12.jpg" alt=""/></a>
                        <a href="/" className="video-btn"><i className="fa fa-play" aria-hidden="true"></i></a>
                      </div>


                      <div className="blog-content">
                        <span className="post-date">June 20, 2018</span>
                        <p className="post-title">Rachel Sm ith breaks down while discussing border crisis </p>
                        <a href="/" className="post-author">By Michael Smith</a>
                      </div>
                    </div>


                    <div className="single-blog-post style-3">

                      <div className="blog-thumbnail">
                        <a href="/"><img src="img/bg-img/13.jpg" alt=""/></a>
                        <a href="/" className="video-btn"><i className="fa fa-play" aria-hidden="true"></i></a>
                      </div>


                      <div className="blog-content">
                        <span className="post-date">June 20, 2018</span>
                        <p className="post-title">Dow falls 287 points as trade war fears escalate</p>
                        <a href="/" className="post-author">By Michael Smith</a>
                      </div>
                    </div>


                    <div className="single-blog-post style-3">

                      <div className="blog-thumbnail">
                        <a href="/"><img src="img/bg-img/11.jpg" alt=""/></a>
                        <a href="/" className="video-btn"><i className="fa fa-play" aria-hidden="true"></i></a>
                      </div>


                      <div className="blog-content">
                        <span className="post-date">June 20, 2018</span>
                        <p className="post-title">Elon Musk: Tesla worker admitted to sabotage</p>
                        <a href="/" className="post-author">By Michael Smith</a>
                      </div>
                    </div>


                    <div className="single-blog-post style-3">

                      <div className="blog-thumbnail">
                        <a href="/"><img src="img/bg-img/12.jpg" alt=""/></a>
                        <a href="/" className="video-btn"><i className="fa fa-play" aria-hidden="true"></i></a>
                      </div>


                      <div className="blog-content">
                        <span className="post-date">June 20, 2018</span>
                        <p className="post-title">Rachel Sm ith breaks down while discussing border crisis </p>
                        <a href="/" className="post-author">By Michael Smith</a>
                      </div>
                    </div>


                    <div className="single-blog-post style-3">

                      <div className="blog-thumbnail">
                        <a href="/"><img src="img/bg-img/13.jpg" alt=""/></a>
                        <a href="/" className="video-btn"><i className="fa fa-play" aria-hidden="true"></i></a>
                      </div>


                      <div className="blog-content">
                        <span className="post-date">June 20, 2018</span>
                        <p className="post-title">Dow falls 287 points as trade war fears escalate</p>
                        <a href="/" className="post-author">By Michael Smith</a>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="top-news-area section-padding-100">
          <ListArticles/>
          {/*<div className="container">*/}
          {/*  <div className="row">*/}
          {/*    <div className="col-12 col-sm-6 col-lg-4">*/}
          {/*      <div className="single-blog-post style-2 mb-5">*/}
          {/*        <div className="blog-thumbnail">*/}
          {/*          <a href="/"><img src="img/bg-img/4.jpg" alt=""/></a>*/}
          {/*        </div>*/}
          {/*        <div className="blog-content">*/}
          {/*          <span className="post-date">June 20, 2018</span>*/}
          {/*          <a href="/" className="post-title">Elon Musk: Tesla worker admitted to sabotage</a>*/}
          {/*          <a href="/" className="post-author">By Michael Smith</a>*/}
          {/*        </div>*/}
          {/*      </div>*/}
          {/*    </div>*/}
          {/*    <div className="col-12 col-sm-6 col-lg-4">*/}
          {/*      <div className="single-blog-post style-2 mb-5">*/}
          {/*        <div className="blog-thumbnail">*/}
          {/*          <a href="/"><img src="img/bg-img/5.jpg" alt=""/></a>*/}
          {/*        </div>*/}
          {/*        <div className="blog-content">*/}
          {/*          <span className="post-date">June 20, 2018</span>*/}
          {/*          <a href="/" className="post-title">Rachel Sm ith breaks down while discussing border crisis </a>*/}
          {/*          <a href="/" className="post-author">By Michael Smith</a>*/}
          {/*        </div>*/}
          {/*      </div>*/}
          {/*    </div>*/}
          {/*    <div className="col-12 col-sm-6 col-lg-4">*/}
          {/*      <div className="single-blog-post style-2 mb-5">*/}
          {/*        <div className="blog-thumbnail">*/}
          {/*          <a href="/"><img src="img/bg-img/6.jpg" alt=""/></a>*/}
          {/*        </div>*/}
          {/*        <div className="blog-content">*/}
          {/*          <span className="post-date">June 20, 2018</span>*/}
          {/*          <a href="/" className="post-title">Dow falls 287 points as trade war fears escalate</a>*/}
          {/*          <a href="/" className="post-author">By Michael Smith</a>*/}
          {/*        </div>*/}
          {/*      </div>*/}
          {/*    </div>*/}
          {/*    <div className="col-12 col-sm-6 col-lg-4">*/}
          {/*      <div className="single-blog-post style-2 mb-5">*/}
          {/*        <div className="blog-thumbnail">*/}
          {/*          <a href="/"><img src="img/bg-img/7.jpg" alt=""/></a>*/}
          {/*        </div>*/}
          {/*        <div className="blog-content">*/}
          {/*          <span className="post-date">June 20, 2018</span>*/}
          {/*          <a href="/" className="post-title">Elon Musk: Tesla worker admitted to sabotage</a>*/}
          {/*          <a href="/" className="post-author">By Michael Smith</a>*/}
          {/*        </div>*/}
          {/*      </div>*/}
          {/*    </div>*/}
          {/*    <div className="col-12 col-sm-6 col-lg-4">*/}
          {/*      <div className="single-blog-post style-2 mb-5">*/}
          {/*        <div className="blog-thumbnail">*/}
          {/*          <a href="/"><img src="img/bg-img/8.jpg" alt=""/></a>*/}
          {/*        </div>*/}
          {/*        <div className="blog-content">*/}
          {/*          <span className="post-date">June 20, 2018</span>*/}
          {/*          <a href="/" className="post-title">Rachel Sm ith breaks down while discussing border crisis </a>*/}
          {/*          <a href="/" className="post-author">By Michael Smith</a>*/}
          {/*        </div>*/}
          {/*      </div>*/}
          {/*    </div>*/}
          {/*    <div className="col-12 col-sm-6 col-lg-4">*/}
          {/*      <div className="single-blog-post style-2 mb-5">*/}
          {/*        <div className="blog-thumbnail">*/}
          {/*          <a href="/"><img src="img/bg-img/9.jpg" alt=""/></a>*/}
          {/*        </div>*/}

          {/*        <div className="blog-content">*/}
          {/*          <span className="post-date">June 20, 2018</span>*/}
          {/*          <a href="/" className="post-title">Dow falls 287 points as trade war fears escalate</a>*/}
          {/*          <a href="/" className="post-author">By Michael Smith</a>*/}
          {/*        </div>*/}
          {/*      </div>*/}
          {/*    </div>*/}

          {/*    <div className="col-12">*/}
          {/*      <div className="load-more-button text-center">*/}
          {/*        <a href="/" className="btn newsbox-btn">Load More</a>*/}
          {/*      </div>*/}
          {/*    </div>*/}

          {/*  </div>*/}
          {/*</div>*/}
        </div>
        <div className="big-add-area mb-100">
          <div className="container-fluid">
            <a href="/"><img src="img/bg-img/add2.png" alt=""/></a>
          </div>
        </div>
      </div>
    );
  }
}
export default Home;
