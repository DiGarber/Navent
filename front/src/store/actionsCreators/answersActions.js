import axios from "axios";
import { FETCH_ANSWERS,  FETCH_CORRECT_ANSWER, ADD_USER_ANSWER, CLEAR_USER_ANSWERS} from "../constants";

export const setAnswers = (data) => ({ type: FETCH_ANSWERS, payload: data });
export const setAnswer  = (data) => ({ type: FETCH_CORRECT_ANSWER, payload: data });
export const addUserAnswers = (data) => ({ type: ADD_USER_ANSWER, payload: data });
export const removeUserAnswers = () => ({ type: CLEAR_USER_ANSWERS });


export const getAnswers = (questionId) => (dispatch) =>{
  axios
    .get(`/api/answers/answers/${questionId}`)
    .then(({ data }) => dispatch(setAnswers(data)));
}
/* 
export const getAnswer = (correctAnswerId) => (dispatch) =>
  axios
    .get(`/api/answers/${correctAnswerId}`)
    .then(({ data }) => dispatch(setAnswer(data))); */