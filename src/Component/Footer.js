import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>
      <footer className="tj-footer-area">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <div className="footer-logo-box">
                <Link to="/">
                  <img src="assets/img/logo/logo2.png" alt="Logo" />
                </Link>
              </div>
              <div className="footer-menu">
                {/* <nav>
                  <ul>
                    <li><Link to="/#services-section">Services</Link></li>
                    <li><Link to="/#works-section">Works</Link></li>
                    <li><Link to="/#resume-section">Resume</Link></li>
                    <li><Link to="/#skills-section">Skills</Link></li>
                    <li><Link to="/#testimonials-section">Testimonials</Link></li>
                    <li><Link to="/#contact-section">Contact</Link></li>
                  </ul>
                </nav> */}
                 <ul>
                    <li><Link to="/#services-section">Services</Link></li>
                    <li><Link to="/#works-section">Works</Link></li>
                    <li><Link to="/#resume-section">Resume</Link></li>
                    <li><Link to="/#skills-section">Skills</Link></li>
                    <li><Link to="/#testimonials-section">Testimonials</Link></li>
                    <li><Link to="/#contact-section">Contact</Link></li>
                  </ul>
              </div>
              <div className="copy-text">
                <p>&copy; 2024 All rights reserved by <Link to="mailto:dhameliyamiral@gmail.com" target="_blank">dhameliyamiral@gmail.com</Link></p>
              </div>
            </div>
          </div>
        </div>
      </footer>

     
    </>
  )
}

export default Footer