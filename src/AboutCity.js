import React from 'react';
import './AboutCity.css';
import StatePhotos from './StatePhotos';



class AboutCity extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className="about-city">
            <div className="loc-city">
            <img src={require('./images/cities/'+this.props.img)} id="city-img"></img>
            <div id="location-box"></div>
            </div>
            <div className="city-info">
                {this.props.info}
              
            </div>
        
        </div>
        );
    }
}

export default AboutCity;