const { User } = require("../db/models/index");

const authController = {
  getUser(req, res) {
    User.findOne({where: {
        name: req.body.name,
        password: req.body.password,
        email: req.body.email
    }})
      .then((user) => {
        res.send(user);
      })
      .catch((err) => {
        res.send(err);
      });
  },
  newUser(req, res) {
    User.create(req.body)
      .then((user) => {
        res.send(user);
      })
      .catch((err) => res.send(err));
  },
};

module.exports = authController;
