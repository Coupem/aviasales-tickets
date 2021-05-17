import {
  REQUEST_SEARCH_ID,
  REQUEST_SEARCH_ID_SUCCESS,
  REQUEST_TICKETS,
  REQUEST_TICKETS_SUCCESS,
} from './types';

export const requestSearchId = () => ({ type: REQUEST_SEARCH_ID });
export const requestSearchIdSuccess = (payload) => ({
  type: REQUEST_SEARCH_ID_SUCCESS,
  payload,
});
export const requestTickets = () => ({ type: REQUEST_TICKETS });
export const requestTicketsSuccess = (payload) => ({
  type: REQUEST_TICKETS_SUCCESS,
  payload,
});
