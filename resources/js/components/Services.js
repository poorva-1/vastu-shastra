import React, { Component } from 'react';
import Navigation from './Navigation';
import Header from './Header';
import Pricing from './Pricing';
import Footer from './Footer';

export default class Services extends Component {
    render() {
        return (
            <div>
    <Header />
    <Navigation />
<section className="breadcrumb-part">
<div className="container">
  <div className="row">
    <div className="col-12 text-center">
      <div className="breadcrumb-title">
        <h1>SERVICE AREA</h1>
      </div>
    </div>
  </div>
  <div className="breadcrumb-link">
    <ul className="flat-list">
      <li><a href="index-2.html">Home</a></li>
      <li><a href="#">SERVICES</a></li>
    </ul>
  </div>
</div>
</section>
{/* Prictise area Part start */}
<section className="practise-4-part section-p">
<div className="container">
  <div className="row">
    <div className="col-12 text-center">
      <div className="section-head-3-1">
        <h2>Services <span></span></h2>
        <p>VastuSantosh, a global leader in providing Vastu Shastra services from 1991 is well equipped with knowledge of ancient Vastu norms. At Vastuplus, we try to connect modern lifestyle with ancient wisdom. Based on our many years of experience & research, we have developed 21 space healing techniques to implement vastu practice in any premises..</p>
      </div>
    </div>
  </div>
  <div className="row">
    {/* Single team */}
    <div className="col-sm-6 col-lg-4">
      <div className="sin-practice-4">
        <img src="images/practice/pracd1.jpg" alt="" />
        <span>1</span>
        <div className="pra-four-inner">
          <h5><a href="#">Vastu For House</a></h5>
          <p>Imgra (written and oral) in administrative hearings adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
        </div>
      </div>
    </div>
    {/* Single team */}
    <div className="col-sm-6 col-lg-4">
      <div className="sin-practice-4">
        <img src="images/practice/pracd2.jpg" alt="" />
        <span>2</span>
        <div className="pra-four-inner">
          <h5><a href="#">Vastu For Business</a></h5>
          <p>Imgra (written and oral) in administrative hearings adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
        </div>
      </div>
    </div>
    {/* Single team */}
    <div className="col-sm-6 col-lg-4">
      <div className="sin-practice-4">
        <img src="images/practice/pracd3.jpg" alt="" />
        <span>3</span>
        <div className="pra-four-inner">
          <h5><a href="#">Vastu For Health</a></h5>
          <p>Imgra (written and oral) in administrative hearings adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
        </div>
      </div>
    </div>
    {/* Single team */}
    <div className="col-sm-6 col-lg-4">
      <div className="sin-practice-4">
        <img src="images/practice/pracd4.jpg" alt="" />
        <span>4</span>
        <div className="pra-four-inner">
          <h5><a href="#">Vastu For Wealth</a></h5>
          <p>Imgra (written and oral) in administrative hearings adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
        </div>
      </div>
    </div>
    {/* Single team */}
    <div className="col-sm-6 col-lg-4">
      <div className="sin-practice-4">
        <img src="images/practice/pracd5.jpg" alt="" />
        <span>5</span>
        <div className="pra-four-inner">
          <h5><a href="#">Vastu For Marriage</a></h5>
          <p>Imgra (written and oral) in administrative hearings adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
        </div>
      </div>
    </div>
    {/* Single team */}
    <div className="col-sm-6 col-lg-4">
      <div className="sin-practice-4">
        <img src="images/practice/pracd6.jpg" alt="" />
        <span>6</span>
        <div className="pra-four-inner">
          <h5><a href="#">Vastu For Career</a></h5>
          <p>Imgra (written and oral) in administrative hearings adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
        </div>
      </div>
    </div>
    {/* Single team */}
    <div className="col-sm-6 col-lg-4">
      <div className="sin-practice-4">
        <img src="images/practice/pracd7.jpg" alt="" />
        <span>7</span>
        <div className="pra-four-inner">
          <h5><a href="#">Vastu For Eduation</a></h5>
          <p>Imgra (written and oral) in administrative hearings adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
        </div>
      </div>
    </div>
    {/* Single team */}
    <div className="col-sm-6 col-lg-4">
      <div className="sin-practice-4">
        <img src="images/practice/pracd8.jpg" alt="" />
        <span>8</span>
        <div className="pra-four-inner">
          <h5><a href="#">Vastu Reading & Evaluation</a></h5>
          <p>Imgra (written and oral) in administrative hearings adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
        </div>
      </div>
    </div>
    {/* Single team */}
    <div className="col-sm-6 col-lg-4">
      <div className="sin-practice-4">
        <img src="images/practice/pracd9.jpg" alt="" />
        <span>9</span>
        <div className="pra-four-inner">
          <h5><a href="#">Vastu Opinion & Consultation</a></h5>
          <p>Imgra (written and oral) in administrative hearings adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
        </div>
      </div>
    </div>
  </div>
</div>
</section>
{/* Prictise area Part End */}
<Pricing />
<Footer />
</div>
        );
    }
}