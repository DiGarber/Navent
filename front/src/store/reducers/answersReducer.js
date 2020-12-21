import { FETCH_CORRECT_ANSWER, FETCH_ANSWERS, ADD_USER_ANSWER, CLEAR_USER_ANSWERS } from "../constants";

const initialState = {
  testAnswers: [],
  correctAnswer: {},
  userAnswers: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_ANSWERS:
      return { ...state, testAnswers: action.payload };
    case FETCH_CORRECT_ANSWER:
      return { ...state, correctAnswer: action.payload };
    case ADD_USER_ANSWER:
      return { ...state, userAnswers: action.payload };
    case CLEAR_USER_ANSWERS:
      return { ...state, userAnswers: [] };
    default:
      return state;
  }
}
