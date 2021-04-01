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

      <Card
        bg="dark"
        text="white"
        style={{
          // width: "18vw",
          width: "18rem",
          // minWidth: "1rem",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Card.Img
          style={{
            align: "center",
            padding: "15px",
          }}
          variant="bot"
          src={props.image}
          className="thumbnail-logo"
          alt="Logo Image"
        />
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>{props.text}</Card.Text>
        </Card.Body>
        {/* <Card.Footer> */}
        {/* <small className="text-muted">Last updated: {props.smallTag}</small> */}
        {/* <small className="text-muted">{props.smallTag}</small> */}
        {/* <small>{props.smallTag}</small> */}
        {/* </Card.Footer> */}
      </Card>
    </Container>
  );
}

export default Thumbnail;
