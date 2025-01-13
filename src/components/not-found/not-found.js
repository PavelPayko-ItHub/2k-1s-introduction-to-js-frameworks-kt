import { useNavigate } from "react-router-dom"

export const NotFound = () => {
    const navigate = useNavigate()

    return (
        <main className="not_found">
        <div className="container">
            <div>
                <div className="404_img" ></div>
                <h2>Page Not Found</h2>
                <p>
                We’re sorry, the page you requested could not be found.
                Please go back to the homepage.
                </p>
            </div>
            <button type="submit" className="btn" onClick={() => navigate("/")}>Go Home</button>
        </div>
        </main>
    )
}