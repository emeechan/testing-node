// example of a hook is useState
import {useState} from 'react'

function FeedbackItem() {
    //setting a piece of state
    //brackets holds the default for that piece of state
    const [rating, setRating] = useState(7)
    const [text, setText] = useState('This is an example of a feedback item.')

  //adds on to rating each time button is clicked
    const handleClick = () => {
    setRating((prev) => {
        return prev + 1
    })
  }
  
    return (
    //when button is clicked, call the handleClick function
    <div className='card'>
      <div className="num-display">{rating}</div>
      <div className="text-display">{text}</div>
      <button onClick={handleClick}>Click</button>
    </div>
  )
}

export default FeedbackItem
