import React from 'react';
import './StatePhotos.css';
import {Route,Link,BrowserRouter as Router} from 'react-router-dom';
import PopularStates from './PopularStates';
import StatePage from './StatePage';
import TabButtons from './TabButtons';


class StatePhotos extends React.Component{

    constructor(props){
        super(props);
    }
    
    render(){
        
        return(
           
            <div className="photos-div">
           
            <div className="flip-card-inner">
            <div className="flip-card-front">
        
        <img src={require('./images/cities/' +this.props.img1)} alt='' className="photo"></img>
       
        <p className="photo-name">{this.props.name}</p>
        </div>
        <div className="flip-card-back">
        <Link to={this.props.link}><h1 id="link-name">{this.props.name}</h1> </Link>
        <p id="info-state">{this.props.info}</p> 
        </div>
        </div>
         
        </div>  
       
        );
        
    }
}

export default StatePhotos;