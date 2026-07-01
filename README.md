# Empleados API

API REST para gestión de empleados. Proyecto de aprendizaje enfocado en la conexión y manipulación de datos con MongoDB.

## 📚 Objetivo de Aprendizaje

Este proyecto fue creado para aprender:
- ✅ Conexión a MongoDB Atlas desde Node.js
- ✅ Uso de Mongoose para modelar datos
- ✅ Operaciones CRUD (Create, Read, Update, Delete)
- ✅ Estructuración de un proyecto Node.js con MVC
- ✅ Manejo de variables de entorno para seguridad

## 🛠️ Tecnologías Utilizadas

- **Node.js** - Runtime de JavaScript
- **Express.js** - Framework web
- **MongoDB** - Base de datos NoSQL
- **Mongoose** - ODM para MongoDB
- **Morgan** - Logger HTTP
- **Body-parser** - Middleware para parsear JSON
- **Nodemon** - Herramienta para desarrollo

## 📦 Instalación

1. Clonar el repositorio:
```bash
git clone https://github.com/tuusuario/empleados-api.git
cd empleados-api
```

2. Instalar dependencias:
```bash
npm install
```

3. Configurar variables de entorno:
```bash
# Copiar el archivo de ejemplo
cp .env.example .env

# Editar .env con tus credenciales de MongoDB Atlas
```

## 🔐 Configuración de MongoDB Atlas

Para conectar con MongoDB Atlas:

1. Crear cuenta en [mongodb.com](https://mongodb.com)
2. Crear un cluster gratuito
3. Crear un usuario con contraseña
4. Obtener la cadena de conexión
5. Reemplazar en el archivo `.env`:
   - `DB_USER` - Tu usuario de MongoDB
   - `DB_PASSWORD` - Tu contraseña de MongoDB
   - `DB_CLUSTER` - Tu URL del cluster

```
Ejemplo:
DB_USER=user1
DB_PASSWORD=tu_contraseña
DB_CLUSTER=cluster0.pl7haxa.mongodb.net
```

## 🚀 Ejecutar el Proyecto

```bash
npm start
```

El servidor estará disponible en `http://localhost:3000`

## 📁 Estructura del Proyecto

```
.
├── server.js              # Archivo principal, configuración del servidor
├── package.json           # Dependencias del proyecto
├── .env                   # Variables de entorno (no subir a GitHub)
├── .env.example           # Plantilla de variables de entorno
├── .gitignore             # Archivos a ignorar en Git
├── models/
│   └── Empleado.js       # Esquema de Empleado en MongoDB
├── controllers/
│   └── EmpledoController.js  # Lógica de negocio
└── routes/
    └── EmpleadoRoutes.js # Rutas de la API
```

## 📌 Endpoints

| Método | Ruta | Descripción |
|--------|------|-------------|
| GET | `/api/empleado` | Obtener todos los empleados |
| GET | `/api/empleado/:id` | Obtener empleado por ID |
| POST | `/api/empleado` | Crear nuevo empleado |
| PUT | `/api/empleado/:id` | Actualizar empleado |
| DELETE | `/api/empleado/:id` | Eliminar empleado |

## 🔑 Variables de Entorno

Archivo `.env` (no incluido en el repositorio por seguridad):

```
DB_USER=nombre_usuario
DB_PASSWORD=contraseña_segura
DB_CLUSTER=url_cluster.mongodb.net
PORT=3000
```

## ⚠️ Seguridad

- **NUNCA** subir el archivo `.env` a GitHub
- Usar `.env.example` como referencia
- Las credenciales se cargan automáticamente desde `.env`

## 🤝 Contribuciones

Proyecto educativo. Puedes usarlo como base para tus propios proyectos.

## 📝 Notas

Este es un proyecto de aprendizaje. Para producción, considera:
- Implementar autenticación
- Validación de datos más robusta
- Manejo de errores mejorado
- Tests unitarios e integración
- Documentación de API con Swagger

---
