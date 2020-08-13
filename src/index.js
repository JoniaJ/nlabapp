import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './nlabapp.css';
import Header from './Header';
import Footer from './Footer';

 class App extends Component{
   render(){
     return(
       <div>
       <Header/>
       <Footer/>
       </div>
     );
   }
 }

ReactDOM.render(<App/>,document.getElementById("root"));



