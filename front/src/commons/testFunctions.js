
  //Función para elegir una respuesta incorrecta sin repetir
  export function selectRandomAnswer(falseAnswers) {
    var index = Math.floor(Math.random() * falseAnswers.length);
    var item = falseAnswers[index];
    falseAnswers.splice(index, 1);
    return item;
  }

   //Función para hacer un array sólo con las respuestas a renderizar y darle un orden aleatorio
   export function mergeAndSortAnswers(trueAnswer, falseAnswers, setArrayFinal) {
    const finalArrayToSort = [
      selectRandomAnswer(falseAnswers),
      selectRandomAnswer(falseAnswers),
      trueAnswer[0],
    ];
    setArrayFinal(finalArrayToSort.sort(() => Math.random() - 0.5));
  }
