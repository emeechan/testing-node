import { createContext, useState} from 'react'
import { v4 as uuidv4} from 'uuid'

const FeedbackContext = createContext()

export const FeedbackProvider = ({children}) => {
    const [feedback, setFeedback] = useState([
        {
            id: 1,
            text: 'This is feedback item 1',
            rating: 10,
        },
        {
            id: 2,
            text: 'This is feedback item 2',
            rating: 9,
        },
        {
            id: 3,
            text: 'This is feedback item 3',
            rating: 7,
        }
    ])

    const addFeedback = (newFeedback) => {
        newFeedback.id = uuidv4()
        newFeedback.rating = +newFeedback.rating
        console.log(newFeedback)
        //takes the objects that are already in feedback and puts it and the new ones in the array
        setFeedback([newFeedback, ...feedback])
    }

    const deleteFeedback = (id) => {
        if(window.confirm('Are you sure you want to delete?')) {
            //.filter is array method that loops through but filters out whatever you want. we want to filter out the feedback we're deleting
            //returns an array, minus the item we're deleting. this array is set to feedback using setFeedback
            setFeedback(feedback.filter((item) => item.id !== id))
        }
    }

    return <FeedbackContext.Provider value={{
        //pases feedback state into components that need it
        feedback,
        deleteFeedback,
        addFeedback,
    }}>
        {children}
    </FeedbackContext.Provider>
}

export default FeedbackContext