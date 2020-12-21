const { User, Test, Question, Answer, Skill, Prueba } = require("../db/models/index");
const axios = require("axios")
const CircularJSON = require('circular-json');


const userController = {
  getUsers(req, res) {
    User.findAll({})
      .then((users) => {
        res.send(users);
      })
      .catch((err) => {
        res.send(err);
      });
  },

  getUser(req, res) {
    User.findOne({
      where: {
      name: req.params.name,
      },
    })
      .then((user) => {
        res.send(user);
      })
      .catch((err) => res.send(err));
  },

  postUser(req, res) {
    User.create(req.body)
      .then((user) => {
        res.status(200).send(user);
      })
      .catch((err) => res.send(err));
  },
  postSkill(req, res) {
    User.findByPk(req.params.id)
      .then((user) => {
        return user.addSkill(req.body.skillId);
      })
      .then((user) => {
        res.status(200).send(user);
      })
      .catch((err) => res.send(err));
  },
  getUserSkills(req, res) {
    User.findOne({
      where:{id: req.params.id},
      include: [{ model: Skill}],
      order: [["createdAt", "DESC"]]
    })
      .then((skills) => {
        res.status(200).send(skills);
      })
      .catch((err) => res.send(err));
  },
  getUserToken(req, res) {
    let token = req.body.token
    axios.get(`https://www.bumeran.com.ar/candidatos/curriculum/nameAndSkills?token_auto=${token}`)
    .then((response)=>{
      let json = CircularJSON.stringify(response);
      res.send(json);
      })
    .catch((err) => console.log(err))
  }
};

module.exports = userController;
