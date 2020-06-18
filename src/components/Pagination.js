import React, { Fragment } from 'react';
import { Button } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

const Pagination = ({ increment, decrement, page, classes }) => {
    return(
        <Fragment>
            <Button className={classes.MarginButton} variant="contained" color="primary" onClick={decrement}><ArrowBackIcon /></Button>
            <Button className={classes.MarginButton} variant="contained" color="primary" onClick={decrement}>{page}</Button>
            <Button className={classes.MarginButton} variant="contained" color="primary" onClick={increment}><ArrowForwardIcon /></Button>

            
        </Fragment>
    );
}

export default withStyles({
    MarginButton: {
        margin: '1em'
    }
}) (Pagination);