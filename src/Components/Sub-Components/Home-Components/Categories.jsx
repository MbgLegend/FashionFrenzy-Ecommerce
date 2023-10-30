// Imports
import { Link } from 'react-router-dom'
import '../../../Styles/app.css'

const Categories = ({ setNavbarOpened, navbarOpened }) => {
    const width = window.innerWidth <= 680

    return (
        <div className="Home-Categories">
            <ul className={navbarOpened ? 'active' : ''}>
                <li>
                    <i className="fa-solid fa-x navbarClose" onClick={() => {
                        setNavbarOpened(false)
                    }}></i>
                </li>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/'>Men's</Link>
                </li>
                <li>
                    <Link to='/'>Women's</Link>
                </li>
                <li>
                    <Link to='/'>Jewelry</Link>
                </li>
                <li>
                    <Link to='/'>Perfume</Link>
                </li>
                <li>
                    <Link to='/'>Blog</Link>
                </li>
                <li>
                    <Link to='/'>Contact</Link>
                </li>
            </ul>
            <div className={`homeBackdrop ${navbarOpened ? 'open' : ''}`} onClick={() => {
                setNavbarOpened(false)
                console.log("Clicked!")
            }}></div>
        </div>
    )
}

export default Categories