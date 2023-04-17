const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  if (ids.length === 0) {
    return [];
  }

  const result = [];
  ids.forEach((id) => {
    data.species.forEach((animal) => {
      if (animal.id === id) {
        result.push(animal);
      }
    });
  });
  return result;
}

module.exports = getSpeciesByIds;
