import './index.css'
import { useState } from 'react'
import Header from './components/Header'
import FeedbackList from './components/FeedbackList'

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



    return (
        <>
        <Header />
        <div className='container'>
            <FeedbackList feedback={feedback}/>
    </div>
    </>
 )
}    

export default App