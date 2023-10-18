const router = require('express').Router()
const moviesServices = require('./movies.services')

//? Este es el prefijo: /movies


router.get('/', moviesServices.getAllMovies) //? /movies/
router.get('/:id', moviesServices.getMovieById) //? /movies/:id
router.post('/', moviesServices.postMovie) //? /movies/
router.patch('/:id', moviesServices.patchMovie) //? /movies/:id
router.delete('/:id', moviesServices.deleteMovieById) //? /movies/:id
router.put('/:id', moviesServices.putMovie) //? /movies/:id

module.exports = router