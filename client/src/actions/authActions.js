import { axiosWithAuth } from '../utils/axiosWithAuth';

export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAIL = 'LOGIN_FAIL';

export const SIGNUP_START = 'SIGNUP_START';
export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
export const SIGNUP_FAIL = 'SIGNUP_FAIL';

export const getLoggedIn = (creds) => (dispatch) => {
  dispatch({ type: LOGIN_START });
  return axiosWithAuth()
    .post('/auth/login', creds)
    .then((res) => {
      localStorage.setItem('token', res.data.token);
      localStorage.setItem('userId', res.data.id);
      console.log(res.data);
      dispatch({ type: LOGIN_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: LOGIN_FAIL, payload: err.response });
    });
};

export const getSignedUp = (user) => (dispatch) => {
  dispatch({ type: SIGNUP_START });
  return axiosWithAuth()
    .post('/auth/register', user)
    .then((res) => {
      localStorage.setItem('token', res.data.token);
      localStorage.setItem('userId', res.data.id);
      dispatch({ type: SIGNUP_SUCCESS, payload: res.data });
      console.log(res);
    })
    .catch((err) => {
      dispatch({ type: SIGNUP_FAIL, payload: err.response });
    });
};
