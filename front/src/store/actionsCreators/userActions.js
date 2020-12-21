import axios from "axios";
/* axios.defaults.headers = {"Access-Control-Allow-Origin" : "http://localhost:8000"} */

import {  SET_USER, SET_USERS, FETCH_TOKEN} from "../constants";

export const setUser = (user) => ({ type: SET_USER, payload: user });

export const fetchToken = (data) => ({ type: FETCH_TOKEN, payload: data });

export const setUsers = (data) => ({ type: SET_USERS, payload: data });

export const fetchUsers = () => (dispatch) =>
  axios.get("/api/users").then(({ data }) => dispatch(setUsers(data)));

export const fetchUser = (name) => (dispatch) => {
  return axios
  .get(`/api/users/${name}`)
  .then(({ data }) => {
    dispatch(setUser(data))});
}


export const fetchUserToken = (token) => (dispatch) => {
  return axios
    .post("/api/users/token/usertoken", {token: token})
    .then(({ data }) => {
      console.log(data.data, "data del front")
      dispatch(fetchToken(data.data))})
    .catch((err) => console.log(err));
}

    


  
