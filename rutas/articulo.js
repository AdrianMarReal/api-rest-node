const express = require("express");
const router = express.Router();
const ArticuloControlador = require("../controladores/articulo");
const articulo = require("../modelos/articulo");

//Rutas de prueba

router.get("/ruta-de-prueba", ArticuloControlador.prueba);
router.get("/curso", ArticuloControlador.curso);

//Ruta utila

router.post("/crear", ArticuloControlador.crear);

module.exports = router;
