import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import Experience from "./Experience.js";

function Articles(props) {
  return (
    <Container>
      <h1 className="component-header">
        <span className="underline--magical2">Work</span>
        <br></br>
        <h5>
          <a
            href="https://www.linkedin.com/in/john-khammany-851464171"
            className="component-header-link"
            target="_blank"
          >
            go to linkedin.
          </a>
        </h5>
      </h1>
      <Container className="experience-all">
        {/* <Experience
          link="/photoshop"
          image=""
          company="SCH"
          date="1/1/1"
          title="ZXCV"
          text="Lorem ipsum dolor sit amet, illum definitiones no quo, maluisset
          concludaturque et eum, altera fabulas ut quo. Atqui causae gloriatur ius
          te, id agam omnis evertitur eum. Affert laboramus repudiandae nec et.
          Inciderint efficiantur his ad. Eum no molestiae voluptatibus."
          smallTag="3/015/21"
        /> */}

        <Experience
          link="/photoshop"
          image=""
          company="Service Tool Company"
          date="4/1/2020 - Present"
          title="Programmer/Analyst"
          text1="Worked in a team environment with a focus on front-end development to create intuitive user interfaces."
          text2="Developed in-house web and mobile applications that helped generate more sales, and improve office/warehouse productivity."
          text3="Maintained several existing applications by debugging and delivering new enhancements."
          smallTag="3/015/21"
        />
      </Container>
    </Container>
  );
}

export default Articles;
