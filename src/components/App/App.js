import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      starList : [
        {name: 'Nunki',
         diameter: 132}, 
        {name: 'Menkar',
         diameter: 109}, 
        {name: 'Polaris',
         diameter: 90}
      ],
      newStar : {
        name : '',
        diameter : ''
      }
    }
  }

  handleChangeFor = (propertyName) => (event) => {
    //save whats in the input on newStar.name
    
    this.setState({
        newStar: {
          //name event.target.value
            ...this.state.newStar,
            [propertyName] : event.target.value
        }
    })
}

handleClick = (event) => {
event.preventDefault();
console.log(this.state);
// this.setState({
//     star : {
//         name: '',
//         role: '',
//         popularity: ''
//     }
// })

//take the values of new star and add them to star list
  this.setState({
    starList:  [
      ...this.state.starList,
      this.state.newStar
    ],
    newStar : {
      name:'',
      diameter: ''
    }
  })
}


  render() {

    // let starListItemArray = [];
    // for(let i = 0; i < this.state.starList.length; i++){
    //   starListItemArray.push(<li>{this.state.starList[i]}</li>)
    // }

    // for(let star of this.state.starList){
    //   starListItemArray.push(<li>{star}</li>)
    // }

    //map is like a for loop. it is still pushing
    // this.state.starList.map(function(star) {
    //   starListItemArray.push(<li>{star}</li>)
    // })

    //better map usage
    // let starListItemArray = this.state.starList.map (function(star){
    //   return <li>{star}</li>
    // })

    //best map usage
    let starListItemArray = this.state.starList.map (star => {
      return <li key={star.name}>The star {star.name} is {star.diameter} million kilometers</li>
    })

    

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <form onSubmit={this.handleClick}>
            <input placeholder="star name" value={this.state.newStar.name} type="text" onChange={this.handleChangeFor('name')}/>
            <input placeholder="diameter"value={this.state.newStar.diameter} type="number" onChange={this.handleChangeFor('diameter')}/>
            <input type="submit" value="Click me"/>
          </form>
        <ul className="App-intro">
          {starListItemArray}
        </ul>
      </div>
    );
  }
}

export default App;
