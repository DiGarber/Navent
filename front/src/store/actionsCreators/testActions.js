import axios from "axios";
import {
  CONFIRM_POST,
  FETCH_QUESTIONS,
  POST_TEST,
  SET_TIMER,
  GET_TEST,
  FETCH_DATE,
  GET_ONE_TEST,
} from "../constants";

const testQuestions = (data) => ({
  type: FETCH_QUESTIONS,
  payload: data,
});

const getTest = (data) => ({
  type: GET_TEST,
  payload: data,
});

const getOneTest = (data) => ({
  type: GET_ONE_TEST,
  payload: data,
});

const fetchDate = (data) => ({
  type: FETCH_DATE,
  payload: data,
});

const postTest = (data) => ({
  type: POST_TEST,
  payload: data,
});

export const confirmPost = (data) => ({
  type: CONFIRM_POST,
  payload: data,
});

const setTimer = () => ({
  type: SET_TIMER,
});

export const fetchSkillDate = (userName, skillName) => (dispatch) => {
  return axios
    .get(`/api/tests/getTestDate/${userName}/${skillName}`)
    .then(({ data }) => {
      dispatch(fetchDate(data));
    });
};

export const fetchQuestions = (idSkill) => (dispatch) => {
  axios
    .get(`/api/questions/${idSkill}`)
    .then(({ data }) => dispatch(testQuestions(data)));
};

export const sendTest = (test, userAnswers, body) => (dispatch) => {
  //ACA ATAJAMOS EL ARRAY DE RPTAS Y LAS FILTRAMOS ANTES DE MANDARLAS AL BACK
  let finalAnswers = userAnswers.filter((ans) => ans === "true");
  let res = { ...test, status: finalAnswers.length };
  return axios
    .post(`/api/tests/`, res)
    .then(({ data }) => {
      if (data[0]) {
        return axios
          .post("/api/userAnswers/postUserAnswers", {
            ...body,
            testId: data[0].id,
            userId: data[0].userId,
          })
          .then(() => {
            return dispatch(postTest(data));
          });
      } else {
        return axios
          .post("/api/userAnswers/postUserAnswers", {
            ...body,
            testId: data.id,
            userId: data.userId,
          })
          .then(() => {
            return dispatch(postTest(data));
          });
      }
    })
    .then(() => {
      setTimeout(() => dispatch(confirmPost(true)), 3000);
    });
};

export const resetTimer = () => (dispatch) => {
  dispatch(setTimer());
};

export const fetchTests = () => (dispatch) => {
  axios.get(`/api/tests/`).then(({ data }) => dispatch(getTest(data)));
};

export const fetchTest = (userId, skillId) => (dispatch) => {
  return axios
    .get(`/api/tests/singletest/${userId}/${skillId}`)
    .then(({ data }) => {
      dispatch(getOneTest(data));
    });
};
