import React from 'react';
import PropTypes from 'prop-types';
import { ButtonGroup, Button } from '@material-ui/core';
import { useStyles } from './styles';

export default function FilterButtonGroup({
  handleClickButtonCheap,
  handleClickButtonFast,
  isButtonActive,
}) {
  const classes = useStyles();

  const activeButtonCheap = () => {
    if (isButtonActive === 'cheap') {
      return classes.buttonActive;
    }

    return classes.button;
  };
  const activeButtonFast = () => {
    if (isButtonActive === 'fast') {
      return classes.buttonActive;
    }

    return classes.button;
  };

  return (
    <ButtonGroup disableElevation variant="contained">
      <Button onClick={handleClickButtonCheap} className={activeButtonCheap()}>
        Cheap
      </Button>
      <Button onClick={handleClickButtonFast} className={activeButtonFast()}>
        Fast
      </Button>
    </ButtonGroup>
  );
}

FilterButtonGroup.propTypes = {
  handleClickButtonCheap: PropTypes.func,
  handleClickButtonFast: PropTypes.func,
  isButtonActive: PropTypes.string,
};
