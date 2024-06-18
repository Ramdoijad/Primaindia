// src/components/AboutSection.js
import React from 'react';
import '../styles/AboutSection.css'

const AboutSection = () => {
    return (
        <section className="about-section">
            <div className="container">
                <div className="row about-new-section">
                    <div className="col-xl-1"></div>
                    <div className="col-xl-10">
                        <div className="about-new">
                            <h3>THE PRIMELAND MARK</h3>
                            <p>We work with a purpose and the purpose is to create value for everyone.</p>
                        </div>
                    </div>
                    <div className="col-xl-1"></div>
                    <div className="col-xl-1"></div>
                    <div className="col-xl-3">
                        <img src='https://primelandindia.com/img/home-about-logo.png' alt="Primeland Logo" className="about-logo"/>
                    </div>
                    <div className="col-xl-7">
                        <p>At Primeland, we focus on developing positive, smarter and sustainable communities to elevate the lifestyles for everyone. We believe that every customer would like to be surrounded by the finer things in life, every property we develop has been prudently considered, thoughtfully planned, methodically designed and robustly built with a seasoned buyer in mind.</p>
                        <p>Our commitment to our customers has been at the core of what we do and have always placed a premium on a collaborative and a “win-win” relationship’s.</p>
                        <a className="btn-six" href="overview.html">About Us<span className="flaticon-next"></span></a>
                        <div className="row stats-row">
                            <div className="col-xl-4 col-sm-6">
                                <div className="stats-block">
                                    <div className="small-txt"> INDUSTRY EXPERIENCE</div>
                                    <div className="big-txt"> <h3>25+</h3></div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-sm-6">
                                <div className="stats-block">
                                    <div className="small-txt"> ACRES CRAFTED</div>
                                    <div className="big-txt"> <h3>2K+</h3></div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-sm-6">
                                <div className="stats-block">
                                    <div className="small-txt"> HAPPY CUSTOMERS</div>
                                    <div className="big-txt"> <h3>10K+</h3></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-1"></div>
                </div>
            </div>
        </section>
    );
}

export default AboutSection;
