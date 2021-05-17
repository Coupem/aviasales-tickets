import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import LinearProgress from '@material-ui/core/LinearProgress';
import MainSearchButton from './components/MainSearchButton';
import CheckBoxBar from './components/CheckBoxBar';
import TicketsGroup from './components/TicketsGroup';
import { useStyles } from './styles';

const stopsCheckboxes = [
  {
    id: 'one',
    label: 'Все',
    value: 5,
  },
  {
    id: 'two',
    label: 'Без пересадок',
    value: 0,
  },
  {
    id: 'three',
    label: '1 пересадка',
    value: 1,
  },
  {
    id: 'four',
    label: '2 пересадки',
    value: 2,
  },
  {
    id: 'five',
    label: '3 пересадки',
    value: 3,
  },
];

export default function MainPage() {
  const classes = useStyles();
  const { ticketsLoaded, isLoadingTickets } = useSelector(
    (state) => state.items
  );

  const [stateCheckBox, setStateCheckBox] = useState({});
  const [allowedStopsCount, setAllowedStopsCount] = useState([]);

  const handleChange = (id, value, checked) => {
    setStateCheckBox({ ...stateCheckBox, [id]: checked });
    const updatedAllowedStops = allowedStopsCount.includes(value)
      ? allowedStopsCount.filter((count) => count !== value)
      : [...allowedStopsCount, value];

    setAllowedStopsCount(updatedAllowedStops);
  };

  return (
    <div className={classes.mainPage}>
      <MainSearchButton />
      {isLoadingTickets && (
        <LinearProgress classes={{ root: classes.spinner }} />
      )}
      {ticketsLoaded && (
        <div className={classes.wrapperContainer}>
          <CheckBoxBar
            stateCheckBox={stateCheckBox}
            handleChange={handleChange}
            checkboxGroup={stopsCheckboxes}
          />
          <TicketsGroup
            allowedStopsCount={allowedStopsCount}
            stateCheckBox={stateCheckBox}
          />
        </div>
      )}
    </div>
  );
}
