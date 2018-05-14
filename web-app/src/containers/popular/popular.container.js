import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';
import {Api} from '../../Api/Api';
import {beforeLoaded, loaded, setPage} from '../../store/actions/popular.actions';
import CardList from '../../components/cards-list/card-list';
import FlatPagination from 'material-ui-flat-pagination';
import styled from 'react-emotion';

const PaginationContainer = styled('div')`   
    display:flex;
    width:100%;
    flex-direction: row;
    justify-content: flex-end;
`;

const mapStateProps = state => ({
    popularList: state.popularReducer.popularList,
    page: state.popularReducer.page,
    total_pages: state.popularReducer.total_pages,
    total_results: state.popularReducer.total_results,
    isLoaded: state.popularReducer.isLoaded,
    limit: state.popularReducer.limit
});
const mapDispatchProps = dispatch => ({
    beforeLoadedPopularMovies: () => dispatch(beforeLoaded()),
    loadedPopularMovies: data => dispatch(loaded(data)),
    setPopularPage: page => dispatch(setPage(page))
});

class ConnectedPopularMovies extends Component {
    constructor(props) {
        super(props);
        this.getMovies(this.props.page + 1);
    }

    getMovies(page) {
        this.props.beforeLoadedPopularMovies();
        Api.getMovies(page)
            .then(data => {
                this.props.loadedPopularMovies(data);
            });
    }

    setPage(offset) {
        this.props.setPopularPage(offset);
        this.getMovies(offset + 1);
    }

    renderPagination() {
        // if (this.props.isLoaded) {
            return <PaginationContainer>
                <FlatPagination
                    offset={this.props.page}
                    limit={this.props.limit}
                    total={this.props.total_pages}
                    onClick={(e, offset) => this.setPage(offset)}
                ></FlatPagination>
            </PaginationContainer>;
        // }
    }

    render() {
        const {popularList} = this.props;
        return (
            <Fragment>
                {this.renderPagination()}
                <CardList items={popularList}
                          imageNameProperty='backdrop_path'
                          imageUrl={Api.getImageUrl()}></CardList>
                {this.renderPagination()}
            </Fragment>
        ); 
    }
}

const PopularMovies = connect(mapStateProps, mapDispatchProps)(ConnectedPopularMovies);
export default PopularMovies;
