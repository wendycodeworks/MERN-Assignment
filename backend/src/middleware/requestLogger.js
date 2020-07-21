const Logger = require("../helpers/logger");

const requestLogger = (req, res, next) => {
  let message = "";
  switch (req.method) {
    case "POST":
      // ternary to check body is an empty object.
      const data =
        Object.keys(req.body).length !== 0
          ? JSON.stringify(req.body, null, 2) // 2 space formatting.
          : "Empty body!";
      message =
        `Received ${req.method} request at` + `'${req.originalUrl}'\n` + data;
      new Logger("request-logger", message);
      break;
    default:
      message = `Received ${req.method} request at` + `'${req.originalUrl}'\n`;
      // append query params to message if they exist.
      if (Object.keys(req.query).length !== 0) {
        message += JSON.stringify(req.query, null, 2);
      }
      new Logger("request-logger", message);
      break;
  }

  next();
};

module.exports = requestLogger;
