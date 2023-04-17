const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  if (!employeeName) {
    return {};
  }

  const employee = data.employees.find((emp) => emp.firstName === employeeName
  || emp.lastName === employeeName);
  return employee;
}

module.exports = getEmployeeByName;

// const getEmployeeByName = (employeeName) => {
//   // seu código aqui
// };
