import * as actions from './popular.actions';
import {PouplarModel} from '../../models/popular.model';

describe('@Popular actions', () => {
    it('Check actions types', () => {
        expect(actions.TYPES).toEqual({
            BEFORE_LOADED: 'BEFORE_LOADED',
            LOADED: 'LOADED',
            FAILED: 'FAILED'
        });
    });

    it(`beforeLoaded exec action`, () => {
        expect(actions.beforeLoaded()).toEqual({
            type: actions.TYPES.BEFORE_LOADED,
            payload: []
        });
    });

    it(`Should get a popular list with loaded action`, () => {
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
        expect(actions.loaded(popularList)).toEqual({
            type: actions.TYPES.LOADED,
            payload: popularList
        });
    });

    it(`Should get error with failed action`, () => {
        const err = new Error(`Service not work`);
        expect(actions.failed(err)).toEqual({
            type: actions.TYPES.FAILED,
            payload: err
        });
    });

});
