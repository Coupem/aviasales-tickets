import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
  ticketContainer: {
    width: 502,
    height: 184,
    backgroundColor: 'white',
    filter: 'drop-shadow(0px 2px 4px rgba(0,0,0,0.1))',
    borderRadius: 5,
    marginTop: theme.spacing(2.5),
    padding: theme.spacing(2.5),
  },
  wrapperHeaderContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: theme.spacing(3.2),
  },
  wrapperInfoContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: theme.spacing(2),
  },
  price: {
    fontSize: 24,
    display: 'flex',
    alignItems: 'center',
    color: '#2196f3',
    fontWeight: 600,
  },
  wrapperTimeContainer: {
    color: 'red',
  },
  wrapperFlightInfo: {},
  emblemWrapper: {},
  emblem: {
    width: 110,
    height: 40,
  },
  wrapperIata: {
    color: '#a0b0b9',
    marginBottom: theme.spacing(0.8),
    fontSize: 12,
  },
  duration: {
    marginBottom: theme.spacing(0.8),
    fontSize: 12,
    color: '#a0b0b9',
  },
  stopsContainer: {
    display: 'flex',
    color: '#4a4a4a;',
    fontSize: 14,
    fontWeight: 600,
  },
  wrapperStops: {
    width: 130,
  },
  stops: {
    paddingRight: theme.spacing(1),
  },
  counterStops: {
    display: 'flex',
    marginBottom: theme.spacing(0.8),
    color: '#a0b0b9',
    fontSize: 12,
  },
  infoStyle: {
    color: '#4a4a4a;',
    fontSize: 14,
    fontWeight: 600,
  },
}));
