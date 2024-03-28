import {motion, AnimatePresence}from 'framer-motion'
import { useContext } from 'react'
import FeedbackItem from "./FeedbackItem"
import FeedbackContext from '../context/FeedbackContext'

function FeedbackList() {
  //extracts what we want from feedbackContext using useContext hook and passing in the context we want to use ie FeedbackContext
  const {feedback} = useContext(FeedbackContext)

  if (!feedback || feedback.length === 0 ) {
    return <p>No Feedback Yet</p>
  }

  //maps through all the items and then embeds the feedback item and passes it into that component
  //loops through and outputs each feedback item
  //handleDelete is a prop for feedbackItem
  return (
    <div className='feedback-list'>
      <AnimatePresence>
      {feedback.map((item) => (
        <motion.div 
        key={item.id}
        //initially needs to be invisible so it can fade in
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        exit={{opacity: 0}}
        >
        <FeedbackItem 
        key={item.id} 
        item={item} 
        />
        </motion.div>
      ))}
      </AnimatePresence>
        </div>
    )
  }
  //return (
  //<div className='feedback-list'>
    //{feedback.map((item) => (
      //<FeedbackItem 
      //key={item.id} 
      //item={item} 
      //handleDelete={handleDelete} />
    //))}
      //</div>
  //)
//}
export default FeedbackList
