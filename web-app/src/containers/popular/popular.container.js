import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Api} from '../../Api/Api';
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
        Api.getMovies(this.props.page)
            .then(data => {
                this.props.loadedPopularMovies(data);
            });
    }

    render() {
        const {popularList} = this.props;
        return (
            <CardList items={popularList}
                      imageNameProperty='backdrop_path'
                      imageUrl={Api.getImage()}></CardList>
        );
    }
}

const PopularMovies = connect(mapStateProps, mapDispatchProps)(ConnectedPopularMovies);
export default PopularMovies;
