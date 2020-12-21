import * as React from "react";
import {useSelector } from "react-redux";
import { Fragment } from "react";
import Timer from "./Timer"

export default ({ puntero, contador, submitTest, buscarPregunta, userAnswers,btnState }) => {
  
    const {minutes, seconds } = useSelector(
        (state) => state.testReducer
      )
  
    return (
    <Fragment>
      {
        <div className="footer">
          <p className="text">Pregunta {puntero + 1} de 10</p>
          <div className="test-timer" style={{ fontSize: "1rem" }}>
            <i className="far fa-clock"></i>
            <Timer
              buscarPregunta={buscarPregunta}
              initialSeconds={seconds}
              initialMinutes={minutes}
              puntero={puntero}
              contador={contador}
              submitTest={submitTest}
            />{" "}
          </div>
          <button
            className={`btn ${btnState ? "disabled" : "btn-active"}`}
            type="submit"
            disabled={btnState ? "true" : ""}
          >
            {userAnswers.length <= 8 ? `Siguiente` : `Finalizar Test`}
          </button>
        </div>
      }
    </Fragment>
  );
};
