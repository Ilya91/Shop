import React from 'react'

const Contact = () => (
  <div>
    <section className="breaking-news-area clearfix">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <div className="breaking-news-ticker d-flex flex-wrap align-items-center">
              <div className="title">
                <h6>Trending</h6>
              </div>
              <div id="breakingNewsTicker" className="ticker">
                <ul>
                  <li><a href="#">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada lorem maximus
                    mauris scelerisque, at rutrum nulla dictum.</a></li>
                  <li><a href="#">Welcome to Colorlib Family.</a></li>
                  <li><a href="#">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada lorem maximus
                    mauris scelerisque</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <div className="hero-contact-area bg-overlay clearfix" style={{ backgroundImage: "url(img/bg-img/34.jpg)"}}>
      <div className="container-fluid h-100">
        <div className="row h-100 align-items-center">
          <div className="col-12 col-lg-7">
            <div className="post-content">
              <p className="tag"><span>Featured</span></p>
              <p className="post-title">China's economy shows signs of slowing.</p>
              <div className="d-flex align-items-center">
                <span className="post-date mr-30">June 20, 2018</span>
                <span className="post-date">By Michael Smith</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <section className="contact-area section-padding-100">
      <div className="container">
        <div className="row justify-content-center">

          <div className="col-12 col-lg-8">
            <div className="contact-content mb-100">

              <a href="#" className="d-block mb-50"><img src="img/core-img/logo.png" alt=""/></a>

              <div className="single-contact-info d-flex align-items-center">
                <div className="icon mr-15">
                  <img src="img/core-img/map-pin.png" alt=""/>
                </div>
                <p>1481 Creekside Lane Avila Beach, CA 931</p>
              </div>

              <div className="single-contact-info d-flex align-items-center">
                <div className="icon mr-15">
                  <img src="img/core-img/smartphone.png" alt=""/>
                </div>
                <p>+53 345 7953 32453</p>
              </div>

              <div className="single-contact-info d-flex align-items-center">
                <div className="icon mr-15">
                  <img src="img/core-img/paper-plane.png" alt=""/>
                </div>
                <p>yourmail@gmail.com</p>
              </div>

              <div className="contact-social-info mt-50 mb-70">
                <a href="#" data-toggle="tooltip" data-placement="top" title="Pinterest"><i className="fa fa-pinterest"
                                                                                            aria-hidden="true"></i></a>
                <a href="#" data-toggle="tooltip" data-placement="top" title="Facebook"><i className="fa fa-facebook"
                                                                                           aria-hidden="true"></i></a>
                <a href="#" data-toggle="tooltip" data-placement="top" title="Twitter"><i className="fa fa-twitter"
                                                                                          aria-hidden="true"></i></a>
                <a href="#" data-toggle="tooltip" data-placement="top" title="Dribbble"><i className="fa fa-dribbble"
                                                                                           aria-hidden="true"></i></a>
                <a href="#" data-toggle="tooltip" data-placement="top" title="Behance"><i className="fa fa-behance"
                                                                                          aria-hidden="true"></i></a>
                <a href="#" data-toggle="tooltip" data-placement="top" title="Linkedin"><i className="fa fa-linkedin"
                                                                                           aria-hidden="true"></i></a>
              </div>

              <div className="contact-form-area mb-70">
                <h4 className="mb-50">Get In Touch</h4>

                <form action="#" method="post">
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="form-group">
                        <input type="text" className="form-control" id="name" placeholder="Name"/>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form-group">
                        <input type="email" className="form-control" id="email" placeholder="E-mail"/>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-group">
                        <input type="text" className="form-control" id="subject" placeholder="Subject"/>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-group">
                        <textarea name="message" className="form-control" id="message" cols="30" rows="10"
                                  placeholder="Message"></textarea>
                      </div>
                    </div>
                    <div className="col-12">
                      <button className="btn newsbox-btn mt-30" type="submit">Send</button>
                    </div>
                  </div>
                </form>
              </div>

              <div className="map-area mb-100">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d22236.40558254599!2d-118.25292394686001!3d34.057682914027104!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c75ddc27da13%3A0xe22fdf6f254608f4!2z4Kay4Ka4IOCmj-CmnuCnjeCmnOCnh-CmsuCnh-CmuCwg4KaV4KeN4Kav4Ka-4Kay4Ka_4Kar4KeL4Kaw4KeN4Kao4Ka_4Kav4Ka84Ka-LCDgpq7gpr7gprDgp43gppXgpr_gpqgg4Kav4KeB4KaV4KeN4Kak4Kaw4Ka-4Ka34KeN4Kaf4KeN4Kaw!5e0!3m2!1sbn!2sbd!4v1532328708137"
                  allowFullScreen></iframe>
              </div>

            </div>
          </div>

          <div className="col-12 col-sm-9 col-md-6 col-lg-4">

            <div className="single-widget-area newsletter-widget mb-30">
              <h4>Subscribe to our newsletter</h4>
              <form action="#" method="post">
                <input type="email" name="nl-email" id="nlemail" placeholder="Your E-mail"/>
                  <button type="submit" className="btn newsbox-btn w-100">Subscribe</button>
              </form>
              <p className="mt-30">Nullam lacinia ex eleifend orci porttitor, suscipit interdum augue condimentum. Etiam
                pretium turpis eget nibh . volutpat lobortis.</p>
            </div>

            <div className="single-widget-area add-widget mb-30">
              <a href="#">
                <img src="img/bg-img/add3.png" alt=""/>
              </a>
            </div>

            <div className="single-widget-area news-widget mb-30">
              <h4>Latest News</h4>

              <div className="single-blog-post d-flex style-4 mb-30">
                <div className="blog-thumbnail">
                  <a href="#"><img src="img/bg-img/16.jpg" alt=""/></a>
                </div>

                <div className="blog-content">
                  <span className="post-date">June 20, 2018</span>
                  <a href="#" className="post-title">Nearly a quarter have no emergency savings</a>
                </div>
              </div>

              <div className="single-blog-post d-flex style-4 mb-30">
                <div className="blog-thumbnail">
                  <a href="#"><img src="img/bg-img/17.jpg" alt=""/></a>
                </div>

                <div className="blog-content">
                  <span className="post-date">June 20, 2018</span>
                  <a href="#" className="post-title">Nearly a quarter have no emergency savings</a>
                </div>
              </div>

              <div className="single-blog-post d-flex style-4 mb-30">
                <div className="blog-thumbnail">
                  <a href="#"><img src="img/bg-img/18.jpg" alt=""/></a>
                </div>

                <div className="blog-content">
                  <span className="post-date">June 20, 2018</span>
                  <a href="#" className="post-title">Top bitcoin exchange says over $30 million stolen</a>
                </div>
              </div>

              <div className="single-blog-post d-flex style-4 mb-30">

                <div className="blog-thumbnail">
                  <a href="#"><img src="img/bg-img/19.jpg" alt=""/></a>
                </div>

                <div className="blog-content">
                  <span className="post-date">June 20, 2018</span>
                  <a href="#" className="post-title">Top bitcoin exchange says over $30 million stolen</a>
                </div>
              </div>

              <div className="single-blog-post d-flex style-4 mb-30">
                <div className="blog-thumbnail">
                  <a href="#"><img src="img/bg-img/20.jpg" alt=""/></a>
                </div>

                <div className="blog-content">
                  <span className="post-date">June 20, 2018</span>
                  <a href="#" className="post-title">Dow falls 287 points as trade war fears escalate</a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  </div>
)

export default Contact
