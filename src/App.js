import React from 'react';
import './App.css';
import Home from './Home';
import StatePage from './StatePage';
import CityPage from './CityPage';


import MapContainer from './MapContainer';
import {Route,Link,BrowserRouter as Router} from 'react-router-dom';
import TrekPage from './TrekPage';


class  App extends React.Component {
  constructor(props){
    super(props);
  }
  render(){
  return (
 
  <Router>
    <Route path="/" exact strict component={Home}></Route>
    <Route path="/state/:id" component={StatePage}></Route>
    <Route path="/city/:id" component={CityPage}></Route>
    <Route path="/trek/:id" component={TrekPage}></Route>
  </Router>
      
  );
}
}

export default App;