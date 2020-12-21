import { SET_USER, SET_USERS, FETCH_TOKEN } from "../constants";

const initialState = {
  user: {},
  users: [],
  userData: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_USERS:
      return { ...state, users: action.payload };
      case SET_USER:
      return { ...state, user: action.payload };
    case FETCH_TOKEN:
      return { ...state, userData: action.payload };
    default:
      return state;
  }
};
