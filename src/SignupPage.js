import React from 'react';
import './SignupPage.css';
import {Route,Link,BrowserRouter as Router} from 'react-router-dom';

class SignupPage extends React.Component{
    render(){
        return(
           <div className="parent-div">
            <div className="Log-header">
               <div className="head">Tourist Guide</div>
               <p className="para">Create an account for more details.....</p>
            </div>
            <div className="login-section">
               <Link to="/" exact strict id="home-link">Home</Link>
               <h1 id="title-sign"> Signup</h1>
               <p id="p-acct">...Create an account...</p>
               <div className="login-form">
                  <input type="text" id="name" placeholder="Enter name" required></input>
                   <input type="email" id="email" placeholder="Enter email" required></input>
                   <input type="password" id="pass" placeholder="Enter password" required></input>
                   <button id="btn-sign">Signup</button>
                  
                   <div id="new-user">
                   Already have an account ? <Link to="/LoginPage" id="log-link" >Login</Link>
                   </div>
               </div>
            
            </div>
            </div>
        );
    }
}

export default SignupPage;