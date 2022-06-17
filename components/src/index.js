import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const Header = () => (
  <header>
    <h1>SUBSCRIBE</h1>
    <p>Sign up with your emaill address to receive news and updates</p>
  </header>
)

const Techlist = () => {
  const skills = ['HTML', 'CSS', 'JavaScript', 'Java', 'MongoDB']
  const skillsFormated = skills.map((skill) => <div className='skills'>{skill}</div>)
  return skillsFormated
}

const Main = () => (
  <div className='main'>
    <Header />
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


const Main2 = () => (
  <div className='main' id='main2'>
    {/* <img className='logo' src={''} alt='logoimage' /> */}
    <h1>FUAD HASSAN</h1>
    <p>Major: Data Science</p>
    <Techlist />
  </div >
)
const Button = () => <button className='btn'>action</button>

const hexaColor = () => {
  let str = '0123456789abcdef'
  let color = ''
  for (let i = 0; i < 6; i++) {
    let index = Math.floor(Math.random() * str.length)
    color += str[index]
  }
  return '#' + color
}


const hexaColorStyle = {
  padding: '10px 20px',
  color: "red",
  background: `${hexaColor()}`,
  border: 'none',
  borderRadius: 5,

}

const HexaColor = () => <div style={hexaColorStyle}>{hexaColor()}</div>


const Main3 = () => (
  <div className='main'>
    <HexaColor />
    <HexaColor />
  </div>
)


const app = (
  <div>
    <Main />
    <Main2 />
    <Main3 />
  </div>
)

const rootElement = document.getElementById('root')
ReactDOM.render(app, rootElement)