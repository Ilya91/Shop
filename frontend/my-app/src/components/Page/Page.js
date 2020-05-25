import React, { Component } from "react";
import Menu from "../Menu/Menu";
import ListArticles from "../ListArticles";
import Home from "../Home/Home";

class Page extends Component {
  render() {
    const { article } = this.props;
    return (
      <div>
        <div className="preloader d-flex align-items-center justify-content-center">
          <div className="lds-ellipsis">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
        <header className="header-area">
          <div className="newsbox-main-menu">
            <div className="classy-nav-container breakpoint-off">
              <div className="container-fluid">
                <nav className="classy-navbar justify-content-between" id="newsboxNav">
                  <a href="/" className="nav-brand"><img src="img/core-img/logo.png" alt=""/></a>
                  <div className="classy-navbar-toggler">
                    <span className="navbarToggler"><span></span><span></span><span></span></span>
                  </div>
                  <div className="classy-menu">
                    <div className="classycloseIcon">
                      <div className="cross-wrap"><span className="top"></span><span className="bottom"></span></div>
                    </div>
                    <div className="classynav">
                      <Menu/>
                      <ul>
                        <li><a href="#">International</a>
                          <div className="megamenu">
                            <ul className="single-mega cn-col-4">
                              <li className="title">Europe</li>
                              <li><a href="#">United Kingdom</a></li>
                              <li><a href="#">Germany</a></li>
                              <li><a href="#">Latvia</a></li>
                              <li><a href="#">Poland</a></li>
                              <li><a href="#">Italy</a></li>
                              <li><a href="#">France</a></li>
                              <li><a href="#">Crotia</a></li>
                            </ul>
                            <ul className="single-mega cn-col-4">
                              <li className="title">Africa</li>
                              <li><a href="#">Algeria</a></li>
                              <li><a href="#">Angola</a></li>
                              <li><a href="#">Benin</a></li>
                              <li><a href="#">Botswana</a></li>
                              <li><a href="#">Burkina Faso</a></li>
                              <li><a href="#">Burundi</a></li>
                              <li><a href="#">Cameroon</a></li>
                            </ul>
                            <ul className="single-mega cn-col-4">
                              <li className="title">Asia</li>
                              <li><a href="#">Bangladesh</a></li>
                              <li><a href="#">Chaina</a></li>
                              <li><a href="#">India</a></li>
                              <li><a href="#">Afganistan</a></li>
                              <li><a href="#">Sri Lanka</a></li>
                              <li><a href="#">Nepal</a></li>
                              <li><a href="#">Bhutan</a></li>
                            </ul>
                            <ul className="single-mega cn-col-4">
                              <li className="title">USA &amp; Canada</li>
                              <li><a href="#">California</a></li>
                              <li><a href="#">Florida</a></li>
                              <li><a href="#">Alabama</a></li>
                              <li><a href="#">New Yorks</a></li>
                              <li><a href="#">Texas</a></li>
                              <li><a href="#">Lowa</a></li>
                              <li><a href="#">Montana</a></li>
                            </ul>
                          </div>
                        </li>
                        <li><a href="#">Local News</a></li>
                        <li><a href="#">Pages</a>
                          <ul className="dropdown">
                            <li><a href="index.html">Home</a></li>
                            <li><a href="catagory.html">Catagory</a></li>
                            <li><a href="single-post.html">Single Post</a></li>
                            <li><a href="contact.html">Contact</a></li>
                            <li><a href="elements.html">Elements</a></li>
                          </ul>
                        </li>
                        <li><a href="#">Sport</a>
                          <ul className="dropdown">
                            <li><a href="#">Archery</a></li>
                            <li><a href="#">Badminton</a></li>
                            <li><a href="#">Baseball</a></li>
                            <li><a href="#">Boxing</a></li>
                            <li><a href="#">Climbing</a></li>
                            <li><a href="#">Cricket</a></li>
                            <li><a href="#">Football</a></li>
                          </ul>
                        </li>
                        <li><a href="#">Lifestyle</a></li>
                      </ul>
                      <div className="header-add-area">
                        <a href="#">
                          <img src="img/bg-img/add.png" alt=""/>
                        </a>
                      </div>
                    </div>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </header>
          <Home/>
        <footer className="footer-area">
          <div className="footer-logo mb-100">
            <a href="index.html"><img src="img/core-img/logo.png" alt=""/></a>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="footer-content text-center">
                  <div className="footer-nav">
                    <ul>
                      <li><a href="#">Contact Us</a></li>
                      <li><a href="#">Closed Captioning</a></li>
                      <li><a href="#">Site Map</a></li>
                    </ul>
                  </div>
                  <div className="footer-social-info">
                    <a href="#" data-toggle="tooltip" data-placement="top" title="pinterest"><i
                      className="fa fa-pinterest" aria-hidden="true"></i></a>
                    <a href="#" data-toggle="tooltip" data-placement="top" title="facebook"><i
                      className="fa fa-facebook" aria-hidden="true"></i></a>
                    <a href="#" data-toggle="tooltip" data-placement="top" title="twitter"><i className="fa fa-twitter"
                                                                                              aria-hidden="true"></i></a>
                    <a href="#" data-toggle="tooltip" data-placement="top" title="dribbble"><i
                      className="fa fa-dribbble" aria-hidden="true"></i></a>
                    <a href="#" data-toggle="tooltip" data-placement="top" title="behance"><i className="fa fa-behance"
                                                                                              aria-hidden="true"></i></a>
                    <a href="#" data-toggle="tooltip" data-placement="top" title="linkedin"><i
                      className="fa fa-linkedin" aria-hidden="true"></i></a>
                  </div>
                  <p className="mb-15">Nullam lacinia ex eleifend orci porttitor, suscipit interdum augue condimentum.
                    Etiam pretium turpis eget nibh laoreet iaculis. Proin ac urna at lectus volutpat lobortis.
                    Vestibulum venenatis iaculis diam vitae lobortis. Donec tincidunt viverra elit, sed consectetur est
                    pr etium ac. Mauris nec mauris tellus. </p>
                  <p className="copywrite-text">Copyright &copy; All rights reserved</p>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}
export default Page;
