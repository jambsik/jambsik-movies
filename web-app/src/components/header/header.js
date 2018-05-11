import React, {Component} from 'react';
import styled from 'react-emotion';

const HeaderContainer = styled('div')`
    outline: 1px solid black;
    width:100%;
    padding: 0 5rem 0 5rem;
`;

class Header extends Component {
    render() {
        return (
            <HeaderContainer>
                Header
            </HeaderContainer>
        );
    }
}

export default Header;

