import { Link } from "react-router-dom"

const FeaturedProducts = ({ allProducts }) => {
    const featuredProducts = allProducts.slice(38, 52)

    const calculateDiscountedPrice = (product) => {
        const discountedPrice = product.price - product.discount
        return discountedPrice.toFixed(2)
    }

    return (
        <div className="FeaturedProducts">
            {featuredProducts.map((product) => (
                <Link className="featuredProductBox" key={product.id} to={`/product/${product.id}`}>
                    <img src={product.image_url} />

                    <div className="featuredProductBoxText">
                        <h1>{product.name.length >= 27 ? product.name.slice(0, 27) + '...' : product.name}</h1>
                        <p>
                            {product.discount > 0 ? (
                               <>{calculateDiscountedPrice(product)}$ <del>${product.price}</del>$</> 
                            ) : (
                                product.price + "$"
                            )}
                        </p>
                    </div>
                </Link>
            ))}
        </div>
    )
}

export default FeaturedProducts