const express = require('express');
const app = express();

app.get('/hello', (request, response) => {
  response.json({message: 'Hello World!'});
});

app.listen(9000, () => {
    console.log('Server started at port 9000')
})
