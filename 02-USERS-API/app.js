const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

const usersRouter = require('./src/users/users.router');
app.use('/', usersRouter);

app.listen(port, () => console.log(`Users API listening on port ${port}!`));