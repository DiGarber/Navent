const { User, Test, Question, Answer, Skill } = require("../db/models/index")
const answerController = {
    getAnswers(req, res) {
      Answer.findAll({
          where:{questionId: req.params.id}
        })
        .then((answers) => {
          res.send(answers);
        })
        .catch((err) => {
          res.send(err);
        });
    },
  
    getAnswer(req, res) {
      Answer.findOne({
        where: {
          value: true,
          questionId: req.body.questionId
        },
      })
        .then((answer) => {
          res.send(answer);
        })
        .catch((err) => res.send(err));
    },
  
    postAnswer(req, res) {
      Answer.create(req.body)
      .then(question => {return question.setQuestion(req.body.questionId)})
        .then((answer) => {
          res.status(200).send(answer);
        })
        .catch((err) => res.send(err));
    },
  
    putAnswer(req, res){
        Answer.update(req.body, {where: {id: req.params.id}})
        .then(answer => res.status(200).send(answer))
        .catch(err => res.send(err))
    },
    deleteAnswer(req, res){
        Answer.destroy(
            {where:{id: req.params.id}}
            )
            .then(answer => res.status(200).send(answer))
            .catch(err => res.send(err))
    }
  };

  module.exports = answerController