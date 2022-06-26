import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom'
import './index.css';
import { challenges } from './challenges.js'

console.log(challenges)

// {
//   name: '30 Days Of Python',
//     description:
//   '30 Days of Python challenge is a step by step guide to learn Python in 30 days.',
//     status: 'completed',
//       days: 30,
//         level: 'Beginners to Advanced',
//           duration: '20 Nov 2019 - 20 Dec 2019',
//             slug: 'pyhton',
//               url:
//   'https://github.com/https://https://github.com/Asabeneh/30-Days-Of-Python.com/Asabeneh/30-Days-Of-JavaScript/30-Days-Of-React',
//     author: {
//     firstName: 'Asabeneh',
//       lastName: 'Yetayeh',
//         },
// }
// Home component
const MapingName = ({ name }) => challenges.map((challenge) => <div><li>{challenge.name}</li><li>{challenge.description}</li></div>)
const MapingAbout = ({ name }) => challenges.map((challenge) => <div><li>{challenge.status}</li><li>{challenge.days}</li></div>)
const MapingContact = ({ name }) => challenges.map((challenge) => <div><li>{challenge.level}</li><li>{challenge.duration}</li></div>)
const MapingChallenges = ({ name }) => challenges.map((challenge) => <div><li>{challenge.slug}</li><li>{challenge.url}</li></div>)

const Home = (props) => {
  return (
    <ol>
      <MapingName />
    </ol>
  )
}
// About component
const About = (props) => {
  return (
    <ol>
      <MapingAbout />
    </ol>
  )
}
// Contact component
const Contact = (props) => {
  return (
    <ol>
      <MapingContact />
    </ol>
  )
}
const Challenges = (props) => {
  return (
    <ol>
      <MapingChallenges />
    </ol>
  )
}
const NotFound = (props) => <h1>The page your looking for not found</h1>

const NavVar = (props) => {
  return (
    <ul>
      <li>
        <NavLink to='/'>Home</NavLink>
      </li>
      <li>
        <NavLink to='/about'>About</NavLink>
      </li>
      <li>
        <NavLink to='/contact'>Contact</NavLink>
      </li>
      <li>
        <NavLink to='/challenges'>Challenges</NavLink>
      </li>
    </ul>
  )
}

class App extends Component {
  render() {
    return (
      <Router>
        <div className='App'>
          <NavVar></NavVar>
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route exact strict path='/about' element={<About />} />
            <Route exact strict path='/contact' element={<Contact />} />
            <Route exact strict path='/challenges' element={<Challenges />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </Router>
    )
  }
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)