import React, { Component } from 'react';
import Navigation from './Navigation';
import Header from './Header';

export default class Vastustore extends Component {
    render() {
        return (
            <div>
                <Header />
                <Navigation />
                <br /><br />
<div className="container">
<div className="row">
  <div className="col-xs-12 ">
    <nav>
      <div className="nav nav-tabs nav-fill" id="nav-tab" role="tablist">
        <a className="nav-item nav-link active" id="nav-home-tab" data-toggle="tab" href="#nav-home" role="tab" aria-controls="nav-home" aria-selected="true">Crystal</a>
        <a className="nav-item nav-link" id="nav-profile-tab" data-toggle="tab" href="#nav-profile" role="tab" aria-controls="nav-profile" aria-selected="false">Pyramid</a>
        <a className="nav-item nav-link" id="nav-contact-tab" data-toggle="tab" href="#nav-contact" role="tab" aria-controls="nav-contact" aria-selected="false">Rudraksh</a>
        <a className="nav-item nav-link" id="nav-about-tab" data-toggle="tab" href="#nav-about" role="tab" aria-controls="nav-about" aria-selected="false">All</a>
      </div>
    </nav>
    <div className="tab-content py-3 px-3 px-sm-0" id="nav-tabContent">
      <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
      <div className="container">
        <br />
        <br />
        <div className="row" id="ads">
          {/* Category Card */}
          <div className="col-md-4">
            <div className="card rounded">
              <div className="card-image">
                <span className="card-notify-year">2018</span>
                <img className="img-fluid" src="images/practice/stone_2.png" alt="Alternate Text" />
              </div>
              <div className="card-image-overlay m-auto">
                <span className="card-detail-badge">$28,000.00</span>
              </div>
              <div className="card-body text-center">
                <div className="ad-title m-auto">
                  <h5>Honda Accord LX</h5>
                </div>
                <a className="ad-btn" href="#">View</a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card rounded">
              <div className="card-image">
                <span className="card-notify-year">2017</span>
                <img className="img-fluid" src="images/practice/stone_3.png" alt="Alternate Text" />
              </div>
              <div className="card-image-overlay m-auto">
                <span className="card-detail-badge">$28,000.00</span>
              </div>
              <div className="card-body text-center">
                <div className="ad-title m-auto">
                  <h5>Honda CIVIC HATCHBACK LS</h5>
                </div>
                <a className="ad-btn" href="#">View</a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card rounded">
              <div className="card-image">
                <span className="card-notify-year">2018</span>
                <img className="img-fluid" src="images/practice/stone_4.png" alt="Alternate Text" />
              </div>
              <div className="card-image-overlay m-auto">
                <span className="card-detail-badge">$22,000.00</span>
              </div>
              <div className="card-body text-center">
                <div className="ad-title m-auto">
                  <h5>Honda Accord Hybrid LT</h5>
                </div>
                <a className="ad-btn" href="#">View</a>
              </div>
            </div>
          </div>
        </div>
      </div>     
       </div>
      <div className="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
      <div className="container">
        <br />
        <br />
        <div className="row" id="ads">
          {/* Category Card */}
          <div className="col-md-4">
            <div className="card rounded">
              <div className="card-image">
                <span className="card-notify-year">2018</span>
                <img className="img-fluid" src="images/practice/download.jpeg" alt="Alternate Text" />
              </div>
              <div className="card-image-overlay m-auto">
                <span className="card-detail-badge">$28,000.00</span>
              </div>
              <div className="card-body text-center">
                <div className="ad-title m-auto">
                  <h5>Honda Accord LX</h5>
                </div>
                <a className="ad-btn" href="#">View</a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card rounded">
              <div className="card-image">
                <span className="card-notify-year">2017</span>
                <img className="img-fluid" src="images/practice/Vaastu-Pyramids.jpg" alt="Alternate Text" />
              </div>
              <div className="card-image-overlay m-auto">
                <span className="card-detail-badge">$28,000.00</span>
              </div>
              <div className="card-body text-center">
                <div className="ad-title m-auto">
                  <h5>Honda CIVIC HATCHBACK LS</h5>
                </div>
                <a className="ad-btn" href="#">View</a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card rounded">
              <div className="card-image">
                <span className="card-notify-year">2018</span>
                <img className="img-fluid" src="images/practice/vip-Vastu_Pyramids.jpg" alt="Alternate Text" />
              </div>
              <div className="card-image-overlay m-auto">
                <span className="card-detail-badge">$22,000.00</span>
              </div>
              <div className="card-body text-center">
                <div className="ad-title m-auto">
                  <h5>Honda Accord Hybrid LT</h5>
                </div>
                <a className="ad-btn" href="#">View</a>
              </div>
            </div>
          </div>
        </div>
      </div>   
         </div>
      <div className="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">
      <div className="container">
        <br />
        <br />
        <div className="row" id="ads">
          {/* Category Card */}
          <div className="col-md-4">
            <div className="card rounded">
              <div className="card-image">
                <span className="card-notify-year">2018</span>
                <img className="img-fluid" src="images/practice/thumb1.jpg" alt="Alternate Text" />
              </div>
              <div className="card-image-overlay m-auto">
                <span className="card-detail-badge">$28,000.00</span>
              </div>
              <div className="card-body text-center">
                <div className="ad-title m-auto">
                  <h5>Honda Accord LX</h5>
                </div>
                <a className="ad-btn" href="#">View</a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card rounded">
              <div className="card-image">
                <span className="card-notify-year">2017</span>
                <img className="img-fluid" src="images/practice/thumb2.jpg" alt="Alternate Text" />
              </div>
              <div className="card-image-overlay m-auto">
                <span className="card-detail-badge">$28,000.00</span>
              </div>
              <div className="card-body text-center">
                <div className="ad-title m-auto">
                  <h5>Honda CIVIC HATCHBACK LS</h5>
                </div>
                <a className="ad-btn" href="#">View</a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card rounded">
              <div className="card-image">
                <span className="card-notify-year">2018</span>
                <img className="img-fluid" src="images/practice/thumb3.jpg" alt="Alternate Text" />
              </div>
              <div className="card-image-overlay m-auto">
                <span className="card-detail-badge">$22,000.00</span>
              </div>
              <div className="card-body text-center">
                <div className="ad-title m-auto">
                  <h5>Honda Accord Hybrid LT</h5>
                </div>
                <a className="ad-btn" href="#">View</a>
              </div>
            </div>
          </div>
        </div>
      </div>       </div>
      <div className="tab-pane fade" id="nav-about" role="tabpanel" aria-labelledby="nav-about-tab">
      <div className="container">
        <br />
        <br />
        <div className="row" id="ads">
          {/* Category Card */}
          <div className="col-md-4">
            <div className="card rounded">
              <div className="card-image">
                <span className="card-notify-year">2018</span>
                <img className="img-fluid" src="images/practice/download.jpeg" alt="Alternate Text" />
              </div>
              <div className="card-image-overlay m-auto">
                <span className="card-detail-badge">$28,000.00</span>
              </div>
              <div className="card-body text-center">
                <div className="ad-title m-auto">
                  <h5>Honda Accord LX</h5>
                </div>
                <a className="ad-btn" href="#">View</a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card rounded">
              <div className="card-image">
                <span className="card-notify-year">2017</span>
                <img className="img-fluid" src="images/practice/Vaastu-Pyramids.jpg" alt="Alternate Text" />
              </div>
              <div className="card-image-overlay m-auto">
                <span className="card-detail-badge">$28,000.00</span>
              </div>
              <div className="card-body text-center">
                <div className="ad-title m-auto">
                  <h5>Honda CIVIC HATCHBACK LS</h5>
                </div>
                <a className="ad-btn" href="#">View</a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card rounded">
              <div className="card-image">
                <span className="card-notify-year">2018</span>
                <img className="img-fluid" src="images/practice/vip-Vastu_Pyramids.jpg" alt="Alternate Text" />
              </div>
              <div className="card-image-overlay m-auto">
                <span className="card-detail-badge">$22,000.00</span>
              </div>
              <div className="card-body text-center">
                <div className="ad-title m-auto">
                  <h5>Honda Accord Hybrid LT</h5>
                </div>
                <a className="ad-btn" href="#">View</a>
              </div>
            </div>
          </div>
        </div>
      </div>   
    </div>
    </div>
  </div>
</div>
</div>


</div>

        );
    }
}