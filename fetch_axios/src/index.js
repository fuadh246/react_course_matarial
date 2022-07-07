import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios'
import './index.css';
//kg 
//livded

const AveWeight = ({ data }) => {
  let total = 0
  data.map((cat) => {
    const weight = cat.weight.metric
    const weightList = weight.split('-')
    total += (parseInt(weightList[0]))
  })
  const ave = (total / data.length).toFixed(2)
  return (<>{ave}</>)
}
const Avelived = ({ data }) => {
  let total = 0
  data.map((cat) => {
    const lived = cat.life_span
    const livedList = lived.split('-')
    total += (parseInt(livedList[0]))
    console.log(typeof (lived))
    console.log((livedList))
  })
  const ave = (total / data.length).toFixed(2)
  return (<>{ave}</>)
}

const Mpcon = ({ CountryList }) => {

  return (<></>)
}

const NumOfCountry = ({ data }) => {
  const CountryList = new Set()
  data.map((cat) => {
    CountryList.add(cat.origin)
  })
  console.log(CountryList)
  return (
    <div>
      {CountryList.forEach((country) => <h1>{country}</h1>)}
      <h1>{CountryList.size}</h1>
    </div>
  )
}

class App extends Component {
  state = {
    data: [],
    low: 0,
  }
  componentDidMount() {
    const url = "https://api.thecatapi.com/v1/breeds"
    axios
      .get(url)
      .then((response) => {
        this.setState({
          data: response.data,
        })
      })
      .catch((error) => {
        console.log(error)
      })
  }
  render() {
    return (
      <div>
        <h1> <AveWeight data={this.state.data} /> </h1>
        <h1><Avelived data={this.state.data} /></h1>
        <NumOfCountry data={this.state.data} />

      </div>
    )
  }
}

const root = (document.getElementById('root'));
ReactDOM.render(<App />, root);
