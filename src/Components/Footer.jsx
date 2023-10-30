// Imports
import { Link } from 'react-router-dom'
import '../Styles/app.css'

const Footer = ({ WebsiteTitle }) => {
    return  (
        <footer className="Footer">
            <div className="FooterGrid">
                <div>
                    <Link to='/' className='Logo'>{WebsiteTitle}</Link>
                    <p>Discover the latest trends at FashionFrenzy – your ultimate style destination!</p>
                    <li className='FooterBrands'>
                        <i className="fa-brands fa-facebook"></i>
                        <i className="fa-brands fa-x-twitter"></i>
                        <i className="fa-brands fa-instagram"></i>
                        <i className="fa-brands fa-linkedin"></i>
                    </li>
                </div>
                <div>
                    <h1>About</h1>
                    <ul>
                        <li>
                            Home
                        </li>
                        <li>
                            Get in touch
                        </li>
                        <li>
                            FAQs
                        </li>
                    </ul>
                </div>
                <div>
                    <h1>Product</h1>
                    <ul>
                        <li>
                            Shop
                        </li>
                        <li>
                            Men
                        </li>
                        <li>
                            Women
                        </li>
                    </ul>
                </div>
                <div>
                    <h1>Newsletter</h1>
                    <p>Join our online community to get 25% discount!</p>
                    <div className="FooterInput">
                        <form>
                            <input 
                                type="email"
                                placeholder='Enter your email' 
                                required
                            />
                            <button>Subscribe</button>
                        </form>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer