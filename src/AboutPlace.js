import React from 'react';
import './AboutPlace.css';

class AboutPlace extends React.Component{
    render(){
        return(
            <div className="about-place">
            <div className="box-location"></div>
            <div className="place-info">{this.props.info}</div>
            <div>
            <p id="cap"><span id="bold">Built by : </span>{this.props.builtby}</p>
            <h1 id="title"> Entry Fees and Timing</h1>
            <p id="cap"><span id="bold">Open Days: </span>{this.props.days}</p>
            <p id="cap"><span id="bold">Timing: </span>{this.props.time}</p>
            <p id="cap"><span id="bold">Entry Fees: </span>{this.props.entry}</p>
            <h1 id="title">How to reach</h1>
            <p id="cap"><span id="bold">By Air : </span>{this.props.air}</p>
            <p id="cap"><span id="bold">By Rail : </span>{this.props.rail}</p>
            <p id="cap"><span id="bold">By Bus : </span>{this.props.bus}</p>
            </div>
            </div>

        );
    }
}

export default AboutPlace;