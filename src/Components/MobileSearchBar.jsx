// Imports
import "../Styles/app.css"
import { Link } from "react-router-dom"

const MobileSearchBar = ({setMobileSearchResults, handleSearchResults, mobileSearchResults, searchValue, mobileSearchbarOpened, setMobileSearchbarOpened, setMobileSearchValue, mobileSearchValue }) => {
    return (
        <div className="MobileSearchBar" style={mobileSearchbarOpened ? {display: "flex"} : {display: "none"}}>
            <div className="mobileSearch">
                <input 
                    type="text" 
                    placeholder="Enter product name..."
                    onChange={(event) => {
                        setMobileSearchResults(event.target.value)
                        handleSearchResults(event.target.value, setMobileSearchResults)
                        setMobileSearchValue(event.target.value)
                    }}
                />
            </div>
            <div className="MobileSearchBarResults" style={mobileSearchValue.length > 0 ? {display: 'flex'} : {display: 'none'}}>
            <ul>
                {mobileSearchResults.length > 0 ? (
                    mobileSearchResults.map((result) => (
                        <Link key={result.id} to={`/product/${result.id}`} onClick={() => {
                            handleSearchResults('', setMobileSearchResults)
                            setMobileSearchResults('')
                            setMobileSearchbarOpened(false)
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
    )
}

export default MobileSearchBar