import React from "react";
import { Card, Container } from "react-bootstrap";
import "./App.css";

function Experience(props) {
  return (
    <Container className="experience">
      <Card bg="dark" text="white">
        <Card.Header as="h5">
          {props.company}
          <h1 style={{ color: "grey", fontSize: "16px", float: "right" }}>
            {props.date}
          </h1>
        </Card.Header>
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>{props.text}</Card.Text>
          {/* <Button variant="primary">Go somewhere</Button> */}
        </Card.Body>
      </Card>
    </Container>
  );
}

export default Experience;
