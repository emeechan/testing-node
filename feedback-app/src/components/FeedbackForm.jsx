import { useState } from "react"
import RatingSelect from "./RatingSelect"
import Card from "./shared/Card"
import Button from "./shared/Button"

function FeedbackForm() {
    const [text, setText] = useState('')
    const [rating, setRating] = useState(10)
    //until they type 10 characters, the button is disabled
    const [btnDisabled, setBtnDisabled] = useState(true)
    //displays the message of the minimum character count
    const [message, setMessage] = useState('')

    //gets what the user is typing
    const handleTextChange = (e) => {
        //if no text then disable the button
        if(text === '') {
            setBtnDisabled(true)
            setMessage(null)
            //if there is text but its less than 10 characters, then disable the button
        }   else if(text !== '' && text.trim().length <= 10) {
            setMessage('Text must be at least 10 characters')
            setBtnDisabled(true)
            //else if it is 10 characters then dont display the message and enable the button
        }   else {
            setMessage(null)
            setBtnDisabled(false)
        }

    setText(e.target.value)
}

  return (
    <Card>
      <from>
        <h2>How would you rate your service with us?</h2>
        <RatingSelect select={(rating) => setRating(rating)}/>
        <div className='input-group'>
            <input 
            onChange={handleTextChange}
            type={text}
            placeholder="Write a review" />
            {/* brings in the Button component */}
            <Button type="submit" isDisabled={btnDisabled}>Send</Button>
        </div>

        {message && <div className='message'>{message}</div>}
      </from>
    </Card>
  )
}

export default FeedbackForm
