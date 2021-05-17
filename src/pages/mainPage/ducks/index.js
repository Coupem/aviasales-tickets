import {
  REQUEST_SEARCH_ID,
  REQUEST_SEARCH_ID_SUCCESS,
  REQUEST_TICKETS,
  REQUEST_TICKETS_SUCCESS,
} from './types';

const initialState = {
  isLoadingSearchId: false,
  searchId: null,
  isLoadingTickets: false,
  ticketsLoaded: false,
  responseTickets: {},
};

export function ticketsReducer(state = initialState, action) {
  switch (action.type) {
    case REQUEST_SEARCH_ID:
      return { ...state, isLoadingSearchId: true };
    case REQUEST_SEARCH_ID_SUCCESS:
      return { ...state, isLoadingSearchId: false, searchId: action.payload };
    case REQUEST_TICKETS:
      return { ...state, isLoadingTickets: true };
    case REQUEST_TICKETS_SUCCESS:
      return {
        ...state,
        isLoadingTickets: false,
        responseTickets: action.payload,
        ticketsLoaded: true,
      };

    default:
      return state;
  }
}
