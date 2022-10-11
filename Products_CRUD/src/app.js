const express = require('express');
const app = express();
const {port} = require('./config');
const db = require('./utils/database');
const initModels = require('./models/initModels');
const router = require('./porducts/products.router');

app.use(express.json());

app.get('/', (req, res) => res.status(200).json({ message: 'Server OK!' }));

// Authenticate database credentials
db.authenticate()
    .then(() => console.log('Database authenticated'))
    .catch(err => console.log(err));


// Sync sequelize models
db.sync()
    .then(() => console.log('Database synced'))
    .catch(err => console.log(err));


// Establish models relations
initModels();

app.use('/products', router);

app.listen(port, () => console.log(`Server running on port ${port}`));