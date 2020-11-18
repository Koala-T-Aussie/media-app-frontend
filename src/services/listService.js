const axios = require('axios');

class ListService {
  constructor() {
    this.uri = 'http://localhost:5000/list';
  }

  addMediaToWatched(mediaId) {
    return axios.post(this.uri + '/watched', {media_id: mediaId})
  }

  getWatchedMedia() {
    return axios.get(this.uri + '/watched')
  }

  addMediaToWatchlist(mediaId) {
    return axios.post(this.uri + '/watchlist', {media_id: mediaId})
  }

  getWatchlistMedia() {
    return axios.get(this.uri + '/watchlist')
  }
}

export default ListService;