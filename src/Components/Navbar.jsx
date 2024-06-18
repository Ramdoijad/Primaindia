import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';
import Projects from '../Pages/Projects';
import Knowledge from '../Pages/Knowledge';
const Navbar = () => {
    return (
        <header className="navbar">
            <nav className="navbar-nav">
                <ul className="navbar-links">
                    <li><Link to="/">HOME</Link></li>
                    <li><Link to="/about">ABOUT US</Link></li>
                         <div className='pro' style={{}}><Projects/></div>
                    <li><Link to="/partnerwithus" >PARTNER WITH US</Link></li>
                    <li><Link to="/gallery">GALLERY</Link></li>
                    <li><Link to="/careers">CAREERS</Link></li>
                   <Knowledge/>
                    <li><Link to="/contact">CONTACT</Link></li>
                    <div className="navbar-enquire">
                    <Link style={{padding:"20px 50px 20px 50px",fontSize:"16px"}} to="/" className="enquire-button">Enquire Now →</Link>
                </div>
                </ul>
               
            </nav>
        </header>
    );
};

export default Navbar;
