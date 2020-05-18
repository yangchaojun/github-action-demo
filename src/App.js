import React from 'react'
import axios from 'axios'
import logo from './logo.svg'
import './App.css'

function App() {
  async function getData() {
    let result = await axios.get('https://jqapi.hao1bao.com/app', {
      params: {
        op: 'Page',
        cloud: 'index_roles',
        page: 1,
        rows: 10,
        _userid: 1,
        _password: '25d55ad283aa400af464c76d713c07ad'
      }
    })

    console.log(result)
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p onClick={getData}>
          Edit2222 <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  )
}

export default App
