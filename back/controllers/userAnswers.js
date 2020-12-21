const { UserAnswers } = require("../db/models/index");

const userAnswersController = {
  postUserAnswers(req, res, next) {
    UserAnswers.findOne({
      where: { userId: req.body.userId, testId: req.body.testId },
    }).then((userAnswers) => {
      userAnswers
        ? UserAnswers.update(
            { userAnswers: req.body.userAnswers },
            {
              where: { userId: req.body.userId, testId: req.body.testId },
              returning: true,
            }
          ).then((userAnswersUpdated) => {
            res.send(userAnswersUpdated[1]);
          })
        : UserAnswers.create(req.body)
            .then((userAnsws) => {
              res.send(userAnsws);
            })
            .catch((err) => console.error(err));
    });
  },
};
module.exports = userAnswersController;
