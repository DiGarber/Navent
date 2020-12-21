import axios from "axios";
import { FETCH_QUESTIONS } from "../constants";

export const setQuestions = (data) => ({ type: FETCH_QUESTIONS, payload: data });


export const getQuestions = (id) => (dispatch) => {
   return axios
    .get(`/api/questions/${id}`)
    .then(({ data }) => dispatch(setQuestions(data)))};
