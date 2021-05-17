import Axios from 'axios';

import {
  requestSearchId,
  requestSearchIdSuccess,
  requestTickets,
  requestTicketsSuccess,
} from './actionCreator';

const SEARCH_ID_URL = 'https://front-test.beta.aviasales.ru/search';

export const fetchTickets = async (dispatch) => {
  dispatch(requestSearchId());

  const {
    data: { searchId },
  } = await Axios.get(SEARCH_ID_URL);

  dispatch(requestSearchIdSuccess(searchId));
  dispatch(requestTickets());

  const requestRecursive = async () => {
    await Axios.get(
      `https://front-test.beta.aviasales.ru/tickets?searchId=${searchId}`
    )
      .then((res) =>
        !res.data.stop
          ? requestRecursive()
          : dispatch(requestTicketsSuccess(res.data))
      )
      .catch(() => {
        setTimeout(() => requestRecursive(), 200);
      });
  };
  await requestRecursive();
};
