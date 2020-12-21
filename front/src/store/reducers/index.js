import { combineReducers } from "redux";
import usersReducer from "../reducers/usersReducer";
import skillReducer from "./skillReducer";
import questionReducer from "./questionReducer";
import answersReducer from "./answersReducer";
import testReducer from "./testReducer";

export default combineReducers({
  usersReducer,
  skillReducer,
  questionReducer,
  answersReducer,
  testReducer,
});
