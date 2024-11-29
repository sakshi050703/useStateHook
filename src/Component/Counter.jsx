import { Component } from "react";

class Counter extends Component {
  constructor() {
    super()
    this.state = {
      count: 0
    }
  }
  increment = () => {
    this.setState({
      count: this.state.count + 1
    })
  }
  decrement = () => {
    if (this.state.count > 0) {
      this.setState({
        count: this.state.count - 1
      })
    }

  }

  render() {
    return (
      <div>
        <h2>Counter Application</h2>
        <div className="btn btn-group">
          <button className="btn btn-danger fs-3" onClick={this.increment} >+</button>
          <button className="btn btn-success fs-3">{this.state.count}</button>
          <button className="btn btn-danger fs-3" onClick={this.decrement}>-</button>
        </div>
      </div>
    )
  }
}
export default Counter;