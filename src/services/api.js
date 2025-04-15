import axios from 'axios';

// Create an Axios instance (like a dedicated waiter)
const api = axios.create({
  baseURL: 'http://localhost:5173/api', // Your backend URL (change if needed)
  timeout: 5000, // Cancel request if it takes longer than 5 seconds
});

// Define API calls (like menu items)
export const fetchBlogs = async () => {
  const response = await api.get('/blogs'); // GET request to /blogs
  return response.data; // Returns the actual data from the backend
};

// Add more API calls here later...