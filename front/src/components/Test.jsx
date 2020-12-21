import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getQuestions } from "../store/actionsCreators/questionActions";
import {
  getAnswers,
  addUserAnswers,
  removeUserAnswers,
} from "../store/actionsCreators/answersActions";
import { sendTest } from "../store/actionsCreators/testActions";
import { LinearProgress } from "@material-ui/core/";
import PostTestView from "./PostTestView";
import moment from "moment";
import Questions from "./Questions";
import Answers from "./Answers";
import Footer from "./Footer";
import { token } from "./TestSelector";
import { mergeAndSortAnswers } from "../commons/testFunctions";
moment().format();

let contador = 1;

export default function Test({ history }) {
  const dispatch = useDispatch();

  //-------------------------------------------ESTADOS LOCALES--------------------------------------//
  const [questionId, setQuestionId] = useState(""); //ID DE LA PREGUNTA ACTUAL
  const [puntero, setPuntero] = useState(0); //SELECTOR PREGUNTAS
  const [userSelectedAnswer, setUserSelectedAnswer] = useState("false"); //RESPUESTA ELEGIDA POR EL USUARIO
  const [arrayFinal, setArrayFinal] = useState([]); //ARRAY RESPUESTAS POSIBLES QUE SE VA A MAPEAR
  const [finalAnswers, setFinalAnswers] = useState([]); //ARRAY RESPUESTAS DEL USUARIO FILTRADO
  const [btnState, setBtnState] = useState(true); //HANDLER PARA EL DISABLE DEL BOTON
  const [questionAnswers, setQuestionAnswers] = useState([]);
  const [selectedAnswer2, setSelectedAnswer2] = useState(0);
  //-------------------------------------------ESTADOS REDUX--------------------------------------//

  const { testQuestions } = useSelector((state) => state.questionReducer); //TODAS LAS PREGUNTAS
  const { testAnswers, userAnswers } = useSelector(
    (state) => state.answersReducer
  ); //TODAS LAS RESPUESTAS
  const { selectedSkill } = useSelector((state) => state.skillReducer); //EL SKILL DEL TEST
  const { user } = useSelector((state) => state.usersReducer); //USUARIO QUE REALIZA EL TEST
  const { test, testPosted } = useSelector((state) => state.testReducer); //TEST QUE SE ENVIÖ
  //-------------------------------------------FUNCIONES--------------------------------------//

  const buscarPregunta = (e) => {
    e && e.preventDefault();
    dispatch(addUserAnswers([...userAnswers, userSelectedAnswer]));
    setPuntero(puntero + 1);
    testQuestions[contador] && setQuestionId(testQuestions[contador].id);
    setQuestionAnswers([
      ...questionAnswers,
      {
        questionId: questionId,
        answerId: selectedAnswer2,
      },
    ]);
    contador++;
  };

  //Funcion que maneja la selección de respuesta
  const handleChange = (input) => {
    setUserSelectedAnswer(input.value);
    setSelectedAnswer2(input.id);
    setBtnState(false);
  };

  //Funcion submitea test
  const submitTest = () => {
    dispatch(
      sendTest(
        {
          status: null,
          userId: user.id,
          skillId: selectedSkill.id,
          availableAt: moment().add(1, "minute")._d.toString(),
        },
        userAnswers,
        {
          userAnswers: questionAnswers,
        }
      )
    ).then(() => {
      localStorage.setItem("testDate", moment().add(1, "minute")._d.toString());
      contador = 1;
      setPuntero(0);
      setUserSelectedAnswer("");
    });
  };

  //-------------------------------------------USE EFFECTS--------------------------------------//
  //Handler de test incompleto
  window.onpopstate = function () {
    submitTest();
    // history.push(`/?token=${token}`);
    return (window.location =
      "https://www.bumeran.com.ar/candidatos/curriculum");
  };

  window.onbeforeunload = () => {
    submitTest();
    // history.push(`/?token=${token}`);
    return (window.location =
      "https://www.bumeran.com.ar/candidatos/curriculum");
  };

  //UseEffect tipo Update para manejar la skill a evaluar y traer preguntas correspondientes
  useEffect(() => {
    if (selectedSkill.id) {
      dispatch(getQuestions(selectedSkill.id)).then((questions) => {
        setQuestionId(questions.payload[0].id);
        dispatch(getAnswers(testQuestions[0].id)); //testQuestions[puntero].id
      });
    }
  }, [selectedSkill, selectedSkill.id]);

  //UseEffect tipo Update para traer respuestas relacionadas a la pregunta actual
  useEffect(() => {
    if (questionId !== "") {
      setUserSelectedAnswer("false");
      dispatch(getAnswers(questionId));
    }
  }, [questionId]);

  //UseEffect tipo Update para seleccionar y aleatorizar las respuestas que se van a mostrar
  useEffect(() => {
    mergeAndSortAnswers(
      testAnswers.filter((answer) => answer.value === true),
      testAnswers.filter((answer) => answer.value === false),
      setArrayFinal
    );
  }, [testAnswers]);

  //Seteo el boton a disabled cada vez que se cambia de pregunta
  useEffect(() => {
    setBtnState(true);
  }, [userAnswers]);

  useEffect(() => {
    dispatch(removeUserAnswers());
    !selectedSkill.name && history.push(`/?token=${token}`);
  }, []);

  useEffect(() => {
    setFinalAnswers([...userAnswers.filter((ans) => ans === "true")]);
    if (contador == 11) {
      submitTest();
    }
  }, [puntero]);

  //----------------------------------------------------------------------------------------------//
  return (
    <div className="bgtest">
      {testQuestions[0] && (
        <div>
          {userAnswers.length < 10 ? (
            <div className="test-container">
              <Questions testQuestions={testQuestions} puntero={puntero} />
              <form
                className="answers-container"
                type="text"
                action=""
                onSubmit={buscarPregunta}
              >
                <Answers arrayFinal={arrayFinal} handleChange={handleChange} />
                <LinearProgress
                  variant="determinate"
                  value={puntero * 11.1111}
                />
                <Footer
                  puntero={puntero}
                  contador={contador}
                  submitTest={submitTest}
                  buscarPregunta={buscarPregunta}
                  userAnswers={userAnswers}
                  btnState={btnState}
                />
              </form>
            </div>
          ) : (
            <PostTestView
              testPosted={testPosted}
              userAnswers={userAnswers}
              testQuestions={testQuestions}
              test={test}
              user={user}
              skill={selectedSkill}
              finalAnswers={finalAnswers}
              history={history}
            />
          )}
        </div>
      )}
    </div>
  );
}
