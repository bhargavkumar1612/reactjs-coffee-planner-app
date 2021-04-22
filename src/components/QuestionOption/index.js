// Write your code here.
import {Component} from 'react'
import './index.css'

const blueCup =
  'https://assets.ccbp.in/frontend/react-js/coffee-planner-blue-cup-img.png'
const whiteCup =
  'https://assets.ccbp.in/frontend/react-js/coffee-planner-white-cup-img.png'

class QuestionOption extends Component {
  render() {
    const {optionsData, setStateOption, qid, state} = this.props
    const {selected} = state
    const thisSelected = selected[qid]
    return (
      <ul className="options-container">
        {optionsData.map(item => (
          <li
            className={
              thisSelected === item.id
                ? 'option-card-selected option-card'
                : 'option-card'
            }
            key={item.id}
            onClick={() => {
              setStateOption(qid, item.id)
            }}
          >
            <div className="heading-image">
              <h1
                className={
                  thisSelected === item.id ? 'text-selected heading' : 'heading'
                }
              >
                {item.optionTitle}
              </h1>
              <img
                className="cup"
                src={thisSelected === item.id ? whiteCup : blueCup}
                alt="blue-cup"
              />
            </div>
            <p
              className={
                thisSelected === item.id ? 'text-selected para' : 'para'
              }
            >
              {item.description}
            </p>
          </li>
        ))}
      </ul>
    )
  }
}
export default QuestionOption
