import React from 'react';
import PropTypes from 'prop-types';
import FlightInfo from './components/FlightInfo';
import { useStyles } from './styles';

const URL_EMBLEM = (name) => `//pics.avs.io/99/36/${name}.png`;

export default function Tickets({ tickets }) {
  const classes = useStyles();
  const price = tickets.price.toLocaleString();
  const {
    segments: [there, back],
  } = tickets;

  return (
    <div className={classes.ticketContainer}>
      <div className={classes.wrapperHeaderContainer}>
        <div className={classes.price}>{`${price} P`}</div>
        <div className={classes.emblemWrapper}>
          <img
            className={classes.emblem}
            alt="emblem"
            src={URL_EMBLEM(tickets.carrier)}
          />
        </div>
      </div>
      <div className={classes.wrapperTimeContainer}>
        <FlightInfo infoFromTickets={there} />
        <FlightInfo infoFromTickets={back} />
      </div>
    </div>
  );
}
Tickets.propTypes = {
  tickets: PropTypes.shape({
    price: PropTypes.number,
    carrier: PropTypes.string,
    segments: PropTypes.arrayOf(
      PropTypes.shape({
        origin: PropTypes.string,
        destination: PropTypes.string,
        carrier: PropTypes.string,
        date: PropTypes.string,
        stops: PropTypes.arrayOf(PropTypes.string),
        duration: PropTypes.number,
      })
    ),
  }),
};
