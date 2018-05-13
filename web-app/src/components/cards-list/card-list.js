import React, {Component} from 'react';
import styled from 'react-emotion';
import {GridList, GridTile} from 'material-ui/GridList';

const CardsListContainer = styled('div')`   
    padding: 1.5rem;
    display: 'flex';
    flexWrap: 'wrap';
    justifyContent: 'space-around';
`;
const gridListStyle = {
    width: 'auto',
    height: 450
};

class CardList extends Component {
    getImage(image) {
        return `${this.props.imageUrl}/${image}`
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
                                const image = this.getImage(tile[this.props.imageNameProperty]);
                                return (
                                    <GridTile key={image}
                                              title={tile.title}
                                    >
                                        <img src={image}/>
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
// {/*<Card>*/}
// {/*<CardHeader*/}
// {/*title={el.title}*/}
// {/*/>*/}
// {/*<CardMedia*/}
// {/*overlay={<CardTitle title="Overlay title" subtitle="Overlay subtitle"/>}*/}
// {/*>*/}
// {/*<img src={this.getImage(image)} alt=""/>*/}
// {/*</CardMedia>*/}
// {/*<CardActions>*/}
// {/*</CardActions>*/}
// {/*</Card>*/}
