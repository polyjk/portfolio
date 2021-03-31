import React from "react";
import Thumbnail from "./Thumbnail.js";
import "./App.css";
import logo from "./logo.svg";
import { Col, Container, Row } from "react-bootstrap";
import { motion, useAnimation } from "framer-motion";
import { Link } from "react-scroll";
import smartphone from "./images/smartphone-mono.png";
import controller from "./images/controller-mono.png";
import website from "./images/website-mono.png";
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
      {/* <h1 className="component-header" style={{ color: "#282c34" }}> */}
      <h1 className="component-header">
        <span className="underline--magical3">Panther</span>
        <br></br>
        <h5>
          <a
            href="https://codesandbox.io/s/framer-motion-stagger-fade-in-up-9gky2?from-embed=&file=/src/pages/index.js"
            className="component-header-link"
            target="_blank"
          >
            Gator
          </a>
        </h5>
      </h1>

      {/* <Row className='projRow'> */}
      {/* <motion.div animate={controls}> */}

      <Container className="projects-all">
        <Row>
          <Col>
            <Thumbnail
              link="/twitter"
              image={smartphone}
              title="Apples"
              text="Lorem ipsum dolor sit amet, illum definitiones no quo, maluisset
              concludaturque et eum, altera fabulas ut quo. Atqui causae gloriatur ius
              te, id agam omnis evertitur eum. Affert laboramus repudiandae nec et.
              Inciderint efficiantur his ad. Eum no molestiae voluptatibus."
              smallTag="Java"
            />
          </Col>
          <Col>
            <Thumbnail
              link="/airbnb"
              image={controller}
              title="Banana"
              text="Lorem ipsum dolor sit amet, illum definitiones no quo, maluisset
              concludaturque et eum, altera fabulas ut quo. Atqui causae gloriatur ius
              te, id agam omnis evertitur eum. Affert laboramus repudiandae nec et.
              Inciderint efficiantur his ad. Eum no molestiae voluptatibus."
              smallTag="C#"
            />
          </Col>
          <Col>
            <Thumbnail
              link="/photoshop"
              image={website}
              title="Carrot"
              text="Lorem ipsum dolor sit amet, illum definitiones no quo, maluisset
              concludaturque et eum, altera fabulas ut quo. Atqui causae gloriatur ius
              te, id agam omnis evertitur eum. Affert laboramus repudiandae nec et.
              Inciderint efficiantur his ad. Eum no molestiae voluptatibus."
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
