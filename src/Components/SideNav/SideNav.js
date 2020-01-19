import React from 'react';
import { Link } from 'react-router-dom';
import './SideNav.css';

const SideNavigation = (prop) => {
    // save the svg logo in this file
    return (
        <div className="side-nav">
            <nav>
                <header>
                    <img src="https://kbimgs.yleo.us/Tanner-test/imgs/tools.svg" width="40" alt='logo'/>
                    <span id="logo">Admin-guide</span>
                </header>
                <input placeholder="search"></input>
                <ul className="nav">
                    <li><Link aria-current="page" className="link" to="/">Home</Link></li>
                    <li><Link className="link" to="/Admin">Admin</Link></li>
                    <li><Link className="link" to="/templates">Templates</Link></li>
                    <li><Link className="link" to="/snippets">Code Snippets</Link></li>
                    <li><Link className="link" to="grammer">Grammar Guide</Link></li>
                    <li><Link className="link" to="table-gen">Table Generator</Link></li>
                    <li><Link className="link" to="resources">Coding Resources</Link></li>
                </ul>
            </nav>
        </div>
    );
};

// change the <IOIOCONSTRUCT/> icon to an image for the logo
// like this
//<img src="/static/media/react-icons.2e67b430.svg" alt="react-icons">
//<span>admin-guide</span>



export default SideNavigation;