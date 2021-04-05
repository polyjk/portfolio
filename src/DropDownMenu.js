import React from "react";
import { Container, Dropdown } from "react-bootstrap";
import { Link } from "react-scroll";
import "./App.css";

function DropDownMenu(props) {
  return (
    <Dropdown>
      <Dropdown.Toggle
        variant="secondary"
        id="dropdown-basic"
      ></Dropdown.Toggle>

      <Dropdown.Menu className="nav-dropdown-menu">
        <Link
          className="dropdown-item"
          activeClass="active"
          to="section1"
          spy={true}
          smooth={true}
          duration={1000}
        >
          About
        </Link>
        <Link
          className="dropdown-item"
          activeClass="active"
          to="section2"
          spy={true}
          smooth={true}
          duration={1000}
        >
          Elephant
        </Link>
        <Link
          id="button3"
          className="dropdown-item"
          activeClass="active"
          to="section3"
          spy={true}
          smooth={true}
          duration={1000}
        >
          Panther
        </Link>
        <Dropdown.Item
          className="dropdown-item"
          href="https://github.com/polyjk"
        >
          Gator
        </Dropdown.Item>
        <Dropdown.Item
          className="dropdown-item"
          href="https://www.linkedin.com/in/john-khammany-851464171"
        >
          Lion
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default DropDownMenu;
