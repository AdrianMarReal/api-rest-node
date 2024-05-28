const { Schema, model } = require("mongoose");

const ArticuloSchema = Schema({
  titulo: {
    type: String,
    required: true,
  },
  contneido: {
    type: String,
    required: true,
  },
  fecha: {
    type: String,
    required: false,
  },
  titulo: {
    type: Date,
    default: Date.now,
  },
  imagen: {
    type: String,
    dafault: "default.png",
  },
});

module.exports = model("Articulo", ArticuloSchema, "articulos");
