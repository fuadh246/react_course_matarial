import React from 'react';
import ReactDOM from 'react-dom';
import "./main.css";
import logoImage from './logo.png';

const header1 = (
  <header>
    <h1>SUBSCRIBE</h1>
    <p>Sign up with your emaill address to receive news and updates</p>
  </header>

)
const skills = ['HTML', 'CSS', 'JavaScript', 'Java', 'MongoDB']
const skillsFormated = skills.map((skill) => <div className='skills'>{skill}</div>)
const main1 = (
  <div className='main'>
    {header1}
    <form>
      <input className='input' type="text" name="First_name" placeholder='First name' autoComplete='off' />
      <input className='input' type="text" name="Last_name" placeholder='Last name' autoComplete='off' />
      <input className='input' type="text" name="Email" placeholder='Email' autoComplete='off' />
    </form>
    <form>
      <button className='btn'>Subscribe</button>
    </form>
  </div>
)

const main2 = (
  <div className='main' id='main2'>
    <img className='logo' src={logoImage} alt='logoimage' />
    <h1>FUAD HASSAN</h1>
    <p>Major: Data Science</p>

    {skillsFormated}
  </div >
)

const app = (
  <div>
    {main1}
    {main2}
  </div>
)

const rootElement = document.getElementById('root')
ReactDOM.render(app, rootElement)