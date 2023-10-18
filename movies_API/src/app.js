const express = require('express');
const app = express();
const db = require('./utils/database');
const initModels = require('./models/initModels');
const router = require('./movies/movies.router')
const {port} = require('./config');


//? Verificamos la autenticación a la base de datos
db.authenticate()
    .then(() => console.log('Database connected'))
    .catch(err => console.log(err));

//? Sincronizamos los modelos con la base de datos, creando las tablas si no existen
db.sync()
    .then(() => console.log('Database synced'))
    .catch(err => console.log(err));

initModels();


app.get('/', (req, res) => {
  res.status(200).json({message: 'Its running!'});
})

app.use(express.json());

app.use('/movies', router);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
})