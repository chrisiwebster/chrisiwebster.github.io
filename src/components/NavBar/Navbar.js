import React from 'react';
import './Navbar.css';
import { Link} from "react-router-dom";


export class NavBar extends React.Component{
    render() {
        return (
            <nav>
                <ul className="navigation">
                   <li><Link className="nav-item" to="/">Home</Link></li>
                   <li><Link className="nav-item" to="/projects">Projects</Link></li>
                   <li><a className="nav-item" href="https://www.linkedin.com/in/christinawebster" target="_blank">LinkedIn</a></li>
                   <li><a className="nav-item" href="https://www.github.com/chrisiwebster" target="_blank">GitHub</a></li>
            </ul>
                
         </nav>

      
        )
    }
}

export default NavBar;