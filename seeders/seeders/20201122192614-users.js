"use strict";

//USERS
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("users", [
      {
        name: "Emiliano",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Diego",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Pilar",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Luciano",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Gonzalo",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("users", null, {});
  },
};
