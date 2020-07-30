const helpers = require("./helpers");
const constants = require("../constants/logger");
const fs = require('fs');

class Logger {
  constructor(logLevel, message) {
  this.logLevels = ["mongoose", "request-logger"];
    if (this.logLevels.includes(logLevel)) {
      // check if log level needs to be split by the delimiter.
      if (logLevel.includes('-')) {
        this.writeToSTDOut(`[${helpers.capitalize(logLevel, '-')}]: ${message}`);
      } else {
        this.writeToSTDOut(`[${helpers.capitalize(logLevel)}]: ${message}`);
      }
    } else {
      console.log("Invalid log level for message: '${message}'");
    }
  }

  writeToSTDOut(message) {
    console.log(`${helpers.getTimestamp()} | ${message}`);
  }

  // heroku is mean. :(
  writeToFile(message) {
    fs.appendFile(constants.filename, `${helpers.getTimestamp()} | ${message}\n`, (err) =>  {
      if (err) console.log(`Failed to write log!\nReason: '${err}'`);
    });
  }
}

module.exports = Logger;
