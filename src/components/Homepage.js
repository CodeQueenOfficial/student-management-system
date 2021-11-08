import React from "react";
import '../css/homepage.css';

const Homepage = () => {
  return (
    <div className="">
      <header className="conatainer">
        <nav className="navbar navbar-expand-md navbar-dark fixed-top">
          <a className="navbar-brand" href="#">
            <img src="images/code queen.png" alt="code-queen logo" className="logo-header" />
          </a>

          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="collapsibleNavbar">
            <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <a className="nav-link" href="https://www.etc.education/kampala">ABOUT</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="cohorts">COHORTS</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="Applications">APPLY NOW</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="Login">LOGIN</a>
                </li>
            </ul>
          </div>
        </nav>
        <div className="welcome-text container">
          <h1>CODE QUEEN BOOTCAMP</h1>
          <h1>Become the next code queen</h1>
          <h4>Change your life, learn to <span className="orange-text">code</span></h4>
          <a href="Applications"  className="btn-main"> Apply here</a>
        </div>
        
      </header>     


      <footer>
        <div className="">
          <div className="row">
            <div className="col-md-3">
              <div className="footer-logo"> <img src="./images/side-logo.png" alt="" className="logo-ft" /></div>
              <address className="footer-list"><i className="fa fa-map-marker location"></i>
                Plot 31 Ntinda - Kisaasi Road
                  Ntinda Shopping Complex 
                  Block B&C 3rd Floor
              </address>
              <ul className="footer-list contact">
                <li><i className="fa fa-phone"></i> 0393241297</li>
                <li><i className="fa fa-envelope-o"></i> team@etc.education</li>
              </ul>
            </div>

            <div className="col-md-3">
              <h3 className="footer-title">Information</h3>
              <ul className="footer-links">
                <li><i className="fas fa-angle-right"></i> <a href="https://twitter.com/etceducation" target="_blank">Twitter</a></li>
                <li><i className="fas fa-angle-right"></i> <a href="https://www.facebook.com/etceducation/?ref=br_rs" target="_blank">Facebook</a></li>
                <li><i className="fas fa-angle-right"></i> <a href="https://www.linkedin.com/groups/9012051/" target="_blank">LinkedIn</a></li>
                
              </ul>
            </div>

            <div className="col-md-4">
              <h3 className="footer-title">Newsletter</h3>
              <p>Subscribe to our newsletter to get the latest
                updates to your inbox.</p>

              <form>
                <div className="input-group">
                  <input type="email" className="form-control" placeholder="Email Address" />
                  <span className="input-group-btn">
                    <button className="btn btn-ft" type="button">subscribe</button>
                  </span>
                </div>
              </form>
            </div>
          </div>
        </div>
      </footer>
    </div>
                                
  );
};

export default Homepage;
