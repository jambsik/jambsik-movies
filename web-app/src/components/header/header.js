import React, {Component} from 'react';
import styled from 'react-emotion';
import DefaultLocale from '../../common/locale/default.locale';

const HeaderContainer = styled('div')`
    height: 3.75rem;
    padding: 1.5rem;
    background:rgba(20, 20,2 0, 1);
    font-family: 'Lobster', cursive;
`;
const H1Styled = styled('h1')`
    margin:0;
    color:#00ACC1;
`;

class Header extends Component {
    render() {
        return (
            <HeaderContainer>
                <H1Styled>{DefaultLocale['APP_BAR_TITLE']}</H1Styled>
            </HeaderContainer>
        );
    }
}

export default Header;

