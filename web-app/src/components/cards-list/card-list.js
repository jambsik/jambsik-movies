import React, {Component} from 'react';
import styled from 'react-emotion';

const CardsListContainer = styled('div')`
`;

class CardList extends Component {
    render() {
        return (
            <CardsListContainer>
                <ul>
                    {
                        this.props.items.map((el) =>
                            (
                                <li key={el.id}>{el.title}</li>
                            )
                        )
                    }
                </ul>
            </CardsListContainer>
        );
    }
}

export default CardList;
