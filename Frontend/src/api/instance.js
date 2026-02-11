// api/axiosInstance.js
import axios from 'axios';
import { toast } from 'react-hot-toast'; // or your preferred toast library

// Create instance
const api = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL || 'https://api.example.com',
  timeout: 15000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// ==================== REQUEST INTERCEPTOR ====================
api.interceptors.request.use(
  (config) => {
    // Get token from storage
    const token = localStorage.getItem('accessToken');
    
    // Add auth header if token exists
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    
    // Add request timestamp for debugging
    config.metadata = { startTime: new Date().getTime() };
    
    console.log(`🚀 API Request: ${config.method?.toUpperCase()} ${config.url}`);
    
    return config;
  },
  (error) => {
    console.error('❌ Request Error:', error);
    return Promise.reject(error);
  }
);

// ==================== RESPONSE INTERCEPTOR ====================
api.interceptors.response.use(
  (response) => {
    // Calculate request duration
    const duration = new Date().getTime() - response.config.metadata.startTime;
    console.log(`✅ Response: ${response.status} (${duration}ms)`);
    
    return response;
  },
  async (error) => {
    const originalRequest = error.config;
    
    // Handle different error statuses
    if (error.response) {
      switch (error.response.status) {
        case 401:
          // Token expired - try to refresh
          if (!originalRequest._retry) {
            originalRequest._retry = true;
            return handleTokenRefresh(originalRequest);
          }
          break;
          
        case 403:
          toast.error('Access forbidden. Please login again.');
          logoutUser();
          break;
          
        case 404:
          toast.error('Resource not found.');
          break;
          
        case 422:
          // Validation errors
          const errors = error.response.data.errors;
          if (errors) {
            Object.values(errors).forEach((err) => {
              toast.error(err[0]);
            });
          }
          break;
          
        case 500:
          toast.error('Server error. Please try again later.');
          break;
          
        default:
          toast.error(error.response.data?.message || 'Something went wrong');
      }
    } else if (error.request) {
      // Network error
      toast.error('Network error. Check your connection.');
    } else {
      toast.error('Error setting up request.');
    }
    
    return Promise.reject(error);
  }
);

// ==================== TOKEN REFRESH LOGIC ====================
let isRefreshing = false;
let refreshSubscribers = [];

const subscribeTokenRefresh = (callback) => {
  refreshSubscribers.push(callback);
};

const onTokenRefreshed = (newToken) => {
  refreshSubscribers.forEach((callback) => callback(newToken));
  refreshSubscribers = [];
};

const handleTokenRefresh = async (originalRequest) => {
  if (isRefreshing) {
    // Wait for refresh to complete
    return new Promise((resolve) => {
      subscribeTokenRefresh((token) => {
        originalRequest.headers.Authorization = `Bearer ${token}`;
        resolve(api(originalRequest));
      });
    });
  }
  
  isRefreshing = true;
  
  try {
    const refreshToken = localStorage.getItem('refreshToken');
    const response = await axios.post(`${process.env.REACT_APP_API_URL}/auth/refresh`, {
      refreshToken,
    });
    
    const { accessToken, refreshToken: newRefreshToken } = response.data;
    
    // Save new tokens
    localStorage.setItem('accessToken', accessToken);
    localStorage.setItem('refreshToken', newRefreshToken);
    
    // Notify subscribers
    onTokenRefreshed(accessToken);
    
    // Retry original request
    originalRequest.headers.Authorization = `Bearer ${accessToken}`;
    return api(originalRequest);
    
  } catch (refreshError) {
    // Refresh failed - logout user
    logoutUser();
    return Promise.reject(refreshError);
    
  } finally {
    isRefreshing = false;
  }
};

const logoutUser = () => {
  localStorage.removeItem('accessToken');
  localStorage.removeItem('refreshToken');
  window.location.href = '/login';
};

export default api;