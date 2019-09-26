import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {Button} from 'reactstrap';

export default class Navigation extends Component {
    render() {
        return (
            <div>
  
        <nav className="navbar navbar-expand-lg navbar-light bg-white">
          <a className="navbar-brand" href="/#"><img src="images/logo-min.jpeg" className="img-fluid" /></a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto topnav">
              <li className="nav-item active">
              <Link className='nav-link' to="/#">Home</Link>
              </li>
              <li className="nav-item active">
              <Link className='nav-link' to="/About">About Us</Link>
              </li>
             <li className="nav-item active">
              <Link className='nav-link' to="/About">Vastu Solutions</Link>
              </li>
             <li className="nav-item active">
              <Link className='nav-link' to="/Solutions">Consultation</Link>
              </li>             
         
              <li className="nav-item active">
              <Link className='nav-link' to="/vastublog">Vastu Tips</Link>
              </li>
              <li className="nav-item active">
              <Link className='nav-link' to="/Vastustore">Vastu-Store</Link>
              </li>
              <li className="nav-item active">
              <Link className='nav-link' to="/Contact">Contact</Link>
              </li>
              <li className="nav-item active">
              <Link className='nav-link1' to="/Contact">
                <Button color="danger">Request callback</Button></Link>
              </li>
           
            </ul>
          </div>
        </nav>
        </div>

        );
    }
}
