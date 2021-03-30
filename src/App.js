import React from "react";
import logo from "./logo.svg";
import "./App.css";
// import { BrowserRouter, Route, Link } from "react-router-dom";
import Projects from "./Projects.js";
import Articles from "./Articles.js";
import About from "./About.js";
import { Container } from "react-bootstrap";
import { Link } from "react-scroll";

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

    <div>
      <h1 id="section1">Scroll Margin</h1>

      <div className="navigation">
        {/* <Link to="/" className="sub-nav-item"> */}
        <Link
          className="sub-nav-item"
          activeClass="active"
          to="section1"
          spy={true}
          smooth={true}
          duration={1000}
        >
          H
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
          E
        </Link>
        {/* <Link to="about" className="sub-nav-item"> */}
        <Link
          className="sub-nav-item"
          activeClass="active"
          to="section3"
          spy={true}
          smooth={true}
          duration={1000}
        >
          P
        </Link>
      </div>

      <div className="fullComponent">
        <About />
      </div>
      <div className="fullComponent" id="section2">
        <Articles />
      </div>
      <div className="fullComponent" id="section3">
        <Projects />
      </div>
    </div>
  );
}

export default App;
