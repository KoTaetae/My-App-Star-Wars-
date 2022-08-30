import React from 'react';
//import logo from './logo.svg';
import './App.css';
//import Item from './MyItem';

class FilmItemRow extends React.Component {
render() {
  return (
    <li>
      <a href={this.props.url}>{this.props.url}</a>
    </li>
  )
 }
}

class StarWars extends React.Component {

  constructor() {
    super()
    this.state = {
      loadedCharacter: false,
      image: null,
      name: null,
      height: null,
    homeworld: null,
      films: []
    }
  }

getNewCharacter(){ 


const randomNumber = Math.ceil((Math.random()*82))
const url = `https://swapi.dev/api/people/${randomNumber}/`
fetch(url)
.then(response => response.json())
.then(data => {
  this.setState({
    image:data.image,
    name: data.name,
    height: data.height,
    homeworld: data.homeworld,
    films: data.films,
    loadedCharacter: true
  })
})
}
    render() {

      const movies = this.state.films.map((film,i) => {
          return <FilmItemRow key={i} url={film} />
      })

      return (
        <div>
          {
            this.state.loadedCharacter &&
           <div>
          <img src = {this.state.image}>{this.state.image}</img>
           <h1>{this.state.name}</h1>
           <p>{this.state.height}</p>
           <p><a href = {this.state.homeworld} >Homeland</a></p>
           <ul>
            {movies}
           </ul>
          </div>
          }

           <button type="button"
            onClick={() => this.getNewCharacter()}  
            className="btn">
              Randomize Character</button>
        </div>
       
      )
    }

}


function App() {
  return (
    <div className="App">
      <header className = "App-header">
      <StarWars />
      </header>
    </div>
  );
}

export default App;
