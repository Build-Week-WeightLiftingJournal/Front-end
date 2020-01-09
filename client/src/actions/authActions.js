import axiosWithAuth from "axios";
import axios from "axios";

export const LOGIN_START = "LOGIN_START";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAIL = "LOGIN_FAIL";

export const getLoggedIn = creds => dispatch => {
  dispatch({ type: LOGIN_START });
  return axios
    .post("https://weightlifting-app.herokuapp.com/api/login", creds)
    .then(res => {
      localStorage.setItem("token", res.data.token);
      dispatch({ type: LOGIN_SUCCESS, payload: res.data });
      console.log(res);
    })
    .catch(err => {
      dispatch({ type: LOGIN_FAIL, payload: err });
    });
};

export const SIGNUP_START = "SIGNUP_START";
export const SIGNUP_SUCCESS = "SIGNUP_SUCCESS";
export const SIGNUP_FAIL = "SIGNUP_FAIL";

export const getSignedUp = user => dispatch => {
  dispatch({ type: SIGNUP_START });
  return axios
    .post("https://weightlifting-app.herokuapp.com/api/register", user)
    .then(response => {
      // localStorage.setItem("token", response.data.token);
      dispatch({ type: SIGNUP_SUCCESS, payload: response.data });
      console.log(response);
    });
};