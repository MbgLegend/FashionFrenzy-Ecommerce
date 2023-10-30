// Imports
import { calculateDiscountedPrice, ratingStars } from '../script/app.js'

// Components
import Categories from '../Components/Sub-Components/Home-Components/Categories'
import Banner from '../Components/Sub-Components/Home-Components/Banner'
import FeaturedProducts from '../Components/Sub-Components/Home-Components/FeaturedProducts'
import CategorySelector from '../Components/Sub-Components/Home-Components/CategorySelector'
import ProductsBox from '../Components/Sub-Components/Home-Components/ProductsBox'
import HomeAbout from '../Components/Sub-Components/Home-Components/HomeAbout.jsx'

import { Link } from 'react-router-dom'

const Home = ({ allProducts, navbarOpened, setNavbarOpened }) => {
    const newArrivals = allProducts.slice(20, 25)
    const trending  = allProducts.slice(30, 35)
    const topRated = allProducts.slice(10, 15)
    const mostSelling = allProducts.slice(0, 4)
    const dealOfTheDayProduct = allProducts.slice(48, 49)[0]

    return (
        <section className="Home">
            <Categories
                navbarOpened={navbarOpened}
                setNavbarOpened={setNavbarOpened}
            />

            <Banner />

            <FeaturedProducts 
                allProducts={allProducts}
            />

            <div className="homeGrid">
                <aside>
                    <CategorySelector />

                    <h1>Most Selling</h1>

                    <div>
                        {mostSelling.map((product) => (
                            <Link className="mostSellingProducts" to={`/product/${product.id}`} key={product.id}>
                                <img src={product.image_url} alt={product.name} />
                                <div className="mostSellingProductsText">
                                <h1>{product.name.length >= 15 ? product.name.slice(0, 15) + '...' : product.name}</h1>
                                    <span>
                                        {ratingStars(product.rating)}
                                    </span>
                                    <p>
                                        {product.discount > 0 ? (
                                        <>{calculateDiscountedPrice(product)}$ <del>${product.price}$</del></> 
                                        ) : (
                                            product.price + "$"
                                        )}
                                    </p>
                                </div>
                            </Link>
                        ))}
                    </div>
                </aside>
                <main className='HomeShopContent'>
                    <div className="HomeProductsPreview">
                        <div>
                            <h1>New Arrivals</h1>
                            <hr />
                            {newArrivals.map((product) => (
                                <ProductsBox
                                    product={product}
                                    key={product.id}
                                />
                            ))}
                        </div>
                        <div>
                            <h1>Trending</h1>
                            <hr />
                            {trending.map((product) => (
                                <ProductsBox
                                    product={product}
                                    key={product.id}
                                />
                            ))}
                        </div>
                        <div>
                            <h1>Top Rated</h1>
                            <hr />
                            {topRated.map((product) => (
                                <ProductsBox
                                    product={product}
                                    key={product.id}
                                />
                            ))}
                        </div>
                    </div>
                    <h1>Deal Of The Day</h1>
                    <hr />
                    {dealOfTheDayProduct ? (
                    <div className="dealOfTheDay">
                        <img src={dealOfTheDayProduct.image_url} alt={dealOfTheDayProduct.name} />
                        <div className="dealOfTheDayText">
                        <span>
                            {ratingStars(dealOfTheDayProduct.rating)} <span>({Math.floor(Math.random() * 600) + 300})</span>
                        </span>
                        <h1>{dealOfTheDayProduct.name}</h1>
                        <p>{dealOfTheDayProduct.description}</p>
                        <p>
                            {dealOfTheDayProduct.discount > 0 ? (
                            <>{calculateDiscountedPrice(dealOfTheDayProduct)}$ <del>${dealOfTheDayProduct.price}$</del></> 
                            ) : (
                            dealOfTheDayProduct.price + "$"
                            )}
                        </p>
                        <Link to={`/product/${dealOfTheDayProduct.id}`}>View Product</Link>
                        </div>
                    </div>
                    ) : (
                    <p>No deal of the day available</p>
                    )}
                    <h1 style={{marginTop: '1.65rem'}}>All Products</h1>
                    <hr />
                    <div className="allProductsContainer" key='allProductsShop'>
                        {allProducts.map((product) => (
                            <Link to={`/product/${product.id}`} key={product.id}>
                                <img src={product.image_url} alt={product.name} />
                                <div className="productComponentText">
                                    <h6>{product.category}</h6>
                                    <h3>{product.name}</h3>
                                    <span>
                                        {ratingStars(product.rating)} <span>({Math.floor(Math.random() * 1200) + 30})</span>
                                    </span>
                                    <p>
                                        {product.discount > 0 ? (
                                        <>{calculateDiscountedPrice(product)}$ <del>${product.price}$</del></> 
                                        ) : (
                                            product.price + "$"
                                        )}
                                    </p>
                                </div>
                            </Link>
                        ))}
                    </div>
                </main>
            </div>

            <HomeAbout />
        </section>
    )
}

export default Home