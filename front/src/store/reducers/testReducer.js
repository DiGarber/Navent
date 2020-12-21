import { POST_TEST, CONFIRM_POST, SET_TIMER, GET_TEST, FETCH_DATE, GET_ONE_TEST } from "../constants";

const initialState = {
  allTests: [],
  test: {},
  testPosted: false,
  minutes: 0,
  seconds: 30,
  testDate: "",
  singleTest : {} 
};

export default function (state = initialState, action) {
  switch (action.type) {
    case POST_TEST:
      return { ...state, test: action.payload };
    case CONFIRM_POST:
      return { ...state, testPosted: action.payload };
    case SET_TIMER:
      return { ...state, minutes: 0, seconds: 30 };
    case GET_TEST:
      return { ...state, allTests: action.payload };
    case FETCH_DATE:
      return { ...state, testDate: action.payload };
    case GET_ONE_TEST:
      return {...state, singleTest: action.payload}  
    default:
      return state;
  }
}
