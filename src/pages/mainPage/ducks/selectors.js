const sortByField = (field) => {
  return (a, b) => (a[field] > b[field] ? 1 : -1);
};
const checkingObject = (obj) =>
  Object.values(obj).every((elem) => elem === false);

export const filterTickets = (
  state,
  stateCheckBox,
  maxSizeFiltration,
  eventClick
) => {
  const {
    items: {
      responseTickets: { tickets },
    },
  } = state;

  if (!tickets) return null;

  let [...counterTickets] = tickets;

  if (Object.keys(stateCheckBox).length && !checkingObject(stateCheckBox)) {
    if (!stateCheckBox?.one) {
      counterTickets = tickets.filter(({ segments }) => {
        const [thereStops, backStops] = segments;

        return (
          thereStops.stops.length <= maxSizeFiltration &&
          backStops.stops.length <= maxSizeFiltration
        );
      });
    }
  }

  if (eventClick === 'cheap') {
    counterTickets.sort(sortByField('price')).slice(0, 5);
  }

  if (eventClick === 'fast') {
    counterTickets
      .sort((a, b) => {
        const {
          segments: [thereA, backA],
        } = a;

        const {
          segments: [thereB, backB],
        } = b;

        const sumDurationA = thereA.duration + backA.duration;
        const sumDurationB = thereB.duration + backB.duration;

        return sumDurationA > sumDurationB ? 1 : -1;
      })
      .slice(0, 5);
  }

  return counterTickets.slice(0, 5);
};
