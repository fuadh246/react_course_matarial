import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';



const countries_data = [
  {
    "name": "Afghanistan",
    "capital": "Kabul",
    "languages": [
      "Pashto",
      "Uzbek",
      "Turkmen"
    ],
    "population": 40218234,
    "flag": "https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_the_Taliban.svg",
    "region": "Asia",
    "area": 652230
  },
  {
    "name": "Åland Islands",
    "capital": "Mariehamn",
    "languages": [
      "Swedish"
    ],
    "population": 28875,
    "flag": "https://flagcdn.com/ax.svg",
    "region": "Europe",
    "area": 1580
  },
  {
    "name": "Albania",
    "capital": "Tirana",
    "languages": [
      "Albanian"
    ],
    "population": 2837743,
    "flag": "https://flagcdn.com/al.svg",
    "region": "Europe",
    "area": 28748
  },
  {
    "name": "Algeria",
    "capital": "Algiers",
    "languages": [
      "Arabic"
    ],
    "population": 43851043,
    "flag": "https://flagcdn.com/dz.svg",
    "region": "Africa",
    "area": 2381741
  }]




console.log(countries_data[0]['name'])


class App extends React.Component {
  state = {
    count: 0,
    image: 'https://www.smithsstationah.com/imagebank/eVetSites/Feline/01.jpg',
    countryName: countries_data[0]['name'],
    countryCapital: countries_data[0]['capital'],
    CounntryLang: countries_data[0]['languages'],
    CountryPopulation: countries_data[0]['population'],
    CountryFlag: countries_data[0]['flag']
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
    let randomIndex = Math.floor(Math.random() * 3)
    let countryName = countries_data[randomIndex]['name']
    let countryCapital = countries_data[randomIndex]['capital']
    let CounntryLang = countries_data[randomIndex]['languages']
    let CountryPopulation = countries_data[randomIndex]['population']
    let CountryFlag = countries_data[randomIndex]['flag']
    let country = this.state.image === catURL ? dogURL : catURL
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
        <div>

        </div>

      </div>
    )
  }
}

const root = document.getElementById('root');
ReactDOM.render(<App />, root);


