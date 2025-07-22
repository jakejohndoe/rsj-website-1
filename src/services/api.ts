import axios from 'axios';
import { config } from '../config';

// Create an Axios instance with configuration
const api = axios.create({
  baseURL: `${config.api.baseUrl}/api`,
  timeout: config.api.timeout,
});

// API calls can be added here when needed
export default api;