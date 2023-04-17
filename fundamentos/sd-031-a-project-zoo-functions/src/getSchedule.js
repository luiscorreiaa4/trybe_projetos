const data = require('../data/zoo_data');

const zooClosed = 'The zoo will be closed!';

function invalidParam() {
  const schedule = {};
  Object.entries(data.hours).forEach(([day, hours]) => {
    const availableAnimals = data.species
      .filter((species) => species.availability.includes(day))
      .map((species) => species.name);
    if (availableAnimals.length > 0) {
      schedule[day] = {
        officeHour: `Open from ${hours.open}am until ${hours.close}pm`,
        exhibition: availableAnimals,
      };
    } else {
      schedule[day] = {
        officeHour: 'CLOSED',
        exhibition: zooClosed,
      };
    }
  });
  return schedule;
}

function animalParam(param) {
  const availableSpecies = data.species.find((species) => species.name === param);
  const availableDays = availableSpecies && availableSpecies.availability;
  return availableDays || invalidParam();
}

function dayParam(param) {
  const availableAnimals = data.species
    .filter((species) => species.availability.includes(param)).map((species) => species.name);
  return {
    [param]: {
      officeHour: `Open from ${data.hours[param].open}am until ${data.hours[param].close}pm`,
      exhibition: availableAnimals.length > 0 ? availableAnimals : zooClosed,
    },
  };
}

function getSchedule(param) {
  if (!param) return invalidParam();
  if (param === 'Monday') return { Monday: { officeHour: 'CLOSED', exhibition: zooClosed } };
  if (!data.hours[param]) {
    return animalParam(param);
  }
  return dayParam(param);
}

module.exports = getSchedule;
