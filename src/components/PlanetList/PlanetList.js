import React, { Component } from 'react';
import Planet from '../Planet/Planet';

class PlanetList extends Component {
    
  render() {
    let planetListItemArray = this.props.listOfPlanets.map ((planet, index) => {
        return <Planet planetData={planet} key={index}/>

      })
    return (
        <ul className="App-intro">
        {planetListItemArray}
      </ul>
    );
  }
}


export default PlanetList;