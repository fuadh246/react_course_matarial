import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const Country = ({
  country: { name, capital, flags, languages, population, currency, },
}) => {
  //const formatedCapital = capital.length > 0 ? (<><span>Capital:</span>{capital}</>) : ("")
  // const formatLanguage = languages.length > 1 ? `Languages` : `Language`
  console.log(languages)

  return (
    <div className='country'>
      <div className='country_flag'>
        <img className='flag' src={flags.png} alt={name.common} />
      </div>
      <h3 className='name'>{name.common}</h3>
      <div className='country_text'>
        {/* <p>{formatedCapital}</p> */}
        {/* <p>
          <span>{formatLanguage} </span>
          {languages.map((language) => language.name).join(', ')}
        </p> */}

        <p>
          <span>Population: </span>
          {population.toLocaleString()}
        </p>
        <p>
          <span>Currency: </span>
          {currency}
        </p>
      </div>
    </div>
  )
}


class App extends Component {
  state = {
    data: [],
  }
  // componentDidMount() {
  //   const url = 'https://restcountries.com/v3.1/all'
  //   fetch(url)
  //     .then((response) => {
  //       return response.json()
  //     }).then((data) => {
  //       console.log(data)
  //       this.setState({ data, })
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     })
  // }

  componentDidMount() {
    this.fetchCountryData()
  }

  fetchCountryData = async () => {
    const url = 'https://restcountries.com/v3.1/all'
    const response = await fetch(url)
    const data = await response.json()
    this.setState({
      data,
    })
  }
  catch(error) {
    console.log(error)
  }

  render() {
    return (
      <div className='App'>
        <h1>React Component Life Cycle</h1>
        <h1>Calling API</h1>
        <div>
          <p>There are {this.state.data.length} countries in the api</p>
          <div className='countries-wrapper'>
            {this.state.data.map((country) => (

              <Country country={country} />

            ))}
          </div>
        </div>
      </div>
    )
  }
}

const root = document.getElementById('root')
ReactDOM.render(<App />, root);
