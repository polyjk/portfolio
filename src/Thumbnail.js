import { motion } from "framer-motion";
import React from "react";
import { Card, Container } from "react-bootstrap";
// import { Link } from "react-router-dom";
import { Link } from "react-scroll";
import "./App.css";

function Thumbnail(props) {
  return (
    <Container className="project">
      {/* John - 3/29/31 - This is the default original thumbnail code before using booststrap-react card component */}
      {/* <Link to ={props.link}> */}
      {/* <div className='project-image'>
                    alt='Project Image' -COMMENT THIS OUT AGAIN
                    <img src={props.image} className="App-logo" alt="Logo Image"/>
                </div>
                <div className='project-title'>{props.title}</div>
                <div className='project-category'>{props.category}</div>
                <div className='project-desc'>
                </div>             */}
      {/* </Link> */}

      <Card style={{ width: "18rem", height: "45vh" }}>
        <Card.Img
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
        </Card.Footer>
      </Card>
    </Container>
  );
}

export default Thumbnail;
