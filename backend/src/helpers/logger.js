const helpers = require("./helpers");
const fs = require('fs');

class Logger {
  logLevels = ["mongoose", "logger-middleware"];
  fileName = "tech-meet.log";

  constructor(logLevel, message) {
    if (this.logLevels.includes(logLevel)) {
      if (logLevel.includes('-')) {
        this.writeToFile(`[${helpers.capitalize(logLevel, '-')}]: ${message}`);
      } else {
        this.writeToFile(`[${helpers.capitalize(logLevel)}]: ${message}`);
      }
    } else {
      console.log("Invalid log level for message: '${message}'");
    }
  }

  writeToFile(message) {
    fs.appendFile("tech-meet.log", `${helpers.getTimestamp()} | ${message}\n`, (err) =>  {
      if (err) console.log(`Failed to write log!\nReason: '${err}'`);
    });
  }
}

module.exports = Logger;
