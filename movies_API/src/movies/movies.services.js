const moviesControllers = require('./movies.controllers');

const getAllMovies = (req, res) => {
    moviesControllers.getAllMovies()
        .then(data => res.status(200).json(data))
        .catch(err => res.status(500).json(err))
}

const postMovie = (req, res) => {
    const data = req.body;
    if (data.title && data.genre && data.duration && data.releaseDate) {
        moviesControllers.createNewMovie(data)
            .then(data => res.status(201).json(data))
            .catch(err => res.status(400).json(err))
    }   
};

const getMovieById = (req, res) => {
    const id = req.params.id;
    moviesControllers.getMovieById(id)
        .then(data => {if (data) {res.status(200).json(data)} else {res.status(404).json({message: `Movie ${id} not found`})}})
        .catch(err => res.status(404).json(err))
}

const patchMovie = (req, res) => {
    const id = req.params.id;
    const {title, genre, duration, releaseDate} = req.body;
    moviesControllers.updateMovieById(id, {title, genre, duration, releaseDate})
        .then(response => {if (response[0]) {res.status(200).json({message: `Movie ${id} updated`})} else {res.status(404).json({message: `Movie ${id} not found`})}})
        .catch(err => res.status(400).json(err))
}


const deleteMovieById = (req, res) => {
    const id = req.params.id;
    moviesControllers.deleteMovie(id)
        .then(response => {if (response) {res.status(204).json({message: `Movie ${id} delete successfully`})} else {res.status(404).json({message: `Movie ${id} not found`})}})
        .catch(err => res.status(400).json(err))
}

const putMovie = (req, res) => {
    const id = req.params.id;
    const {title, genre, duration, releaseDate} = req.body;
    if (title && genre && duration && releaseDate) {
        moviesControllers.updateMovieById(id, {title, genre, duration, releaseDate})
            .then(response => {if (response[0]) {res.status(200).json({message: `Movie ${id} updated`})} else {res.status(404).json({message: `Movie ${id} not found`})}})
            .catch(err => res.status(400).json(err))
    } else {
        res.status(400).json({message: 'Bad request', fields: {title: 'string', genre: 'string', duration: 'integer', releaseDate: 'YYYY/MM/DD'}})
    }
}

module.exports = {
    getAllMovies,
    getMovieById,
    postMovie,
    patchMovie,
    deleteMovieById,
    putMovie
}


