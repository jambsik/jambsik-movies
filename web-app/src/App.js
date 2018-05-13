import React, {Component, Fragment} from 'react';
import Helmet from 'react-helmet';
import styled from 'react-emotion';
import Header from './components/header/header';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Home from './pages/home/home.page';

const RootContainer = styled('div')`
    display:flex;
    flex-direction:column;
    flex: 1  100%;
    overflow-y: auto;
`;

const AppContainer = styled('div')`
    outline:1px solid red;
    margin: 0 5rem 0 5rem;
    display:flex;
    flex-direction:column;
    flex: 1 100%;
    min-height:1200px;
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
                <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
                    <Fragment>
                        <Header/>
                        <RootContainer>
                            <AppContainer>
                                <Home></Home>
                            </AppContainer>
                        </RootContainer>
                    </Fragment>
                </MuiThemeProvider>
            </Fragment>
        );
    }
}

export default App;
