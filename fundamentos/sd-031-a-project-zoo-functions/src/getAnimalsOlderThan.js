const data = require('../data/zoo_data');

function getAnimalsOlderThan(species, age) {
  const speciesObject = data.species.find((animal) => animal.name === species);
  return speciesObject.residents.every((animal) => animal.age >= age);
}

console.log(getAnimalsOlderThan('penguins', 10));
module.exports = getAnimalsOlderThan;
