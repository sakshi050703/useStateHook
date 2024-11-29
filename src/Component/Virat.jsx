import { Component } from "react";
import './Virat.css'

class Virat extends Component {
  constructor() {
    super()
    this.state = {
      name: 'Virat Kohli',
      age: 32,
      role: 'Batsman',
      isActive: false
    }
  }
  updatedata = () => {
    if (this.state.isActive) {
      this.setState({
        name: 'Virat Kohli',
        age: 32,
        role: 'Batsman',
        isActive: false
      })
    } else {
      this.setState({
        name: 'MS Dhoni',
        age: 42,
        role: 'WK-Batsman',
        isActive: true
      })
    }

  }
  render() {
    return (
      <div>
        <h1>Hello, I am Virat</h1>
        <div className="virat">
          {this.state.name}<br />
          {this.state.age}<br />
          {this.state.role}<br />
          <button className="btn" onClick={this.updatedata} >UPDATE</button>
        </div>
      </div>
    )
  }
}

export default Virat