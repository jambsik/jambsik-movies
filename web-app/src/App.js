import React, {Component, Fragment} from 'react';
import Helmet from 'react-helmet';
import styled from 'react-emotion';

const AppContainer = styled('div')`

`;

class App extends Component {
    render() {
        return (
            <Fragment>
                <Helmet>
                    <meta charSet="utf-8"/>
                    <title>Jambsik Movies</title>
                    <link rel="canonical" href="http://mysite.com/example"/>
                </Helmet>
                <AppContainer>
                    <h1>hello world</h1>
                </AppContainer>
            </Fragment>
        );
    }
}

export default App;
