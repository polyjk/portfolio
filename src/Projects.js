import React from "react"
import Thumbnail from './Thumbnail.js';
import './App.css';
import logo from './logo.svg';
 
function Projects(props) {
  return (
    <div>
      <h1>Apples</h1>

        <div className='projRow'>
          <Thumbnail
              link="/twitter"
              image={logo}
              title="Twitter Newsfeed"
              category="Mobile App"
          />
          
          <Thumbnail
              link="/airbnb"
              image={logo}
              title="Airbnb Experiences"
              category="Website"
          />
        </div>

        <div className='projRow'>
          <Thumbnail
              link="/photoshop"
              image={logo}
              title="Photoshop Redesign"
              category="Desktop App"
          />
        </div>
        

    </div>
  )
}
 
export default Projects;