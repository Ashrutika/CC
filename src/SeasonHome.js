import React from 'react';
import './SeasonHome.css';
class SeasonHome extends React.Component{
    render(){
        return(
            
            <div className="seasons">
            <button className="season-btn">Places to visit in Rainy season</button>
            <button className="season-btn">Places to visit in Winter season</button>
            <button className="season-btn">Places to visit in Summer season</button>
            </div>
        );

    }
}

export default SeasonHome;