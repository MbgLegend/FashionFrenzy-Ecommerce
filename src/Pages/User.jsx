// Imports
import "../Styles/app.css"
import { Link } from "react-router-dom"

// Componenets
import HomeAbout from "../Components/Sub-Components/Home-Components/HomeAbout"

const User = () => {
    return (
        <div className="UserPage Home">
            <form className="loginForm">
                <img src="https://media.istockphoto.com/id/517188688/photo/mountain-landscape.jpg?s=1024x1024&w=0&k=20&c=z8_rWaI8x4zApNEEG9DnWlGXyDIXe-OmsAyQ5fGPVV8=" alt="Nature" />
                <div className="loginFormText">
                    <h1>Sign In</h1>

                    <label htmlFor="email">Email</label>
                    <input type="email" placeholder="Enter email address" key='email'/>

                    <label htmlFor="password">Password</label>
                    <input type="password" key='password' placeholder="Password" />

                    <button type="submit">Sign In</button>
                    <Link to='/signup'>Do not have an account?</Link>
                </div>
                
            </form>

            <HomeAbout />
        </div>
    )
}

export default User