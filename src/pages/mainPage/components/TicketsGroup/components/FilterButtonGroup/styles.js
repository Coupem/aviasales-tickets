import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
  button: {
    width: 271,
    borderRadius: 8,
    height: 50,
    backgroundColor: 'white',
    border: '1px solid #dfe5ec',
    '&:hover': {
      backgroundColor: '#2196f3',
    },
  },
  buttonActive: {
    width: 271,
    borderRadius: 8,
    height: 50,
    backgroundColor: '#2196f3',
    border: '1px solid #dfe5ec',
    '&:hover': {
      backgroundColor: '#2196f3',
    },
  },
  // buttonGroup: {
  //   borderRadius: 20,
  // },
}));
