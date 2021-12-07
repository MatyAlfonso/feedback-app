import { Card } from "../components/shared/Card"
import { Link } from "react-router-dom"

export const AboutPage = () => {
    return (
        <Card>
            <div className="about">
                <h1>About this project</h1>
                <p>This is a React App to leave feedback for a product or a service.</p>
                <p>Version: 1.0.0</p>
                <Link to="/">
                    <p>Go back to home page.</p>
                </Link>
            </div>
        </Card>
    )
}
