// src/axiosConfig.js
import axios from 'axios';

// Create axios instance
const api = axios.create({
  baseURL: 'http://localhost:8080',
});

// Set up request interceptor
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('jwtToken');
    console.log('🔍 Interceptor - Token from localStorage:', token);
    
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
      console.log('✅ Interceptor - Added Authorization header:', config.headers.Authorization);
    } else {
      console.log('❌ Interceptor - No token found in localStorage');
    }
    
    console.log('📤 Request config:', {
      url: config.url,
      method: config.method,
      headers: config.headers
    });
    
    return config;
  },
  (error) => {
    console.error('❌ Request interceptor error:', error);
    return Promise.reject(error);
  }
);

// Set up response interceptor
api.interceptors.response.use(
  (response) => {
    console.log('✅ Response successful:', response.status);
    return response;
  },
  (error) => {
    console.error('❌ Response error:', error.response?.status, error.response?.data);
    
    if (error.response?.status === 401) {
      console.log('🔄 Token expired - removing from localStorage and redirecting');
      localStorage.removeItem('jwtToken');
      window.location.href = '/admin/login';
    }
    return Promise.reject(error);
  }
);

export default api;