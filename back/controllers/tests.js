const {
  User,
  Test,
  Question,
  Answer,
  Skill,
  Prueba,
} = require("../db/models/index");

const moment = require("moment");
moment().format();

const testController = {
  getTests(req, res) {
    Test.findAll({})
      .then((tests) => {
        res.send(tests);
      })
      .catch((err) => {
        res.send(err);
      });
  },

  getTest(req, res) {
    Test.findOne({
      where: {
        userId: req.params.userId,
        skillId: req.params.skillId,
      },
    })
      .then((test) => {
        res.send(test);
      })
      .catch((err) => res.send(err));
  },

  getTestsDate(req, res) {
    Skill.findOne({
      where: {
        name: req.params.skillId,
      },
    })
      .then((skill) => {
        User.findOne({
          where: {
            name: req.params.userName,
          },
        })
        .then((user) => {
          const data = {
            skill: skill,
            user: user
          };
          return data;
        })
        .then((data) => {
          return Test.findOne({
            where: {
              userId: data.user.dataValues.id,
              skillId: data.skill.dataValues.id,
            },
          });
        })
        .then((test) => {
          if (test.availableAt) {
            res.send(test.availableAt);
          } else {
            res.sendStatus(400);
          }
        })
        .catch((err) => res.send(err));
      })
     
  },

  postTest(req, res) {
    Test.findOne({
      where: { userId: req.body.userId, skillId: req.body.skillId },
    })
      .then((test) => {
        test
          ? Test.update(
              { status: req.body.status, availableAt: req.body.availableAt },
              {
                where: { userId: req.body.userId, skillId: req.body.skillId },
                returning: true,
              }
            )
              .then((testUpdated) => res.send(testUpdated[1]))
              .catch((err) => res.send(err))
          : Test.create(req.body)
              .then((test) => {
                return test.setUser(req.body.userId);
              })
              .then((test) => {
                return test.setSkill(req.body.skillId);
              })
              .then((test) => {
                res.status(200).send(test);
              })
              .catch((err) => res.send(err));
      })
      .catch((err) => res.send(err));
  },

  putTest(req, res) {
    Test.update(req.body, { where: { id: req.params.id } })
      .then((test) => res.status(200).send(test))
      .catch((err) => res.send(err));
  },
  deleteTest(req, res) {
    Test.destroy({ where: { id: req.params.id } })
      .then((test) => res.status(200).send(test))
      .catch((err) => res.send(err));
  },
};

module.exports = testController;
