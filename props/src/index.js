import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const App = () => (
  <div className='app'>
    <h1>hello</h1>
      <h1></h1>
  </div>
)

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
