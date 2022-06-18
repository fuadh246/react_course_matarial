import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const HeadingStyle = {
  backgroundColor: "red",
  textAlign: 'center',
  borderRadius: "5px",
  margin: '10px'
}
const Heading = (props) => <h2 style={HeadingStyle}> {props.text}</h2 >

const Numbers = ({ numbers }) => {
  const list = numbers.map((number) => <li key={number}>{number}</li>)
  return list
}
const skills = [
  ['HTML', 10],
  ['CSS', 7],
  ['JavaScript', 9],
  ['React', 8],
]
const Skill = ({ skill: [tech, level] }) => (<li>
  {tech} {level}
</li>
)
const Skills = ({ skills }) => skills.map((skill) => <Skill skill={skill} />)

// const Skills = ({ skills }) => {
//   const skillsList = skills.map((skill) => <Skill skill={skill} />)
//   console.log(skillsList)
//   return <ul>{skillsList}</ul>
// }


const countries = [
  { name: 'Finland', city: 'Helsinki' },
  { name: 'Sweden', city: 'Stockholm' },
  { name: 'Denmark', city: 'Copenhagen' },
  { name: 'Norway', city: 'Oslo' },
  { name: 'Iceland', city: 'Reykjavík' },
  { name: 'Norway', city: 'Oslo' },
  { name: 'Iceland', city: 'Reykjavík' },
]

const Country = ({ country: { name, city } }) => {
  return (
    <div className='country'>
      <h1>{name}</h1>
      <small>{city}</small>
    </div>
  )
}

const Countries = ({ countries }) => countries.map((country) => <Country key={country.name} country={country} />)
// countries component
// const Countries = ({ countries }) => {
// const countryList = countries.map((country) => <Country country={country} />)
//   return <div>{countryList}</div>
// }

const keyDis = (
  <p>
    Keys help React to identify items which have changed, added, or
    removed. Keys should be given to the elements inside the array to
    give the elements a stable identity. The key should be unique. Mostly
    data will come with as an id and we can use id as key. If we do not pass
    key to React during mapping it raises a warning on the browser. If
    the data does not have an id we have to find a way to create a unique
    identifier for each element when we map it. See the following example
  </p>
)

export const tenHighestPopulations = [
  { country: 'World', population: 7693165599 },
  { country: 'China', population: 1377422166 },
  { country: 'India', population: 1295210000 },
  { country: 'United States of America', population: 323947000 },
  { country: 'Indonesia', population: 258705000 },
  { country: 'Brazil', population: 206135893 },
  { country: 'Pakistan', population: 194125062 },
  { country: 'Nigeria', population: 186988000 },
  { country: 'Bangladesh', population: 161006790 },
  { country: 'Russian Federation', population: 146599183 },
  { country: 'Japan', population: 126960000 },]

const TenHighestPopulation = ({ tenHighestPopulation: { country, population } }) => {
  return (
    <tr className='row'>
      <td className='col0'>{country}</td>
      <td className='col1' >{population}</td>
    </tr>

  )
}
const TenHighestPopulations = ({ tenHighestPopulations }) => {
  const tenHighestPopulationsList = tenHighestPopulations.map((tenHighestPopulation) => <TenHighestPopulation tenHighestPopulation={tenHighestPopulation} />)
  return <table className='table'>{tenHighestPopulationsList}</table>
}

const App = () => {
  const numbers = [1, 2, 3, 4, 5]
  return (
    <div className='container'>
      <Heading text='Mapping array' />
      <h1>Numbers List</h1>
      <ul>
        <Numbers numbers={numbers} />
      </ul>
      <Heading text='Mapping array of arrays' />
      <ul>
        <Skills skills={skills} />
      </ul>
      <Heading text='Mapping array of objects' />
      <div>
        <Countries countries={countries} />
      </div>
      <Heading text='Key in mapping arrays' />
      {keyDis}
      <Heading text='Exercises: Level 3' />
      <div className='ExercisesLevel3'>
        <TenHighestPopulations tenHighestPopulations={tenHighestPopulations} />
      </div>


    </div>
  )
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);

