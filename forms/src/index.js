import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

let Students = []

const ReadStudent = ({ Student }) => {
  return (
    <tr className='table-row'>
      <td className='table-data'>{Student.firstName}</td>
      <td className='table-data'>{Student.lastName}</td>
      <td className='table-data'>{Student.country}</td>
      <td className='table-data'>{Student.title}</td>
    </tr>
  )
}

const ReadStudents = ({ Students }) => {
  const StudentList = Students.map((Student) => <ReadStudent Student={Student} />)
  return (StudentList)
}

const Clearlist = (Students) => {
  Students = []
}

class App extends Component {
  state = {
    firstName: '',
    lastName: '',
    country: '',
    title: '',
  }
  handleChange = (e) => {
    const { name, value } = e.target
    this.setState({ [name]: value })
  }
  handleSubmit = (e) => {
    /* 
     e.preventDefault()
      stops the default behavior of form element
     specifically refreshing of page
     */
    e.preventDefault()

    /*
     the is the place where we connect backend api 
     to send the data to the database
     */

    Students.push(this.state)
    console.log(Students)
    this.setState({
      firstName: '',
      lastName: '',
      country: '',
      title: '',
    })
  }
  render() {
    const { firstName, lastName, title, country } = this.state
    return (
      <div className='App'>
        <h3>Add Student</h3>
        <form onSubmit={this.handleSubmit}>
          <div>
            <input
              type='text'
              name='firstName'
              placeholder='First Name'
              value={firstName}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <input
              type='text'
              name='lastName'
              placeholder='Last Name'
              value={lastName}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <input
              type='text'
              name='country'
              placeholder='Country'
              value={country}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <input
              type='text'
              name='title'
              placeholder='Title'
              value={title}
              onChange={this.handleChange}
            />
          </div>
          <button class='btn btn-success'>Submit</button>
        </form>
        <ReadStudents Students={Students} />
      </div>
    )
  }
}

const root = document.getElementById('root');
ReactDOM.render(<App />, root);
