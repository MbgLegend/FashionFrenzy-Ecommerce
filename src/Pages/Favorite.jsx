// Imports
import { Link } from 'react-router-dom'
import { calculateDiscountedPrice, ratingStars } from '../script/app'
import '../Styles/app.css'

const Favorite = ({ favorite, setFavorite, allProducts }) => {
    const likedProducts = allProducts.filter(product => favorite.includes(product.id));
  
    const handleQuantityChange = (productId) => {
      const updatedCart = favorite.filter(item => item !== productId);
  
      localStorage.setItem("FAVORITE_PRODUCTS", JSON.stringify(updatedCart));
      setFavorite(updatedCart);
    }
  
    return (
      <section className='Favorite Home'>
        <h1>Liked Products</h1>
        {likedProducts.length > 0 ? (
          <div className="FavoriteGrid allProductsContainer">
            {likedProducts.map(product => (
              <div className='likedProductBox' key={product.id}>
                <Link to={`/product/${product.id}`}>
                  <img src={product.image_url} alt={product.name} />
                </Link>
                <div className="productComponentText">
                  <h6>
                    {product.category}{' '}
                    {favorite.filter(fav => fav === product.id).length > 1 && `(liked ${favorite.filter(fav => fav === product.id).length} times)`}
                  </h6>
                  <h3>{product.name.length > 15 ? product.name.slice(0, 15) + '...' : product.name}</h3>
                  <span>
                    {ratingStars(product.rating)} <span>({Math.floor(Math.random() * 1200) + 30})</span>
                  </span>
                  <div>
                  <p>
                    {product.discount > 0 ? (
                        <>{calculateDiscountedPrice(product)}$ <del>${product.price}$</del></>
                    ) : (
                        product.price + '$'
                    )}
                    </p>
                    <i className="fa-solid fa-trash" onClick={() => handleQuantityChange(product.id)}></i>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="productErrorMessage">❌ You have no liked products!</p>
        )}
      </section>
    )
  }
  
  export default Favorite