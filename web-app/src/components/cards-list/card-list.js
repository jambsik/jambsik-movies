import React, {Component} from 'react';
import styled from 'react-emotion';
import {GridList, GridTile} from 'material-ui/GridList';
import ImageIcon from 'material-ui/svg-icons/image/image'

const CardsListContainer = styled('div')`   
    padding: 1.5rem;
    display: 'flex';
    flexWrap: 'wrap';
    justifyContent: 'space-around';
`;
const IconContainer = styled('div')`   
    flex-direction: row;
    display: flex;
    justify-content: center;
`;
const ImageIconStyle = {
    width: '6.7rem',
    height: '6.7rem',
};

const gridListStyle = {
    width: 'auto'
};

class CardList extends Component {
    getImage(image) {
        return `${this.props.imageUrl}/${image}`
    }

    renderImage(tile) {
        const tileImage = tile[this.props.imageNameProperty];
        if (tileImage) {
            const image = this.getImage(tileImage);
            return <img src={image} alt={tile.title}/>;
        }
        return <IconContainer> <ImageIcon style={ImageIconStyle}></ImageIcon></IconContainer>;
    }

    render() {
        return (
            <CardsListContainer>
                <GridList
                    cols={4}
                    cellHeight={200}
                    padding={2}
                    style={gridListStyle}
                >
                    {
                        this.props.items.map((tile) => {
                                return (
                                    <GridTile key={tile.title}
                                              title={tile.title}
                                    >
                                        {this.renderImage(tile)}
                                    </GridTile>
                                );
                            }
                        )
                    }
                </GridList>
            </CardsListContainer>
        );
    }
}

export default CardList;

