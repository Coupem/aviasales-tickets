import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
  mainPage: {
    width: 980,
    boxShadow: '0 0 10px rgba(0,0,0,0.1)',
    backgroundColor: 'white',
    margin: 'auto',
    paddingTop: theme.spacing(5),
    minHeight: 1000,
    paddingBottom: theme.spacing(5),
  },
  wrapperContainer: {
    display: 'flex',
    justifyContent: 'center',
  },
  spinner: {
    backgroundColor: '#2196f3',
  },
}));
