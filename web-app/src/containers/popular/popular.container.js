import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';
import {Api} from '../../Api/Api';
import * as Actions from '../../store/actions/popular.actions';
import CardList from '../../components/cards-list/card-list';
import FlatPagination from 'material-ui-flat-pagination';
import styled from 'react-emotion';
import AutoComplete from 'material-ui/AutoComplete';
import SearchIcon from 'material-ui/svg-icons/action/search'
import CloseIcon from 'material-ui/svg-icons/navigation/close'
import DefaultLocale from '../../common/locale/default.locale';

const PaginationContainer = styled('div')`   
    display:flex;
    width:100%;
    flex-direction: row;
    justify-content: flex-end;
`;
const SearcherContainer = styled('div')`   
    display:flex;
    width:100%;
    flex-direction: row;
    align-items:baseline;
    width: 30%;
    margin-left: 1.5rem;
    svg{
        cursor:pointer;
    }
`;

const mapStateProps = state => (state.popularReducer);
const mapDispatchProps = dispatch => ({
    beforeLoadedPopularMovies: () => dispatch(Actions.beforeLoaded()),
    loadedPopularMovies: data => dispatch(Actions.loaded(data)),
    setPopularPage: page => dispatch(Actions.setPage(page)),
    setCurrentMovieSelected: movie => dispatch(Actions.setCurrentMovieSelected(movie)),
    setFilterMoviesAutoComplete: filter => dispatch(Actions.setFilterMoviesAutoComplete(filter)),
    beforeMoviesAutoComplete: () => dispatch(Actions.beforeMoviesAutoComplete()),
    loadedMoviesAutoComplete: data => dispatch(Actions.loadedMoviesAutoComplete(data)),
    showMovieFromAutoComplete: movie => dispatch(Actions.showMovieFromAutoComplete(movie)),
    clearMovieFromAutoComplete: () => dispatch(Actions.clearMovieFromAutoComplete()),
    whenNavigateToDetail: movie => dispatch(Actions.whenNavigateToDetail(movie))
});

class ConnectedPopularMovies extends Component {
    constructor(props) {
        super(props);
        this.getMovies(this.props.page);
    }

    getMovies(page) {
        this.props.beforeLoadedPopularMovies();
        Api.getMovies(page)
            .then(data => {
                this.props.loadedPopularMovies(data);
            });
    }

    getMoviesBySearch() {
        this.props.beforeMoviesAutoComplete();
        return Api.popularListSearch(this.props.filter);
    }

    setPage(offset) {
        const page = offset + 1;
        this.props.setPopularPage(page);
        this.getMovies(page);
    }

    handleUpdateInput(filter) {
        this.props.setFilterMoviesAutoComplete(filter);
        if (this.props.filter && this.props.filter.length >= 2) {
            let interval = setInterval(() => {
                this.getMoviesBySearch()
                    .then(data => {
                        this.props.loadedMoviesAutoComplete(data);
                        clearInterval(interval);
                    });
            }, 300);
        }
    }

    get dataSourceConfig() {
        return {
            text: 'original_title',
            value: 'id'
        };
    }


    whenMovieSelected(movie) {
        if (movie && movie.id) {
            this.props.setCurrentMovieSelected(movie);
        }
    }

    showMovieByAutoComplete() {
        if (this.props.movieSelected) {
            this.props.showMovieFromAutoComplete([this.props.movieSelected]);
        } else {
            this.getMoviesBySearch()
                .then(data => this.props.showMovieFromAutoComplete(data.results));
        }
    }

    handleKeyPress(e) {
        if (e.charCode === 13 && this.props.filter && this.props.filter.length >= 2) {
            this.showMovieByAutoComplete();
        }
    }


    whenClearAction() {
        this.props.clearMovieFromAutoComplete();
        this.getMovies(this.props.page);
    }

    renderPagination() {
        if (!this.props.isMovieByAutoComplete) {
            return <PaginationContainer>
                <FlatPagination
                    offset={this.props.offset}
                    limit={this.props.limit}
                    total={this.props.total_pages}
                    onClick={(e, offset) => this.setPage(offset)}
                ></FlatPagination>
            </PaginationContainer>;
        }
        return <div></div>;
    }

    renderSearchAction() {
        if (!this.props.isMovieByAutoComplete) {
            return <SearchIcon onClick={() => this.showMovieByAutoComplete()}></SearchIcon>;
        }
        return <CloseIcon onClick={() => this.whenClearAction()}></CloseIcon>;
    }

    render() {
        const {popularList} = this.props;
        return (
            <Fragment>
                <SearcherContainer>
                    <AutoComplete
                        disabled={this.props.isMovieByAutoComplete}
                        hintText={DefaultLocale['SEARCHER_HINT_TEXT']}
                        dataSource={this.props.moviesAutoCompleteList}
                        searchText={this.props.filter}
                        onUpdateInput={(filter) => this.handleUpdateInput(filter)}
                        onNewRequest={(movie) => this.whenMovieSelected(movie)}
                        floatingLabelText={DefaultLocale['SEARCHER_MOVIE_LABEL']}
                        fullWidth={true}
                        filter={AutoComplete.noFilter}
                        openOnFocus={true}
                        animated={false}
                        maxSearchResults={5}
                        onKeyPress={(e) => this.handleKeyPress(e)}
                        dataSourceConfig={this.dataSourceConfig}
                    />{this.renderSearchAction()}
                </SearcherContainer>
                {this.renderPagination()}
                <CardList items={popularList}
                          to={'/detail'}
                          whenNavigateToDetail={this.props.whenNavigateToDetail}
                          imageNameProperty='backdrop_path'
                          imageUrl={Api.getImageUrl()}></CardList>
                {this.renderPagination()}
            </Fragment>
        );
    }
}

const PopularMovies = connect(mapStateProps, mapDispatchProps)(ConnectedPopularMovies);
export default PopularMovies;
