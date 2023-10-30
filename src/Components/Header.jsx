const Header = () => {
    return (
        <header className="Header">
            {/* Header left */}
            <div className="Header-left">
                <ul>
                    <li>
                        <i className="fa-brands fa-facebook"></i>
                    </li>
                    <li>
                        <i className="fa-brands fa-x-twitter"></i>
                    </li>
                    <li>
                        <i className="fa-brands fa-instagram"></i>
                    </li>
                    <li>
                        <i className="fa-brands fa-linkedin"></i>
                    </li>
                </ul>
            </div>

            {/* Header Center */}
            <div className="Header-center">
                <p>Free shipping this week, order over 75$</p>
            </div>

            {/* Header Right */}
            <div className="Header-right">
                <ul>
                    <li>
                        <select>
                            <option>USD $</option>
                            <option>€ EUR</option>
                        </select>
                    </li>
                    <li>
                        <select>
                            <option>ENGLISH</option>
                            <option>FRENCH</option>
                            <option>ARABIC</option>
                        </select>
                    </li>
                </ul>
            </div>
        </header>
    )
}

export default Header