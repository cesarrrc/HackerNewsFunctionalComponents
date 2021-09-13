import React, {useState} from 'react';
import logo from '../images/hackernewsLogo.png'

const Search = (props) => {
  const [searchInput, setSearchInput] = useState('');
  const [type, setType] = useState('story');

  const handleSearchInput = (e) => {
    console.log(e.target.value) 
    setSearchInput(e.target.value)
  }

  const handleType = (e) => {
    console.log(e.target.value)
    setType(e.target.value)
  }

  const handleSearch = () => {
    props.onSearchEvent(searchInput, type)
  }

  return (
    <div className="headerContainer">
      
      <div className="logoContainer">
        <img className="logo" src={logo} alt="logo" />
      </div>

      <div className="searchContainer">
        <div className="inputContainer">
          <input
            className="searchInput" 
            type="text"
            value={searchInput}
            placeholder="Search..."
            onChange={handleSearchInput}
          />
          <button
            className="searchButton"
            onClick={handleSearch}
          >
          🔎
          </button>
        </div>

        <div className="searchBy">
          Search By: {/**space */}
          
          <div className="radio">

            <label htmlFor="story">
              Story
            </label>
            <input
              type="radio"
              id="story"
              name="search-type"
              value="story"
              checked={type === 'story'}
              onChange={handleType}
              />

          </div>
          
          <div className="radio">

            <label htmlFor="story">
              Author
            </label>
            <input
              type="radio"
              id="author"
              name="search-type"
              value="author"
              checked={type === 'author'}
              onChange={handleType}
              />

            </div>
        </div>

      </div>

    </div>
  );
}

export default Search;
