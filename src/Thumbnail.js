import React from "react";
import { Card, Container } from "react-bootstrap";
import "./App.css";

function Thumbnail(props) {
  return (
    <Container className="project">
      <Card
        bg="dark"
        text="white"
        style={{
          // width: "18vw",
          // width: "18rem",
          minWidth: "15rem",
          minHeight: "15rem",
          // maxHeight: "10rem",
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
