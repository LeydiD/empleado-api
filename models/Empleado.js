const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const empleadoSchema = new Schema({
    nombre: {
        type: String,
    },
    correo: {
        type: String,
    },
    celular: {
        type: String,
    },
    edad: {
        type: Number,
    }
}, { timestamps: true })

const Empleado = mongoose.model('empleado', empleadoSchema);
module.exports = Empleado;