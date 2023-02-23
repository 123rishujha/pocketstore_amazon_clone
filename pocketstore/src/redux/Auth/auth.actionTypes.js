import axios from "axios";
import { BASEURL } from "../../App";
import { AUTH_LOGIN, SIGNUP } from "./auth.type";
export const signup = (payload) => (dispatch) => {
  try {
    axios.post(`${BASEURL}/signup`,payload).then(({ data }) => {
      console.log(data);
      dispatch({ type: SIGNUP, payload: data });
      localStorage.setItem("user",JSON.stringify(data))
    });
  } catch (error) {
    console.log(error);
  }
};


export const login = (payload) => (dispatch) => {
    try {
      axios.post(`${BASEURL}/lognin`,payload).then(({ data }) => {
        console.log(data);
        dispatch({ type: AUTH_LOGIN, payload: data });
      });
    } catch (error) {
      console.log(error);
    }
  };