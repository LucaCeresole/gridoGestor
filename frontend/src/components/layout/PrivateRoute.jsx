import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';

export default function PrivateRoute({ children }) {
  const { isAuthenticated } = useAuth();
  
  // Si no está autenticado, redirige a /login y reemplaza el historial
  return isAuthenticated ? children : <Navigate to="/login" replace />;
}