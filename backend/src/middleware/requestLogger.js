const Logger = require("../helpers/logger");

// middleware that logs the contents of the request body.
const requestLogger = (req, res, next) => {
  let message = "";
      // ternary to check body is an empty object.
      const data =
        Object.keys(req.body).length !== 0
          ? JSON.stringify(req.body, null, 2) // 2 space formatting.
          : "Empty body!";
      message =
        `Received ${req.method} request at` + `'${req.originalUrl}'\n` + data;
      new Logger("request-logger", message);
      break;

  next();
};

module.exports = requestLogger;
