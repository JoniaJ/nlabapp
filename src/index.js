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
      <div>
      <div className="row">
        <div className="colum">
        <h1>OUR PROGRAMS</h1>
        </div>
      </div>
      <div className="row">
        <div className="colum">
         <h3> Diploma In IT</h3>
          <p>We are providing software technology 
            and ICT skills.</p>
        </div>
        <div className="colum">
         <h3> Certificate In IT</h3>
          <p>We are providing technical and technological skills required
            by</p>
        </div>
        <div className="colum">
         <h3> Short course</h3>
          <p>We are welcoming even student who have not passed well
            in their studies they are starting with VETA after that 
            they will be allowed to continue with certificates.
          </p>
        </div>
      </div>

      <div className="row cta">
    <h2>What can we help you?</h2>
    <button>Apply now</button>
     </div>

<div className="row">
<div className="colum">
 <h2> Do you what to join Nlab?</h2>
  <h3>As student</h3>
  <p> Nlab is helping a student like you to make sure
    your good educated in technology field.
  </p>
</div>
<div className="colum">
  <h3> As Mentee</h3>
  <p>We provid sweetable environment to meet mentors to assist you in career
     guidance also brush your business idea.</p>
     </div>
     <div className="colum">
      <h3> As Volunteer</h3>
      <p>would You like to be one of our family at Nlab? Come and volunteer with US
      </p>
     </div>
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



