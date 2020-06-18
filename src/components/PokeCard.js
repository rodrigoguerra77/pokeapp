import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Card, CardMedia, CardContent, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';

function PokeCard({ name, classes, image, to='#' }){
    return(
        <Card className={ classes.item }>
            <Link to={ to }>
                <CardMedia className={ classes.media } image={ image } />
                <CardContent>
                    <Typography component="p" variant="h6">{ name }</Typography>
                </CardContent>
            </Link>
        </Card>
    );
}

export default withStyles({
    item: {
        width: '250px',
        margin: '2em',
        textAlign: 'center',
        boxSizing: 'border-box',
        padding: '1em'
    },
    media: {
        height: '200px',
    }
}) (PokeCard);