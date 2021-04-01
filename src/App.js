import React from "react";
import logo from "./logo.svg";
import "./App.css";
// import { BrowserRouter, Route, Link } from "react-router-dom";
import Projects from "./Projects.js";
import Articles from "./Articles.js";
import About from "./About.js";
import { Card, Container } from "react-bootstrap";
import { Link } from "react-scroll";
import ScrollAnimation from "react-animate-on-scroll";
import "bootstrap/dist/css/bootstrap.min.css";
// import gitlogo from "./images/github.png";

function App() {
  return (
    //John @ 3/30/21 - START - Attempting to make the page scroll instead of using react-router library.
    // <BrowserRouter>
    //   <div className="App">
    //     <div className="navigation">
    //       <div className="sub-navigation">
    //         <Link to="/" className="sub-nav-item">
    //           Test
    //         </Link>
    //         <Link to="articles" className="sub-nav-item">
    //           Articles
    //         </Link>
    //         <Link to="about" className="sub-nav-item">
    //           About
    //         </Link>
    //       </div>
    //     </div>

    //     {/*Setup the router*/}
    //     <Route exact path="/" component={Projects} />
    //     <Route path="/articles" component={Articles} />
    //     <Route path="/about" component={About} />
    //   </div>
    // </BrowserRouter>
    //END

    <div className="App">
      <h1 className="header" id="section1">
        {" "}
      </h1>

      <div className="navigation">
        <div className="navigation-left">
          {/* <Link to="/" className="sub-nav-item"> */}
          <Link
            className="sub-nav-item"
            activeClass="active"
            to="section1"
            spy={true}
            smooth={true}
            duration={1000}
          >
            Hippo
          </Link>
          {/* <Link to="articles" className="sub-nav-item"> */}
          <Link
            className="sub-nav-item"
            activeClass="active"
            to="section2"
            spy={true}
            smooth={true}
            duration={1000}
          >
            Elephant
          </Link>
          {/* <Link to="about" className="sub-nav-item"> */}
          <Link
            id="button3"
            className="sub-nav-item"
            activeClass="active"
            to="section3"
            spy={true}
            smooth={true}
            duration={1000}
          >
            Panther
          </Link>
        </div>

        <div className="navigation-right">
          <a
            href="https://github.com/polyjk"
            target="_blank"
            className="sub-nav-item"
          >
            {/* <img src={gitlogo} width="30" height="30" className="nav-image" /> */}
            Gator
          </a>
          <a
            href="https://www.linkedin.com/in/john-khammany-851464171"
            target="_blank"
            className="sub-nav-item"
          >
            {/* <img src={gitlogo} width="30" height="30" className="nav-image" /> */}
            Lion
          </a>
        </div>
      </div>

      <div
        className="fullComponent"
        // style={{ backgroundImage: `url(${wallpaper1})` }}
        // style={{ backgroundColor: "black" }}
      >
        <About />
      </div>
      <div className="fullComponent" id="section2">
        <Articles />
      </div>
      <ScrollAnimation animateIn="fadeIn"></ScrollAnimation>
      <div className="fullComponent" id="section3">
        <Projects />
      </div>
      <ScrollAnimation animateIn="fadeIn"></ScrollAnimation>
      {/* <Container className="fullComponent" id="contact">
        <Card
          bg="dark"
          text="white"
          style={{
            width: "18rem",
            alignItems: "center",
            justifyContent: "center",
          }}
          id="contact-form"
        >
          <form action="https://formspree.io/mpzyqdng" method="POST">
            <Card.Header>
              <input
                type="hidden"
                name="_subject"
                value="Contact request from personal website"
              />
              <h2>Get in Touch</h2>
            </Card.Header>
            <Card.Body>
              <input
                type="email"
                name="_replyto"
                placeholder="Your email"
                required
              />
              <br></br>
              <textarea
                name="message"
                placeholder="Type your message"
                required
              ></textarea>
            </Card.Body>
            <Card.Footer>
              <button type="submit">Send</button>
            </Card.Footer>
          </form>
        </Card>
      </Container> */}
    </div>
  );
}

export default App;
