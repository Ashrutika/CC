import React from 'react';
import './AllStatesList.css';
import MaharashtraCities from './MaharashtraCities';
class AllStatesList extends React.Component{
    constructor(props){
        super(props);
    }
    
    render(){
       const states=[{
           name:"Jammu & Kashmir"
       },
       {
        name:"Himachal Pradesh"
       },
       {
        name:"Utter Pradesh"
       },
       {
        name:"Punjab"
       },
       {
        name:"Haryana"
       },
       {
        name:"Rajasthan"
       },
       {
        name:"Gujrat"
       },
       {
        name:"Madhya Pradesh"
       },
       {
        name:"Andhra Pradesh"
       },
       {
        name:"Karnataka"
       },
       {
        name:"Orisa"
       },
       {
        name:"Tamilnadu"
       },
       {
        name:"Kerala"
       },
       {
        name:"Goa"
       },
       {
        name:"West bengal"
       },
       {
        name:"Assam"
       },
       {
        name:"Sikkim"
       },
       {
        name:"Arunachal Pradesh"
       }
       
    ]

   
const lists=states.map(items =>  <a href="" className="states-name">{items.name}</a>)

        return(
            <React.Fragment>
            <div id="head">States</div>
            <div className="state-list">{lists}</div>
           
            <div className="city"> <div className="line"></div><MaharashtraCities/></div>
            </React.Fragment>
        );
    }
}

export default AllStatesList;