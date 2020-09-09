import React from 'react'
import img06 from './img06.PNG'
import img2 from './img2.jpg'
import './nlabapp.css'
const Home =()=>{
    return(
      <div>
          <img src={img06} alt="img06" className="big-img"/>
      <div className="row">
        <h1>OUR PROGRAMS</h1>
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
     <img src={img2} alt="img2" className="big-img"/>
<div className="row">
<h2> Do you want to join Nlab?</h2>
</div>
<div className="row">
<div className="colum">
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
export default Home;