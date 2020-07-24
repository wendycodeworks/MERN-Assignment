require("dotenv").config();

module.exports = {
  connectionStringLocal: `mongodb://${process.env.DB_SERVER}:${process.env.DB_PORT}/${process.env.DB_NAME}`,
  connectionStringRemote: process.env.MONGODB_URI
};
