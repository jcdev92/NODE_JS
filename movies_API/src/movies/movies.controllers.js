const uuid = require('uuid');
const Movies = require('../models/movies.models');

const getAllMovies = async () => {
    //? select * from movies;
    return await Movies.findAll(); //? Trae todos los registros de la tabla movies
};


const createNewMovie = async (data) => {
    return await Movies.create({
        id: uuid.v4(),
        title: data.title,
        genre: data.genre,
        duration: data.duration,
        releaseDate: data.releaseDate,
    });
}


const getMovieById = async (id) => {
    //? select * from movies where id = 'id';
    return await Movies.findOne({
        where: {
            id: id,
        }
    });
}

const updateMovieById = async (id, data) => {
    const response = await Movies.update(data, {
        where: {
            id: id,
        }
    });
    return response;
}

const deleteMovie = async (id) => {
    return await Movies.destroy({
        where: {
            id: id,
        }
    });
}


module.exports = {
    getAllMovies,
    createNewMovie,
    getMovieById,
    updateMovieById,
    deleteMovie
}