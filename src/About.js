import React from "react";
import { Col, Container, Row } from "react-bootstrap";

function About(props) {
  return (
    <Container>
      <h1
        className="component-header"
        // style={{ fontSize: "155px", paddingBottom: "30px" }}
        style={{ fontSize: "calc(40px + 8vmin)", paddingBottom: "30px" }}
      >
        <span className="underline--magical">Hello!</span>
      </h1>
      <div className="about-desc">
        I'm a Developer with a passion for solving problems through code.
      </div>
    </Container>
  );
}

export default About;
