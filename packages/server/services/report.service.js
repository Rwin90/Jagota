const { faker } = require("@faker-js/faker");

async function getYearlyReport(startYear, endYear) {
  const res = {};
  let start = startYear;
  while (start <= endYear) {
    (res[start] = new Array(15).fill(0).map((item) => ({
      timestamp: faker.date.anytime("unix"),
      value: faker.number.int({ min: 1, max: 100 }),
      gap: faker.number.float({ min: -20, max: 20, precision: 0.01 }),
      growth: faker.number.float({ min: -30, max: 30, precision: 0.01 }),
      margin: faker.number.float({ min: 1, max: 20, precision: 0.01 }),
      dist: faker.number.int({ min: 1, max: 10 }),
      budget: faker.number.int({ min: 1, max: 20 }),
    }))),
      start++;
  }

  return res;
}

module.exports = {
  getYearlyReport,
};
