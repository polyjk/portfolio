import React from "react";
import Thumbnail from "./Thumbnail.js";
import "./App.css";
import logo from "./logo.svg";
import { Col, Container, Row } from "react-bootstrap";
import { motion, useAnimation } from "framer-motion";
import { Link } from "react-scroll";
import ScrollAnimation from "react-animate-on-scroll";

function Projects(props) {
  const controls = useAnimation();
  controls.start({
    // scale: 1.025,
    scale: [0.5, 1],
    transition: { ease: "easeOut", duration: 0.5, staggerChildren: 0.1 },
  });
  return (
    <Container>
      <h1 className="component-header">P</h1>

      {/* <Row className='projRow'> */}
      {/* <motion.div animate={controls}> */}
      <ScrollAnimation animateIn="fadeIn">
        <Container className="projects-all">
          <Row>
            <Col>
              <Thumbnail
                link="/twitter"
                image={logo}
                title="Alpha"
                text="Desc1"
                smallTag="3/01/21"
              />
            </Col>
            <Col>
              <Thumbnail
                link="/airbnb"
                image={logo}
                title="Beta"
                text="Desc2"
                smallTag="3/05/21"
              />
            </Col>
            <Col>
              <Thumbnail
                link="/photoshop"
                image={logo}
                title="Chrome"
                text="Desc3"
                smallTag="3/015/21"
              />
            </Col>
          </Row>
        </Container>
      </ScrollAnimation>
      {/* </motion.div> */}
    </Container>
  );
}

export default Projects;
