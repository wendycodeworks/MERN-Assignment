const Logger = require("../helpers/logger");

module.exports = {
  requestLogger: (req, res, next) => {
    new Logger(
      "logger-middleware",
      `Received ${req.method} request at ${req.originalUrl}`
    );
  },
};
