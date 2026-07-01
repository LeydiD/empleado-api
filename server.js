require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const empleadoRoute = require('./routes/EmpleadoRoutes.js');

const mongoURI = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_CLUSTER}/?appName=Cluster0`;
mongoose.connect(mongoURI)
const db = mongoose.connection

db.on('error', (err) => {
    console.error('Error de conexión a la base de datos:', err)
});

db.once('open', () => {
    console.log('Conexión exitosa a la base de datos');
});

const app = express()
app.use(morgan('dev'))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`)
})

app.use('/api/empleado', empleadoRoute)