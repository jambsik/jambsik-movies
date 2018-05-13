const moviesService = require('../../services/movies.service');

const getPopularMovies = (req, res) => {
    return moviesService.getMovies()
        .then(popularMovies => res.status(201).json(popularMovies))
        .catch(err => res.status(500).json(err));
};
module.exports = {
    getPopularMovies
};
