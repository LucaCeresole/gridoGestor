import React from 'react';
import { Outlet, Link, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import Button from '../common/Button';

export default function MainLayout() {
  const { logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation(); // Para saber en qué ruta estamos

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  // Función auxiliar para resaltar la pestaña activa
  const navLinkClass = (path) => {
    const isActive = location.pathname === path;
    return `px-3 py-1.5 rounded-md whitespace-nowrap transition-colors text-sm font-medium
      ${isActive ? 'bg-white text-blue-700 shadow-xs' : 'text-blue-100 hover:bg-blue-600'}`;
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Cabecera Principal */}
      <header className="bg-blue-700 text-white shadow-md sticky top-0 z-40">
        <div className="px-4 py-3 flex items-center justify-between">
          <h1 className="text-xl font-bold tracking-tight">GridoGestor</h1>
          <Button variant="danger" onClick={handleLogout} className="text-xs py-1.5 px-3">
            Cerrar Sesión
          </Button>
        </div>
        
        {/* Navegación - Scrollable en móviles */}
        <nav className="flex overflow-x-auto bg-blue-800 px-3 py-2 gap-2 custom-scrollbar">
          <Link to="/" className={navLinkClass('/')}>Dashboard</Link>
          <Link to="/finances" className={navLinkClass('/finances')}>Finanzas</Link>
          <Link to="/delivery" className={navLinkClass('/delivery')}>Logística</Link>
          <Link to="/hr" className={navLinkClass('/hr')}>RRHH</Link>
          <Link to="/stock" className={navLinkClass('/stock')}>Stock</Link>
        </nav>
      </header>

      {/* Contenedor Dinámico: Aquí se renderizan las páginas */}
      <main className="flex-1 p-4 md:p-6 lg:p-8 w-full max-w-7xl mx-auto">
        <Outlet /> 
      </main>
    </div>
  );
}