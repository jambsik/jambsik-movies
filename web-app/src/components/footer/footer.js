import React, {Component} from 'react';
import styled from 'react-emotion';

const FooterContainer = styled('div')`
    outline: 1px solid black;
    width:100%; 
    padding: 0 5rem 0 5rem;
`;

class Footer extends Component {
    render() {
        return (
            <FooterContainer>
                Footer 1
            </FooterContainer>
        );
    }
}

export default Footer;
