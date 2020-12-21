const S = require("sequelize");
const db = require("../db");

class Answer extends S.Model {}
Answer.init(
  {
    answer: {
      type: S.STRING,
      allowNull: false,
    },
    value: {
      type: S.BOOLEAN,
      defaultValue: false,

    }
  },
  { sequelize: db, modelName: "answer" }
);

module.exports = Answer;
