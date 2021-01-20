import React from 'react'
import SearchForm from './SearchForm'
const Header = ({handleSearch}) => {
    return (
        <>
            <header className="recipe-header">
                    <h1>Recipe App</h1>
                    
            </header>
            <SearchForm handleSearch={handleSearch}/>
        </>
    )
}

export default Header
