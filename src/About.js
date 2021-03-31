import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-scroll";
import { motion, useAnimation } from "framer-motion";

function About(props) {
  return (
    <Container>
      <h1
        className="component-header"
        style={{ fontSize: "155px", paddingBottom: "30px" }}
      >
        <span className="underline--magical">Hippo!</span>
      </h1>
      <div className="about-desc">
        Lorem ipsum dolor sit amet, illum definitiones no quo, maluisset
        concludaturque et eum, altera fabulas ut quo. Atqui causae gloriatur ius
        te, id agam omnis evertitur eum. Affert laboramus repudiandae nec et.
        Inciderint efficiantur his ad. Eum no molestiae voluptatibus.
      </div>
    </Container>
  );
}

export default About;
