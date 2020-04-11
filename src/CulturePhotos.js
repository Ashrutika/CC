import React from 'react';
import './CulturePhotos.css';
import AboutState from './AboutState';

class CulturePhotos extends React.Component{

    constructor(props){
        super(props);
    }

    render(){
        return(
           
            <div id="photos">
             <a href={require('./images/cities/' +this.props.photos)}  data-toggle="tooltip" title="click to download" download><img src={require('./images/cities/' +this.props.photos)}  alt="" className="maha-img"></img></a>     
             </div>
        );
    }
}

export default CulturePhotos;