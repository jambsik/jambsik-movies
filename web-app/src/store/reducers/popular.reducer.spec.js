import popularReducer from './popular.reducer';
import {TYPES} from '../actions/popular.actions';
import {PouplarModel} from '../../models/popular.model';

const mock_state = {
    filter: '',
    popularList: [],
    moviesAutoCompleteList: [],
    isAutoCompleteLoaded: true,
    isMovieByAutoComplete: false,
    isLoaded: false,
    askRetry: false,
    movieSelected: null,
    page: 1,
    offset: 0,
    total_results: 0,
    total_pages: 0,
    limit: 1
};
const movie = new PouplarModel();
movie.vote_count = 1732;
movie.id = 337167;
movie.video = false;
movie.vote_average = 6;
movie.title = 'Fifty Shades Freed';
movie.popularity = 524.277801;
movie.poster_path = '\\/jjPJ4s3DWZZvI4vw8Xfi4Vqa1Q8.jpg';
movie.original_language = 'en';
movie.original_title = 'Fifty Shades Freed';
movie.genre_ids = [18, 10749];
movie.backdrop_path = '\\/9ywA15OAiwjSTvg3cBs9B7kOCBF.jpg';
movie.adult = false;
movie.overview = 'Believing they have left behind shadowy figures f';
movie.release_date = '2018-02-07';

describe('@Popular reducer', () => {
    it('Should handle initial state', () => {
        expect(popularReducer(undefined, {})).toEqual(mock_state);
    });
    it(`Should handle ${TYPES.BEFORE_LOADED}`, () => {
        expect(popularReducer(mock_state, {
            type: TYPES.BEFORE_LOADED,
        })).toEqual({
            ...{isLoaded: true},
            ...mock_state
        });
    });

    it(`Should handle ${TYPES.LOADED}`, () => {
        const popularList = [movie];
        expect(popularReducer(mock_state, {
            type: TYPES.LOADED,
            payload: {
                results: popularList,
                total_results: 1,
                total_pages: 1
            }
        })).toEqual({
            ...mock_state,
            ...{
                popularList,
                isLoaded: true,
                total_results: 1,
                total_pages: 1
            }
        });
    });
    it(`Should handle ${TYPES.FAILED}`, () => {
        expect(popularReducer(undefined, {
            type: TYPES.FAILED
        })).toEqual({
            ...mock_state,
            ...{askRetry: true, isLoaded: true}
        });
    });

    // SET_PAGE
    it(`Should handle ${TYPES.SET_PAGE}`, () => {
        expect(popularReducer(mock_state, {
            type: TYPES.SET_PAGE,
            payload: {
                page: 1
            }
        })).toEqual({
            ...mock_state,
            ...{
                page: 1,
                offset: 0
            }
        });
    });
    // SET_FILTER_MOVIES_AUTOCOMPLETE
    it(`Should handle ${TYPES.SET_FILTER_MOVIES_AUTOCOMPLETE}`, () => {
        expect(popularReducer(mock_state, {
            type: TYPES.SET_FILTER_MOVIES_AUTOCOMPLETE,
            payload: {
                filter: 'Red Points'
            }
        })).toEqual({
            ...mock_state,
            ...{
                movieSelected: null,
                filter: 'Red Points'
            }
        });
    });
    // BEFORE_MOVIES_AUTOCOMPLETE
    it(`Should handle ${TYPES.BEFORE_MOVIES_AUTOCOMPLETE}`, () => {
        expect(popularReducer(mock_state, {
            type: TYPES.BEFORE_MOVIES_AUTOCOMPLETE
        })).toEqual({
            ...mock_state,
            ...{
                isAutoCompleteLoaded: false
            }
        });
    });
    // LOADED_MOVIES_AUTOCOMPLETE
    it(`Should handle ${TYPES.LOADED_MOVIES_AUTOCOMPLETE}`, () => {
        expect(popularReducer(mock_state, {
            type: TYPES.LOADED_MOVIES_AUTOCOMPLETE,
            payload: {
                results: [movie]
            }
        })).toEqual({
            ...mock_state,
            ...{
                isAutoCompleteLoaded: true,
                moviesAutoCompleteList: [movie]
            }
        });
    });
    // SET_CURRENT_MOVIE_SELECTED
    it(`Should handle ${TYPES.SET_CURRENT_MOVIE_SELECTED}`, () => {
        expect(popularReducer(mock_state, {
            type: TYPES.SET_CURRENT_MOVIE_SELECTED,
            payload: {
                movie: movie
            }
        })).toEqual({
            ...mock_state,
            ...{
                moviesAutoCompleteList: [],
                movieSelected: movie
            }
        });
    });
    // SHOW_MOVIE_FROM_AUTOCOMPLETE
    it(`Should handle ${TYPES.SHOW_MOVIE_FROM_AUTOCOMPLETE}`, () => {
        expect(popularReducer(mock_state, {
            type: TYPES.SHOW_MOVIE_FROM_AUTOCOMPLETE,
            payload: movie
        })).toEqual({
            ...mock_state,
            ...{
                isMovieByAutoComplete: true,
                popularList: [movie]
            }
        });
    });
    // CLEAR_MOVIE_FROM_AUTOCOMPLETE
    it(`Should handle ${TYPES.CLEAR_MOVIE_FROM_AUTOCOMPLETE}`, () => {
        expect(popularReducer(mock_state, {
            type: TYPES.CLEAR_MOVIE_FROM_AUTOCOMPLETE
        })).toEqual({
            ...mock_state,
            ...{
                filter: '',
                movieSelected: null,
                moviesAutoCompleteList: [],
                isMovieByAutoComplete: false,
                popularList: []
            }
        });
    });
});

