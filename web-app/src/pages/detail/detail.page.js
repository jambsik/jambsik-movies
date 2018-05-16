import React, {Component} from 'react';
import styled from 'react-emotion';
import MovieContainer from '../../containers/movie/movie.container';

const DetailContainer = styled('div')`

`;

class Detail extends Component {
    render() {
        return (
            <DetailContainer>
                <MovieContainer> </MovieContainer>
            </DetailContainer>
        );
    }
}

export default Detail;
