import axios from 'axios';
import { config } from '../config';

// Create an Axios instance with configuration
const api = axios.create({
  baseURL: `${config.api.baseUrl}/api`,
  timeout: config.api.timeout,
});

// Blog-specific API instance (if using different endpoint)
const blogApi = axios.create({
  baseURL: `${config.api.blogUrl}/api`,
  timeout: config.api.timeout,
});

// Define API calls
export const fetchBlogs = async () => {
  const response = await blogApi.get('/blogs');
  return response.data;
};

// Add more API calls here later...
export default api;