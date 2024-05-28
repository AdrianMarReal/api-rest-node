const { conexion } = require("./database/conexion");
const express = require("express");
const cors = require("cors");
//Inicialziar App
console.log("Hola que tal 33333");
//Conectar a la base de datos
conexion();
//Crear servidor Node
const app = express();
const puerto = 3900;
//Configurar Cors
app.use(cors());
//Convertir body a objeto JS
app.use(express.json()); //Recibir datos con content type app/json
app.use(express.urlencoded({ extended: true }));
//Rutas Reales
const rutas_articulo = require("./rutas/articulo");

//cargo las rutas
app.use("/api", rutas_articulo);

//Pruebas

app.get("/probando", (req, res) => {
  console.log("Se ha ejecutado el endpoint probando");

  return res.status(200).send({
    curso,
  });
});

//Crear servidor y escuchar peticiones http
app.listen(puerto, () => {
  console.log("Servidor corriendo en el puerto" + puerto);
});

//

//

//
