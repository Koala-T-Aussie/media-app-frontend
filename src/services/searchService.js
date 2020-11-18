const axios = require('axios');

class SearchService {
  constructor() {
    this.uri = 'http://localhost:5000/search';
  }

  getMediaBySearch(searchTerm) {
    return axios.get(this.uri + '/' + searchTerm)
  }
}

export default SearchService;