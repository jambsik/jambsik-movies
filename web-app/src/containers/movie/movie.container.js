import React, {Component, Fragment} from 'react';
import styled from 'react-emotion';
import * as Actions from '../../store/actions/popular.actions';
import {Api} from '../../Api/Api';
import ArrowBack from 'material-ui/svg-icons/navigation/arrow-back';
import {withRouter} from 'react-router';
import {connect} from 'react-redux';
import DefaultLocale from '../../common/locale/default.locale';
import {Link} from 'react-router-dom';

const mapStateProps = state => ({
    movie: state.popularReducer.movieSelected
});
const mapDispatchProps = dispatch => ({
    setMovie: movie => dispatch(Actions.setCurrentMovieSelected(movie)),
    whenNavigateToHome: () => dispatch(Actions.whenNavigateToHome())
});
const MovieContainer = styled('div')`
    display:flex;
    flex-direction:row;
    justify-content: center;
    a{
        color:rgb(255,255,255);
    }
`;
const ReturnPageContainer = styled('div')`
    display:flex;
    flex-direction:row;
    cursor:pointer;
    align-items: center;
`;
const InfoContainer = styled('div')`
    display:flex;
    flex-direction: column;
    margin-left: 3rem;
    p{
        display:flex;
        flex-direction:row;
    }
`;
const InfoContainerText = styled('span')`
    padding-right: 1.5rem;
`;
const CompanyContainer = styled('div')`
    margin-top:1.5rem;
    display:flex;
    flex-direction:row;
    justify-content: center;
    margin-bottom: 1.5rem;
`;


class ConnectedMovie extends Component {
    constructor(props) {
        super(props);
        this.getMovie();
    }

    getMovie() {
        Api.getMovie(this.props.match.params.movieId)
            .then(movie => this.props.setMovie(movie));
    }

    renderCompoany(movie) {
        const companies = movie.production_companies;
        if (companies && companies.length > 0) {
            return <CompanyContainer>{this.renderImage(companies[0], 'logo_path', 'name')}</CompanyContainer>;
        }
    }

    renderImage(tile, tilePropertyImg, alt = 'title') {
        if (tile && tile[tilePropertyImg]) {
            return <img src={`${Api.getImageUrl()}/${tile[tilePropertyImg]}`} alt={tile[alt]}/>;
        }
    }

    checkProperty(movie, property) {
        return movie && movie[property] ? movie[property] : ''
    }

    renderMovie() {
        if (this.props.movie) {
            return <Fragment>
                {this.renderImage(this.props.movie, 'poster_path')}
                <InfoContainer>
                    <Link key={this.checkProperty(this.props.movie, 'id')}
                          onClick={() => this.props.whenNavigateToHome()}
                          to={`/home`}>
                        <ReturnPageContainer><ArrowBack></ArrowBack>{DefaultLocale.GO_HOME}</ReturnPageContainer>
                    </Link>
                    <h1>{this.checkProperty(this.props.movie, 'title')} {this.checkProperty(this.props.movie, 'tagline')}</h1>
                    <p>{this.props.movie.overview}</p>
                    {this.renderCompoany(this.props.movie)}
                    <p>
                        <InfoContainerText>
                            {DefaultLocale.RELEASE_DATE}
                        </InfoContainerText>
                        {this.checkProperty(this.props.movie, 'release_date')}
                    </p>
                    <p>
                        <InfoContainerText>
                            {DefaultLocale.RATING}
                        </InfoContainerText>
                        {this.checkProperty(this.props.movie, 'vote_average')}
                    </p>
                    <p>
                        <InfoContainerText>
                            {DefaultLocale.RATING_COUNT}
                        </InfoContainerText>
                        {this.checkProperty(this.props, 'movie.vote_count')}
                    </p>
                </InfoContainer>
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
