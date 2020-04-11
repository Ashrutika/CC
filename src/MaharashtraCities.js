import React from 'react';
import './MaharashtraCities.css';

class MaharashtraCities extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        const cities=[
            {
                name:"Pune"
            },
            {
                name:"Mumbai"
            },
            {
                name:"Nashik"
            },
            {
                name:"Ahmadnagar"
            },
            {
                name:"Kolhapur"
            },
            {
                name:"Aurangabad"
            },
            {
                name:"Ratnagiri"
            },
            {
                name:"Sindhudurg"
            },
            {
                name:"Amravati"
            },
            {
                name:"Jalgaon"
            },
            
            
    ]
    const list_city=cities.map(items => <a href="" className="city-name">{items.name}</a> )
        return(
            <React.Fragment>
            <div id="head">Cities in Maharashtra</div>
            <div className="city-list">{list_city}</div>
            </React.Fragment>

        );
    }
}

export default MaharashtraCities;