import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import { withStyles } from '@material-ui/core';


const Spinner = ({ classes }) => {

  return (
      <CircularProgress className={classes.Spinner} />
  );
}

export default withStyles({
    Spinner: {
        margin: '2em'
    }
}) (Spinner);