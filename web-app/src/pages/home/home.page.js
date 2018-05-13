import React, {Component} from 'react';
import styled from 'react-emotion';
import PopularContainer from '../../containers/popular/popular.container';

const HomeContainer = styled('div')`

`;

class Home extends Component {
    render() {
        return (
            <HomeContainer>
                <PopularContainer></PopularContainer>
            </HomeContainer>
        );
    }
}

export default Home;
