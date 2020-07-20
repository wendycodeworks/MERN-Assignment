const helpers = require("./helpers");

class Logger {
  logLevels = ["mongoose", "logger-middleware"];

  constructor(logLevel, message) {
    if (this.logLevels.includes(logLevel)) {
      this.writeToFile(`[${helpers.capitalize(logLevel)}]: ${message}`);
    } else {
      console.log("Invalid log level for message: ${message}");
    }
  }

  writeToFile(message) {
    const fs = require("fs");
    fs.appendFile("tech-meet.log", message + "\n", (err) =>  {
      if (err) console.log(`Failed to write log.\nReason: ${err}`);
    });
  }
}

module.exports = Logger;
