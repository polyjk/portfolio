import React from "react";
import Thumbnail from "./Thumbnail.js";
import "./App.css";
import logo from "./logo.svg";
import { Col, Container, Row } from "react-bootstrap";
import { motion, useAnimation } from "framer-motion";
import { Link } from "react-scroll";

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
      <motion.div animate={controls}>
        <Container className="projects-all">
          <Row>
            <Thumbnail
              link="/twitter"
              image={logo}
              title="Alpha"
              text="Desc1"
              smallTag="3/01/21"
            />
          </Row>
          <Row>
            <Thumbnail
              link="/airbnb"
              image={logo}
              title="Beta"
              text="Desc2"
              smallTag="3/05/21"
            />
          </Row>
          <Row>
            <Thumbnail
              link="/photoshop"
              image={logo}
              title="Chrome"
              text="Desc3"
              smallTag="3/015/21"
            />
          </Row>
        </Container>
      </motion.div>
    </Container>
  );
}

export default Projects;
