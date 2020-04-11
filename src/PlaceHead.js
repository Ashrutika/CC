import React from 'react';
import './PlaceHead.css';
import TabButtons from './TabButtons';

class PlaceHead extends React.Component{
    render(){
        return(
        <div className="background">
            <img src={require('./images/cities/'+this.props.backimage)} alt="" className="backimage"/>
            <div className="namebox">
            <div className="tab-btn">
            <a href="/" className="tab" target="_self">Home</a>
            </div>
            <p id="pname">{this.props.name}</p>
            <p id="city-state">{this.props.city}, {this.props.state}</p>
            
            </div>
        </div>
    );
}

}

export default PlaceHead;

