import React from 'react';
import '../styles/Gallary.css';
import Accordion from 'react-bootstrap/Accordion';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const projects = [
  {
    name: "Reserve Project",
    images: [
      "https://primelandindia.com/img/projects-gallery/reserve/1.jpg",
      "https://primelandindia.com/img/projects-gallery/reserve/2.jpg",
      "https://primelandindia.com/img/projects-gallery/reserve/3.jpg",
      "https://primelandindia.com/img/projects-gallery/reserve/4.jpg",
      "https://primelandindia.com/img/projects-gallery/reserve/5.jpg",
      "https://primelandindia.com/img/projects-gallery/reserve/6.jpg",
    ]
  },
  {
    name: "Greenfield Project",
    images: [
      "https://primelandindia.com/img/projects-gallery/greenfield/1.jpg",
      "https://primelandindia.com/img/projects-gallery/greenfield/2.jpg",
      "https://primelandindia.com/img/projects-gallery/greenfield/3.jpg",
      "https://primelandindia.com/img/projects-gallery/greenfield/4.jpg",
      "https://primelandindia.com/img/projects-gallery/greenfield/5.jpg",
      "https://primelandindia.com/img/projects-gallery/greenfield/6.jpg",
    ]
  },
  {
    name: "The-One Project",
    images: [
      'https://primelandindia.com/img/projects-gallery/the-one/1.jpg',
      'https://primelandindia.com/img/projects-gallery/the-one/2.jpg',
      'https://primelandindia.com/img/projects-gallery/the-one/3.jpg',
      'https://primelandindia.com/img/projects-gallery/the-one/4.jpg',
      'https://primelandindia.com/img/projects-gallery/the-one/5.jpg',
      'https://primelandindia.com/img/projects-gallery/the-one/6.jpg',
    ]
  }
];

const Gallery = () => {
  return (
    <div className="gallery">
      <div style={{ position: 'relative', height: '354px', backgroundImage: `url('https://primelandindia.com/img/nri-bg.jpg')`, backgroundPosition: 'center', backgroundSize: 'cover' }}>
        <h3 style={{
          textAlign: 'center',
          color: '#fff',
          padding: '20px',
          fontSize:"48px",
          margin: 0, 
          height: '100%', 
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          fontFamily:"Poppins,sans-serif",
          fontWeight:"700"
        }}>
          Gallery
        </h3>

        <div style={{
          position: 'absolute',
          bottom: '20px', // Adjust bottom position as needed
          left: '20px', // Adjust left position as needed
          color: '#fff',
          fontSize: '16px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start', // Align items to the start (left) of the container
        }}>
          <Link to='/' style={{
            color:"white",
            textDecoration:"none",
            marginLeft:"200px",
            marginBottom:"-22px", 
            fontWeight:"bold" // Optional: Adjust margin between links
          }}>
            Home
          </Link>
          <div style={{marginLeft:"300px",fontWeight:"bold"}}>
            Gallery
          </div>
        </div>
      </div>
      <Container style={{backgroundColor:"#f6f6f6",padding:"30px",marginTop:"70px",marginBottom:"70px"}}>
        <Accordion defaultActiveKey="0" style={{padding:"10px"}}>
          {projects.map((project, index) => (
            <Accordion.Item eventKey={index.toString()} key={index} style={{padding:"10px"}}>
              <Accordion.Header>{project.name}</Accordion.Header>
              <Accordion.Body>
                <Row>
                  {project.images.map((image, idx) => (
                    <Col key={idx} xs={12} md={6} lg={4}>
                      <img src={image} alt={`${project.name} ${idx}`} className="img-fluid" />
                    </Col>
                  ))}
                </Row>
              </Accordion.Body>
            </Accordion.Item>
          ))}
        </Accordion>
      </Container>
    </div>
  );
};

export default Gallery;
