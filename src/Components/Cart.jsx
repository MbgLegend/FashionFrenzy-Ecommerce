// Imports
import { calculateDiscountedPrice } from '../script/app.js'
import { useEffect, useState } from 'react'

const Cart = ({ cart, allProducts, setCart, setUserCartOpened, userCartOpened }) => {
    const [total, setTotal] = useState(0)
    const userCartItems = []
    let totalAmount = 0

    allProducts.forEach((product) => {
        const productCount = cart.filter((item) => item === product.id).length
        let productPrice 

        if (product.discount > 0) {
            productPrice = calculateDiscountedPrice(product)
        } else {
            productPrice = product.price
        }
        if (productCount > 0) {
            userCartItems.push({ ...product, quantity: productCount })
            totalAmount += productCount * productPrice
        }
    })

    useEffect(() => {
        setTotal(totalAmount)
    }, [totalAmount])

    const handleQuantityChange = (productId, increment, allProducts) => {
        const updatedCart = [...cart]
        const productIndex = updatedCart.indexOf(productId)
        const productCount = cart.filter((item) => item === productId).length

        if (increment) {
            updatedCart.push(productId)
        } else {
            if (allProducts) {
                updatedCart.splice(productIndex, productCount)
            } else {
                updatedCart.splice(productIndex, 1)
            }
        }

        localStorage.setItem("USER_CART", JSON.stringify(updatedCart))
        setCart(updatedCart)
    }

    return (
        <div>
             <aside className="userCart" style={userCartOpened ? { transform: 'translateX(0)' } : { transform: 'translateX(100%)' }}>
            <div className="userCartHeader">
                <h1>Your shopping cart ({cart.length})</h1>
                <i className="fa-solid fa-x" onClick={() => setUserCartOpened(false)}></i>
            </div>
            <div className="userCartProducts">
                {userCartItems && userCartItems.length > 0 ? (
                    <ul>
                        {userCartItems.map((product) => (
                            <li key={`${product.name} | ${product.id}`}>
                                <img src={product.image_url} alt={product.name} />
                                <div>
                                    <div className='userCartProductHeader'>
                                        <h1>{product.name.length > 15 ? product.name.slice(0, 15) + "..." : product.name}</h1>
                                        <p>
                                            {product.discount > 0 ? (
                                                <>{calculateDiscountedPrice(product)}$ <del>${product.price}$</del></>
                                            ) : (
                                                product.price + "$"
                                            )}
                                        </p>
                                    </div>
                                    <div className='userCartProductFooter'>
                                        <div className="quantity">
                                            <button onClick={() => handleQuantityChange(product.id, false, false)}>-</button>
                                            <input type="text" disabled value={product.quantity} />
                                            <button onClick={() => handleQuantityChange(product.id, true, false)}>+</button>
                                        </div>
                                        <i className="fa-solid fa-trash" onClick={() => handleQuantityChange(product.id, false, true)}></i>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <div className="EmptyCart">
                        <img src="https://cdn-icons-png.flaticon.com/512/2038/2038854.png" alt="Empty cart" />
                        <h1>Your cart is empty</h1>
                        <button onClick={() => setUserCartOpened(false)}>Keep Browsing</button>
                    </div>
                )}
            </div>
            <div className="userCartFooter">
                <h1>Subtotal</h1>
                <div className="userCartFooterFlex">
                    <h2>{total.toFixed(2)}$</h2>
                    <button>Go To Checkout</button>
                </div>
            </div>
            </aside>
            <div className={`backdrop ${userCartOpened ? 'open' : ''}`} onClick={() => setUserCartOpened(false)}></div>
        </div>
    );
};

export default Cart