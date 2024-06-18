import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/Footer.css';

const Footer = () => {
  return (
    <div>
      <footer className="footer-area">
        <div className="container">
          <div className="row">
            <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12">
              <div className="single-footer-widget">
                <div className="contact-info-box">
                  <div className="footer-logo">
                    <Link to="/">
                      <img src="https://primelandindia.com/img/primeland-footer-logo.png" alt="Awesome Logo" />
                    </Link>
                  </div>
                  <ul>
                    <li>
                      <h4>Corporate Office:</h4>
                      <hr />
                      <p style={{ fontSize: "20px" }}>My Home Hub, 7th Floor, Block 2, Madhapur, Hitechcity Hyderabad, Telangana 500033.</p>
                    </li>
                    <li>
                      <h4>Bangalore Office:</h4>
                      <hr />
                      <p style={{ fontSize: "20px" }}>40/1A, 1st floor, Basappa Complex, Lavelle Road, behind Rotary Club, Bengaluru, Karnataka 560001</p>
                    </li>
                    <li>
                      <h4>Email</h4>
                      <hr />
                      <p style={{ fontSize: "20px" }}>info@primelandindia.com</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12">
              <div className="single-footer-widget marbtm50">
                <div className="title">
                  <h3>Quick Links</h3>
                </div>
                <div className="services-links">
                  <ul>
                    <li><Link style={{ fontSize: "22px" }} to="/about"><span style={{marginRight:"10px"}}>+</span>Our Story</Link></li>
                    <li><Link style={{ fontSize: "22px" }} to="/partnerwithus"><span style={{marginRight:"10px"}}>+</span>Partner With Us</Link></li>
                    <li><Link style={{ fontSize: "22px" }} to="/gallery"><span style={{marginRight:"10px"}}>+</span>Gallery</Link></li>
                    <li><Link style={{ fontSize: "22px" }} to="/nri"><span style={{marginRight:"10px"}}>+</span>NRI</Link></li>
                    <li><Link style={{ fontSize: "22px" }} to="/emi"><span style={{marginRight:"10px"}}>+</span>EMI Calculator</Link></li>
                    <li><Link style={{ fontSize: "22px" }} to="/contact"><span style={{marginRight:"10px"}}>+</span>Contact Us</Link></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12">
              <div className="single-footer-widget marbtm50">
                <div className="title">
                  <h3>Projects</h3>
                </div>
                <div className="services-links">
                  <ul>
                    <li><Link style={{ fontSize: "22px" }} to="https://primelandindia.com/pedda-amberpet"><span style={{marginRight:"10px"}}>+</span>Pedda Amberpet</Link></li>
                    <li><Link style={{ fontSize: "22px" }} to="https://primelandindia.com/reserve/"><span style={{marginRight:"10px"}} >+</span>Reserve</Link></li>
                    <li><Link style={{ fontSize: "22px" }} to="https://primelandindia.com/iconia"><span style={{marginRight:"10px"}}>+</span>Iconia</Link></li>
                    <li><Link style={{ fontSize: "22px" }} to="https://primelandindia.com/the-one"><span style={{marginRight:"10px"}}>+</span>The One</Link></li>
                    <li><Link style={{ fontSize: "22px" }} to="https://primelandindia.com/greenfield"><span style={{marginRight:"10px"}}>+</span>Greenfield at Kommireddypally</Link></li>
                    <li><Link style={{ fontSize: "22px" }} to="https://primelandindia.com"><span style={{marginRight:"10px"}}>+</span>Greenfield Nandipet</Link></li>
                    <li><Link style={{ fontSize: "22px" }} to="https://primelandindia.com"><span style={{marginRight:"10px"}}>+</span>Greenfield Forever</Link></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12">
              <div className="single-footer-widget">
                <div className="title">
                  <h3>Video Intro</h3>
                </div>
                <div className="single-item">
                  <div className="img-holder">
                    <video width="100%" controls>
                      <source src="img/the-one.mp4" type="video/mp4" />
                      <source src="mov_bbb.ogg" type="video/ogg" />
                    </video>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <section className="footer-bottom-area">
        <div className="container">
          <div className="row">
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
              <div className="footer-bottom-content">
                <div className="copyright-text">
                  <p>© 2022 Primeland Group. Designed by <a href="#" style={{ color: "#ff7f00" }}>Creative Ethics</a></p>
                </div>
                <div className="privacy-text text-center">
                  <p ><Link style={{color:"black"}} to="/privacy-policy">Privacy Policy</Link></p>
                </div>
                <div className="footer-social-links">
                  <span style={{marginBottom:"20px",fontSize:"15px",fontWeight:"bold"}}>We are On:</span>
                  <ul className="sociallinks-style-one">
                  <li>
                                    <a href="https://www.facebook.com/Primelandgroupofficial" target="_blank" rel="noopener noreferrer">
                                        <img srcset="https://img.icons8.com/?size=512&amp;id=118960&amp;format=png 2x, https://img.icons8.com/?size=512&amp;id=118960&amp;format=png 1x" src="https://img.icons8.com/?size=512&amp;id=118960&amp;format=png 2x" alt="Facebook icon" style={{width: '28px', height: '28px'}} />
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.instagram.com/elegantgroupindia/" target="_blank" rel="noopener noreferrer">
                                        <img srcset="https://img.icons8.com/?size=512&amp;id=Xy10Jcu1L2Su&amp;format=png 2x, https://img.icons8.com/?size=512&amp;id=Xy10Jcu1L2Su&amp;format=png 1x" src="https://img.icons8.com/?size=512&amp;id=Xy10Jcu1L2Su&amp;format=png 2x" alt="Instagram icon" style={{width: '28px', height: '28px'}} />
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.youtube.com/@primelandgroup" target="_blank" rel="noopener noreferrer">
                                        <img srcset="https://img.icons8.com/?size=512&amp;id=19318&amp;format=png 2x, https://img.icons8.com/?size=512&amp;id=19318&amp;format=png 1x" src="https://img.icons8.com/?size=512&amp;id=19318&amp;format=png 2x" alt="YouTube icon" style={{width: '29px', height: '29px'}} />
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.linkedin.com/company/primeland-group/" target="_blank" rel="noopener noreferrer">
                                        <img srcset="https://img.icons8.com/?size=512&amp;id=xuvGCOXi8Wyg&amp;format=png 2x, https://img.icons8.com/?size=512&amp;id=xuvGCOXi8Wyg&amp;format=png 1x" src="https://img.icons8.com/?size=512&amp;id=xuvGCOXi8Wyg&amp;format=png 2x" alt="LinkedIn icon" style={{width: '28px', height: '28px'}} />
                                    </a>
                                </li>
                                <li>
                                    <a href="https://twitter.com/primelandgroup" target="_blank" rel="noopener noreferrer">
                                        <img srcset="https://img.icons8.com/?size=512&amp;id=60469&amp;format=png 2x, https://img.icons8.com/?size=512&amp;id=60469&amp;format=png 1x" src="https://img.icons8.com/?size=512&amp;id=60469&amp;format=png 2x" alt="Twitter Squared icon" style={{width: '28px', height: '28px'}} />
                                    </a>
                                </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;
