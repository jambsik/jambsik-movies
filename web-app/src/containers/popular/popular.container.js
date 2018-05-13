import React, {Component} from 'react';
import {connect} from 'react-redux';
import {JmbFetch} from '../../common/request/jmb-fetch';
import {beforeLoaded, loaded} from '../../store/actions/popular.actions';
import CardList from '../../components/cards-list/card-list';


const mapStateProps = state => ({
    popularList: state.popularReducer.popularList,
    page: state.popularReducer.page
});
const mapDispatchProps = dispatch => ({
    beforeLoadedPopularMovies: () => dispatch(beforeLoaded()),
    loadedPopularMovies: data => dispatch(loaded(data)),
});


class ConnectedPopularMovies extends Component {
    constructor(props) {
        super(props);
        this.getMovies();
    }

    getMovies() {
        this.props.beforeLoadedPopularMovies();
        JmbFetch.get(`http://localhost:8181/api/movies/popular?page=${this.props.page}`)
            .then(data => {
                this.props.loadedPopularMovies(data);
            });
    }

    render() {
        const {popularList} = this.props;
        return (
            <CardList items={popularList}></CardList>
        );
    }
}

const PopularMovies = connect(mapStateProps, mapDispatchProps)(ConnectedPopularMovies);
export default PopularMovies;
