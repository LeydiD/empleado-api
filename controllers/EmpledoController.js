const Empleado = require('../models/Empleado');

//Consultar empleados

const index = async (req, res, next) => {
    Empleado.find()
        .then(response => {
            res.json(response)
        })
        .catch(error => {
            res.json({
                message: 'Ocurrio un error al consultar los empleados'
            })
        }
        );
}



//Consultar empleado por id

const show = async (req, res, next) => {
    let empleadoID = req.body.empleadoID
    Empleado.findById(empleadoID)
        .then(response => {
            res.json(response)
        })
        .catch(error => {
            res.json({
                message: 'Ocurrio un error al consultar el empleado'
            })
        }
        );
}


//Consultar empleados

const guardar = async (req, res, next) => {
    let empleado = new Empleado({
        nombre: req.body.nombre,
        correo: req.body.correo,
        celular: req.body.celular,
        edad: req.body.edad
    })
    empleado.save()

        .then(response => {
            res.json({ message: "Empleado guardado correctamente" })
        })
        .catch(error => {
            res.json({
                message: 'Ocurrio un error al guardar el empleado'
            })
        }
        );
}


module.exports = {
    index,
    show,
    guardar
}