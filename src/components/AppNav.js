import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography } from '@material-ui/core';

function AppNav(props) {

    const { classes } = props;

    return(
        <AppBar className={ classes.NavColor } position="sticky">
            <Toolbar>     
                <Typography variant="h5" component="p" className={ classes.TypoColor }>
                    PokeApp
                </Typography>
            </Toolbar>
        </AppBar>
    );
}

export default withStyles({
    NavColor: {
        backgroundColor: '#3a5da9'
        //backgroundColor: '#EF5350'
    },
    TypoColor: {
        color: '#ffcb05'
        //color: '#FFFFFF'
    }
}) (AppNav);