
import React, { Component } from 'react';
import Navigation from './Navigation';
import Header from './Header';
import {Container ,Row ,Col} from 'reactstrap';
import Footer from './Footer';

export default class Contact extends Component {
    render() {
        return (
            <div>
<Header />

<Navigation />
<Container>
  <Row>
    <Col sm="12" lg="12" xs="12">
    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d15129.609073227293!2d73.75955285!3d18.55589445!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1568974803245!5m2!1sen!2sin"  height={650} frameBorder={0} style={{width:'100%',border: 0}} allowFullScreen />

    </Col>
  </Row>
</Container>
 




 

   

<section className="contact-info">
<div className="container-fluid no-pad">
  <div className="contact-info-inner">
    <div className="row no-gutters">
      <div className="col-md-4">
        <div className="email-info sin-cont-info d-flex align-items-center">
          <div className="center-wrap">
            <i className="flaticon-at" />
            <h3>Email Us</h3>
            <p>Mail:<a href="mailto:name@email.com"> sunkadam9@yahoo.com</a></p>
            <a href="mailto:name@email.com"> sunkadam9@gmail.com</a>
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <div className="office-location sin-cont-info d-flex align-items-center">
          <div className="center-wrap">
            <i className="flaticon-map-pin-marked" />
            <h3>office location</h3>
            <p>103 ,Jamuna Dahisar ganga jamuna dahisar CHS. ,Navyug Nagar ,S.V.Road ,Dahisar
                        (E),Mumbai 400 068..</p>
          </div> 
        </div>
      </div>
      <div className="col-md-4">
        <div className="call-us sin-cont-info d-flex align-items-center">
          <div className="center-wrap">
            <i className="flaticon-telephone-of-old-design" />
            <h3>call Us</h3>
            <p>Mobile : <a href="tel:158-659-8546"> 9969536484 / 8898125380</a></p>
            <a href="tel:158-659-8546"> Tel- 28923928</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</section>
{/* Contact-info area End */}
{/* Contact bottom area Start */}
<section className="contuct-bottom">
<div className="container">
  <div className="row justify-content-center">
    <div className="col-xl-8">
      <div className="con-bottom-inner">
        <h4>CONTACT <span>US</span></h4>
        <div className="per-social">
          <ul>
            <li><a href="#"><i className="fa fa-facebook" /></a></li>
            <li><a href="#"><i className="fa fa-twitter" /></a></li>
            <li><a href="#"><i className="fa fa-pinterest-p" /></a></li>
            <li><a href="#"><i className="fa fa-instagram" /></a></li>
            <li><a href="#"><i className="fa fa-linkedin" /></a></li>
            <li><a href="#"><i className="fa fa-google-plus" /></a></li>
            <li><a href="#"><i className="fa fa-behance" /></a></li>
            <li><a href="#"><i className="fa fa-vimeo" /></a></li>
          </ul>
        </div>
        <p>Dummy text of the printing and typesetting industry. Lorem Ipsum has been the </p>
        <form className="con-page-form" action="https://themeim.com/demo/imgra/mail.php" id="contact-form" method="post">
          <textarea name="message" placeholder="Message" defaultValue={""} />
          <input type="text" name="name" placeholder="Name *" className="mar-r" />
          <input type="text" name="email" placeholder="Email *" />
          <button type="submit">Submit</button>
        </form>
        <p className="form-messege" />
      </div>
    </div>
  </div>
</div>
</section>
{/* Contact bottom area end */}

<Footer/>
{/* Backtotop button Start */}
<div className="backtotop">
<i className="fa fa-angle-up backtotop_btn" />
</div>
</div>
        );
    }
}