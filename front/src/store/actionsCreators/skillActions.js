import axios from "axios";
import { SET_SKILLS, FETCH_SKILL, FETCH_ALL_SKILLS, FETCH_BY_NAVENT } from "../constants";
import { confirmPost } from "./testActions";

export const setSkills = (data) => ({ type: SET_SKILLS, payload: data });
export const fetchSkill = (data) => ({ type: FETCH_SKILL, payload: data });
export const allSkills = (data) => ({ type: FETCH_ALL_SKILLS, payload: data });
export const fetchByNavent = (data) => ({ type: FETCH_BY_NAVENT, payload: data });


export const fetchSkills = (user) => (dispatch) =>
  axios.get(`/api/users/${user.id}/skill`).then(({ data }) => {
   
    dispatch(setSkills(data.skills));
  });

export const getSkill = (name) => (dispatch) => {

   return axios.get(`/api/skills/${name}`).then(({ data }) => {
      dispatch(fetchSkill(data));
    });
}

export const fetchAllSkills = () => (dispatch) => 
axios.get(`/api/skills`).then(({data}) => dispatch(allSkills(data)));


export const generateNaventSkills = (allSkills, naventSkills) => (dispatch) => {
  let filteredSkills = allSkills.filter((skill) =>
    naventSkills.includes(skill.idNavent)
  );
  dispatch(fetchByNavent(filteredSkills))
};
