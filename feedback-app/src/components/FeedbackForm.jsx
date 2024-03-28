import { useState, useContext, useEffect } from 'react'
import RatingSelect from './RatingSelect'
import Card from './shared/Card'
import Button from './shared/Button'
import FeedbackContext from '../context/FeedbackContext'

function FeedbackForm() {
  const [text, setText] = useState('')
  const [rating, setRating] = useState(10)
  //until they type 10 characters, the button is disabled
  const [btnDisabled, setBtnDisabled] = useState(true)
  //displays the message of the minimum character count
  const [message, setMessage] = useState('')

  const { addFeedback, feedbackEdit, updateFeedback } =
    useContext(FeedbackContext)

    //function which takes in a call back and an array of dependancies
    //if feedbackEdit value changes, it will run
  useEffect(() => {
    if (feedbackEdit.edit === true) {
      setBtnDisabled(false)
      setText(feedbackEdit.item.text)
      setRating(feedbackEdit.item.rating)
    }
  }, [feedbackEdit])

  //gets what the user is typing
  const handleTextChange = (e) => { 
    //if no text, then button is disabled
    if (text === '') {
      setBtnDisabled(true)
      setMessage(null)
      
      //if there is text but it is less than 10 characters, then disbale the button
    } else if (text !== '' && text.trim().length <=10) {
      setMessage('Text must be at least 10 characters')
      setBtnDisabled(true)
      //else if it is 10 characters then dont display the message, and enable the button
    } else {
      setMessage(null)
      setBtnDisabled(false)
    }
    setText(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (text.trim().length > 10) {
      const newFeedback = {
        //same as saying text: text,
        text,
        rating,
      }

    if(feedbackEdit.edit === true){
        updateFeedback(feedbackEdit.item.id, newFeedback)
    } else {
        //else if nothing to be edited, then add it
      addFeedback(newFeedback)
    }

       //clears the text field after writing a review
        setText('')
      }

      // ADDIONTAL CODE
      setBtnDisabled(true) // 👈  add this line to reset disabled
      setRating(10) //👈 add this line to set rating back to 10
      setText('')
    }
      //ADDITIONAL CODE

    function FeedbackForm(){
  }


  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>How would you rate your service with us?</h2>
        <RatingSelect select={setRating} selected={rating} />
        <div className='input-group'>
          <input
            onChange={handleTextChange}
            type='text'
            placeholder='Write a review'
            value={text}
          />
    {/*brings in the button component */}
          <Button type='submit' isDisabled={btnDisabled}>
            Send
          </Button>
        </div>

        {message && <div className='message'>{message}</div>}
      </form>
    </Card>
  )
}

export default FeedbackForm