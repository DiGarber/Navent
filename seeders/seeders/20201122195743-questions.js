"use strict";

//QUESTIONS
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("questions", [
      // PREGUNTAS DE REACT SKILL ID 1
      {
        //QUESTION ID 1
        question: "¿Qué es React JS?",
        skillId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        // QUESTION ID 2
        question: "¿Qué es JSX?",
        skillId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        // QUESTION ID 3
        question: "¿Qué son los componentes?",
        skillId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        // QUESTION ID 4
        question: "¿Cuáles son los ciclos de vida de un componente?",
        skillId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        // QUESTION ID 5
        question: "¿Cuál es la diferencia entre ReactJS y React Native?",
        skillId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        // QUESTION ID 6
        question:
          "¿Qué diferencia hay entre 'Componente contenedor' y 'Componente de presentación'?",
        skillId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        // QUESTION ID 7
        question: "¿Qué es un 'Hook'?",
        skillId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        // QUESTION ID 8
        question: "¿Qué hace 'render'?",
        skillId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        // QUESTION ID 9
        question: "¿Qué es un 'estado'?",
        skillId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        // QUESTION ID 10
        question: "¿Qué son los 'props'?",
        skillId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      //PREGUNTAS DE ANGULAR SKILL ID 2
      {
        // QUESTION ID 11
        question: "¿Qué es Angular?",
        skillId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        // QUESTION ID 12
        question: "¿Cuales son las diferencias entre AngularJS y Angular?",
        skillId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        // QUESTION ID 13
        question: "¿Qué hacen las directivas?",
        skillId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        // QUESTION ID 14
        question: "¿Qué es Angular CLI?",
        skillId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        // QUESTION ID 15
        question: "¿Qué es la interpolación?",
        skillId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        // QUESTION ID 16
        question: "¿Qué es Angular?",
        skillId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        // QUESTION ID 17
        question: "¿Cuales son las diferencias entre AngularJS y Angular?",
        skillId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        // QUESTION ID 18
        question: "¿Qué hacen las directivas?",
        skillId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        // QUESTION ID 19
        question: "¿Qué es Angular CLI?",
        skillId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        // QUESTION ID 20
        question: "¿Qué es la interpolación?",
        skillId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      //PREGUNTAS DE JAVA SKILL ID 3
      {
        // QUESTION ID 21
        question: "¿Qué es Java?",
        skillId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        // QUESTION ID 22
        question: "¿Qué son los IDE de Java?",
        skillId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        // QUESTION ID 23
        question: "¿Como esta compuesta una clase?",
        skillId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        // QUESTION ID 24
        question: "¿Qué es el polimorfismo?",
        skillId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        // QUESTION ID 25
        question: "¿Qué se entiende por Anulación del método?",
        skillId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      // {
      //   // QUESTION ID 21
      //   question: "¿Qué es Java?",
      //   skillId: 3,
      //   createdAt: new Date(),
      //   updatedAt: new Date(),
      // },
      // {
      //   // QUESTION ID 22
      //   question: "¿Qué son los IDE de Java?",
      //   skillId: 3,
      //   createdAt: new Date(),
      //   updatedAt: new Date(),
      // },
      // {
      //   // QUESTION ID 23
      //   question: "¿Como esta compuesta una clase?",
      //   skillId: 3,
      //   createdAt: new Date(),
      //   updatedAt: new Date(),
      // },
      // {
      //   // QUESTION ID 24
      //   question: "¿Qué es el polimorfismo?",
      //   skillId: 3,
      //   createdAt: new Date(),
      //   updatedAt: new Date(),
      // },
      // {
      //   // QUESTION ID 25
      //   question: "¿Qué se entiende por Anulación del método?",
      //   skillId: 3,
      //   createdAt: new Date(),
      //   updatedAt: new Date(),
      // },
      //PREGUNTAS DE PYTHON SKILL ID 4
      {
        // QUESTION ID 26
        question: "¿Qué es Python?",
        skillId: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        // QUESTION ID 27
        question: "¿Cuántos tipos de datos existen en el lenguaje Python?",
        skillId: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        // QUESTION ID 28
        question: "¿Cuál es la diferencia entre tuple y lista?",
        skillId: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        // QUESTION ID 29
        question: "¿Qué es Pass?",
        skillId: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        // QUESTION ID 30
        question: "¿Qué es lambda?",
        skillId: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      // {
      //   // QUESTION ID 26
      //   question: "¿Qué es Python?",
      //   skillId: 4,
      //   createdAt: new Date(),
      //   updatedAt: new Date(),
      // },
      // {
      //   // QUESTION ID 27
      //   question: "¿Cuántos tipos de datos existen en el lenguaje Python?",
      //   skillId: 4,
      //   createdAt: new Date(),
      //   updatedAt: new Date(),
      // },
      // {
      //   // QUESTION ID 28
      //   question: "¿Cuál es la diferencia entre tuple y lista?",
      //   skillId: 4,
      //   createdAt: new Date(),
      //   updatedAt: new Date(),
      // },
      // {
      //   // QUESTION ID 29
      //   question: "¿Qué es Pass?",
      //   skillId: 4,
      //   createdAt: new Date(),
      //   updatedAt: new Date(),
      // },
      // {
      //   // QUESTION ID 30
      //   question: "¿Qué es lambda?",
      //   skillId: 4,
      //   createdAt: new Date(),
      //   updatedAt: new Date(),
      // },
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("questions", null, {});
  },
};
