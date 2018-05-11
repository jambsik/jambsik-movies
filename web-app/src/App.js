import React, {Component, Fragment} from 'react';
import Helmet from 'react-helmet';
import styled from 'react-emotion';
import Header from './components/header/header';
import Footer from './components/footer/footer';

const AppContainer = styled('div')`
    outline:1px solid red;
    margin: 0 5rem 0 5rem;
    height:100%;
    display:flex;
    flex-direction:column;
    flex:1;
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
                <Header/>
                <AppContainer>
                    <h1>hello world</h1>
                </AppContainer>
                <Footer/>
            </Fragment>
        );
    }
}

export default App;
