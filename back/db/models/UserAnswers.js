const S = require("sequelize");
const db = require("../db");

class UserAnswers extends S.Model {}
UserAnswers.init(
  {
    userAnswers: {
      type: S.ARRAY(S.JSON),
      allowNull: false,
    },
    userId: {
      type: S.INTEGER,
      allowNull: false
    },
    testId: {
      type: S.INTEGER,
      allowNull: false
    }
  },
  { sequelize: db, modelName: "userAnswers" }
);

module.exports = UserAnswers;
