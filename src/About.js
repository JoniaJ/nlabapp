import React from 'react';
import img03 from './img03.jpg'
import './nlabapp.css'

const About = () => {
    return(
        <div>
        <img src={img03} alt="img03" className="big-img"/>
        <div className="row">
            <div className="colum">
             <h1>OUR MISSION</h1>
             <p>To create a generation of young adult who are creative
                 and innovative enough, ready to create solution(s) that 
                 is responsive to the needs of changing society.
             </p>
            </div>
            <div className="colum">
                <h1>OUR VISION</h1>
                <p>To be the center excellence in Tech and Entrepreneurship
                    Training.
                </p>
            </div>
        </div>
        <h1 className="row">OUR SERVICES</h1>
        <div className="row">
            <div className="colum">
        <h2>TRAINING</h2>
        <p>NLab Innovation Academy aim to help our clients ( Companies and
             Organizations ) identify people and process challenges that may
              be preventing their organizations from achieving optimal results.

We aim at partnering with you to assess, envision, develop and execute powerful
 training that increases productivity, improves performance and inspires continuous
  focus on excellence through a wide range of learning solutions.
We aim at providing the best training and development process that helps the
 workforce to keep up with the pace of the global trend by providing you with 
 the best corporate training services in Business, Customer care and Technology
  related programs.</p>
  </div>
  <div className="colum">
  <h2>SOFTWARE AND HARDWARE</h2>
  <p>We work on both Web based applications, Mobile Applications and Desktop
       Applications. Our designing process ensures that your site or Mobile App
        is content rich with the greatest opportunity for exposure.</p>

            <h3>Our Process includes:</h3>
            <p>An initial strategic planning session to identify the goals of your solution,
            target audience, demographics, budget and time constraints
            Project Manager assignment and project plan creation.
            Your project manager will provide weekly updates and reviews so you are kept
            up to speed with the teams progress and deliverable presented as scheduled
            Upon delivery your solution will be submitted to all major search engines if 
            its an online solution</p>
            </div>
        </div>
        </div>
    )
}
export default About;