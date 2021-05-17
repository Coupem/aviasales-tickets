import React from 'react';
import { Button } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTickets } from '../../ducks/actions';
import button from './assets/images/searchButton.png';
import { useStyles } from './styles';

export default function MainSearchButton() {
  const classes = useStyles();
  const dispatch = useDispatch();

  const isLoadingTickets = useSelector((state) => state.items.ticketsLoaded);
  const handleClick = () => {
    dispatch(fetchTickets);
  };

  return (
    <Button
      variant="outlined"
      classes={{ root: classes.button }}
      centerRipple
      color="primary"
      onClick={handleClick}
    >
      {!isLoadingTickets && (
        <img className={classes.logo} alt="search" src={button} />
      )}
    </Button>
  );
}
