import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-scroll";

function About(props) {
  return (
    <Container>
      <h1
        className="component-header"
        style={{ fontSize: "155px", paddingBottom: "30px" }}
      >
        Hippo!
      </h1>
      <div className="about-desc">This is a test</div>
    </Container>
  );
}

export default About;
