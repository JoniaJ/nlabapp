import React from 'react';
import img3 from './img3.jpg'
import './nlabapp.css'

const About = () => {
    return(
        <div>
        <img src={img3} alt="img3" className="big-img"/>
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
        </div>
    )
}
export default About;