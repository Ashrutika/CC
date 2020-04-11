import React from 'react';
import './TrekPage.css';
import PlaceHead from './PlaceHead';
import AboutPlace from './AboutPlace';
import StatePhotos from './StatePhotos';
import CulturePhotos from './CulturePhotos';


class TrekPage extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        const data = require("./data/trek.json");
        let i;
        {data.trek.map( (item) =>{
            if(this.props.match.params.id == item.id)
            {
               i=item.id-1;
            }
            })}
            const Place = data.trek[i];
            console.log(Place);
            console.log(this.props.match.params.id);
            const Photos = Place.images;
            console.log(Photos);
            const Hotels = Place.hotels;
            const Moreplaces = Place.moreplaces;

            const head=<PlaceHead backimage={Place.backimage} city={Place.city} state={Place.state} name={Place.name}/>
            const about=<AboutPlace days={Place.days} time={Place.time} entry={Place.entry} info={Place.info} builtby={Place.builtby} rail={Place.rail} air={Place.air} bus={Place.bus}/>
            const image=Photos.map(photos => <CulturePhotos photos={photos.pic}/>)
            const hotel=Hotels.map(list => <StatePhotos name={list.name}  img1={list.img1} info={list.info}/>)
            const moreplace=Moreplaces.map(list => <StatePhotos name={list.name} link={list.link} img1={list.img1} info={list.info}/>)
        return(

            <div>
            {head}
            {about}
            <div className="place-img">
                {image}
                </div>
            <div className="hotels">
            <div id="hotels-place">Near by Hotels ,Restaurants and coffee shops </div>
              {hotel}
              </div>
              <div className="more">
            <div id="also">Also visit</div>
              {moreplace}
              </div>
            </div>
           
        );
    }
}

export default TrekPage;