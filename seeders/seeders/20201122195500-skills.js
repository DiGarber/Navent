"use strict";

//SKILLS
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("skills", [
      {
        name: "React",
        idNavent: 691,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Angular",
        idNavent: 690,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Java",
        idNavent: 221,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Python",
        idNavent: 242,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("skills", null, {});
  },
};
