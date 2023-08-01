import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://24.199.109.40/api'
});

export default instance;
