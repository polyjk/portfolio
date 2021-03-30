import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-scroll";
import Experience from "./Experience.js";

{
  /* <Card.Img
          variant="top"
          src={props.image}
          className="App-logo"
          alt="Logo Image"
        />
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>{props.text}</Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated: {props.smallTag}</small>
        </Card.Footer> */
}

function Articles(props) {
  return (
    <Container>
      <h1 className="component-header">E</h1>
      <Container className="experience-all">
        <Experience
          link="/photoshop"
          image=""
          company="CO"
          date="1/1/1"
          title="QWERTY"
          text="Desc"
          smallTag="3/015/21"
        />
      </Container>
    </Container>
  );
}

export default Articles;
