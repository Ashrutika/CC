import React from 'react';
import './AboutIndia.css';
import HomeWallpaper from './images/Home1.jpg';
import India from './images/india.jpeg';
import India1 from './images/india1.jpeg';
import India2 from './images/india2.jpeg';
import India3 from './images/india3.jpeg';
import India4 from './images/india4.jpeg';
import India5 from './images/india5.jpeg';
import India6 from './images/india6.jpeg';
import India7 from './images/india7.jpg';
import India8 from './images/india8.jpeg';

class AboutIndia extends React.Component{
    render(){
        return(
            <React.Fragment>
           
            <img src={HomeWallpaper} className="back-img"></img>
           
            <div className="explore">Explore India 
            
             </div>
            <div className="aboutIndia">
            <div className="location">
            <img src={India} className="ind-img"></img>    
            </div>
            <p id="info">India, also known as the Republic of India, is a country in South Asia. 
            It is the seventh-largest country by area, the second-most populous country,
             and the most populous democracy in the world.<a href="https://en.wikipedia.org/wiki/India" target="_blank">Wikipedia</a></p>
             <p id="cap"><span id="bold">Capital :</span> Delhi</p>
             <p id="cap"><span id="bold">Sport :</span> Hockey</p>
             <p id="cap"><span id="bold">National Bird :</span> Peacock</p>
             <p id="cap"><span id="bold">Popular cities :</span> Delhi , Mumbai , Pune , Banglore , Hydrabad</p>
             <div id="photos">
             <img src={India1} className="indi-img"></img>  
             <img src={India2} className="indi-img"></img>  
             <img src={India3} className="indi-img"></img>  
             <img src={India4} className="indi-img"></img>  
             <img src={India5} className="indi-img"></img>
             <img src={India6} className="indi-img"></img>  
             <img src={India7} className="indi-img"></img>
             <img src={India8} className="indi-img"></img>


             </div>
            </div>
            </React.Fragment>
        );
    }
}

export default AboutIndia;