const axios = require('axios');

class TimeService {
  constructor() {
    this.uri = 'http://localhost:5000/time';
  }

  getWatchTime() {
    return axios.get(this.uri)
  }
}

export default TimeService;