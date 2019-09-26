import React, { Component } from 'react';
import Header from './Header';
import Navigation from './Navigation';
import Footer from './Footer';

export default class About extends Component {
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
                <h1>About Us</h1>
              </div>
            </div>
          </div>
          <div className="breadcrumb-link">
            <ul className="flat-list">
              <li><a href="#">Home</a></li>
              <li><a href="#">About Us</a></li>
            </ul>
          </div>
        </div>
      </section>
      <section className="about_us section-p bg_dark">
              <div className="container">
                <div className="row">
                  <div className="col-xl-8">
                    <h2>About Us </h2>
                    <h6>
VastuSantosh is Offering Vastushastra Consultancy, Remedies & Education to help Individual & Enterprises Lead a Meaningful Life With Modern and Proven Techniques.. </h6>
      <p> Mr. Santosh S.Kadam is a professional vastu practitioner. His practices are targated at careful analysis and providing intuitive solutions.These solutions/adjustments sometimes can be remarkably obvious and subtle.
Realignment and adjustment of vastu can re-distribute the energy in home/offices and help you to achieve your goals.By seeing deep into your life and analysing it, would help to bring disparate elements into closer harmony.
In case of site visit, Mr.Santosh Kadam personally visit your site and prepare a detailed explanatory report.
If you are planning to built a new site or renovating the existing one it is right time to consult him for vastushastra implementation and its remedies.A comprehensive vastu consultation and the solutions provided by us can liberate much energy.The power of vastu become your personal power, the power of possibilities.
The ultimate results of Vastu will help you acquiring your life mission by changing your thoughts, actions for betterment in terms of health, wealth, peace, and prosperity as well.</p>
                    <div className="progress_bar_wrap">
                      <div className=" progress_bar">
                        <span className="dial" data-number={95} />
                        <span className="pro-num">10</span>
                        <p>Years Of Experience</p>
                      </div>
                      <div className=" progress_bar">
                        <span className="dial" data-number={80} />
                        <span className="pro-num">80%</span>
                        <p>Satisfied Clients</p>
                      </div>
                      <div className=" progress_bar">
                        <span className="dial" data-number={96} />
                        <span className="pro-num">96%</span>
                        <p>Cities</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
              {/* About-4 Part Start */}
        <div className="about-4-part section-p-2">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-12 text-center">
                <div className="section-head">
                  <h2>Wellcome to Consultant</h2>
                  <p>Dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard unknown printer took a quis nostrud exercitatliquip.</p>
                </div>
              </div>
              <div className="col-md-8 col-xl-6">
                <div className="about-4-img">
                  <img src="images/about-4.png" alt="" />
                </div>
              </div>
              <div className="col-md-8 col-xl-6">
                <div className="about-4-des">
                  <div id="accordion-4" className="about-4-accodian">
                    <div className="accodian-4-item active">
                      <div className="accodian-4-head" data-toggle="collapse" data-target="#collapse-4-Two">
                        <h5 className="bold">High Quality Performanceyears.</h5>
                      </div>
                      <div id="collapse-4-Two" className="accodian-4-result collapse show" data-parent="#accordion-4">
                        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.</p>
                      </div>
                    </div>
                    <div className="accodian-4-item  active">
                      <div className="accodian-4-head" data-toggle="collapse" data-target="#collapse-4-One">
                        <h5 className="bold">We are served since 93 years to our clients with trust and we are happy.</h5>
                      </div>
                      <div id="collapse-4-One" className="accodian-4-result collapse" data-parent="#accordion-4">
                        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.</p>
                      </div>
                    </div>
                    <div className="accodian-4-item  active">
                      <div className="accodian-4-head" data-toggle="collapse" data-target="#collapse-4-three">
                        <h5 className="bold">Experience the beeWe try to make the world a secure place to live</h5>
                      </div>
                      <div id="collapse-4-three" className="accodian-4-result collapse" data-parent="#accordion-4">
                        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.</p>
                      </div>
                    </div>
                    <div className="accodian-4-item  active">
                      <div className="accodian-4-head" data-toggle="collapse" data-target="#collapse-4-four">
                        <h5 className="bold">Talk to one of our consultant today! </h5>
                      </div>
                      <div id="collapse-4-four" className="accodian-4-result collapse" data-parent="#accordion-4">
                        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* About-4 Part End */}
        {/* Counter-3 Part End */}
        {/* Team-2 Part Start */}
        <section className="team-2-part section-p">
        <div className="container text-center my-3">
            <div className="row">
              <div className="col-12 text-center">
                <div className="section-head-3-1">
                  <h2>Our Expert <span>Consultant</span></h2>
                  <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humourh.</p>
                </div>
              </div>
            </div>
          <div id="recipeCarousel" className="carousel slide w-100" data-ride="carousel">
            <div className="carousel-inner w-100" role="listbox">
              <div className="carousel-item row no-gutters active">
                <div className="col-3 float-left"><img className="img-fluid" src="http://placehold.it/350x280/222/fff?text=1" /></div>
                <div className="col-3 float-left"><img className="img-fluid" src="http://placehold.it/350x280/444?text=2" /></div>
                <div className="col-3 float-left"><img className="img-fluid" src="http://placehold.it/350x280/888?text=3" /></div>
                <div className="col-3 float-left"><img className="img-fluid" src="http://placehold.it/350x280/111/fff?text=4" /></div>
              </div>
              <div className="carousel-item row no-gutters">
                <div className="col-3 float-left"><img className="img-fluid" src="http://placehold.it/350x280?text=5" /></div>
                <div className="col-3 float-left"><img className="img-fluid" src="http://placehold.it/350x280/555?text=6" /></div>
                <div className="col-3 float-left"><img className="img-fluid" src="http://placehold.it/350x280/333/fff?text=7" /></div>
                <div className="col-3 float-left"><img className="img-fluid" src="http://placehold.it/350x280/bbb?text=8" /></div>
              </div>
            </div>
            <a className="carousel-control-prev" href="#recipeCarousel" role="button" data-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true" />
              <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#recipeCarousel" role="button" data-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true" />
              <span className="sr-only">Next</span>
            </a>
          </div>
          </div>
        </section>
        {/* Team-2 Part End */}
        
        <section className="testimonial-3-part section-p-2">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <div className="section-head-3-1">
                <h2 className="white">Client <span>Stories</span></h2>
              </div>
            </div>
          </div>
          <div className="row">
          
          <div className="col-md-8 col-center m-auto">
         
            <div id="myCarousel" className="carousel slide" data-ride="carousel">
              {/* Carousel indicators */}
                
              {/* Wrapper for carousel items */}
              <div className="carousel-inner">
                <div className="item carousel-item active">
                  <div className="img-box"><img src="/examples/images/clients/1.jpg" alt="" /></div>
                  <p className="testimonial" style={{color:"white"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eu sem tempor, varius quam at, luctus dui. Mauris magna metus, dapibus nec turpis vel, semper malesuada ante. Idac bibendum scelerisque non non purus. Suspendisse varius nibh non aliquet.</p>
                  <p className="overview"  style={{color:"white"}}><b>Paula Wilson</b>, Media Analyst</p>
                </div>
                <div className="item carousel-item">
                  <div className="img-box"><img src="/examples/images/clients/2.jpg" alt="" /></div>
                  <p className="testimonial"  style={{color:"white"}}>Vestibulum quis quam ut magna consequat faucibus. Pellentesque eget nisi a mi suscipit tincidunt. Utmtc tempus dictum risus. Pellentesque viverra sagittis quam at mattis. Suspendisse potenti. Aliquam sit amet gravida nibh, facilisis gravida odio.</p>
                  <p className="overview"  style={{color:"white"}}><b>Antonio Moreno</b>, Web Developer</p>
                </div>
                <div className="item carousel-item">
                  <div className="img-box"><img src="/examples/images/clients/3.jpg" alt="" /></div>
                  <p className="testimonial"  style={{color:"white"}}>Phasellus vitae suscipit justo. Mauris pharetra feugiat ante id lacinia. Etiam faucibus mauris id tempor egestas. Duis luctus turpis at accumsan tincidunt. Phasellus risus risus, volutpat vel tellus ac, tincidunt fringilla massa. Etiam hendrerit dolor eget rutrum.</p>
                  <p className="overview"  style={{color:"white"}}><b>Michael Holz</b>, Seo Analyst</p>
                </div>
              </div>
              {/* Carousel controls */}
              <a className="carousel-control left carousel-control-prev" href="#myCarousel" data-slide="prev">
                <i className="fa fa-angle-left" />
              </a>
              <a className="carousel-control right carousel-control-next" href="#myCarousel" data-slide="next">
                <i className="fa fa-angle-right" />
              </a>
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