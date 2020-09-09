import React, {Component} from 'react';
import './nlabapp.css';
import img05 from './img05.jpg'

class Contact extends Component{
    render(){
        return(
          <div>
          <div class="row">
           <div>
            <h2> JOIN US BY FULFILL THIS SFORM </h2>
            <form>
              <label for="fname">First Name:</label><br/>
               <input type="text" /><br/>
               <label for="lname">Surname</label><br/>
               <input type="text"/><br/>
               <label for="contact">Phone Number</label><br/> 
               <input type="text"/><br/> 
               <label for="email">Email</label><br/>
               <input type="text"/><br/>
               <br/>
            <label>
              Pick your favorite course:<br/>
              <select>
                <option value="certificate">IT CERTIFICATE</option>
                <option value="Diploma">IT DIPLOMA</option>
                <option value="Foundation">FOUNDATION COURSE</option>
              </select>
              </label>
              <br/>
              <br/>
            <input type="submit" value="Submit" />
          </form>
    </div>
    
    <div class="contact">
      <h2>CONTACT US</h2>
      <p>P.O.Box 106226, Dar Es Salaam
         Mafere Stree, Block 22, Kinondoni</p>
         +255744100231
       <p>  niavation@gmail.com, 
         info@nia.ac.tz</p>
    </div>
    </div>
    <h1>OUR PRINCIPAL</h1>
      <div class="row">
    <img src={img05} alt="img05" className="small-img"/>
    <div class="colum">
    <p>We are pleased that you are interested in applying to NLab Innovation Academy (NIA).
       Currently NLab Innovation Academy offers Certificates and Diploma in Information Technology 
       Programs aims to produce students whose knowledge and competence in planning, installing,
       customizing, operating, managing, administering, and maintaining information technology 
       infrastructure are grounded on the effective utilization of computers and computer 
        software and thus enabling them to contribute worthwhile
       IT solutions to the business communities all over the world.</p></div>
    </div>
</div>
        )
    }
}
export default Contact;