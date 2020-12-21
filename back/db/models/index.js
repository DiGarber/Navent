const User = require("./User");
const Test = require("./Test");
const Question = require("./Question");
const Answer = require("./Answer");
const Skill = require("./Skill");
const UserAnswers = require("./UserAnswers");


//TEST A USUARIO
Test.belongsTo(User);

//TEST A SKILL
Test.belongsTo(Skill);

//QUESTIONS A SKILL
Question.belongsTo(Skill);

//ANSWERS A QUESTIONS
Answer.belongsTo(Question);


//1 USUARIO, MUCHOS SKILLS / 1 SKILL MUCHOS USUARIOS
User.belongsToMany(Skill, { through: "UserSkills"});
Skill.belongsToMany(User, { through: "UserSkills"});



module.exports = { User, Test, Question, Answer, Skill, UserAnswers };
