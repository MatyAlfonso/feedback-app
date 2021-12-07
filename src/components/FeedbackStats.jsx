import { useContext } from "react";

import FeedbackContext from "../context/FeedbackContext";

export const FeedbackStats = () => {

    const { feedback } = useContext(FeedbackContext);

    //Calculate rating avg

    let average = feedback.reduce((accumulator, current) => {
        return accumulator + current.rating
    }, 0) / feedback.length;

    average = average.toFixed(1).replace(/[.,]0$/, '')

    return (
        <div className='feedback-stats'>
            <h4>{feedback.length} reviews</h4>
            <h4>Average rating: {isNaN(average) ? 0 : average}</h4>
        </div>
    )
}
