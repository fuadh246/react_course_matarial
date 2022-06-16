import React from 'react'
import ReactDOM from 'react-dom'


const welcome = 'Welcome to 30 Days Of React'
const title = 'Getting Started React'
const subtitle = 'JavaScript Library'
const author = {
  firstName: 'Asabeneh',
  lastName: 'Yetayeh',
}
const date = 'Oct 2, 2020'



const headerStyles = {
  backgroundColor: '#61DBFB',
  fontFamily: 'Helvetica Neue',
  padding: 25,
  lineHeight: 1.5,
}

const header = (
  <header style={headerStyles}>
    <h1>{welcome}</h1>
    <h2>{title}</h2>
    <h3>{subtitle}</h3>
    <p>Author: {author.firstName} {author.lastName}</p>
    <small>Date: {date}</small>
  </header>
)

const numOne = 3
const numTwo = 2

const result = (
  <p>
    {numOne} + {numTwo} = {numOne + numTwo}
  </p>
)

const yearBorn = 1820
const currentYear = new Date().getFullYear()
const age = currentYear - yearBorn

const personinfo = (
  <p>
    {' '}
    {author.firstName} {author.lastName} is {age} year old
  </p>
)
const techs = ['HTML', 'CSS', 'JavaScript']
const techsFormatted = techs.map((tech) => <li>{tech}</li>)



const footerStyles = {
  backgroundColor: '#61DBFB',
}
const footer = (
  <footer style={footerStyles}>
    <p>Copyright 2022</p>
  </footer>
)

const mainStyle = {
  backgroundColor: '#F3F0F5',
}
const main = (
  <main style={mainStyle}>
    <p>Prerequisite to get started <strong><em>react.js:</em></strong></p>
    <ul>
      {techsFormatted}
    </ul>
    {result}
    {personinfo}
  </main>
)

const app = (
  <div>
    {header}
    {main}
    {footer}
  </div>
)

const rootElement = document.getElementById('root')


ReactDOM.render(app, rootElement)