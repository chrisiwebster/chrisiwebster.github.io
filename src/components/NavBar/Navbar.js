import React from 'react';
import './Navbar.css';
import { Link} from "react-router-dom";

export class NavBar extends React.Component{
    constructor(props) {
        super(props);
        this.handleClickOn = this.handleClickOn.bind(this);
        this.handleClickOff = this.handleClickOff.bind(this);
        this.state = {
            active: false
        };
      }
      handleClickOn() {
        this.setState({active: true});
      }
    
      handleClickOff() {
        this.setState({active: false});
      }

    render() {
        return (
         <div>
             <i tabindex="0" onKeyDown={this.state.active ? this.handleClickOff : this.handleClickOn} onClick={this.state.active ? this.handleClickOff : this.handleClickOn} className={this.state.active ? 'fas fa-times move-over' : 'fas fa-hamburger'}></i>
            <nav>
                <ul className={this.state.active ? 'navigation active' : 'navigation'} role="navigation">
                   <li onClick={this.handleClickOff}><Link className="nav-item" to="/">Home</Link></li>
                   <li onClick={this.handleClickOff}><Link className="nav-item" to="/projects">Projects</Link></li>
                   <li><a className="nav-item" href="https://www.linkedin.com/in/christinawebster" target="_blank">LinkedIn</a></li>
                   <li><a className="nav-item" href="https://www.github.com/chrisiwebster" target="_blank">GitHub</a></li>
            </ul>     
         </nav>
    </div>
      
        )
    }
}

export default NavBar;