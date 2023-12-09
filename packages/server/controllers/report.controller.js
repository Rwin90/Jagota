const reportService = require("../services/report.service");

async function getByYear(req, res, next) {
  try {
    res.json(
      await reportService.getYearlyReport(
        req.query.startYear,
        req.query.endYear
      )
    );
  } catch (err) {
    console.error(`Error while getting reports`, err.message);
    next(err);
  }
}

module.exports = {
  getByYear,
};
