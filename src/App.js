import React from 'react';
import './App.css';
import NavBar from './components/NavBar/Navbar';
import SiteWrap from './components/SiteWrap/SiteWrap';


class App extends React.Component {
  render() {
  return (
    <div>
      <NavBar />
      <SiteWrap />
    </div>
  );
}
}

export default App;
