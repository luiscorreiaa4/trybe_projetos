const data = require('../data/zoo_data');

const countEntrants = (entrants) => entrants.reduce(
  (acc, { age }) => {
    if (age < 18) {
      return { ...acc, child: acc.child + 1 };
    }
    if (age >= 18 && age < 50) {
      return { ...acc, adult: acc.adult + 1 };
    }
    return { ...acc, senior: acc.senior + 1 };
  },
  { child: 0, adult: 0, senior: 0 },
);

const calculateEntry = (entrants) => {
  if (!entrants || entrants.length === 0) {
    return 0;
  }
  const entrantsCount = countEntrants(entrants);
  const ticketPrices = { child: 0, adult: 0, senior: 0 };
  const { prices } = data;
  Object.keys(entrantsCount).forEach((key) => {
    ticketPrices[key] = entrantsCount[key] * prices[key];
  });

  const totalEntry = Object.values(ticketPrices).reduce((acc, price) => acc + price);
  return Number(totalEntry.toFixed(2));
};

module.exports = { calculateEntry, countEntrants };
