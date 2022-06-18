import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


const Header = (props) => {
  return (
    <header>
      <div className='header-wrapper'>
        <h1>{props.welcome}</h1>
        <h2>{props.title}</h2>
        <h3>{props.subtitle}</h3>
        <p>
          {props.firstName} {props.lastName}
        </p>
        <small>{props.date}</small>
      </div>
    </header>
  )
}
const Header2 = (props) => {
  return (
    <header>
      <div className='header-wrapper'>
        <h1>{props.data.welcome}</h1>
        <h2>{props.data.title}</h2>
        <h3>{props.data.subtitle}</h3>
        <p>
          {props.data.author.firstName} {props.data.author.lastName}
        </p>
        <small>{showDate(props.data.date)}</small>
      </div>
    </header>
  )
}
const Age = (props) => <div>The person is {props.age} years old</div>
const Weight = (props) => (
  <p>The weight of the object on earth is {props.weight} N.</p>
)

const Status = (props) => props.status ? 'old enought to drive' : 'Too young to drive'

const Skills = (props) => {
  const skill_list = props.skills.map(skill => <li>{skill}</li>)

  return (
    <ul>{skill_list}</ul>
  )
}

const showDate = (time) => {
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ]

  const month = months[time.getMonth()].slice(0, 3)
  const year = time.getFullYear()
  const date = time.getDate()
  return ` ${month} ${date}, ${year}`
}
const ButtonSayHi = (props) => <button onClick={props.onClick} > {props.text}</button>

const greetPeople = () => {
  alert('Welcome to 30 Days Of React Challenge, 2020')
}
const Header3 = (props) => {
  const data = props.data
  const { welcome, title, subtitle, author, date } = data
  const { firstName, lastName } = author
  return (
    <header>
      <div className='header-wrapper'>
        <h1>{welcome}</h1>
        <h2>{title}</h2>
        <h3>{subtitle}</h3>
        <p>
          {firstName} {lastName}
        </p>
        <small>{showDate(date)}</small>
      </div>
    </header>
  )
}
const App = () => {
  let currentYear = 2020
  let birthYear = 2010
  const age = currentYear - birthYear
  const gravity = 9.81
  const mass = 75
  let status = age >= 18
  const data = {
    welcome: 'Welcome to 30 Days Of React',
    title: 'Getting Started React',
    subtitle: 'JavaScript Library',
    author: {
      firstName: 'Asabeneh',
      lastName: 'Yetayeh',
    },
    date: new Date(), // date needs to be formatted to a human readable format
  }
  const handleTime = () => {
    alert(showDate(new Date()))
  }
  const sayHi = () => {
    alert('Hi')
  }
  return (
    <div className='app'>
      <Header welcome=" Welcome to "
        title='Title'
        subtitle='Subtitle'
        firstName="Fuad"
        lastName="Hassan"
        date="17 june 2022"
      />
      <Age age={age} />
      <Weight weight={mass * gravity} />
      <Status status={status} />
      <Skills skills={['HTML', 'CSS', 'JavaScript']} />
      <Header2 data={data} />
      <ButtonSayHi onClick={sayHi} text='Say hi' />
      <ButtonSayHi onClick={greetPeople} text='greetPeople' />
      <ButtonSayHi onClick={() => alert(new Date())} text='Show Time' />
      <ButtonSayHi text='show time' onClick={handleTime} />
      <Header3 data={data} />
    </div>
  )
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)

