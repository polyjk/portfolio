import { motion } from "framer-motion";
import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./App.css";

function Thumbnail(props) {
  return (
    <div className="project">
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

      <Card>
        <Card.Img
          variant="top"
          src={props.image}
          className="App-logo"
          alt="Logo Image"
        />
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>{props.category}</Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated: 3/01/2021</small>
        </Card.Footer>
      </Card>
    </div>
  );
}

export default Thumbnail;
