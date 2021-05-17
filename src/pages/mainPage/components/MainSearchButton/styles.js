import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(0, 'auto', 6.5),
    display: 'flex',
    borderStyle: 'none',
    '&:hover': {
      borderStyle: 'none',
    },
  },
  logo: {
    width: 83,
    height: 74,
  },
}));
