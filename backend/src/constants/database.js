require("dotenv").config();

module.exports = {
  connectionString: `mongodb://${process.env.DB_SERVER}:${process.env.DB_PORT}/${process.env.DB_NAME}`
};
