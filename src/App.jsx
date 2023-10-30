// Imports
import { Route, Routes, useLocation  } from 'react-router-dom'
import { useState, useEffect, useRef } from 'react'
import { initializeData } from './script/app.js'
import './Styles/app.css'

// Pages
import Home from './Pages/Home'
import Product from './Pages/Product'
import User from './Pages/User'
import Signup from './Pages/Signup'
import Error from './Pages/Error'
import Favorite from './Pages/Favorite'

// Components
import Navbar from './Components/Navbar'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Cart from './Components/Cart'
import MobileSearchBar from './Components/MobileSearchBar'

// Other
const WebsiteTitle = "🛍️ FashionFrenzy"
const CompanyName = "FashionFrenzy"

function App() {
    const [allProducts, setAllProducts] = useState([])

    const [searchResults, setSearchResults] = useState([])
    const [searchValue, setSearchValue] = useState('')

    const [favorite, setFavorite] = useState(initializeData("FAVORITE_PRODUCTS"))
    
    const [cart, setCart] = useState(initializeData("USER_CART"))

    const [userCartOpened, setUserCartOpened] = useState(false)

    const [mobileSearchbarOpened, setMobileSearchbarOpened] = useState(false)
    const [mobileSearchValue, setMobileSearchValue] = useState('')
    const [mobileSearchResults, setMobileSearchResults] = useState([])
    const [mobileSearchClear, setMobileSearchClear] = useState(false)

    const [navbarOpened, setNavbarOpened] = useState(false)
    const [navbarOpenedClear, setNavbarOpenedClear] = useState(false)

    const {pathname} = useLocation()

    const searchInputRef = useRef(null)

    const triggerNavbarScroll = () => {
        const width = window.innerWidth

        if (width >= 680 && !navbarOpenedClear) {
            setNavbarOpened(false)
            setNavbarOpenedClear(true)
        }
    }

    const triggerResize = () => {
        const width = window.innerWidth

        if (width >= 950 && !mobileSearchClear) {
            clearMobileSearch()
            setMobileSearchClear(true)
        }
    }

    const clearMobileSearch = () => {
        setMobileSearchResults([])
        setMobileSearchValue('')
        setMobileSearchbarOpened(false)
      }

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [pathname])

    useEffect(() => {
        const fetchAllProducts = async () => {
            try {
                const response = await fetch('https://mbglegend.github.io/Clothes-products-api/clothes.json')
                const data = await response.json()
                const products = data.products
    
                setAllProducts(products)
            } catch (error) {
                alert('❌| An error occurred, Try refreshing this page!')
            }
        }
    
        fetchAllProducts()
    }, [])

    useEffect(() => {
        window.addEventListener("resize", triggerResize)
        window.addEventListener("resize", triggerNavbarScroll)

        return () => {
            window.removeEventListener("resize", triggerResize)
            window.removeEventListener("resize", triggerNavbarScroll)
        }
    }, [])

    const handleSearchResults = (value, hook) => {
        if (!value || value === "") {
            hook([])
        } else {
            const results = allProducts.filter(product => (product.name).toLowerCase().includes(value.toLowerCase()))

            hook(results)
        }
    }

    return (
        <>
            <Header />
            <Navbar
                WebsiteTitle={WebsiteTitle}
                searchResults={searchResults}
                setSearchResults={setSearchResults}
                favoriteLength={favorite.length}
                cartLength={cart.length}
                handleSearchResults={handleSearchResults}
                searchValue={searchValue}
                setSearchValue={setSearchValue}
                searchInputRef={searchInputRef}
                setUserCartOpened={setUserCartOpened}
                setMobileSearchbarOpened={setMobileSearchbarOpened}
                setMobileSearchClear={setMobileSearchClear}
                setNavbarOpened={setNavbarOpened}
                setNavbarOpenedClear={setNavbarOpenedClear}
            />

            <MobileSearchBar
                handleSearchResults={handleSearchResults}
                setMobileSearchResults={setMobileSearchResults}
                mobileSearchResults={mobileSearchResults}
                mobileSearchValue={mobileSearchValue}
                setMobileSearchValue={setMobileSearchValue}
                mobileSearchbarOpened={mobileSearchbarOpened}
                setMobileSearchbarOpened={setMobileSearchbarOpened}
            />

            <Routes>
                <Route path='/' element={<Home
                    allProducts={allProducts}
                    setNavbarOpened={setNavbarOpened}
                    navbarOpened={navbarOpened}
                />} />

                <Route path='/product/:id' element={<Product
                    allProducts={allProducts}
                    setCart={setCart}
                    cart={cart}
                    setFavorite={setFavorite}
                />}></Route>

                <Route path='/User' element={<User />}></Route>

                <Route path='/signup' element={<Signup />}></Route>

                <Route path='/favorite' element={<Favorite 
                    favorite={favorite}
                    setFavorite={setFavorite}
                    allProducts={allProducts}
                />}></Route>

                <Route path='*' element={<Error />} />
            </Routes>

            <Cart 
                cart={cart}
                allProducts={allProducts}
                setCart={setCart}
                userCartOpened={userCartOpened}
                setUserCartOpened={setUserCartOpened}
            />

            <Footer
                WebsiteTitle={WebsiteTitle}
                CompanyName={CompanyName}
            />
        </>
    )
}

export default App