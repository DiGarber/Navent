const S = require("sequelize");
const db = new S("postgres://localhost:5432/navent", { logging: false });

module.exports = db;
