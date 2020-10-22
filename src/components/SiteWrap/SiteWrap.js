import React from 'react';
import { BrowserRouter, Switch, Route, } from "react-router-dom";
import Projects from '../Projects/Projects';
import Home from '../Home/Home';
import './SiteWrap.css';


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
        <div className={this.state.active ? 'site-wrap move-over' : 'site-wrap'}>
         <i onClick={this.state.active ? this.handleClickOff : this.handleClickOn} className={this.state.active ? 'fas fa-times fa-3x' : 'fas fa-hamburger fa-3x'}></i>
         <BrowserRouter basename={process.env.PUBLIC_URL}>
          <Switch>
          <Route exact path={process.env.PUBLIC_URL + '/'}>
            <Home />
          </Route>
          <Route exact path={process.env.PUBLIC_URL + '/projects'}>
            <Projects />
          </Route>
        </Switch>
     </BrowserRouter>
        </div>
      )
    }
}

export default SiteWrap;