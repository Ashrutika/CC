import React from 'react';
import './StatePage.css';
import StateHeader from './StateHeader';
import AboutState from './AboutState';
import StatePhotos from './StatePhotos';
import CulturePhotos from './CulturePhotos';
import './CulturePhotos.css';

class StatePage extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        const data = require("./data/state.json");
        let i;
        {data.state.map( (item) =>{
            if(this.props.match.params.id == item.id)
            {
               i=item.id-1;
            }
            })}
            const State = data.state[i];
            const Culture_photos = State.culture_photos;
            const City_images = State.city_images;
            const State_images = State.state_images;
            
        const head_info =  <StateHeader head_name={State.head_name} india={State.india}/>
        const aboutstate =  <AboutState img={State.img} capital={State.capital} cap_link={State.cap_link} fest={State.fest} info={State.info} />
        const culture = Culture_photos.map((photos,k)=><CulturePhotos photos={photos.pic}/>)
        const popular_cities = City_images.map((item,k)=><StatePhotos name={item.name} img1={item.img1} info={item.info} link={item.link}/>)
        const popular_states = State_images.map((item,k)=><StatePhotos name={item.name} img1={item.img1} info={item.info} link={item.link}/>)
    
        return(
              <React.Fragment>
               {head_info}
                {aboutstate}
                <div className="culture">
                {culture}
                </div>
                <div id="pcities">{"Popular cities in "+State.head_name}</div>
                  <div >
                  {popular_cities} 
                  </div>
                  <div id="pstates">Recommended States </div>
                  <div >
                  {popular_states} 
                  </div>
                 
              </React.Fragment>
     
       
        );
    }
}

export default StatePage;