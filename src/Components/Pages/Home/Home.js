import React from 'react';
import './Home.css';
import { IoIosArrowRoundUp } from "react-icons/io";
import ContactMe from '../../Cards/ContactMe.js'

const Homepage = () => {
    /* add a hover event to the version img with a pop up to contact you for changes */
    return (
        <div className="main">
            <h1>Admin Guide</h1>
            <p><img src="https://img.shields.io/badge/Version-2.0.1-brightgreen" alt="v 2.0.1"></img></p> 
            <p>Welcome to the Knowledge Base Admin Guide! One stop shop for all administrator help. Include simple code snippets into your code with the click of a button, links to helpful tools, and lastly templates for easy content creation. </p>

            <h2>Quick Links</h2>
            <button>Knowledge Base</button> <button>Snapcomm</button>

            <h2>More Info</h2>
            <p>Need something updated? Reach out to me!</p>
            <ContactMe/>
            <a target="_blank" rel="noopener noreferrer" href="https://github.com/tannershimanek/admin-v2">Git Hub<IoIosArrowRoundUp className="icon"/></a>
        </div>
    );
};

export default Homepage;