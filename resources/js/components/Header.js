import React, { Component } from 'react';


export default class Header extends Component {
    render() {
        return (
      
         <div >
       
          
              <header className="header-part">
              <div className="container">
                <div className="row d-flex align-items-center">
                  <div className="col-sm-8 col-6 text-left">
                    <div className="header-item">
                      <p className="pl-0"><i className="fa fa-phone" /> <span className="d-none d-md-inline-block">Mobile No:</span> <a href="/#">9969536484</a> <span className="d-none d-xl-inline-block">/</span> <a href="/#" className="d-none d-xl-inline-block">8898125380</a> </p>
                      <p className="d-none d-md-inline-block"><i className="fa fa-clock-o" /> <span className="d-none d-sm-inline-block">Trusted vastu consultant in </span> Mumbai, Pune, Nashik & Maharashtra.</p>
                    </div>
                  </div>
                  <div className="col-sm-4 col-6 text-left text-sm-right">
                    <div className="header-icon">
                      <ul className="flat-list social-icon d-inline-block">
                        <li><a href="#"><i className="fa fa-facebook" /></a></li>
                        <li><a href="#"><i className="fa fa-twitter" /></a></li>
                        <li><a href="#"><i className="fa fa-google" /></a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </header>
    
         </div>
       
        );
    }
    
}


