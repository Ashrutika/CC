import React from 'react';
import './CityPage.css';
import CityHead from './CityHead';
import AboutState from './AboutState';
import AboutCity from './AboutCity';
import CulturePhotos from './CulturePhotos';
import StatePhotos from './StatePhotos';

class CityPage extends React.Component{
    constructor(props){
        super(props);
    }

    render(){

        const data = require("./data/city.json");
        let i;
        {data.city.map( (item) =>{
            if(this.props.match.params.id == item.id)
            {
               i=item.id-1;
            }
            })}
            const City = data.city[i];
            const Culture_photos = City.images;
            console.log(Culture_photos);
            const Places = City.places;
            const Places1 = City.places1;
            const Places2 = City.places2;
            const Cities = City.cities;

            const head=<CityHead cityname={City.cityname} statename={City.statename} india={City.india}/>
            const aboutcity= <AboutCity img={City.img} info={City.info}/>
            const image=Culture_photos.map(photos => <CulturePhotos photos={photos.pic}/>)
            const popular_places=Places.map(list => <StatePhotos name={list.name} img1={list.img1} info={list.info}/>)
            const places1=Places1.map(list => <StatePhotos name={list.name}  img1={list.img1}  info={list.info}/> )
            const places2=Places2.map(list => <StatePhotos name={list.name} img1={list.img1} info={list.info}/>)
            const city=Cities.map(list => <StatePhotos name={list.name} img1={list.img1} link={list.link} info={list.info}/> )

        return(
            <div>
            {head}
            {aboutcity}
            <div className="photos">
            {image}
            </div>
            <div className="popular">
          <div id="place">{"Places to visit near "+City.cityname}</div>
          {popular_places} 
          </div>
          <div className="forts">
          <div id="place">{City.places_photos_head1}</div>
          {places1} 
          </div>
          <div className="hills">
          <div id="place">{City.places_photos_head2}</div>
          {places2} 
          </div>
          <div className="city">
          <div id="place">Also visit....</div>
          {city} 
          </div> 
        </div>
        );

    }
}

export default CityPage;