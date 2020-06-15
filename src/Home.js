import React from 'react';
import './Home.css';
import HomeHeader from './HomeHeader';
import AboutIndia from './AboutIndia';
import PopularStates from './PopularStates';
import PopularCties from './PopularCities';
import Footer from './Footer';

class Home extends React.Component{
    render(){
        return(
            <div className="back">
           <HomeHeader />
           <AboutIndia />
           <PopularStates />
           <PopularCties />
           <Footer />
           
           </div>
        );
    }
}

export default Home;
