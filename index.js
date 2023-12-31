const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const app = express();
const PORT = 3000;

app.use(cors());
// Configuración de la conexión a MySQL
const connection = mysql.createConnection({
  host: 'localhost',     // Cambia a la dirección de tu servidor MySQL
  user: 'root',    // Cambia a tu nombre de usuario de MySQL
  password: 'Lu13edu4rd0', // Cambia a tu contraseña de MySQL
  database: 'sis_doctors' // Cambia a tu nombre de base de datos
});

// Conectar a MySQL
connection.connect((err) => {
  if (err) {
    console.error('Error al conectar a MySQL: ' + err.stack);
    return;
  }
  console.log('Conectado a MySQL con el ID ' + connection.threadId);
});

// Rutas de tu aplicación Express
app.get('/', (req, res) => {
  // Puedes realizar consultas a la base de datos aquí
  res.send('¡Hola, mundo!');
});

app.get('/medicos', (req, res) => {
    // Realizar una consulta a la base de datos
    connection.query('SELECT * FROM medicos', (error, results, fields) => {
      if (error) throw error;
      res.json(results); // Enviar los resultados como respuesta JSON
    });
  });
  

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
