const validator = require("validator");
const Articulo = require("../modelos/articulo");
const articulo = require("../modelos/articulo");

const prueba = (req, res) => {
  return res.status(200).json({
    mensaje: "Soy una mensje de prueba",
  });
};

const curso = (req, res) => {
  console.log("Se ha ejecutado ele ndpoint de prueba");
  return res.status(200).json([
    {
      curso: "Master en React",
      autor: "Vfictpr Robles web",
      url: "victo.es",
    },
    {
      curso: "Master en React",
      autor: "Vfictpr Robles web",
      url: "victo.es",
    },
  ]);
};

const crear = (req, res) => {
  //Recoger parametros
  let parametros = req.body;

  //Validar datos

  try {
    let validar_titulo =
      !validator.isEmpty(parametros.titulo) &&
      validator.isLength(parametros.titulo, { min: 5, max: 30 });
    let validar_contenido = !validator.isEmpty(parametros.contenido);
    if (!validar_titulo || !validar_contenido) {
      throw new Error("No se ha validado ls infotmsvion");
    }
  } catch (error) {
    return res.status(400).json({
      status: "error",
      mensaje: "Faltan datos por enviar",
    });
  }

  const articulo = new Articulo(parametros);

  articulo.save();

  return res.status(200).json({
    status: "succes",
    mensaje: "Datos correctos",
  });
};

const listar = (req, res) => {
  Articulo.find({})

    .then((articulos) => {
      if (!articulos) {
        return res.status(404).json({
          status: "error",

          mensaje: "No se han encontrado articulos",
        });
      }

      return res.status(200).send({
        status: "success",

        articulos,
      });
    })

    .catch((error) => {
      return res.status(500).json({
        status: "error",

        mensaje: "Ha ocurrido un error al listar los articulos",

        error: error.message,
      });
    });
};

/*
const listar = async (req, res) => {
  try {
    const articulos = Articulo.find({}).exec();
    if (!articulos || articulos.isLength === 0) {
      return res.status(400).json({
        status: "erroe",
        mensaje: "No se han encontrado articulos",
      });
    }
    return res.status(200).send({
      status: "succes",
      articulos,
    });
  } catch (error) {
    return res.status(400).json({
      status: "error",
      mensaje: 'Un error ha ocurrido al cargar los articulos'
    });
  }
};


const listar = (req, res) => {
  let consulta = Articulo.find({}).exec((error, articulos) => {
    if (error || !articulos) {
      return res.status(404).json({
        status: "error",
        mensaje: "No se han encontrado articulos!!",
      });
    }
    return res.status(200).send({
      status: "success",
      articulos,
    });
  });
};

//crear el objeto a guardar
  const articulo = new Articulo(parametros);

  //Asignar valores a objeto basdo en el modelo
  articulo
    .save()
    .then((articleSaved) => {
      return response.status(200).json({
        status: "Success",
        article: articleSaved,
        message: "Article was saved successfully!!",
      });
    })
    .catch((error) => {
      console.error(error);
      return response.status(400).json({
        status: "error",
        message: "Article was not saved...",
      });
    });

  //Guardar el articulo en la base de datos

  //Devocler resultado
  return res.status(200).json({
    status: "success",
    articulo: articuloGuardado,
    mensaje: "Artuculo guardado creado con exito",
  });

  */

module.exports = {
  prueba,
  curso,
  crear,
  listar,
};
