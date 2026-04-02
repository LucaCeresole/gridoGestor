import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
    const [apiStatus, setApiStatus] = useState({ status: 'Cargando...', color: 'text-yellow-400' });
    // Así es como Vite accede a las variables de entorno
    const apiUrl = import.meta.env.VITE_API_URL;

    useEffect(() => {
        if (!apiUrl) {
            console.error("La variable de entorno VITE_API_URL no está definida.");
            setApiStatus({ status: 'Error: URL de la API no configurada.', color: 'text-red-500' });
            return;
        }

        axios.get(`${apiUrl}/api/health`)
            .then(response => {
                setApiStatus({
                    status: `Conectado! Backend responde: ${response.data.status}`,
                    color: 'text-green-400'
                });
            })
            .catch(error => {
                console.error("No se pudo conectar al backend:", error);
                setApiStatus({
                    status: `Error de conexión: ${error.message}`,
                    color: 'text-red-500'
                });
            });
    }, [apiUrl]);

    return (
        <main className="h-screen w-full flex flex-col items-center justify-center bg-gray-900 text-white font-sans">
            <h1 className="text-5xl font-bold mb-4">Grido Gestor</h1>
            <div className="bg-gray-800 p-4 rounded-lg shadow-lg">
                <p className="text-lg">
                    Estado de la API: <strong className={apiStatus.color}>{apiStatus.status}</strong>
                </p>
            </div>
        </main>
    );
}

export default App;