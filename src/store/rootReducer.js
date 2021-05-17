import { combineReducers } from 'redux';
import { ticketsReducer } from '../pages/mainPage/ducks';

export const rootReducer = combineReducers({
  items: ticketsReducer,
});
