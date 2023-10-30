// Imports
import { Link } from "react-router-dom"

const Error = () => {
    return (
        <section className="Error">
            <div className="ErrorGrid">
                <div className="ErrorText">
                    <h1>404 Page not found!</h1>
                    <p>It seems that the page you're looking for doesn't exist or has been moved. Please check the URL or return to the home page to explore our website. If you believe this is a mistake, feel free to contact us for assistance.</p>
                    <Link to='/'>Return to home page</Link>
                </div>
                <img src="https://cdn-icons-png.flaticon.com/512/755/755014.png" alt="404 Page not found!" />
            </div>
        </section>
    )
}

export default Error