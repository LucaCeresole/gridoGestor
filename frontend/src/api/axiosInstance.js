import axios from "axios";

const axiosInstance = axios.create({
  // Usamos la variable de entorno de Vite
  baseURL: import.meta.env.VITE_API_URL || "http://localhost:5000/api",
});

// Interceptor: Se ejecuta ANTES de que cualquier petición salga hacia el backend
axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

export default axiosInstance;
