const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.status(200).json({
      message: 'Hello World!',
      verb: req.method,
  });
})

app.post('/', (req, res) => {
    res.status(200).json({
        message: 'sending a POST request',
        verb: req.method,
    });
})

app.put('/', (req, res) => {
    res.status(200).json({
        message: 'sending a PUT request',
        verb: req.method,
    });
})


app.listen(8000, () => {
    console.log('Server is running on port 8000');
});

// ? HTTP
// ? Verbs
    //* GET
    //* POST
    //* PUT
    //* DELETE
    //* PATCH
    //* OPTIONS
    //* HEAD
    //* TRACE
    //* CONNECT
// ? HTTP Status Codes
    //* 1xx - Informational
    //* 2xx - Success
    //* 3xx - Redirection
    //* 4xx - Client Error
    //* 5xx - Server Error
// ? HTTP Headers


