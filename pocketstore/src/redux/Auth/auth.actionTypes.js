import axios from "axios";
import { BASEURL } from "../../App";
import {
  LOGIN_FAIL,
  LOGIN_REQUESTED,
  LOGIN_SUCCESS,
  SIGNUP_FAIL,
  SIGNUP_REQUESTED,
  SIGNUP_SUCCESS,
} from "./auth.type";
export const signup = (payload) => (dispatch) => {
  dispatch({ type: SIGNUP_REQUESTED });
  axios
    .post(`${BASEURL}/signup`, payload)
    .then(({ data }) => {
      dispatch({ type: SIGNUP_SUCCESS, payload: data });
      console.log(data);
    })
    .catch((error) => {
      console.log(error);
      dispatch({ type: SIGNUP_FAIL });
    });
};

export const login = (payload) => (dispatch) => {
  dispatch({ type: LOGIN_REQUESTED });

  axios
    .post(`${BASEURL}/login`, payload)
    .then(({ data }) => {
      console.log(data);
      if (data.token) {
        dispatch({ type: LOGIN_SUCCESS, payload: data });
      } else {
        dispatch({ type: LOGIN_FAIL });
      }
    })
    .catch((error) => {
      dispatch({ type: LOGIN_FAIL });
      console.log(error);
    });
};

export const getuserData = (token, dispatch) => {};
