import React from 'react';
import NavBar from '../NavBar/Navbar';
import Projects from '../Projects/Projects';
import Home from '../Home/Home';
import './SiteWrap.css';
import { HashRouter, Switch, Route } from "react-router-dom";


class SiteWrap extends React.Component{
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
      <NavBar onClick={this.handleClickOff}/>
        <div className={this.state.active ? 'site-wrap move-over' : 'site-wrap'}>
         <i tabindex="0" onKeyDown={this.state.active ? this.handleClickOff : this.handleClickOn} onClick={this.state.active ? this.handleClickOff : this.handleClickOn} className={this.state.active ? 'fas fa-times fa-3x' : 'fas fa-hamburger fa-3x'}></i>

  
         <HashRouter basename={process.env.PUBLIC_URL}> 
        <Switch>
          <Route exact path ="/" component={Home} />
          <Route exact path="/projects" component={Projects} />
          </Switch>
          </HashRouter> 

      
        </div>
        </div>
      )
    }
}

export default SiteWrap;