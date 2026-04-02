require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();

// Middleware
app.use(cors()); // Por ahora, abierto. Luego se puede restringir al dominio de Vercel.
app.use(express.json());

// Conexión a DB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB conectado exitosamente."))
  .catch((err) => console.error("Error de conexión a MongoDB:", err));

// Ruta de prueba "Health Check"
app.get("/api/health", (req, res) => {
  res.status(200).json({ status: "UP", timestamp: new Date() });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Servidor corriendo en el puerto ${PORT}`));
