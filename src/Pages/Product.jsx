// Imports
import { useParams, Link } from "react-router-dom"
import { calculateDiscountedPrice, ratingStars, saveData } from '../script/app.js'
import { useState } from "react"
import '../Styles/app.css'

const Product = ({ allProducts, setCart, setFavorite }) => {    
    const { id } = useParams()
    const product = allProducts.find(product => product.id === Number(id))
    const [showPopUp, setShowPopUp] = useState(false)
    let suggestedProducts = []

    if (product) {
        suggestedProducts = allProducts.filter(suggested =>  suggested.category ===  product.category && suggested.id !== product.id)
        const allProductsWithoutSelected = allProducts.filter(allproducts => allproducts.id !== product.id)

        const startIndex = Math.floor(Math.random() * (allProducts.length - 1)) - suggestedProducts.length
        const endIndex = startIndex + 7

        if (suggestedProducts && Array.isArray(suggestedProducts)) {
            if (suggestedProducts.length <= 4) {
                suggestedProducts = [...suggestedProducts, ...allProductsWithoutSelected.slice(startIndex, endIndex)]
            } else {
                suggestedProducts = suggestedProducts;
            }
        } else {
            suggestedProducts = allProductsWithoutSelected.slice(startIndex, endIndex)
        } 
    }

    if (!product) {
        return (
            <div className="productNotFound">
                <div>
                    <h1>Product Not Found!</h1>
                    <p>Make sure the product you have entered exists!</p>
                    <Link to='/'>Go back to home page</Link>
                </div>
                <img 
                    src="https://static.vecteezy.com/system/resources/previews/015/131/133/original/crossing-sign-error-404-png.png" 
                    alt="404 page not found" 
                />
            </div>
        )
    }

    return (
        <>
            <div className="productPopUp" style={showPopUp ? { transform: 'translateX(-50%) translateY(0%)' } : { transform: 'translateX(-50%) translateY(-500%)' }}>
                Item has been added to cart ✅
            </div>
            {product && (
                <main className="product">
                <Link className="go-back" to='/'><i className="fa-solid fa-arrow-left"></i> Go Back</Link>
                <div className="productGrid">
                    <img src={product.image_url} alt={product.name} />
                    <div className="productInformation">
                        <h6><Link to='/'>Home</Link> / {product.category}</h6>
                        <h1>{product.name}</h1>
                        <p className="price">
                            {product.discount > 0 ? (
                                <>{calculateDiscountedPrice(product)}$ <del>${product.price}$</del></> 
                            ) : (
                                product.price + "$"
                            )}
                        </p>
                        <span>
                            {ratingStars(product.rating)} <span>({Math.floor(Math.random() * 3000) + 50})</span>
                        </span>
                        <p>{product.description}</p>
                        <div className="buttons">
                            <button onClick={() => {
                                saveData("USER_CART", setCart, product, setShowPopUp)
                            }}><i className="fa-solid fa-cart-shopping"></i> Add To Cart</button>

                            <button onClick={() => {
                                saveData("FAVORITE_PRODUCTS", setFavorite, product, setShowPopUp)
                            }}><i className="fa-solid fa-heart"></i> Whitlist</button>
                        </div>
                    </div>
                </div>
                {product && suggestedProducts && suggestedProducts.length !== 0 && (
                    <>
                        <h2>Products you may also like</h2>         
                        <hr /> 
                        <div className="allProductsContainer">
                            {suggestedProducts.map((product) => (
                                <Link to={`/product/${product.id}`} key={product.id}>
                                    <img src={product.image_url} alt={product.name} />
                                    <div className="productComponentText">
                                        <h6>{product.category}</h6>
                                        <h3>{product.name.length > 15 ? product.name.slice(0, 15) + '...' : product.name}</h3>
                                        <span>
                                            {ratingStars(product.rating)} <span>({Math.floor(Math.random() * 1200) + 30})</span>
                                        </span>
                                        <p>
                                            {product.discount > 0 ? (
                                                <>{calculateDiscountedPrice(product)}$ <del>${product.price}$</del></> 
                                            ) : (
                                                product.price + '$'
                                            )}
                                        </p>
                                    </div>
                                </Link>
                            ))}
                        </div>     
                    </>  
                )}
                </main>
            )}
        </>
    )
}

export default Product