// Imports
import '../../../Styles/app.css'
import { calculateDiscountedPrice } from '../../../script/app'
import { Link } from 'react-router-dom'

const ProductsBox = ({ product }) => {

    return (
        <Link className='productBox' to={`/product/${product.id}`}>
            <img src={product.image_url} alt={product.name} />
            <div className="productBoxText">
                <h1>{product.name.length > 15 ? product.name.slice(0, 15) + '...' : product.name}</h1>
                <span>{product.category}</span>
                <p>
                    {product.discount > 0 ? (
                        <>{calculateDiscountedPrice(product)}$ <del>${product.price}</del>$</> 
                    ) : (
                        product.price + "$"
                    )}
                </p>
            </div>  
        </Link>
    )
}

export default ProductsBox