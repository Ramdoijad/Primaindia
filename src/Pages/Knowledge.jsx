import React from 'react';
import NavDropdown from 'react-bootstrap/NavDropdown';
import '../styles/knowledge.css'; // Add this import for the CSS
import { Link } from 'react-router-dom';
function Knowledge() {
  return (
    <NavDropdown 
      title="KNOWLEDGE HUB" 
      id="basic-nav-dropdown" 
      className="custom-dropdown"
      onMouseEnter={(e) => e.target.click()}
    >
      <NavDropdown.Item href="#action/3.1"> <Link to="/blog" style={{color:"black"}}>BLOG</Link></NavDropdown.Item>
      <NavDropdown.Divider />
      <NavDropdown.Item href="#action/3.2"> <Link to="/nri" style={{color:"black"}}>NRI</Link></NavDropdown.Item>
      <NavDropdown.Divider />
      <NavDropdown.Item href="#action/3.3"><Link to="/emi" style={{color:"black"}}>EMI CALCULATOR</Link></NavDropdown.Item>
    </NavDropdown>
  );
}

export default Knowledge;
