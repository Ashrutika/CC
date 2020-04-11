import React from 'react';
import './PopularCities.css';
import StatePhotos from './StatePhotos';
import pune from './images/cities/pune.jpg';
import mumbai from './images/cities/mumbai.jpeg';
import delhi from './images/cities/delhi.jpeg';
import banglore from './images/cities/banglore.png';

class PopularCties extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        const city=[
            {
              name:'Pune',
              img1:'pune.jpg',
              info:'',
              link:'/city/1'
            },
            {
                name:'Mumbai',
                img1:'mumbai.jpeg',
                info:'',
                link:'/city/2'
            },
            {
                name:'Delhi',
                img1:'delhi.jpeg',
                info:'',
                link:'/city/3'
            },
            {
                name:'Banglore',
                img1:'banglore.png',
                info:'',
                link:'/city/4'
            }
        ]
        const citiylist=city.map(list => <StatePhotos img1={list.img1} name={list.name} info={list.info} link={list.link}/>)
        return(
            <React.Fragment>
            <div className="pcities">
            Popular Cities:
            </div>
            <div >
            {citiylist}
            </div>
            </React.Fragment>
        );
    }
}

export default PopularCties;