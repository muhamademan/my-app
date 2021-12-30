import React from "react";
import './App.css'

class Latihan extends React.Component {
  constructor(props) {
    super(props)
    this.setState = {
      count: 0,
      text: ''
    }
  }

  handleButton = () => {
    this.setState(prev => ({ count: prev.count + 1 }))
  }

  testMethod() {
    if (this.setState.count === 5) {
      this.setState({
        text: "Selamat anda telah membuat lifecycle class component"
      })
    }
  }

  render() {
    return (
      <>
        <div>
          <p>Anda telah mengklik {this.setState.count} kali</p>
        </div>
        <button onClick={this.handleButton}>Klik</button>
      </>
    )
  }
}

export default Latihan