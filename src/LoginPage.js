import React from 'react';
import './LoginPage.css';
import {Route,Link,BrowserRouter as Router} from 'react-router-dom';
import SignupPage from './SignupPage';

class LoginPage extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        let i = this.props.match.params.id - 1;
        console.log(this.props.match.params.id);
        return(
            
           <div className="parent-div">
            <div className="Log-header">
               <div className="head">Tourist Guide</div>
               <p className="para">Login for more details.....</p>
               <h1>{i}</h1>
            </div>
            <div className="login-section">
            <Link to="/" exact strict id="home-link">Home</Link>
               <h1 id="title-log"> Login</h1>
               <div className="login-form">
                   <input type="email" id="email" placeholder="enter email" required></input>
                   <input type="password" id="pass" placeholder="enter password" required></input>
                   <button id="btn-log">Login</button>
                   <a href="" id="forgot">
                     Forgot password?
                   </a>
                   <div id="new">
                   New Registration ? <Link to="/SignupPage" id="sign-link">Signup</Link>
                   </div>
               </div>
            
            </div>
            </div>

            
           
        );
    }
}

export default LoginPage;