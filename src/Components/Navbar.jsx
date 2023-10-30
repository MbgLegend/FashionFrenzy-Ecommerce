// Imports
import { Link } from "react-router-dom"
import '../Styles/app.css'

const Navbar = (
    { 
        WebsiteTitle, searchResults, favoriteLength, cartLength, handleSearchResults, searchValue, setSearchValue, searchInputRef, setUserCartOpened, setMobileSearchbarOpened, setSearchResults, setMobileSearchClear, setNavbarOpened, setNavbarOpenedClear
    }
    ) => {
    return (
        <nav className="Navbar">
            {/* Navbar Left */}
            <div className="Navbar-left">
                <Link to='/' className="Logo">{ WebsiteTitle }</Link>
            </div>
            
            {/* Navbar Search */}
            <div className="Searchbar">
                <input 
                    ref={searchInputRef}
                    key='searchBar'
                    type="text" 
                    value={searchValue}
                    onChange={(event) => {
                        setSearchValue(event.target.value)
                        handleSearchResults(event.target.value, setSearchResults)
                    }}
                    placeholder="Enter product name..."
                />
                <i className="fa-solid fa-magnifying-glass"></i>
                <div className="searchBarResults" style={searchValue.length > 0 ? {display: 'flex'} : {display: 'none'}}>
                <ul>
                {searchResults.length > 0 ? (
                    searchResults.map((result) => (
                        <Link key={result.id} to={`/product/${result.id}`} onClick={() => {
                            handleSearchResults('', setSearchResults)
                            setSearchValue('')
                        }}>
                            <img src={result.image_url} alt={result.name}/>
                            {result.name}
                        </Link>
                    ))
                    ) : (
                        <p>❌ Product Not found!</p>
                    )}
                </ul>
                </div>
            </div>

            {/* Navbar Right */}
            <div className="Navbar-right">
                <ul>
                    <li>
                        <div>
                            <i className="fa-solid fa-magnifying-glass" onClick={() => {
                                setMobileSearchClear(false)
                                setMobileSearchbarOpened(prevValue => !prevValue)
                            }}></i>
                        </div>
                    </li>
                    <li>
                        <Link to='/user'>
                            <i className="fa-solid fa-user"></i>
                        </Link>
                    </li>
                    <li>
                        <Link to='/favorite'>
                            <i className="fa-solid fa-heart"></i>
                            <div className="length">
                                {favoriteLength}
                            </div>
                        </Link>
                    </li>
                    <li onClick={() => setUserCartOpened(true)}>
                        <div>
                            <i className="fa-solid fa-bag-shopping"></i>
                            <div className="length">
                                {cartLength}
                            </div>
                        </div>
                    </li>
                    <li>
                        <div onClick={() => {
                            setNavbarOpened(prev => !prev)
                            setNavbarOpenedClear(false)
                        }}>
                            <i className="fa-solid fa-bars"></i>
                        </div>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar