import React from 'react'
import { Link } from 'react-scroll'
// import { Link ,NavLink} from 'react-router-dom'


const Heders = () => {
    return (
        <>
       
            <header className="tj-header-area header-absolute">
                <div className="container">
                    <div className="row">
                        <div className="col-12 d-flex flex-wrap align-items-center">

                            <div className="logo-box">
                                <Link to="">
                                    <img src="assets/img/logo/logo2.png" alt="Logo" />
                                </Link>
                            </div>

                            <div className="header-info-list d-none d-md-inline-block">
                                <ul className="ul-reset">
                                    <li><Link to="mailto:dhameliyamiral@gmail.com">dhameliyamiral@gmail.com</Link></li>
                                </ul>
                            </div>

                            <div className="header-menu">
                                <nav>
                                    <ul>

                                        <li><Link to="resume">Resume</Link></li>
                                        <li><Link to="skills">skills</Link></li>
                                        <li><Link to="contact">Contact</Link></li>
                                    </ul>
                                </nav>
                            </div>

                            <div className="header-button">
                                <Link to="#" className="btn tj-btn-primary">Hire me!</Link>
                            </div>

                            <div className="menu-bar d-lg-none">
                                <button>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </header>


        
        </>
    )
}

export default Heders