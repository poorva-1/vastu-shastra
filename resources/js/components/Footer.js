import React, { Component } from 'react';

export default class Footer extends Component {
    render() {
        return (
            <div>
    
        {/* Footer Part Start */}
        <footer className="footer-part footer-bg-dark">
          <div className="footer-widget">
            <div className="container">
              <div className="row">
                {/* Single widget*/}
                <div className="col-12 col-sm-6 col-lg-3">
                  <div className="footer-logo">
                    <a href="#"><img src="images/practice/logo.jpeg" alt="logo" /></a>
                    <p>VastuSantosh is Offering Vastushastra Consultancy, Remedies & Education to help Individual & Enterprises Lead a Meaningful Life With Modern and Proven Techniques...</p>
                    <ol className="flat-list">
                      <li><a href="#"><i className="fa fa-facebook" /></a></li>
                      <li><a href="#"><i className="fa fa-twitter" /></a></li>
                      <li><a href="#"><i className="fa fa-instagram" /></a></li>
                      <li><a href="#"><i className="fa fa-linkedin" /></a></li>
                    </ol>
                  </div>
                </div>
                {/* Single widget*/}
                <div className="col-12 col-sm-6 col-lg-3 mt-4 mt-sm-0">
                  <div className="footer-widget-item">
                    <h3>Services</h3>
                    <ul className="footer-widget-link">
                      <li><a href="#"><i className="fa fa-angle-double-right" /> Vastu For Home</a></li>
                      <li><a href="#"><i className="fa fa-angle-double-right" /> Vastu For Business</a></li>
                      <li><a href="#"><i className="fa fa-angle-double-right" /> Vastu For Health</a></li>
                      <li><a href="#"><i className="fa fa-angle-double-right" />  Vastu For Wealth</a></li>
                      <li><a href="#"><i className="fa fa-angle-double-right" /> Vastu For Education</a></li>
                    </ul>  
                  </div>
                </div>
                {/* Single widget*/}
                <div className="col-12 col-sm-6 col-lg-3 mt-4 mt-lg-0">
                  <div className="footer-widget-item">
                    <h3>Address</h3>
                    <ul className="footer-widget-office-time">
                      <li>
                        <p>103,Jamuna Dahisar ganga Jamuna CHS ,</p>
                        <p>Navyug Nagar , S.v.Road ,</p>
                        <p>Dahisar (E) ,</p>
                        <p>Mumbai 400 068</p>

                      </li>
                  
                    </ul>
                  </div>
                </div>
                {/* Single widget*/}
                <div className="col-12 col-sm-6 col-lg-3 mt-4 mt-lg-0">
                  <div className="footer-widget-item subscribe-widget">
                    <h3>Subscribe</h3>
                    <p>Enter  your email and get latest updates and offers subscribe us</p>
                    <form id="subscribe-form" action="#">
                      <input placeholder="Your Email ..." type="text" />
                      <button><i className="fa fa-long-arrow-right" aria-hidden="true" /></button>
                    </form>
                  </div>
                </div>
              </div>
              {/* Footer contact info */}
              <div className="row footer-icon-area">
                <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4">
                  <div className="sin-footer-icon">
                    <div className="footer-icon">
                      <a href="#"><i className="fa fa-phone" /></a>
                    </div>
                    <div className="footer-icon-text">
                      <h4>call us</h4>
                      <span>9969536484 / 8898125380</span>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4">
                  <div className="sin-footer-icon">
                    <div className="footer-icon">
                      <a href="#"><i className="fa fa-envelope" /></a>
                    </div>
                    <div className="footer-icon-text">
                      <h4>Email Us</h4>
                      <span> sunkadam9@yahoo.com / sunkadam9@gmail.com</span>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-4  col-sm-4">
                  <div className="sin-footer-icon">
                    <div className="footer-icon">
                      <a href="#"><i className="fa fa-home" /></a>
                    </div>
                    <div className="footer-icon-text">
                      <h4>Location</h4>
                      <span> 103 ,Jamuna Dahisar ganga jamuna dahisar CHS. ,Navyug Nagar ,S.V.Road ,Dahisar
                        (E),Mumbai 400 068..
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Copy right Start */}
          <div className="footer-copyright">
            <div className="container">
              <div className="row">
                <div className="col-xl-12">
                  <p>Copyright ©<span> 2019</span> | All rights reserved | Developed  by <a href="https://tekweb.in/">Tekweb.in</a></p>
                </div>
              </div>
            </div>
          </div>
        </footer>
        {/* Footer Part End */}
        <div class="scroll-top-wrapper ">
  <span class="scroll-top-inner">
    <i class="fa fa-2x fa-arrow-circle-up"></i>
  </span>
</div>
        
       
            </div>
        );
    }
}


