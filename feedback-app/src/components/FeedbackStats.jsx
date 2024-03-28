import { useContext } from 'react'
import FeedbackContext from '../context/FeedbackContext'

function FeedbackStats() {
  const {feedback} = useContext(FeedbackContext)
//calculate ratings average
//takes in accumulator and current value
let average = feedback.reduce((acc, cur) => {
    return acc + cur.rating
}, 0) / feedback.length

//makes the average go up to 1 decimal place, or if a whole number, does not include a decimal
average = average.toFixed(1).replace(/[.,]0$/,'')

    return (
        //if no reviews so average is NaN, show 0, else show average
      <div className="feedback-stats">
        <h4>{feedback.length} Reviews</h4>
        <h4>Average Rating: {isNaN(average) ? 0 : average } </h4>
      </div>
    )
  }

export default FeedbackStats
