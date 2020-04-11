import React from 'react';
import './HomeHeader.css';
import {Route,Link,BrowserRouter as Router} from 'react-router-dom';

class HomeHeader extends React.Component{
    render(){
        return(
           
         <React.Fragment>
          <div className="header">
          <h1 className="app-name">Tourist Guide</h1>
          </div>
          
          <ul className="ul-list">

           <li className="dropdown"><a id="link-a" href="" className="drop-btn">States</a>
           <div className="drop-content">
           <Link to="/state/1" id="link-a">Maharashtra</Link>
           <Link to="/state/2" id="link-a">Himachal Pradesh</Link>
           <Link to="/state/3" id="link-a">Rajasthan</Link>
           <Link to="/state/4" id="link-a">Kerala</Link>
           </div>
           </li>

           <li className="dropdown"><a id="link-a" href="" className="drop-btn">Cities</a>
           <div className="drop-content">
           <Link to="/city/1" id="link-a">Pune</Link>
           <Link to="/city/2" id="link-a">Mumbai</Link>
           <Link to="/city/3" id="link-a">Delhi</Link>
           <Link to="/city/4" id="link-a">Banglore</Link>
           <Link to="/city/5" id="link-a">Ratnagiri</Link>
           <Link to="/city/6" id="link-a">Shimla</Link>
           <Link to="/city/7" id="link-a">Dharamshala</Link>
           <Link to="/city/8" id="link-a">Kasauli</Link>
           <Link to="/city/9" id="link-a">Jaipur</Link>
           <Link to="/city/10" id="link-a">Udaipur</Link>
           <Link to="/city/11" id="link-a">Ranakpur</Link>
           <Link to="/city/12" id="link-a">Thiruvanantapuram</Link>
           <Link to="/city/13" id="link-a">Kochi</Link>
           <Link to="/city/14" id="link-a">Kollam</Link>
           </div>
           </li>

           <li className="dropdown"><a id="link-a" href="" className="drop-btn">Treks</a>
           <div className="drop-content">
           <Link to="/trek/1" id="link-a">Lohgad</Link>
            <Link to="/trek/2" id="link-a">Sinhgad</Link>
            <Link to="/trek/3" id="link-a">Rajmachi</Link>
            <Link to="/trek/4" id="link-a">Torna</Link>
            <Link to="/trek/5" id="link-a">Visapur</Link>
            <Link to="/trek/6" id="link-a">Korigad</Link>
           </div>
           </li>
           
       </ul>
       
         
          </React.Fragment>
          
         
      
         
         

        
        );
    }
}
export default HomeHeader;
