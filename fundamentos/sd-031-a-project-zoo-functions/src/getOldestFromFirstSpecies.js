const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const collaborator = data.employees.find((employee) => employee.id === id);
  const animalId = collaborator.responsibleFor[0];
  const ani = data.species.find((animal) => animal.id === animalId);
  const oldestAnimal = ani.residents.reduce((oldest, current) => {
    if (current.age > oldest.age) {
      return current;
    }
    return oldest;
  });
  return [oldestAnimal.name, oldestAnimal.sex, oldestAnimal.age];
}

module.exports = getOldestFromFirstSpecies;
