const router = require('../router').router;
const controller = require('./movies.controller');
const config = require('../../config');

router.get(`${config.NAME_SPACE}/movies/popular`, controller.getPopularMovies);
