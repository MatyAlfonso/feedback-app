import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";

//Components
import FeedbackData from "./data/FeedbackData";
import { Header } from "./components/Header";
import { FeedbackList } from "./components/FeedbackList";
import { FeedbackStats } from "./components/FeedbackStats";
import { FeedbackForm } from "./components/FeedbackForm";
import { AboutIconLink } from "./components/AboutIconLink";

//Routes
import { AboutPage } from "./pages/AboutPage";

function App() {

    const [feedback, setFeedback] = useState(FeedbackData);


    const addFeedback = (newFeedback) => {
        newFeedback.id = uuidv4();
        setFeedback([newFeedback, ...feedback]);
    }

    const deleteFeedback = (id) => {
        if (window.confirm('Are you sure you want to delete?')) {
            setFeedback(feedback.filter((item) => item.id !== id))
        }

    }

    return (
        <Router>
            <Header />
            <div className="container">
                <Routes>
                    <Route exact path="/" element={
                        <>
                            <FeedbackForm handleAdd={addFeedback} />
                            <FeedbackStats feedback={feedback} />
                            <FeedbackList
                                handleDelete={deleteFeedback}
                                feedback={feedback}
                            />
                            <AboutIconLink />
                        </>
                    } />
                    <Route path="/about" element={<AboutPage />} />
                </Routes>
            </div>
        </Router>
    )
}

export default App;
