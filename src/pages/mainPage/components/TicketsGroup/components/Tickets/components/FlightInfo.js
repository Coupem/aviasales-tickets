import React from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';
import { useStyles } from '../styles';

export default function FlightInfo({ infoFromTickets }) {
  const classes = useStyles();
  const { duration } = infoFromTickets;

  const departureTime = moment(infoFromTickets.date).format('HH:mm');
  const lendingTime = moment(infoFromTickets.date)
    .add(duration, 'minutes')
    .format('HH:mm');

  const hours = Math.trunc(duration / 60);
  const minutes = duration % 60;
  const durationTime = () => {
    if (minutes < 10) {
      return `${hours}ч 0${minutes}м`;
    }

    return `${hours}ч ${minutes}м`;
  };

  const checkingStops = (stops) => {
    const a = stops.length;
    if (a === 0) {
      return 'БЕЗ ПЕРЕСАДОК';
    }
    if (a === 1) {
      return '1 ПЕРЕСАДКА';
    }

    return `${stops.length} ПЕРЕСАДКИ`;
  };

  return (
    <div className={classes.wrapperInfoContainer}>
      <div>
        <div
          className={classes.wrapperIata}
        >{`${infoFromTickets.origin} - ${infoFromTickets.destination}`}</div>
        <div className={classes.infoStyle}>
          {departureTime} - {lendingTime}
        </div>
      </div>
      <div>
        <div className={classes.duration}>В ПУТИ</div>
        <div className={classes.infoStyle}>{durationTime()}</div>
      </div>
      <div className={classes.wrapperStops}>
        <div className={classes.counterStops}>
          {checkingStops(infoFromTickets.stops)}
        </div>
        <div className={classes.stopsContainer}>
          {infoFromTickets.stops.map((item) => (
            <div className={classes.stops} key={item}>
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

FlightInfo.propTypes = {
  infoFromTickets: PropTypes.shape({
    origin: PropTypes.string,
    destination: PropTypes.string,
    carrier: PropTypes.string,
    date: PropTypes.string,
    stops: PropTypes.arrayOf(PropTypes.string),
    duration: PropTypes.number,
  }),
};
