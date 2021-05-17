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
}));
