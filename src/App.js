import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";

//Components
import { Header } from "./components/Header";
import { FeedbackList } from "./components/FeedbackList";
import { FeedbackStats } from "./components/FeedbackStats";
import { FeedbackForm } from "./components/FeedbackForm";
import { AboutIconLink } from "./components/AboutIconLink";

//Routes
import { FeedbackProvider } from './context/FeedbackContext';
import { AboutPage } from "./pages/AboutPage";

function App() {
    return (
        <FeedbackProvider>
            <Router>
                <Header />
                <div className="container">
                    <Routes>
                        <Route exact path="/" element={
                            <>
                                <FeedbackForm />
                                <FeedbackStats />
                                <FeedbackList />
                                <AboutIconLink />
                            </>
                        } />
                        <Route path="/about" element={<AboutPage />} />
                    </Routes>
                </div>
            </Router>
        </FeedbackProvider>
    )
}

export default App;
