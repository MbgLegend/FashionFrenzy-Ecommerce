export const calculateDiscountedPrice = (product) => {
    const discountedPrice = product.price - product.discount
    return discountedPrice.toFixed(2)
}

export const ratingStars = (rating) => {
    const fullStar = <i className="fa-solid fa-star"></i>
    const halfStar = <i className="fa-solid fa-star-half-stroke"></i>
    const emptyStar = <i className="fa-regular fa-star"></i>

    const stars = [];
    for (let i = 1; i <= 5; i++) {
        if (rating >= i) {
            stars.push(fullStar)
        } else if (rating > i - 0.5) {
            stars.push(halfStar)
        } else {
            stars.push(emptyStar)
        }
    }

    return stars
}

export const initializeData = (storageName) => {
    const storedData = JSON.parse(localStorage.getItem(storageName))
    let data = null

    if (storedData === null || !Array.isArray(storedData)) {
        const initialCart = []
        
        localStorage.setItem(storageName, JSON.stringify(initialCart))
        
        data = initialCart
    } else {
        data = storedData
    }

    return data
}

export const saveData = (storageName, hookName, product, popUpHook) => {
    const data = JSON.parse(localStorage.getItem(storageName))
    const newItems = [...data, product.id]
    hookName(newItems)
    localStorage.setItem(storageName, JSON.stringify(newItems))
    popUpHook(true)
    setTimeout(() => {
        popUpHook(false)
    }, 2500)
}