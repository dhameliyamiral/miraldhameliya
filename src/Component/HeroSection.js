import React from 'react'
    
import { FaWhatsapp } from "react-icons/fa6";

const HeroSection = () => {
    return (
        <>
            <main className="site-content" id="content" >
                <section className="hero-section d-flex align-items-center" id="intro">
                    <div className="intro_text">
                        <svg viewBox="0 0 1320 300">
                            <text x="50%" y="50%" textAnchor="middle">
                                HI
                            </text>
                        </svg>
                    </div>
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-md-6">
                                <div className="hero-content-box">
                                    <span className="hero-sub-title wow fadeInLeft" data-wow-delay="1.1s">I Am Miral Dhameliya</span>
                                    <h1 className="hero-title wow fadeInLeft" data-wow-delay="1.2s">
                                        Web Developer
                                    </h1>

                                    <div className="hero-image-box d-md-none text-center wow fadeInRight" data-wow-delay="1.3s">
                                        <img src="assets/img/hero/miral.jpg" alt="" />
                                    </div>

                                    <p className="lead wow fadeInLeft" data-wow-delay="1.4s">
                                        Welcome to my portfolio! Here, you'll find a showcase of my work, skills, and professional experiences. My portfolio is a reflection of my journey,
                                        highlighting the projects I've undertaken.
                                    </p>
                                    <div className="button-box d-flex flex-wrap align-items-center">
                                        <a href="assets/MIRALDHAMELIYA.pdf" className="btn tj-btn-secondary wow fadeInLeft" data-wow-delay="1.5s" download>Download CV</a>
                                        <ul className="ul-reset social-icons wow fadeInLeft" data-wow-delay="1.6s">
                                            <li>
                                                <a href="https://wa.me/9978420331" target="_blank" rel="noopener noreferrer">
                                                    <FaWhatsapp style={{ fontSize: '24px' }} />
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 d-none d-md-block">
                                <div className="hero-image-box text-center wow fadeInRight" data-wow-delay="1.5s">
                                    <img src="assets/img/hero/miral.jpg" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}
export default HeroSection
