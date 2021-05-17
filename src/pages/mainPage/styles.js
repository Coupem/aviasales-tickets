import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
  mainPage: {
    width: 980,
    backgroundColor: '#f3f7fa',
    margin: 'auto',
    paddingTop: theme.spacing(5),
    minHeight: 1000,
  },
  wrapperContainer: {
    display: 'flex',
    justifyContent: 'center',
  },
  spinner: {
    backgroundColor: '#2196f3',
  },
}));
