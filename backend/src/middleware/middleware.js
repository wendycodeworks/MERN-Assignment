const Logger = require("../helpers/logger");

module.exports = {
  requestLogger: (req, res, next) => {
    let message = "";
    switch (req.method.toUpperCase()) {
      case "POST":
        const data = JSON.stringify(req.body, null, 2); // 2 space formatting.
        // ternary to check if stringified data is an empty object.
        const toAppend = data !== "{}" ? data : "Empty body!";
        message =
          `Received ${req.method} request at` +
          `'${req.originalUrl}'\n` +
          toAppend;
        new Logger("logger-middleware", message);
        break;
      default:
        message =
          `Received ${req.method} request at` + `'${req.originalUrl}'\n`;
        // append query params if they exist.
        if (req.query) message += JSON.stringify(req.query, null, 2);

        new Logger("logger-middleware", message);
        break;
    }

    next();
  },
};
