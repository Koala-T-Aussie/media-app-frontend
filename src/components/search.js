import React from 'react';
import { TextField } from '@material-ui/core';
import SearchService from '../services/searchService';
import { useSelector, useDispatch } from 'react-redux';

const sea = new SearchService();

const SearchBar = (props) => {
  const dispatch = useDispatch();

  const searchResults = useSelector((state) => state.searchResults);

  const searchSearch = (event) => {
    if (event.key === 'Enter') {
      sea.getMediaBySearch(event.target.value).then( res => {
        console.log(res.data.results);
        dispatch({type: 'updateSearch', searchResults: res.data.results});
        dispatch({type: 'showSearchResults'});
        console.log(searchResults);
      });
    }
  }

  return (
    <div>
      <TextField placeholder='Search...' fullWidth size="small" variant="outlined" onKeyDown={searchSearch}/>
    </div>
  )
}

export default SearchBar;