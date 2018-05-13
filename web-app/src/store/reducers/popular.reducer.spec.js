import popularReducer from './popular.reducer';
import {TYPES} from '../actions/popular.actions';
import {PouplarModel} from '../../models/popular.model';

describe('@Popular reducer', () => {
    it('Should handle initial state', () => {
        expect(popularReducer(undefined, {})).toEqual({
            popularList: [],
            isLoaded: false,
            askRetry: false,
            page: 0,
            total_results: 0,
            total_page: 0
        });
    });
    it(`Should handle ${TYPES.BEFORE_LOADED}`, () => {
        expect(popularReducer({
            popularList: [],
            isLoaded: false,
            askRetry: false,
            page: 0,
            total_results: 0,
            total_page: 0
        }, {
            type: TYPES.BEFORE_LOADED,
        })).toEqual({
            popularList: [],
            isLoaded: false,
            askRetry: false,
            page: 0,
            total_results: 0,
            total_page: 0
        });
    });

    it(`Should handle ${TYPES.LOADED}`, () => {
        const popularList = [];
        const popularObj = new PouplarModel();
        popularObj.vote_count = 1732;
        popularObj.id = 337167;
        popularObj.video = false;
        popularObj.vote_average = 6;
        popularObj.title = 'Fifty Shades Freed';
        popularObj.popularity = 524.277801;
        popularObj.poster_path = '\\/jjPJ4s3DWZZvI4vw8Xfi4Vqa1Q8.jpg';
        popularObj.original_language = 'en';
        popularObj.original_title = 'Fifty Shades Freed';
        popularObj.genre_ids = [18, 10749];
        popularObj.backdrop_path = '\\/9ywA15OAiwjSTvg3cBs9B7kOCBF.jpg';
        popularObj.adult = false;
        popularObj.overview = 'Believing they have left behind shadowy figures from their past, newlyweds Christian and Ana fully embrace an inextricable connection and shared life of luxury. But just as she steps into her role as Mrs. Grey and he relaxes into an unfamiliar stability, new threats could jeopardize their happy ending before it even begins.';
        popularObj.release_date = '2018-02-07';
        popularList.push(popularObj);
        expect(popularReducer({
            popularList: [],
            isLoaded: false,
            askRetry: false
        }, {
            type: TYPES.LOADED,
            payload: {
                results: popularList,
                page: 0,
                total_results: 1,
                total_page: 1
            }
        })).toEqual({
            popularList,
            isLoaded: true,
            askRetry: false,
            page: 0,
            total_results: 1,
            total_page: 1
        });
    });
    it(`Should handle ${TYPES.FAILED}`, () => {
        expect(popularReducer(undefined, {
            type: TYPES.FAILED
        })).toEqual({
            popularList: [],
            isLoaded: true,
            askRetry: true,
            page: 0,
            total_results: 0,
            total_page: 0
        });
    });

});

