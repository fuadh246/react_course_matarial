import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { countries_data } from './countries_data.js';


console.log(countries_data[0])

for (const country in countries_data) {
  if (countries_data[country].name === 'Bangladesh') {
    console.log(country)
  }
}

class App extends React.Component {
  state = {
    count: 0,
    image: 'https://www.smithsstationah.com/imagebank/eVetSites/Feline/01.jpg',
    country: countries_data[18],
  }

  addOne = () => this.setState({ count: this.state.count + 1 })
  subtractOne = () => this.setState({ count: this.state.count - 1 })
  changeImage = () => {
    let dogURL =
      'https://static.onecms.io/wp-content/uploads/sites/12/2015/04/dogs-pembroke-welsh-corgi-400x400.jpg'
    let catURL =
      'https://www.smithsstationah.com/imagebank/eVetSites/Feline/01.jpg'
    let image = this.state.image === catURL ? dogURL : catURL
    this.setState({ image: image })
  }

  changeCountry = () => {
    let randomIndex = Math.floor(Math.random() * countries_data.length - 1)
    // let country = countries_data[0]
    let randomCountry = countries_data[randomIndex]
    this.setState({ country: randomCountry })
  }
  render() {
    const count = this.state.count
    return (
      <div className='App'>
        <h1>{count}</h1>
        <button className='btn' onClick={this.addOne}>
          ADD
        </button>
        <button className='btn' onClick={this.subtractOne}>
          SUBTRACT
        </button>
        <div>
          <img src={this.state.image} alt='animal' />
        </div>
        <button onClick={this.changeImage} class='btn btn-add'>
          Change
        </button>
        <div className='wholecard'>
          <div className='countrycard'>

            <img className='image' src={this.state.country['flag']} alt='country flag' />
            <h3>{this.state.country['name']}</h3>
            <div className='info'>
              <p>Capital: {this.state.country['capital']}</p>
              <p>Languages: {this.state.country['languages']}</p>
              <p>Population:  {this.state.country['population']}</p>
              <p>Region:  {this.state.country['region']}</p>
            </div>
            <button onClick={this.changeCountry} class='btn btn-add'>
              Change country
            </button>
          </div>
        </div>
      </div>
    )
  }
}

const root = document.getElementById('root');
ReactDOM.render(<App />, root);


