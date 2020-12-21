const S = require("sequelize");
const db = require("../db");

class Question extends S.Model {}
Question.init(
  {
    question: {
      type: S.STRING,
      allowNull: false,
    },
  },
  { sequelize: db, modelName: "question" }
);

module.exports = Question;
