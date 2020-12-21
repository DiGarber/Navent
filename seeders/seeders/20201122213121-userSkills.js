"use strict";

//USERSKILLS
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("UserSkills", [
      {
        userId: 1,
        skillId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 1,
        skillId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 2,
        skillId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 2,
        skillId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 3,
        skillId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 3,
        skillId: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 4,
        skillId: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 4,
        skillId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 5,
        skillId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 5,
        skillId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 5,
        skillId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("UserSkills", null, {});
  },
};
