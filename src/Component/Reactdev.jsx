import { Component, version } from "react"
class Reactdev extends Component {
  constructor() {
    super()
    this.state = {
      name: 'Jordan Walke',
      appName: 'ReactJs',
      version: 'v18.3',
      isValid: false
    }
  }
  updateData = () => {
    if (this.state.isValid) {
      this.setState({
        name: 'Jordan Walke',
        appName: 'ReactJs',
        version: 'v18.3',
        isValid: false
      })
    } else {
      this.setState({
        name: 'Brenden Eich',
        appName: 'Javascript',
        version: 'ES14',
        isValid: true
      })
    }


  }
  render() {
    return (
      <div>
        <h2>React Developer</h2>
        <div>
          <h3>
            {this.state.name} - {this.state.appName} - {this.state.version}
          </h3>
          <button onClick={this.updateData}>Update Data</button>
        </div>
      </div>
    )
  }
}
export default Reactdev;