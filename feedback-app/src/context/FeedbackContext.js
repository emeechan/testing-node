import { createContext, useState, useEffect} from 'react'
import { v4 as uuidv4} from 'uuid'

const FeedbackContext = createContext()

export const FeedbackProvider = ({children}) => {
    const [isLoading, setIsLoading] = useState(true)
    const [feedback, setFeedback] = useState([])

    //if edit icon clicked, it will allow it to be editted
    const [feedbackEdit, setFeedbackEdit] = useState({
        item: {},
        edit: false
    })

    useEffect(() => {
        fetchFeedback()
    }, [])

    //fetches feedback
    const fetchFeedback = async () => {
        const response = await fetch("http://localhost:5000/feedback?_sort=id")
        const data = await response.json()
        setFeedback(data);
        setIsLoading(false)

    }

    // to add feedback
    const addFeedback = (newFeedback) => {
        newFeedback.id = uuidv4()
        newFeedback.rating = +newFeedback.rating
        console.log(newFeedback)
        //takes the objects that are already in feedback and puts it and the new ones in the array
        setFeedback([newFeedback, ...feedback])
    }

    //to delete feedback
    const deleteFeedback = (id) => {
        if(window.confirm('Are you sure you want to delete?')) {
            //.filter is array method that loops through but filters out whatever you want. we want to filter out the feedback we're deleting
            //returns an array, minus the item we're deleting. this array is set to feedback using setFeedback
            setFeedback(feedback.filter((item) => item.id !== id))
        }
    }

    //update feedback item 
    //updItem is updated item
    const updateFeedback = (id, updItem) => {
    //returns an array with the updated item
    //for each feedback it calls an item and runs a condition of if the item id is equal to the one being passed in that we want to update 
    //if so, update the item
    //else, return the current item
        setFeedback(feedback.map((item) => item.id === id ? { ...item, ...updItem } : item));
    }

    //set item to be updated
    const editFeedback = (item) => {
        setFeedbackEdit({
            item,
            edit: true,
        })
    }

    return <FeedbackContext.Provider value={{
        //pases feedback state into components that need it
        feedback,
        feedbackEdit,
        isLoading,
        deleteFeedback,
        addFeedback,
        //the function that runs when we click the edit button
        editFeedback,
        //the actual piece of state that holds the item and the boolean
        updateFeedback,
    }}>
        {children}
    </FeedbackContext.Provider>
}

export default FeedbackContext

//test