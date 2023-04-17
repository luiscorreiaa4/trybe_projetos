const data = require('../data/zoo_data');

const isManager = (id) => {
  const { employees } = data;
  if (!employees) {
    return false;
  }
  for (let index = 0; index < employees.length; index += 1) {
    if (employees[index].managers.includes(id)) {
      return true;
    }
  }
  return false;
};

const getRelatedEmployees = (managerId) => {
  if (!isManager(managerId)) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }
  const { employees } = data;
  const res = [];
  for (let index = 0; index < employees.length; index += 1) {
    if (employees[index].managers.includes(managerId)) {
      const temp = `${employees[index].firstName} ${employees[index].lastName}`;
      res.push(temp);
    }
  }
  return res;
};

module.exports = { isManager, getRelatedEmployees };
