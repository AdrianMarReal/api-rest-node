const mongoose = require("mongoose");

const conexion = async()=>{

    try {
        await mongoose.connect("mongodb://localhost:27017/mi_blog")
        console.log("  Conectado correctamente  a la base de daatos")
        
    } catch (error) {
        console.log(error);
        throw new Error("No se ha podido hacer la conexcion");
    }

}

module.exports= {
    conexion
}