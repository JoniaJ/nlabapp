import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.png';
import './nlabapp.css'

class Header extends Component {
  render() {
    return (
<div className="header">
  <div className="logo">
    <img src={logo}/>
    <h1>NLAB INNOVATION ACADEMY</h1>
    </div>
<div className="nav">
  <a href="Index.js">HOME</a>
  <a href="aboutnlab.js">ABOUT NLAB</a>
  <a href="service.js">OUR SERVICES</a>
  <a href="contact.js">CONTACT US</a>
</div>
</div>
);
}
}
const Body=()=>{
    return(
        <div className="row">
            <div className="colum">
             OUR MISSION
             <p>To create a generation of young adult who are creative
                 and innovative enough, ready to create solution(s) that 
                 is responsive to the needs of changing society.
             </p>
            </div>
            <div className="colum">
                OUR VISION
                <p>To be the center excellence in Tech and Entrepreneurship
                    Training.
                </p>
            </div>
        </div>
    )
}
function Footer() {
    return(
      <div className="footer">
        <p>info@Nlab.ac.tz</p>
      </div>
    )
  }

  class App extends Component{
    render(){
      return(
        <div>
          <Header/>
          <Body/>
          <Footer/>
        </div>
    )
  }
  }
  ReactDOM.render(<App/>,document.getElementById("root"));
