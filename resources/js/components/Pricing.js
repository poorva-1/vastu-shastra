import React, { Component } from 'react';


export default class Pricing extends Component {
    render() {
        return (
            <div>
<section className="picing-table section-p bg_dark">
<div className="container">
  <div className="row">
    <div className="col-12 text-center">
      <div className="section-head">
        <h2>Our Pricing</h2>
        <p>Dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard unknown printer took a quis nostrud exercitatliquip.</p>
      </div>
    </div>
  </div>{/* Row end */}
  <div className="row">
    {/* Single table start */}
    <div className="col-12 col-sm-6 col-lg-3">
      <div className="single-table">
        <h6>free</h6>
        <div className="table_price">
          <span className="t-price">$100</span>
          <span className="duration">Yearly</span>
        </div>
        <div className="list-part">
          <p>Spouse Consultancy</p>
          <p>Immigration Consultancy</p>
          <p>Student  Consultancy</p>
          <p>Spouse Consultancy</p>
          <p className="no-support">No Support</p>
        </div>
        <a href="#">ORDER NOW</a>
      </div>
    </div>
    {/* Single table start */}
    <div className="col-12 col-sm-6 col-lg-3">
      <div className="single-table">
        <h6>STARTER</h6>
        <div className="table_price">
          <span className="t-price">$99</span>
          <span className="duration">Monthly</span>
        </div>
        <div className="list-part">
          <p>Spouse Consultancy</p>
          <p>Immigration Consultancy</p>
          <p>Student  Consultancy</p>
          <p>Spouse Consultancy</p>
          <p className="no-support">No Support</p>
        </div>
        <a href="#">ORDER NOW</a>
      </div>
    </div>
    {/* Single table start */}
    <div className="col-12 col-sm-6 col-lg-3">
      <div className="single-table">
        <h6>BUSINESS</h6>
        <div className="table_price">
          <span className="t-price">$50</span>
          <span className="duration">Monthly</span>
        </div>
        <div className="list-part">
          <p>Spouse Consultancy</p>
          <p>Immigration Consultancy</p>
          <p>Student  Consultancy</p>
          <p>Spouse Consultancy</p>
          <p className="no-support">No Support</p>
        </div>
        <a href="#">ORDER NOW</a>
      </div>
    </div>
    {/* Single table start */}
    <div className="col-12 col-sm-6 col-lg-3">
      <div className="single-table">
        <h6>ULTIMATE</h6>
        <div className="table_price">
          <span className="t-price">$55</span>
          <span className="duration">Yearly</span>
        </div>
        <div className="list-part">
          <p>Spouse Consultancy</p>
          <p>Immigration Consultancy</p>
          <p>Student  Consultancy</p>
          <p>Spouse Consultancy</p>
          <p className="no-support">No Support</p>
        </div>
        <a href="#">ORDER NOW</a>
      </div>
    </div>
  </div> {/* Row end */}
</div> {/*Container end */}
</section>
</div>
        );
    }
}