import React from 'react';
import { Button } from '@material-ui/core';
import { useStyles } from './styles';

export default function MoreButtonBottom() {
  const classes = useStyles();

  return (
    <Button
      className={classes.button}
      color="primary"
      variant="contained"
      disableElevation
    >
      MORE
    </Button>
  );
}
