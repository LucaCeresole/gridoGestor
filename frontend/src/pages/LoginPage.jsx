import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import Button from '../components/common/Button';
import Card from '../components/common/Card';
import Input from '../components/common/Input';

export default function LoginPage() {
  const { login } = useAuth();
  const navigate = useNavigate();
  
  const [username, setUsername] = useState('admin');
  const[password, setPassword] = useState('1234');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    
    const result = await login(username, password);
    if (!result.success) {
      setError(result.error);
      setIsLoading(false);
    } else {
      // Si el login es exitoso, redirigimos al Dashboard
      navigate('/');
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center p-4">
      <Card title="Acceso al Sistema" className="w-full max-w-sm">
        <form onSubmit={handleLogin} className="flex flex-col gap-4">
          <Input label="Usuario" value={username} onChange={(e) => setUsername(e.target.value)} />
          <Input label="Contraseña" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          {error && <p className="text-red-500 text-sm text-center">{error}</p>}
          <Button type="submit" variant="primary" disabled={isLoading}>
            {isLoading ? 'Ingresando...' : 'Iniciar Sesión'}
          </Button>
        </form>
      </Card>
    </div>
  );
}