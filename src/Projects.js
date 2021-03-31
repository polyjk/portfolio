import React from "react";
import Thumbnail from "./Thumbnail.js";
import "./App.css";
import logo from "./logo.svg";
import { Col, Container, Row } from "react-bootstrap";
import { motion, useAnimation } from "framer-motion";
import { Link } from "react-scroll";
import smartphone from "./images/smartphone.png";
import controller from "./images/controller.svg";
import website from "./images/website.png";
//import android from "./images/android.jpeg";

function Projects(props) {
  const controls = useAnimation();
  controls.start({
    // scale: 1.025,
    scale: [0.5, 1],
    transition: { ease: "easeOut", duration: 0.5, staggerChildren: 0.1 },
  });
  return (
    <Container>
      <h1 className="component-header" style={{ color: "#282c34" }}>
        Panther
      </h1>

      {/* <Row className='projRow'> */}
      {/* <motion.div animate={controls}> */}

      <Container className="projects-all">
        <Row>
          <Col>
            <Thumbnail
              link="/twitter"
              image={smartphone}
              title=" Quickest Arrival"
              text="Android Mobile App"
              smallTag="Java"
            />
          </Col>
          <Col>
            <Thumbnail
              link="/airbnb"
              image={controller}
              title="Turn The Tides"
              text="Unity Video Game"
              smallTag="C#"
            />
          </Col>
          <Col>
            <Thumbnail
              link="/photoshop"
              image={website}
              title="Portfolio"
              text="Responsive React Website"
              smallTag="React, JavaScript, HTML, CSS"
            />
          </Col>
        </Row>
      </Container>

      {/* </motion.div> */}
    </Container>
  );
}

export default Projects;
