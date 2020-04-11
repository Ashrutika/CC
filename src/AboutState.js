import React from 'react';
import './AboutState.css';

class AboutState extends React.Component{

    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="about-state">
                <div className="loc-state">
                <img src={require('./images/cities/' +this.props.img)} id="state-img"></img>
                <div id="location-box"></div>
                </div>
                <div className="state-info">
                    {this.props.info}
                    <p id="cap"><span id="bold">Capital :</span><a href={this.props.cap_link} target="_blank">{this.props.capital}</a> </p>
                    <p id="bold">Culture,Festivals and Food</p>
                    {this.props.fest}
                </div>
            </div>
        );
    }
}

export default AboutState;