import React from 'react';

const Footer = () => {
  return (
    <footer className="container-fluid" id="gtco-footer">
    <div className="container">
      <div className="row">
        <div className="col-lg-6" id="contact">
          <h4> Contact Us </h4>
          <input type="text" className="form-control" placeholder="Full Name" />
          <input
            type="email"
            className="form-control"
            placeholder="Email Address"
          />
          <textarea className="form-control" placeholder="Message"></textarea>
          <a href="#" className="submit-button">
            READ MORE <i className="fa fa-angle-right" aria-hidden="true"></i>
          </a>
        </div>
        <div className="col-lg-6">
          <div className="row">
            <div className="col-6">
              <h4>Company</h4>
              <ul className="nav flex-column company-nav">
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Services
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    About
                  </a>
                </li>
                
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Contact
                  </a>
                </li>
              </ul>
              <h4 className="mt-5">Follow Us</h4>
              <ul className="nav follow-us-nav">
                <li className="nav-item">
                  <a className="nav-link pl-0" href="#">
                    <i className="fa fa-facebook" aria-hidden="true"></i>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    <i className="fa fa-twitter" aria-hidden="true"></i>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    <i className="fa fa-google" aria-hidden="true"></i>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    <i className="fa fa-linkedin" aria-hidden="true"></i>
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-6">
              <h4>Services</h4>
              <ul className="nav flex-column services-nav">
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Web Design
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Graphics Design
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    App Design
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    SEO
                  </a>
                </li>
               {/*  <li className="nav-item">
                  <a className="nav-link" href="#">
                    Marketing
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Game
                  </a>
                </li> */}
              </ul>
            </div>
            <div className="col-12">
              <p>
                &copy; 2022. All Rights Reserved by Alecta SoftTech. 
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
  )
}

export default Footer;