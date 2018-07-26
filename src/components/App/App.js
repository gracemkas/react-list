import React, { Component } from 'react';
// import logo from './logo.svg';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import CurrentNewStar from '../CurrentNewStar/CurrentNewStar';
import StarList from '../StarList/StarList';
import NewStarForm from '../NewStarForm/NewStarForm';
import './App.css';
import axios from 'axios';

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
  //lifecycle component. will be called once, basically when the page loads
  componentDidMount(){
    console.log('component mounted');
    //this is a good place to make an initial GET request
    this.getPlanets();
  }

  getPlanets = () => {
    //GET
    axios.get('https://swapi.co/api/planets/?format=json')
    .then( (response) => {
      console.log(response);
      this.setState({
        
      })
    })
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

handleFormClick = (event) => {
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


    

    return (
      <div className="App">
        <Header />
        <CurrentNewStar currentStar={this.state.newStar}/>
        <NewStarForm 
          newForm={this.state.newStar} 
          handleChangeForInput={this.handleChangeFor}
          handleClick={this.handleFormClick}/>
        <StarList listOfStars = {this.state.starList}/>
        <Footer />
      </div>
    );
  }
}

export default App;
