import React from 'react';
import './TabButtons.css';
import Home from './Home';
import {Route,Link,BrowserRouter as Router} from 'react-router-dom';

class TabButtons extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className="links">
            <ul className="ul-list">
            <li className="dropdown" ><Link to="/" id="a-link">Home</Link></li>
            <li className="dropdown"><a id="a-link" href="" className="drop-btn">States</a>
            <div className="drop-content">
            <Link to="/state/1" id="a-link">Maharashtra</Link>
            <Link to="/state/2" id="a-link">Himachal Pradesh</Link>
            <Link to="/state/3" id="a-link">Rajasthan</Link>
            <Link to="/state/4" id="a-link">Kerala</Link>
            </div>
             </li>
             <li className="dropdown"><a id="a-link" href="" className="drop-btn">Cities</a>
           <div className="drop-content">
           <Link to="/city/1" id="a-link">Pune</Link>
           <Link to="/city/2" id="a-link">Mumbai</Link>
           <Link to="/city/3" id="a-link">Delhi</Link>
           <Link to="/city/4" id="a-link">Banglore</Link>
           <Link to="/city/5" id="a-link">Ratnagiri</Link>
           <Link to="/city/6" id="a-link">Shimla</Link>
           <Link to="/city/7" id="a-link">Dharamshala</Link>
           <Link to="/city/8" id="a-link">Kasauli</Link>
           <Link to="/city/9" id="a-link">Jaipur</Link>
           <Link to="/city/10" id="a-link">Udaipur</Link>
           <Link to="/city/11" id="a-link">Ranakpur</Link>
           <Link to="/city/12" id="a-link">Thiruvanantapuram</Link>
           <Link to="/city/13" id="a-link">Kochi</Link>
           <Link to="/city/14" id="a-link">Kollam</Link>
           </div>
           </li>
           <li className="dropdown"><a id="a-link" href="" className="drop-btn">Treks</a>
           <div className="drop-content">
           <Link to="/trek/1" id="a-link">Lohgad</Link>
            <Link to="/trek/2" id="a-link">Sinhgad</Link>
            <Link to="/trek/3" id="a-link">Rajmachi</Link>
            <Link to="/trek/4" id="a-link">Torna</Link>
            <Link to="/trek/5" id="a-link">Visapur</Link>
            <Link to="/trek/6" id="a-link">Korigad</Link>
           </div>
           </li>
             </ul>
                
            </div>
        );
    }
}

export default TabButtons;
