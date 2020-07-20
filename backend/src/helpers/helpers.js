module.exports = {
  capitalize: (str, delim = null) => {
    if (delim !== null) {
      const newString = str
        .split(delim)
        .map((substring) => {
          return substring[0].toUpperCase() + substring.slice(1);
        })
        .join(" ");
      return newString;
    } else {
      return str[0].toUpperCase() + str.slice(1);
    }
  },
};
