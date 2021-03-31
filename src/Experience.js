import { motion } from "framer-motion";
import React from "react";
import { Card, Container } from "react-bootstrap";
// import { Link } from "react-router-dom";
import { Link } from "react-scroll";
import "./App.css";

function Experience(props) {
  return (
    // <Container className="project">
    //   <Card>
    //     <Card.Img
    //       variant="top"
    //       src={props.image}
    //       className="App-logo"
    //       alt="Logo Image"
    //     />
    //     <Card.Body>
    //       <Card.Title>{props.title}</Card.Title>
    //       <Card.Text>{props.text}</Card.Text>
    //     </Card.Body>
    //     <Card.Footer>
    //       <small className="text-muted">Last updated: {props.smallTag}</small>
    //     </Card.Footer>
    //   </Card>
    // </Container>

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
