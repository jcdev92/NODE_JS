const express = require('express');
const app = express();
const port = 3000;

app.get('/me', (req, res) => {
    res.status(200).json({
        name: 'Jesus Clemente',
        age: 30,
        country: 'Venezuela',
        verb: req.method
    })
})

app.post('/metas', (req, res) => {
    res.status(200).json({
        hobbies: ['Movies-Series', 'Coding', 'Playing video-games'],
        verb: req.method
    })
})

app.patch('/metas', (req, res) => {
    res.status(200).json({
        goals: ['Get a FullStack Job', 'Learn more about NextJS'],
        verb: req.method
    })
})

app.put('/business', (req, res) => {
    res.status(200).json({
        wantedCompanies: ['Google', 'LucasFilm', 'Amazon'],
        verb: req.method
    })
})

app.listen(port, () => {
    console.log(`Running server on http://localhost:${port}`)
})