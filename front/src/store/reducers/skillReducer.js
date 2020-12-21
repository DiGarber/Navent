import {
  SET_SKILLS,
  FETCH_SKILL,
  FETCH_ALL_SKILLS,
  FETCH_BY_NAVENT,

} from "../constants";

const initialState = {
  userSkills: [],
  selectedSkill: {},
  allSkills: [],
  naventSkills: [],

};

export default (state = initialState, action) => {
  switch (action.type) {
/*     case SET_SKILLS:
      return { ...state, userSkills: action.payload }; */
    case FETCH_SKILL:
      return { ...state, selectedSkill: action.payload };
    case FETCH_ALL_SKILLS:
      return { ...state, allSkills: action.payload };
    case FETCH_BY_NAVENT:
      return { ...state, naventSkills: action.payload };

    default:
      return state;
  }
};
