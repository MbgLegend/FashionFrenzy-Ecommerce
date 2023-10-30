import "../../../Styles/app.css"

const HomeAbout = () => {
    return (
        <article className="homeAbout">
                <div className="homeAboutGrid">
                    <div className="testimonial">
                        <h1>Testiomonial</h1>
                        <hr />
                        <div className='testimonialBox'>
                            <img src='https://images.unsplash.com/photo-1633332755192-727a05c4013d?auto=format&fit=crop&q=80&w=2080&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt="User" />
                            <h3>John Doe</h3>
                            <i className="fa-solid fa-quote-left"></i>
                            <p>Fashion Frenzy exceeded my expectations! Trendy styles, easy shopping, and fast delivery. My go-to e-commerce site!</p>
                        </div>
                    </div>
                    <div className="homeAboutBanner">
                        <div>
                            <h6>30% Discount</h6>
                            <h1>Winter Collection</h1>
                            <p>Starting at 50$</p>
                        </div>
                    </div>
                    <div className="services">
                        <h1>Our Services</h1>
                        <hr />
                        <div className="servicesBox">
                            <ul>
                                <li>
                                    <i className="fa-solid fa-shirt"></i>  
                                    <div>
                                        <h3>Quality Clothes</h3>
                                        <p>Hight-End quality Clothes</p>
                                    </div>    
                                </li>
                                <li>
                                    <i className="fa-solid fa-money-bill-wave"></i>  
                                    <div>
                                        <h3>Cheap Prices</h3>
                                        <p>Good quality for cheap!</p>
                                    </div>    
                                </li>
                                <li>
                                <i className="fa-solid fa-truck-fast"></i>
                                    <div>
                                        <h3>Fast shipping</h3>
                                        <p>1-4 days after ordering!</p>
                                    </div>    
                                </li>
                                <li>
                                    <i className="fa-solid fa-headset"></i>
                                    <div>
                                        <h3>24/7 Supprt</h3>
                                        <p>Get instant support!</p>
                                    </div>
                                </li>
                                <li>
                                    <i className="fa-solid fa-rotate-left"></i>
                                    <div>
                                        <h3>Return Policy</h3>
                                        <p>Easy & Free retrun</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </article>
        )
}

export default HomeAbout