import {FETCH_QUESTIONS} from '../constants'

const initialState = {
    testQuestions  : [],
}

export default function (state = initialState, action) {
    switch (action.type) {
      case FETCH_QUESTIONS:
        return { ...state, testQuestions: action.payload };
      default:
        return state;
    }
}