import * as actions from './popular.actions';
import {PouplarModel} from '../../models/popular.model';
import {TYPES} from './popular.actions';

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
movie.overview = 'Believing they have left behind shadowy figures from their past, newlyweds ';
movie.release_date = '2018-02-07';

describe('@Popular actions', () => {
    it('Check actions types', () => {
        expect(actions.TYPES).toEqual({
            BEFORE_LOADED: 'BEFORE_LOADED_POPULAR_LIST',
            LOADED: 'LOADED_POPULAR_LIST',
            FAILED: 'FAILED_POPULAR_LIST',
            SET_PAGE: 'SET_PAGE_POPULAR_LIST',
            SET_CURRENT_MOVIE_SELECTED: 'SET_CURRENT_MOVIE_SELECTED',
            SET_FILTER_MOVIES_AUTOCOMPLETE: 'SET_FILTER_MOVIES_AUTOCOMPLETE',
            BEFORE_MOVIES_AUTOCOMPLETE: 'BEFORE_MOVIES_AUTOCOMPLETE',
            LOADED_MOVIES_AUTOCOMPLETE: 'LOADED_MOVIES_AUTOCOMPLETE',
            SHOW_MOVIE_FROM_AUTOCOMPLETE: 'SHOW_MOVIE_FROM_AUTOCOMPLETE',
            CLEAR_MOVIE_FROM_AUTOCOMPLETE: 'CLEAR_MOVIE_FROM_AUTOCOMPLETE',
            WHEN_NAVIGATE_TO_DETAIL: "WHEN_NAVIGATE_TO_DETAIL"
        });
    });

    it(`beforeLoaded exec action`, () => {
        expect(actions.beforeLoaded()).toEqual({
            type: actions.TYPES.BEFORE_LOADED
        });
    });

    it(`Should get a popular list with loaded action`, () => {
        const popularList = [];
        popularList.push(movie);
        expect(actions.loaded({
            popularList,
            page: 1,
            total_results: 1,
            total_page: 1
        })).toEqual({
            type: actions.TYPES.LOADED,
            payload: {
                popularList,
                page: 1,
                total_results: 1,
                total_page: 1
            }
        });
    });

    it(`Should get error with failed action`, () => {
        const err = new Error(`Service not work`);
        expect(actions.failed(err)).toEqual({
            type: actions.TYPES.FAILED,
            payload: err
        });
    });

    it(`Should set page from action`, () => {
        expect(actions.setPage(1)).toEqual({
            type: actions.TYPES.SET_PAGE,
            payload: {
                page: 1
            }
        });
    });

    it(`Should set current movie selected`, () => {
        expect(actions.setCurrentMovieSelected(movie)).toEqual({
            type: actions.TYPES.SET_CURRENT_MOVIE_SELECTED,
            payload: {movie}
        });
    });

    it(`Should set filter movie autoComplete`, () => {
        const filter = 'Avatar';
        expect(actions.setFilterMoviesAutoComplete(filter)).toEqual({
            type: actions.TYPES.SET_FILTER_MOVIES_AUTOCOMPLETE,
            payload: {filter}
        });
    });

    it(`Action before to search data in autoComplete`, () => {
        expect(actions.beforeMoviesAutoComplete()).toEqual({type: TYPES.BEFORE_MOVIES_AUTOCOMPLETE});
    });

    it(`When Movies for a list autoComplete is loaded`, () => {
        expect(actions.loadedMoviesAutoComplete([
            movie
        ])).toEqual({
            type: TYPES.LOADED_MOVIES_AUTOCOMPLETE,
            payload: [movie]
        });
    });

    it(`Should Show Movie selected in grid list`, () => {
        expect(actions.showMovieFromAutoComplete(movie)).toEqual({
            type: TYPES.SHOW_MOVIE_FROM_AUTOCOMPLETE,
            payload: movie
        });
    });

    // clearMovieFromAutoComplete
    it(`Should Clear current Movie selected From Auto complete`, () => {
        expect(actions.clearMovieFromAutoComplete()).toEqual({type: TYPES.CLEAR_MOVIE_FROM_AUTOCOMPLETE});
    });

});
