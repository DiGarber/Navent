import React from "react";
import { useDispatch } from "react-redux";
import Loader from "./Loader";
import { token } from "./TestSelector";

export default ({
  userAnswers,
  testQuestions,
  user,
  skill,
  finalAnswers,
  testPosted,
  history,
}) => {
  const dispatch = useDispatch();

  const questionsTitles = testQuestions.map((question) => question.question);

  const handleClick = () => {
    history.push(`/?token=${token}`);
  };

  return (
    <div className="div-container">
      {testPosted ? (
        <div className="sub-container">
          <h1 className="aprobado h1-end">
            Resultado: {finalAnswers.length}/10
          </h1>
          <div className="answers">
            {questionsTitles.map((question, index) => {
              return userAnswers[index] === "false" ? (
                <p className="wrong-answer">{question}</p>
              ) : (
                <p className="correct-answer">{question}</p>
              );
            })}
          </div>
          <p className="p-end">
            <strong>{user.name}</strong>, recordá que si queres volver a
            intentar el test de
            {" " + skill.name} deberás esperar 1 semana.
          </p>
          <button
            onClick={() => handleClick()}
            className="btn-bgd-blue  btn-center"
            type="submit"
          >
            Volver al Inicio
          </button>
        </div>
      ) : (
        <Loader />
      )}
    </div>
  );
};
