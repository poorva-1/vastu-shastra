import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import Navigation from './Navigation';

export default class Home extends Component {
    render() {
        return (
            <div>
           
    
           <Header />
               <Navigation />
      
        <section className="banner-part">
          <div id="slider-animation" className="carousel slide" data-ride="carousel">
            {/* Indicators */}
            
            {/* The slideshow */}
            <div className="carousel-inner" style={{padding:"0px"}}>
              <div className="carousel-item active">
                <img src="images/banner2-min.jpg" alt="Los Angeles" />
                <div className="text-box">
                  <h2 className="wow slideInRight" data-wow-duration="2s" style={{fontSize:'3.5vw'}}>This is Obitope text</h2>
                  <p className="wow slideInLeft" data-wow-duration="2s" style={{fontSize:'2vw'}}>There is now an abundance of readable dummy texts. These are usually used when a text is required purely to fill a space. </p>
                </div>
              </div>
              <div className="carousel-item">
                <img src="images/banner3-min.jpeg" alt="Los Angeles" />
                <div className="text-box">
                 
                </div>
              </div>
              <div className="carousel-item">
                <img src="images/banner4-min.jpg" alt="Los Angeles" />
                <div className="text-box">
                 
                </div>
              </div>
              <div className="carousel-item">
                <img src="images/banner5-min.jpg" alt="Los Angeles" />
                <div className="text-box">
                  
                </div>
              </div>
              
            </div>
            {/* Left and right controls */}
            <a className="carousel-control-prev" href="#slider-animation" data-slide="prev">
              <span className="carousel-control-prev-icon" />
            </a>
            <a className="carousel-control-next" href="#slider-animation" data-slide="next">
              <span className="carousel-control-next-icon" />
            </a>
          </div>
        </section>
            {/* Call to Action Start */}
            <div className="call_to_action">
              <div className="container">
                <div className="request-content">
                  <div className="row d-flex align-items-center">
                    <div className="col-xl-9 col-md-8 col-sm-7">
                      <h4>Have you checked your vastu score</h4>
                      <p>Request free vastu consultation services and get detail vastu report for your Home, Hotel or Business..</p>
                    </div>
                    <div className="col-xl-3 col-md-4 col-sm-5 text-center text-sm-right">
                      <a href="contact.html" className="btn-1">Submit Request</a>
                    </div>
                  </div>

                </div>
              </div>
            </div>
            {/* Call to Action End */}
            {/* Practise Part Start */}
            <section className="practise-part section-p">
              <div className="container">
                <div className="row">
                  <div className="col-12 text-center">
                    <div className="section-head">
                    
                      <h2>  <img src="images/logo.jpeg" />VastuSantosh</h2>
                      
                      <p>Vastu Santosh is a trusted, authentic & result-driven Vastu consultation agency in Mumbai. We are deeply committed to the Vastu analysis, Remedial study and follow of the science of Vastu Shastra. Vastu Santosh is administered by the founder, Mr. Santosh Kadam (Vaastu Science expert). Vastu Santosh has gained stupendous foundations within the fields of Consulting, coming up with and style, Remedies, Education, and Publications; continues to expand to a replacement dynamic vary of interior style and study services. Vastu Santosh additionally offers quality coaching in VastuShastra and runs many courses in Reiki, Angel medical care, Crystal medical care, discipline, and soothsaying. 
                      </p>
                    </div>
                  </div>
                  <div className="col-12 text-center">
                    <div className="section-head">
                      <h1 style={{textAlign:'center'}}>Vastu Consultation Services</h1>
                    </div>
                  </div>
                  <div className="col-sm-6 col-lg-4">
                    <div className="practise-item">
                      <div className="icon-box"> <i className="fa fa-cogs fa-3x" aria-hidden="true" /></div>
                      <h2><a href="/#">Customised</a></h2>
                      <p style={{color:'black' ,textAlign:"justify"}}>A system may enable users to customize or make changes to the experience to meet their specific needs by configuring layout, content, or system functionality.. </p>
                    </div>
                  </div>
                  {/* Single Practice */}
                  <div className="col-sm-6 col-lg-4">
                    <div className="practise-item">
                      <div className="icon-box"> <i className="fa fa-thumbs-up fa-3x" aria-hidden="true" /></div>
                      <h2><a href="/#">Budget friendly</a></h2>
                      <p style={{color:'black',textAlign:"justify" }}>We Strive to Create a Harmonious Atmosphere of Health, Happiness, Prosperity & Fulfillment. Eliminate All Forms of Environmental Stress. Call Us Today. </p>
                    </div>
                  </div>
                  {/* Single Practice */}
                  <div className="col-sm-6 col-lg-4">
                    <div className="practise-item">
                      <div className="icon-box"><i className="fa fa-globe fa-3x" aria-hidden="true" /></div>
                      <h2><a href="#"> Authentic </a></h2>
                      <p style={{color:'black' ,textAlign:"justify"}}>VastuSantosh is Offering Vastushastra Consultancy, Remedies & Education to help Individual & Enterprises Lead a Meaningful Life With Modern and Proven Techniques.</p>
                    </div>
                  </div>
                  {/* Single Practice */}
                  
                  {/* Single Practice */}
                  
                  {/* Single Practice */}
                
                </div>
              </div>
            </section>
            
            <section className="counter-part section-p">
              <div className="container">
                <div className="counter-box">
                  <div className="row">
                    {/* Single Counter */}
                    <div className="col-6 col-sm-6 col-lg-3 d-flex justify-content-center justify-content-lg-start">
                      <div className="counter-item">
                        <div className="count-des">
                          <i className="flaticon-title" />
                        </div>
                        <div className="count-des">
                          <h2 className="counter">2978</h2>
                          <p>Quality Service</p>
                        </div>
                      </div>
                    </div>
                    {/* Single Counter */}
                    <div className="col-6 col-sm-6 col-lg-3 d-flex justify-content-center justify-content-lg-start mt-4 mt-sm-0">
                      <div className="counter-item">
                        <div className="count-des">
                          <i className="flaticon-badge" />
                        </div>
                        <div className="count-des">
                          <h2 className="counter">3972</h2>
                          <p>Success Story</p>
                        </div>
                      </div>
                    </div>
                    {/* Single Counter */}
                    <div className="col-6 col-sm-6 col-lg-3 d-flex justify-content-center justify-content-lg-start mt-4 mt-lg-0">
                      <div className="counter-item">
                        <div className="count-des">
                          <i className="flaticon-suit" />
                        </div>
                        <div className="count-des">
                          <h2 className="counter">4578</h2>
                          <p>Trusted Clients</p>
                        </div>
                      </div>
                    </div>
                    {/* Single Counter */}
                    <div className="col-6 col-sm-6 col-lg-3 d-flex justify-content-center justify-content-lg-start mt-4 mt-lg-0">
                      <div className="counter-item">
                        <div className="count-des">
                          <i className="flaticon-key" />
                        </div>
                        <div className="count-des">
                          <h2 className="counter">2978</h2>
                          <p>Honors &amp; Awards</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
                        {/* Skill Part Start */}
            <div className="container">
                        <div className="row">
                        <div className="col-md-3">
          <div className="card mb-3 text-white bg-dark">
            <img className="card-img-top" src="images/raiki-min.jpg" alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title">Reiki</h5>
              <p className="card-text">Reiki is a form of alternative medicine called energy healing.Reiki practitioners use a technique called palm healing or hands-on healing through which a "universal energy"..</p>
              <a href="http://www.jquery2dotnet.com/" className="btn btn-outline-light btn-sm">Go somewhere</a>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card mb-3 text-white bg-dark">
            <img className="card-img-top" src="images/marriage-counselling-min.jpg" alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title">Marriage Counsling</h5>
              <p className="card-text">Marriage counseling, also called couples therapy, helps couples — married or not — understand and resolve conflicts and improve their relationship.</p>
              <a href="http://www.jquery2dotnet.com/" className="btn btn-outline-light btn-sm">Go somewhere</a> <br/> <br/>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card mb-3 text-white bg-dark">
            <img className="card-img-top" src="images/numerology-min.jpeg" alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title">Numerology</h5>
              <p className="card-text">Numerology is any belief in the divine or mystical relationship between a number and one or more coinciding events...</p>
              <a href="http://www.jquery2dotnet.com/" className="btn btn-outline-light btn-sm">Go somewhere</a> <br/> <br/><br/> 
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card mb-3 text-white bg-dark">
            <img className="card-img-top" src="images/remedial-solution-min.jpeg" alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title">REMEDIAL SOLUTION</h5>
              <p className="card-text">Our expert will provide you best remedial solutions for your personal issues. All you need to do is to consult him. Mail him your question or meet..</p>
              <a href="http://www.jquery2dotnet.com/" className="btn btn-outline-light btn-sm">Go somewhere</a> <br/> <br/>
            </div>
          </div>
        </div>
        
      </div>
      </div>
            {/* Experience  Part Start */}
            <section className="experience-part section-p">
              <div className="container">
                <div className="row">
                  <div className="col-md-7">
                    <div className="section-head-2">
                      <h2>10+ Years Of Experience In <span className="white">Vastu Shastra</span></h2>
                      <p className="white">Mr. Santosh Kadam, then 10+ Years experiance in vastu shastra, Numerology, Reki & Spiritual science 
	 Click on video and listen to Mr. Santosh Kadam about their journey in vastu shastra, Sucess story & remedies. </p>
                      <a href="/#" className="btn-1">Read More</a>
                    </div>
                  </div>
                  <div className="col-md-5 text-center text-lg-left">
                    <div className="video_popup_two">
                      <div className="video-pop-inner">
                        <a className="video-btn venobox pop-up" data-autoplay="true" data-vbtype="video" href="https://youtu.be/OAr6EdrOTAQ"> <i className="fa fa-play" aria-hidden="true" /></a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* Experience  Part End */}
            {/* Pricing table start */}
            <section className="picing-table section-p">
              <div className="container">
                <div className="row">
                  <div className="col-12 text-center">
                    <div className="section-head">
                      <h2>Our Pricing</h2>
                      <p>
VastuRaviraj offers Architecture & Interior design as per Vastushastra to all kind of Vastu

VastuRaviraj products are spiritually ritualized and is of high quality and best in the market..</p>
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
            {/* Pricing table end */}
            {/* Twiter Feed  Part Start */}
            <section className="twitter-feed-part">
              <div className="container">
                <div className="row">
                  <div className="twitter-feed-box">
                    <div className="row no-gutters d-flex align-items-center">
                      <div className="col-lg-1 col-md-3 col-sm-3 col-4">
                        <div className="p-relative">
                          <div className="twitter-icon"> <i className="fa fa-twitter" /></div>
                        </div>
                      </div>
                      <div className="col-lg-10 col-md-7 col-sm-7 col-8 text-left">
                        <div className="swiper-container twitter-feed-slider" data-swiper-config="{&quot;loop&quot;: true, &quot;effect&quot;: &quot;slide&quot;,&quot;speed&quot;: 800,&quot;autoplay&quot;: 5000,&quot;paginationClickable&quot;:true,&quot;nextButton&quot;:&quot;.swiper-button-next&quot;,&quot;prevButton&quot;:&quot;.swiper-button-prev&quot;}">
                          {/* Additional required wrapper */}
                          <div className="swiper-wrapper">
                            {/* Slides */}
                            <div className="swiper-slide">
                            <h5>ॐ भूर्भुवः स्वः तत्सवितुर्वरेण्यं । भर्गो देवस्य धीमहि धियो यो नः प्रचोदयात् ॥</h5>
                            </div>
                            {/* Slides */}
                            <div className="swiper-slide">
                              <h5>ॐ भूर्भुवः स्वः तत्सवितुर्वरेण्यं । भर्गो देवस्य धीमहि धियो यो नः प्रचोदयात् ॥</h5>
                            </div>
                            {/* Slides */}
                            <div className="swiper-slide">
                              <h5>ॐ भूर्भुवः स्वः तत्सवितुर्वरेण्यं । भर्गो देवस्य धीमहि धियो यो नः प्रचोदयात् ॥</h5>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-1 col-md-2 col-sm-2 d-none d-sm-inline-block">
                        {/* If we need navigation buttons */}
                        <div className="twitter-sldier-button">
                          <div className="swiper-button-prev">
                            <i className="fa fa-angle-left" />
                          </div>
                          <div className="swiper-button-next">
                            <i className="fa fa-angle-right" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <div className="scroll-top-wrapper ">
        <span className="scroll-top-inner">
          <i className="fa fa-2x fa-arrow-circle-up" />
        </span>
      </div>
          <Footer />
            
                  
                </div>
             
        );
    }
}