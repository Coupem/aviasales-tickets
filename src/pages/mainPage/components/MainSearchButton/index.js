import React from 'react';
import { Button } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import LinearProgress from '@material-ui/core/LinearProgress';
import { fetchTickets } from '../../ducks/actions';
import button from './assets/images/searchButton.png';
import { useStyles } from './styles';

export default function MainSearchButton() {
  const classes = useStyles();
  const dispatch = useDispatch();

  const { isLoadingTickets } = useSelector((state) => state.items);
  const handleClick = () => {
    dispatch(fetchTickets);
  };

  return (
    <React.Fragment>
      <Button
        variant="outlined"
        classes={{ root: classes.button }}
        centerRipple
        color="primary"
        onClick={handleClick}
      >
        <img className={classes.logo} alt="search" src={button} />
      </Button>
      {isLoadingTickets && (
        <LinearProgress classes={{ root: classes.spinner }} />
      )}
    </React.Fragment>
  );
}
