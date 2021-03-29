import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import Projects from './Projects.js';
import Articles from './Articles.js';
import About from './About.js';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className='navigation'>
          <div className='sub-navigation'>
            <Link to='/' className='sub-nav-item'>Test</Link>
            <Link to='articles' className='sub-nav-item'>Articles</Link>
            <Link to='about' className='sub-nav-item'>About</Link>
          </div>
        
        </div>

        {/*Setup the router*/}
        <Route exact path='/' component={Projects}/>
        <Route path ='/articles' component={Articles}/>
        <Route path ='/about' component={About}/>

      </div>
    </BrowserRouter>
  );
}

export default App;
