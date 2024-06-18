import React from 'react';
import NavDropdown from 'react-bootstrap/NavDropdown';
import '../styles/Projects.css';
import { Link } from 'react-router-dom';
const Projects = () => {
  return (
    <NavDropdown
      title="PROJECTS"
      id="basic-nav-dropdown"
      className="custom-dropdown"
      onMouseEnter={(e) => e.target.click()}
    >
      <div className="dropdown-item submenu-item">Ongoing Projects</div>
      <div className="submenu">
        <NavDropdown.Item href="#action/3.1.1"><Link style={{ color:"black"}} to="https://primelandindia.com/pedda-amberpet">Pedda Amberpet</Link></NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.1.2"><Link style={{ color:"black"}} to="https://primelandindia.com/pedda-amberpet">Reserve</Link></NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.1.3"><Link style={{ color:"black"}} to="https://primelandindia.com/pedda-amberpet">Iconia</Link></NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.1.3"><Link style={{ color:"black"}} to="https://primelandindia.com/pedda-amberpet">The One</Link></NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.1.3"><Link style={{ color:"black"}} to="https://primelandindia.com/pedda-amberpet">Greenfield at Kommireddypally</Link></NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.1.3"><Link style={{ color:"black"}} to="https://primelandindia.com/pedda-amberpet">Greenfield Nandipet</Link></NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.1.3"><Link style={{ color:"black"}} to="https://primelandindia.com/pedda-amberpet">Greenfield Forever</Link></NavDropdown.Item>
      </div>
      <NavDropdown.Divider />
      <div className="dropdown-item submenu-item">Completed Projects</div>
      <div className="submenu">
        <NavDropdown.Item href="#action/3.1.1"><Link style={{ color:"black"}} to="https://primelandindia.com/pedda-amberpet">Icon Township</Link></NavDropdown.Item>
      </div>
    </NavDropdown>
  );
};

export default Projects;
