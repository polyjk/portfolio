import React from "react";
import Thumbnail from "./Thumbnail.js";
import "./App.css";
import logo from "./logo.svg";
import { Col, Container, Row } from "react-bootstrap";
import { motion } from "framer-motion";

function Projects(props) {
  return (
    <Container>
      <h1 className="component-header">Test</h1>

      {/* <Row className='projRow'> */}
      <Row>
        <Col>
          <Thumbnail
            link="/twitter"
            image={logo}
            title="Alpha"
            category="Desc1"
            smallTag="3/01/21"
          />
        </Col>

        <Col>
          <Thumbnail
            link="/airbnb"
            image={logo}
            title="Beta"
            category="Desc2"
            smallTag="3/05/21"
          />
        </Col>

        <Col>
          <Thumbnail
            link="/photoshop"
            image={logo}
            title="Chrome"
            category="Desc3"
            smallTag="3/015/21"
          />
        </Col>
      </Row>
    </Container>
  );
}

export default Projects;
