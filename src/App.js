import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import Projects from './Projects';
import Articles from './Articles';
import About from './About';


function App() {
  return (
    <BrowserRouter>
      <div className="App">

        {/*Setup the router*/}
        <Route exact path='/' component={Projects}/>
        <Route path ='/Articles' component={Articles}/>
        <Route path ='/About' component={About}/>
        
        <div className='navigation'>
          <p className>Contact</p>
          <div className='sub-navigation'>
            <Link to='/' className='sub-nav-item'>Projects</Link>
            <Link to='Articles' className='sub-nav-item'>Articles</Link>
            <Link to='About' className='sub-nav-item'>About</Link>
          </div>
        
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
