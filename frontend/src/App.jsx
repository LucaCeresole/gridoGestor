import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import PrivateRoute from './components/layout/PrivateRoute';
import MainLayout from './components/layout/MainLayout';
import LoginPage from './pages/LoginPage';
import DashboardPage from './pages/DashboardPage';
import FinancesPage from './pages/FinancesPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Ruta Pública */}
        <Route path="/login" element={<LoginPage />} />

        {/* Rutas Privadas envueltas en el Layout */}
        <Route path="/" element={
          <PrivateRoute>
            <MainLayout />
          </PrivateRoute>
        }>
          {/* El Outlet del MainLayout renderizará esto según la URL */}
          <Route index element={<DashboardPage />} />
          <Route path="finances" element={<FinancesPage />} />
          {/* Añadiremos las demás rutas luego. Si no existe, redirige al inicio */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;