// Write your code here
import {Component} from 'react'

import './index.css'

class EvenOddApp extends Component {
  state = {count: 0}

  buttonClick = () => {
    this.setState(previous => ({
      count: previous.count + Math.ceil(Math.random() * 100),
    }))
  }

  oddEven = () => {
    const {count} = this.state
    return count % 2 === 0 ? (
      <p className="para">Count is Even</p>
    ) : (
      <p className="para">Count is Odd</p>
    )
  }

  render() {
    const {count} = this.state

    return (
      <div className="container">
        <div className="card-container">
          <h1 className="heading">
            Count <span>{count}</span>
          </h1>
          {this.oddEven()}
          <button className="button" type="button" onClick={this.buttonClick}>
            Increment
          </button>
          <p className="para1">*Increase By Random Number Between 0 to 100</p>
        </div>
      </div>
    )
  }
}

export default EvenOddApp
