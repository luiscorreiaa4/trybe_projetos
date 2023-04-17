const data = require('../data/zoo_data');

function countAnimals(animal) {
  const { species } = data;
  if (!animal) {
    const result = {};
    species.forEach((specie) => {
      result[specie.name] = specie.residents.length;
    });
    return result;
  } const s = species.find((specie) => specie.name === animal.species);
  if (animal.species && !animal.sex) {
    return s.residents.length;
  }
  let count = 0;
  s.residents.forEach((resident) => {
    if (resident.sex === animal.sex) {
      count += 1;
    }
  });
  return count;
}

module.exports = countAnimals;
