import React, {Component, Fragment} from 'react';
import styled from 'react-emotion';
import * as Actions from '../../store/actions/popular.actions';
import {connect} from 'react-redux';
import {Api} from '../../Api/Api';
import {withRouter} from 'react-router';
import {Card, CardHeader, CardText, CardTitle} from 'material-ui/Card';

const mapStateProps = state => ({
    movie: state.popularReducer.movieSelected
});
const mapDispatchProps = dispatch => ({
    beforeLoadedPopularMovies: () => dispatch(Actions.beforeLoaded()),
    setMovie: movie => dispatch(Actions.setCurrentMovieSelected(movie))
});
const MovieContainer = styled('div')`
    display:flex;
    flex-direction:row;
    justify-content: center;
`;
const styleCard = {
    width: '32rem'
};

class ConnectedMovie extends Component {
    constructor(props) {
        super(props);
        this.getMovie();
    }

    getMovie() {
        if (this.props.movie) {
            return this.props.movie.title;
        } else {
            Api.getMovie(this.props.match.params.movieId)
                .then(movie => this.props.setMovie(movie));
        }
    }

    renderMovie() {
        if (this.props.movie) {
            return <Fragment>
                <img src={`${Api.getImageUrl()}/${this.props.movie.poster_path}`}/>
                <Card>
                    <CardHeader
                        title={this.props.movie.title}
                        subtitle={this.props.movie.tagline}
                        style={styleCard}
                    />
                    <CardText>
                        {this.props.movie.overview}
                    </CardText>
                </Card>
            </Fragment>;
        }
    }

    render() {
        return (
            <MovieContainer>
                {this.renderMovie()}
            </MovieContainer>
        );
    }
}

const Movie = connect(mapStateProps, mapDispatchProps)(ConnectedMovie);
export default withRouter(Movie);
