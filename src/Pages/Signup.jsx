// Imports
import { Link } from "react-router-dom"
import "../Styles/app.css"

// Components
import HomeAbout from "../Components/Sub-Components/Home-Components/HomeAbout"

const Signup = () => {
    return (
        <div className="UserPage Home">
            <form className="loginForm" onSubmit={(e) => {
                e.preventDefault()
            }}>
                <img src="https://media.istockphoto.com/id/517188688/photo/mountain-landscape.jpg?s=1024x1024&w=0&k=20&c=z8_rWaI8x4zApNEEG9DnWlGXyDIXe-OmsAyQ5fGPVV8=" alt="Nature" />
                <div className="loginFormText">
                    <h1>Sign Up</h1>

                    <label htmlFor="username">Username</label>
                    <input type="username" placeholder="Enter your full name" key='username' />

                    <label htmlFor="email">Email</label>
                    <input type="email" placeholder="Enter email address" key='email' />

                    <label htmlFor="password">Password</label>
                    <input type="password" key='password' placeholder="Password" />

                    <button type="submit">Sign Up</button>
                    <Link to='/User'>Have an account?</Link>
                    <div>
                        <p>Accept Terms of service</p>
                        <input type="checkbox" />
                    </div>
                </div>
                
            </form>

            <HomeAbout />
        </div>
    )
}

export default Signup