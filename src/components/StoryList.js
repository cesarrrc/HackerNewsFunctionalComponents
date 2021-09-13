import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Story from './Story';
import Search from './Search';
import logo from '../logo.svg'


const StoryList = () => {
  const baseUrl = 'http://hn.algolia.com/api/v1/search?'
  const [isLoading, setIsLoading] = useState(true)
  const [stories, setStories] = useState(null)

  useEffect(() => {
    console.log('useEffect ran')
    getStories('')
  }, []) 
  
  
  const getStories = (params) => {
    setIsLoading(true)
    const url = `${baseUrl}${params}`
    axios.get(url)
    .then(response => response.data)
    .then(data => {
      setStories(data.hits)
      setIsLoading(false)
      console.log(data)
    })
  }

  const getQueryParameters = (searchQuery, type) => {
    // allows for multiple radio buttons
    let params = type
      if(type === 'story') {
        params = `query=${searchQuery}&tags=story`
      } if(type === 'author') {
        params = `tags=story,author_${searchQuery}`
      }
    return params    
    /**Ternary Operator made for 2 radio buttons */
    // const params = type === 'story'
    //   ? `query=${searchQuery}&tags=story`
    //   : `tags=story,author_${searchQuery}`
    //   return params
  }
  
  const onSearch = (searchQuery, type) => {
    const params = getQueryParameters(searchQuery, type)
    getStories(params)
  }

  return (
    <div className="body">
      {console.log(isLoading)}
      <div>
        <Search onSearchEvent={onSearch} />
      </div>

      {isLoading
        ? <div className='loading'>
            <img className="App-logo" src={logo} />
            Loading Stories...
          </div>
        : <div>
            {stories.map(story => {
              return (
                <Story key={story.objectID} {...story}/>
              )
            })}
        </div>
      }
      
    </div>
  );
}

export default StoryList;
