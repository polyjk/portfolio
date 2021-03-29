import { motion } from 'framer-motion';
import React from 'react'
import {Link} from 'react-router-dom'
import './App.css';

function Thumbnail(props){
    return (
        

        <div className='project'>

            <motion.div
                animate={{ scale: 2 }}
                transition={{ duration: 0.5 }}
            />

            {/* <Link to ={props.link}> */}
                <div className='project-image'>
                    {/*alt='Project Image'*/}
                    <img src={props.image} className="App-logo" alt="Logo Image"/>
                </div>
                <div className='project-title'>{props.title}</div>
                <div className='project-category'>{props.category}</div>
                <div className='project-desc'>
                </div>            
            {/* </Link> */}
        </div>
    )
}

export default Thumbnail;