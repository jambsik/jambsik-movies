import React, {Component} from 'react';
import styled from 'react-emotion';
import {GridList, GridTile} from 'material-ui/GridList';
import ImageIcon from 'material-ui/svg-icons/image/image'
import {Link} from 'react-router-dom';
import DefaultLocale from '../../common/locale/default.locale';

const CardsListContainer = styled('div')`   
    padding: 1.5rem;
    display: 'flex';
    flexWrap: 'wrap';
    justifyContent: 'space-around';
`;
const IconContainer = styled('div')`   
    flex-direction: column;
    display: flex;
    align-items: center;
    span{
        color: rgb(255,255,255);
        font-size: 0.8rem;
    }
`;
const ImageIconStyle = {
    width: '6.7rem',
    height: '6.7rem',
};

const gridListStyle = {
    width: 'auto'
};
const gridStyle = {
    cursor: 'pointer'
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
        return <IconContainer>
            <ImageIcon style={ImageIconStyle}></ImageIcon>
            <span>{DefaultLocale.IMAGE_NO_AVAILABLE}</span>
        </IconContainer>;
    }

    render() {
        return (
            <CardsListContainer>
                <GridList
                    cols={4}
                    cellHeight={200}
                    padding={2}
                    style={{gridListStyle}}
                >
                    {
                        this.props.items.map((tile, index) => {
                                return (
                                    <Link key={index}
                                          onClick={() => this.props.whenNavigateToDetail(tile)}
                                          to={`${this.props.to}/${tile.id}`}>
                                        <GridTile
                                            key={`${tile.title}_${index}`}
                                            title={tile.title}
                                            style={gridStyle}>
                                            {this.renderImage(tile)}
                                        </GridTile>
                                    </Link>
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

