import React from 'react';
import './PopularStates.css';
import StatePhotos from './StatePhotos';
import himachal from './images/cities/himachal pradesh.jpg';
import rajasthan from './images/cities/rajasthan.jpg';
import keral from './images/cities/keral.jpg';
import pune from './images/cities/pune.jpg';
import mumbai from './images/cities/mumbai.jpeg';
import {Route,Link,BrowserRouter as Router} from 'react-router-dom';
import { Redirect } from 'react-router-dom'
import TabButtons from './TabButtons';
import StatePage from './StatePage';
 


class PopularStates extends React.Component{
    constructor(props){
        super(props);
    }
    
    render(){
        const states=[
        {
            name:'Maharashtra',
            img1:'maharashtra.jpg',
            info:'',
            link:'/state/1'
        },
        
        {
            name:'Himachal Pradesh',
            img1:'himachal pradesh.jpg',
            info:'',
            link:'/state/2'
        },
       
        {
            name:'Rajasthan',
            img1:'rajasthan.jpg',
            info:'',
            link:'/state/3'
        },
        {
            name:'Kerala',
            img1:'keral.jpg',
            info:'',
            link:'/state/4'
        }
    ]
        

      const state=states.map((list,i) => <StatePhotos img1={list.img1} name={list.name} info={list.info} link={list.link}/>);
        return(
            <React.Fragment>
            <div className="pstates">
             Popular States:
            </div>
            <div >
           {state}
            </div>
           
            </React.Fragment>
        );
    }
}

export default PopularStates;