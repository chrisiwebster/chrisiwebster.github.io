import React from "react";
import Me from '../../assets/me.jpeg';
import LinkedIn from '../../assets/linkedin.png';
import GitHub from '../../assets/github.png';
import myLogo from '../../assets/favicon.ico';
import { Link} from "react-router-dom";

class Home extends React.Component {

  componentDidMount(){
    document.title = "Chrisi Webster";
  }

  render() {
  return (

    <div className="flex-container">
    <img id="myPhoto" alt="Christina Webster" src={Me}/>
       <div className="pageHead">
         <h1>I am Chrisi Webster</h1>
        <p className="description">This portfolio is made with React. Use the burger menu to navigate or use the icons below.</p>
        <p>
          <a href="https://www.linkedin.com/in/christinawebster" target="_blank">
            <img className="social-logo" src={LinkedIn} alt="LinkedIn logo" title="Link to my LinkedIn"/>
          </a>
          <a href="https://www.github.com/chrisiwebster" target="_blank">
            <img className="social-logo" src={GitHub} alt="GitHub logo" title="Link to my GitHub"/>
          </a>
          <Link to="/projects"><img className="social-logo" src={myLogo} alt="Chrisi logo" title="Link to my projects"/></Link>
        </p>
      </div>
   
</div>
  )
  }
}

export default Home;
