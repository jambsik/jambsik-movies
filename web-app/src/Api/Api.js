import * as config from '../config';

export class Api {
    static _headers = {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    };

    static _movie_url(service) {
        return `${config.API_MOVIE_URL}/${service}?api_key=${config.API_KEY}`;
    }

    static _method(method, url, opts) {
        return fetch(url, {...this._options, ...opts, method, ...this._headers});
    }

    static getMovies(page = 1, opts = {}) {
        return this._method('GET', `${this._movie_url('movie/popular')}&page=${page}`, opts)
            .then(res => res.json());
    }

    static getMovie(id, opts = {}) {
        return this._method('GET', `${this._movie_url(`movie/${id}`)}`, opts)
            .then(res => res.json());
    }

    static getImageUrl(size = 'w500') {
        return `${config.API_MOVIE_IMAGES_URL}/${size}`;
    }

    static popularListSearch(filter, page = 1) {
        return this._method('GET', `${this._movie_url('search/movie')}&page=${page}&query=${filter}&sort_by=popularity.desc`)
            .then(res => res.json());
    }
}
