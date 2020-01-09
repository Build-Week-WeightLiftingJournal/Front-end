import { LOGIN_START, LOGIN_SUCCESS, LOGIN_FAIL } from "../actions/authActions";
import {
  SIGNUP_START,
  SIGNUP_SUCCESS,
  SIGNUP_FAIL
} from "../actions/authActions";
import jwt from "jsonwebtoken"

const initialState = {
  user: jwt.decode(localStorage.getItem("token")),
  isLoggedIn: false,
  isSignedUp: false,
  isLoading: false,
  error: ""
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_START:
      return {
        ...state,
        isLoggedIn: false,
        isLoading: true,
        error: ""
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        isLoading: false
      };
    case LOGIN_FAIL:
      return {
        ...state,
        isLoggedIn: false,
        error: action.payload
      };
    case SIGNUP_START:
      return {
        ...state,
        isSignedUp: false,
        isLoading: true,
        error: ""
      };
    case SIGNUP_SUCCESS:
      return {
        ...state,
        isSignedUp: true,
        isLoading: false
      };
    case SIGNUP_FAIL:
      return {
        ...state,
        isSignedUp: false,
        error: action.payload
      };
    default:
      return state;
  }
};
