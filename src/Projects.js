import React from "react";
import Thumbnail from "./Thumbnail.js";
import "./App.css";
import { Col, Container, Row } from "react-bootstrap";
import { motion, useAnimation } from "framer-motion";
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
            href="https://github.com/polyjk"
            className="component-header-link"
            target="_blank"
          >
            go to gator.
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
      <Container
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "12vmin",
          color: "white",
        }}
      >
        <p
          style={{
            textAlign: "center",
          }}
        >
          Contact me:<br></br>
          <a className="contact-link" href="mailto:p5khamm@gmail.com">
            p5khamm@gmail.com
          </a>
        </p>
      </Container>

      {/* </motion.div> */}
    </Container>
  );
}

export default Projects;
