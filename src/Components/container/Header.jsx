import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import '../../styles/Header.css';

const Header = () => {
  return (
    <header className="header-style3-area">
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className="header-style3-content">
              <div className="logo-box-style3 float-left">
                <Link to="/">
                  <img src="https://primelandindia.com/img/primeland-logo.png" width='221px' height="70px" alt="Awesome Logo" />
                </Link>
              </div>
              <ul className="header-contact-info style2 float-left">
                <li>
                  <div className="single-item" style={{marginLeft:"110px"}}>
                    <div className="icon">
                        <img src='../../../src/assets/map.png' style={{marginRight:"10px"}} height="60px" alt='loading'/>
                    </div>
                    <div className="text">
                      <h3>My Home Hub</h3>
                      <p>Hitech City, Hyderabad
                      <div class="vertical-line"></div>
                      </p>
                     
                    </div>
                  
                  </div>
               
                </li>
                
                <li>
                  <div className="single-item" style={{marginLeft:"110px"}}>
                    <div className="icon">
                     <img style={{marginRight:"10px"}} height="50px" src="../../../email.jpg" alt="" />
                    </div>
                    <div className="text">
                      <h3>info@primelandindia.com</h3>
                    </div>
                  </div>
                </li>
              </ul>
              <div className="float-right">
                <div className="topbar-style3-right">
                  <ul className="clearfix">
                    <li>
                      <a href="https://www.facebook.com/Primelandgroupofficial" target="_blank" rel="noopener noreferrer">
                        <img src="https://img.icons8.com/?size=512&id=118960&format=png" alt="Facebook icon" />
                      </a>
                    </li>
                    <li>
                      <a href="https://www.instagram.com/elegantgroupindia/" target="_blank" rel="noopener noreferrer">
                        <img src="https://img.icons8.com/?size=512&id=Xy10Jcu1L2Su&format=png" alt="Instagram icon" />
                      </a>
                    </li>
                    <li>
                      <a href="https://www.youtube.com/@primelandgroup" target="_blank" rel="noopener noreferrer">
                        <img src="https://img.icons8.com/?size=512&id=19318&format=png" alt="YouTube icon" />
                      </a>
                    </li>
                    <li>
                      <a href="https://www.linkedin.com/company/primeland-group/" target="_blank" rel="noopener noreferrer">
                        <img src="https://img.icons8.com/?size=512&id=xuvGCOXi8Wyg&format=png" alt="LinkedIn icon" />
                      </a>
                    </li>
                    <li>
                      <a href="https://twitter.com/primelandgroup" target="_blank" rel="noopener noreferrer">
                        <img src="https://img.icons8.com/?size=512&id=60469&format=png" alt="Twitter icon" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
