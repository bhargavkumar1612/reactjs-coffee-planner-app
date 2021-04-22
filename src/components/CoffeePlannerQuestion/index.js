// Write your code here.
import {Component} from 'react'
import './index.css'

class CoffeePlannerQuestion extends Component {
  render() {
    const {questionTitle} = this.props
    return <h1 className="question">{questionTitle}</h1>
  }
}

export default CoffeePlannerQuestion
