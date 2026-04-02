import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [apiStatus, setApiStatus] = useState("Cargando...");
  const apiUrl = process.env.REACT_APP_API_URL;

  useEffect(() => {
    axios
      .get(`${apiUrl}/api/health`)
      .then((response) => {
        setApiStatus(`Conectado! Estado del Backend: ${response.data.status}`);
      })
      .catch((error) => {
        setApiStatus(`Error de conexión: ${error.message}`);
        console.error("No se pudo conectar al backend:", error);
      });
  }, [apiUrl]);

  return (
    <div>
      <h1>Grido Gestor</h1>
      <p>
        Estado de la conexión con la API: <strong>{apiStatus}</strong>
      </p>
    </div>
  );
}

export default App;
