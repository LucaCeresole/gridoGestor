import React, { createContext, useState, useEffect } from 'react';
// import axiosInstance from '../api/axiosInstance'; // Lo usaremos pronto para el login real

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  // Inicializamos el estado leyendo el localStorage por si el usuario recarga la página
  const [token, setToken] = useState(() => localStorage.getItem('token'));
  const [isAuthenticated, setIsAuthenticated] = useState(!!token);

  // Efecto para sincronizar el estado con localStorage
  useEffect(() => {
    if (token) {
      localStorage.setItem('token', token);
      setIsAuthenticated(true);
    } else {
      localStorage.removeItem('token');
      setIsAuthenticated(false);
    }
  }, [token]);

  const login = async (username, password) => {
    try {
      // AQUÍ IRÁ LA LLAMADA REAL AL BACKEND:
      // const { data } = await axiosInstance.post('/auth/login', { username, password });
      // setToken(data.token);
      
      // MOCK TEMPORAL PARA PROBAR LA UI:
      // Simulamos que el login fue exitoso tras 1 segundo
      await new Promise(resolve => setTimeout(resolve, 1000));
      if (username === 'admin' && password === '1234') {
        setToken("mock_jwt_token_12345");
        return { success: true };
      } else {
        return { success: false, error: 'Credenciales inválidas' };
      }
    } catch (error) {
      console.error("Error en login", error);
      return { success: false, error: 'Error de servidor' };
    }
  };

  const logout = () => {
    setToken(null); // Esto dispara el useEffect y limpia el localStorage
  };

  return (
    <AuthContext.Provider value={{ token, isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}