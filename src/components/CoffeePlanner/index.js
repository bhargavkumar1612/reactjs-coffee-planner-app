// Write your code here.
import {Component} from 'react'
import './index.css'
import CoffeePlannerQuestion from '../CoffeePlannerQuestion'
import QuestionOption from '../QuestionOption'

class CoffeePlaner extends Component {
  state = {
    selected: [null, null, null, null, null],
    message: null,
  }

  setStateOption = (qid, aid) => {
    this.setState(prev => {
      const {selected} = prev
      selected[qid] = aid
      return {selected}
    })
  }

  setMessage = data => {
    const {selected} = this.state
    const msg = selected.some(item => item === null) ? (
      <div className="message">
        Kindly select options for all the questions.
      </div>
    ) : (
      <div className="message">
        &ldquo;I Drink my coffee as{' '}
        <span className="green-text">
          {data[0].optionsData[selected[0]].optionTitle}
        </span>
        , with a{' '}
        <span className="green-text">
          {data[1].optionsData[selected[1] % 3].optionTitle}
        </span>{' '}
        type of bean.{' '}
        <span className="green-text">
          {data[2].optionsData[selected[2] % 3].optionTitle}
        </span>{' '}
        ground ala{' '}
        <span className="green-text">
          {data[3].optionsData[selected[3] % 3].optionTitle}
        </span>
        , sent to me{' '}
        <span className="green-text">
          {data[4].optionsData[selected[4] % 3].optionTitle}
        </span>
        .&rdquo;
      </div>
    )
    console.log(data)
    this.setState({selected, message: msg})
  }

  render() {
    const {coffeePlannerData} = this.props
    const {message} = this.state
    console.log(message)
    return (
      <div className="bg-container">
        <div className="banner">
          <div className="inside-banner-container">
            <h1>Create a Plan</h1>
            <p>
              We offer an assortment of best artesian coffee all around the
              globe and deliver fresh to your door. Create your plan.
            </p>
          </div>
        </div>
        <div className="questions-options-container">
          {coffeePlannerData.map(item => (
            <div key={item.id}>
              <CoffeePlannerQuestion questionTitle={item.questionTitle} />
              <QuestionOption
                optionsData={item.optionsData}
                setStateOption={this.setStateOption}
                qid={item.id}
                state={this.state}
              />
            </div>
          ))}
        </div>
        <div className="button-message-container">
          <button
            className="button"
            type="button"
            onClick={() => this.setMessage(coffeePlannerData)}
          >
            Create my plan!
          </button>
          {message}
        </div>
      </div>
    )
  }
}

export default CoffeePlaner
