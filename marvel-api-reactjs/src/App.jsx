import React from 'react'
// import Axios from 'axios'
import './App.css'

const BASE_URL = 'https://gateway.marvel.com:443/v1/public/comics?format=comic&title=avengers&ts=1&apikey=b5db6aae16fe0bba999eacb91d87c6bf&hash=f6a80e69db4e06a3306212f3304149c3'
  
class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      title: []
    }
  }

  UNSAFE_componentWillMount() {
    fetch(BASE_URL).then(res => res.json())
    .then(BASE_URL => {
      this.setState({
        title: BASE_URL.data.results
      })
    // console.log(BASE_URL.data.results)
    })
  }

  renderHero(){
    this.state.title.map((heroes, index) => (
      <ul key={index}>
        <li>Título:{heroes.title}</li>
        <li>Preço:{heroes.prices}</li>
      </ul>
    ))
  }

  render() {
    return (
      <div>
        <p>
        {this.renderHero()}
        </p>
      </div>
    )
  }
}

export default App
