import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography } from '@material-ui/core';

function AppNav(props) {

    const { classes } = props;

    return(
        <AppBar className={ classes.NavColor } position="static">
            <Toolbar variant="dense">     
                <Typography variant="h4" component="p" className={ classes.TypoColor }>
                    PokeApp
                </Typography>
            </Toolbar>
        </AppBar>
    );
}

export default withStyles({
    NavColor: {
        backgroundColor: '#3a5da9'
    },
    TypoColor: {
        color: '#ffcb05'
    }
}) (AppNav);