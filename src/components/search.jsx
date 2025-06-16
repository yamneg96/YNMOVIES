import React from 'react'


//Track the search state and handle search functionality
const Search = ({ searchTerm, setSearchTerm }) => {//Not to always say props.searchTerm.
  return (
    <div className="search">
      <div>
        <img src="search.svg" alt="search" />
        <input
          type="text"
          placeholder="Search for a movie, tv show, person..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
    </div>
  )
}

export default Search