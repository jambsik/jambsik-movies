const requestPromise = require('request-promise-native');
const config = require('../config');

const getMovies = () => {
    const options = {
        uri: `${config.API_MOVIE_URL}/movie/popular/?api_key=${config.API_KEY}`,
        json: true
    };
    return requestPromise.get(options);
};

module.exports = {
    getMovies
};
