import './index.css'
import { useState } from 'react'
import Header from './components/Header'
import FeedbackList from './components/FeedbackList'
import FeedbackStats from './components/FeedbackStats'

function App() {
    //app level state
    //[const name, function to edit state]
    const [feedback, setFeedback] = useState([
        {
        id: 1,
        rating: 10,
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. consequuntur vel vitae commodi alias voluptatem est voluptatum ipsa quae.',
        },
        {
        id: 2,
        rating: 9,
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. consequuntur vel vitae commodi alias voluptatem est voluptatum ipsa quae.',
        },
        {
        id: 3,
        rating: 8,
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. consequuntur vel vitae commodi alias voluptatem est voluptatum ipsa quae.',
        },
        ])

        const deleteFeedback = (id) => {
            if(window.confirm('Are you sure you want to delete?')) {
                //.filter is array method that loops through but filters out whatever you want. we want to filter out the feedback we're deleting
                //returns an array, minus the item we're deleting. this array is set to feedback using setFeedback
                setFeedback(feedback.filter((item) => item.id !== id))
            }
        }

    return (
        //{feedback} is a state so when it changes it will automatically change in feedbackStats component
        <>
        <Header />
        <div className='container'>
            <FeedbackStats feedback={feedback} />
            <FeedbackList feedback={feedback} 
            handleDelete={deleteFeedback} />
    </div>
    </>
 )
}    

export default App