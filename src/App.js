import React from 'react';
import './App.css';
import NavBar from '../src/components/NavBar/Navbar';
import Home from '../src/components/Home/Home';
import Projects from '../src/components/Projects/Projects';
import { HashRouter, Switch, Route } from "react-router-dom";


class App extends React.Component {
  render() {
  return (
    <div>
  <NavBar/>
    <HashRouter basename={process.env.PUBLIC_URL}> 
        <Switch>
          <Route exact path ="/" component={Home} />
          <Route exact path="/projects" component={Projects} />
          </Switch>
          </HashRouter> 
  
    </div>
  );
}
}

export default App;
