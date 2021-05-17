import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import FilterButtonGroup from './components/FilterButtonGroup';
import Tickets from './components/Tickets';
import MoreButtonBottom from './components/MoreButtonBottom';
import { filterTickets } from '../../ducks/selectors';
import { useStyles } from './styles';

export default function TicketsGroup({ stateCheckBox, allowedStopsCount }) {
  const classes = useStyles();
  const [eventClick, setEventClick] = useState('');

  const handleClickButtonCheap = () => {
    setEventClick('cheap');
  };
  const handleClickButtonFast = () => {
    setEventClick('fast');
  };

  const maxSizeFiltration = Math.max(...allowedStopsCount);
  const actualTickets = useSelector((state) =>
    filterTickets(state, stateCheckBox, maxSizeFiltration, eventClick)
  );

  if (actualTickets.length === 0) {
    return <div className={classes.ticketContainer}> Билетов не нашлось </div>;
  }

  return (
    <div>
      <FilterButtonGroup
        isButtonActive={eventClick}
        handleClickButtonCheap={handleClickButtonCheap}
        handleClickButtonFast={handleClickButtonFast}
      />
      {actualTickets.map((item) => {
        return <Tickets key={item.price} tickets={item} />;
      })}
      <MoreButtonBottom />
    </div>
  );
}

TicketsGroup.propTypes = {
  stateCheckBox: PropTypes.shape({
    checkedAll: PropTypes.bool,
    checkedDirect: PropTypes.bool,
    checkedOneTransplant: PropTypes.bool,
    checkedTwoTransplant: PropTypes.bool,
    checkedThreeTransplant: PropTypes.bool,
  }),
  allowedStopsCount: PropTypes.arrayOf(PropTypes.number),
};
