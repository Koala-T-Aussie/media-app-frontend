import { createStore } from 'redux';

const initialState = {
  showSearch: false,
  searchResults: [],
  mediaArray: [],
  timeMin: 0,
};

function truthReducer(state = initialState, action) {
  console.log(state);
  console.log(action);
  switch (action.type) {
    case 'updateSearch':
      return Object.assign({}, state, {searchResults: action.searchResults})
    case 'showSearchResults':
      return Object.assign({}, state, {showSearch: true})
    case 'hideSearchResults':
      return Object.assign({}, state, {showSearch: false})
    case 'updateMediaList':
      return Object.assign({}, state, {mediaArray: action.mediaArray})
    case 'updateTime':
      return Object.assign({}, state, {timeMin: action.timeMin})
    default:
      return state;
  }
}

let store = createStore(truthReducer);

export default store;