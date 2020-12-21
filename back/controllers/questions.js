const { User, Test, Question, Answer, Skill } = require("../db/models/index");

function selectRandomQuestion(questionArray) {
  var index = Math.floor(Math.random() * questionArray.length);
  var item = questionArray[index];
  questionArray.splice(index, 1); //QuestionArray es un array que viene con todas las preguntas del back
  return item;
}

function mergeAndSortQuestions(array) {
  let finalArray = [];
  for (let i = 0; i < 10; i++) {
    finalArray.push(selectRandomQuestion(array));
  }
  return finalArray;
}

const questionController = {
  getQuestions(req, res) {
    Question.findAll({
      where: { skillId: req.params.id },
    })
      .then((questions) => {
        res.send(mergeAndSortQuestions(questions));
      })
      .catch((err) => {
        res.send(err);
      });
  },

  getOneQuestion(req, res) {
    Question.findOne({
      where: {
        skillId: req.body.skillId, //NO SE SI TEST O CATEGORY
      },
    })
      .then((question) => {
        res.send(question);
      })
      .catch((err) => res.send(err));
  },

  postQuestion(req, res) {
    Question.create(req.body)
      .then((question) => {
        return question.setSkill(req.body.skillId);
      })
      .then((question) => {
        res.status(200).send(question);
      })
      .catch((err) => res.send(err));
  },

  putQuestion(req, res) {
    Question.update(req.body, { where: { id: req.params.id } })
      .then((question) => res.status(200).send(question))
      .catch((err) => res.send(err));
  },
  deleteQuestion(req, res) {
    Question.destroy({ where: { id: req.params.id } })
      .then((question) => res.status(200).send(question))
      .catch((err) => res.send(err));
  },
};

module.exports = questionController;
