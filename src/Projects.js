import React from "react"
import Thumbnail from './Thumbnail.js';
import './App.css';
import logo from './logo.svg';
import { Col, Container, Row } from "react-bootstrap";
 
function Projects(props) {
  return (
    
    <Container fluid>
      
        <h1>Apples</h1>
          
          <Row className='projRow'>
            <Thumbnail
                link="/twitter"
                image={logo}
                title="Twitter Newsfeed"
                category="Mobile App"
            />
          </Row>

          <Row className='projRow'> 
            <Thumbnail
                link="/airbnb"
                image={logo}
                title="Airbnb Experiences"
                category="Website"
            />
          </Row>

          <Row className='projRow'>
            <Thumbnail
                link="/photoshop"
                image={logo}
                title="Photoshop Redesign"
                category="Desktop App"
            />
          </Row>

        
    </Container>
  )
}
 
export default Projects;